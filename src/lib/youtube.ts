/**
 * youtube — trae los últimos videos del canal para el carrusel de /agenda
 * (ticket 6), priorizando los que fueron transmisiones en vivo.
 *
 * Estrategia (build-time, sin exponer la API key al navegador):
 *  1. `channels.list` con el handle → obtiene el "uploads playlist"
 *     (`contentDetails.relatedPlaylists.uploads`, id `UU…`).
 *  2. `playlistItems.list` de esa playlist (paginado) → últimos uploads.
 *  3. `videos.list` con esos ids → `liveStreamingDetails` para saber cuáles
 *     fueron vivos; se ordenan los vivos primero y se completa con subidas.
 *
 * La API key se lee de `YOUTUBE_API_KEY` (import.meta.env). Sin key, devuelve
 * un set de datos mock para que la sección se vea en diseño.
 */

export interface VideoVivo {
	id: string;
	title: string;
	url: string;
	thumbnail: string;
	publishedAt: string;
	/** true si el video fue una transmisión en vivo. */
	esVivo: boolean;
}

const CHANNEL_HANDLE = 'facultadlalangue';
const MAX_VIDEOS = 8;

const API = 'https://www.googleapis.com/youtube/v3';

// Datos de ejemplo mientras no está la API key (o si el fetch falla).
const MOCK: VideoVivo[] = [
	{
		id: 'mock-1',
		title: 'Ciclo de conversaciones — la clínica hoy',
		url: 'https://www.youtube.com/@facultadlalangue',
		thumbnail: '',
		publishedAt: new Date().toISOString(),
		esVivo: true,
	},
	{
		id: 'mock-2',
		title: 'Jornada de psicoanálisis y subjetividad',
		url: 'https://www.youtube.com/@facultadlalangue',
		thumbnail: '',
		publishedAt: new Date().toISOString(),
		esVivo: true,
	},
	{
		id: 'mock-3',
		title: 'Mesa abierta: transmisión y escritura',
		url: 'https://www.youtube.com/@facultadlalangue',
		thumbnail: '',
		publishedAt: new Date().toISOString(),
		esVivo: false,
	},
];

const get = async (path: string, params: Record<string, string>) => {
	const qs = new URLSearchParams(params).toString();
	const res = await fetch(`${API}/${path}?${qs}`);
	if (!res.ok) throw new Error(`YouTube API ${path} → ${res.status}`);
	return res.json();
};

/** Resuelve el uploads playlist del canal a partir del handle. */
const getUploadsPlaylist = async (key: string): Promise<string | null> => {
	const data = await get('channels', {
		key,
		part: 'contentDetails',
		forHandle: CHANNEL_HANDLE,
	});
	return data?.items?.[0]?.contentDetails?.relatedPlaylists?.uploads ?? null;
};

/** IDs de los últimos uploads (hasta `paginas` páginas de 50). */
const getUploadIds = async (key: string, uploads: string, paginas: number): Promise<string[]> => {
	const ids: string[] = [];
	let token = '';
	for (let p = 0; p < paginas; p++) {
		const data = await get('playlistItems', {
			key,
			part: 'contentDetails',
			playlistId: uploads,
			maxResults: '50',
			...(token ? { pageToken: token } : {}),
		});
		for (const it of data?.items ?? []) {
			if (it?.contentDetails?.videoId) ids.push(it.contentDetails.videoId);
		}
		token = data?.nextPageToken ?? '';
		if (!token) break;
	}
	return [...new Set(ids)];
};

/**
 * Devuelve los últimos videos del canal (vivos primero). En build; sin key
 * devuelve mock. Nunca lanza: ante error de red/API cae al mock.
 */
export const getVivos = async (): Promise<{ videos: VideoVivo[]; esMock: boolean }> => {
	const key = import.meta.env.YOUTUBE_API_KEY as string | undefined;
	if (!key) return { videos: MOCK, esMock: true };

	try {
		const uploads = await getUploadsPlaylist(key);
		if (!uploads) return { videos: MOCK, esMock: true };

		const ids = await getUploadIds(key, uploads, 2);
		if (ids.length === 0) return { videos: MOCK, esMock: true };

		// videos.list acepta hasta 50 ids por request.
		const detalles: any[] = [];
		for (let i = 0; i < ids.length; i += 50) {
			const data = await get('videos', {
				key,
				part: 'snippet,liveStreamingDetails',
				id: ids.slice(i, i + 50).join(','),
			});
			detalles.push(...(data?.items ?? []));
		}

		const videos: VideoVivo[] = detalles
			.map((v: any) => {
				const live = v?.liveStreamingDetails;
				return {
					id: v.id,
					title: (v.snippet?.title ?? '').replace(/\s*📱\s*$/u, '').trim(),
					url: `https://www.youtube.com/watch?v=${v.id}`,
					thumbnail:
						v.snippet?.thumbnails?.high?.url ??
						v.snippet?.thumbnails?.medium?.url ??
						v.snippet?.thumbnails?.default?.url ??
						'',
					publishedAt:
						live?.actualStartTime ?? v.snippet?.publishedAt ?? '',
					esVivo: Boolean(live?.actualStartTime),
				};
			})
			// Orden: vivos primero, luego por fecha descendente.
			.sort((a, b) => {
				if (a.esVivo !== b.esVivo) return a.esVivo ? -1 : 1;
				return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
			})
			// YouTube publica cada vivo dos veces (grabación + versión 📱);
			// deduplicamos por título.
			.filter(
				(v, i, arr) =>
					arr.findIndex((x) => x.title.toLowerCase() === v.title.toLowerCase()) === i,
			)
			.slice(0, MAX_VIDEOS);

		return { videos: videos.length ? videos : MOCK, esMock: videos.length === 0 };
	} catch (err) {
		console.warn('[youtube] fallback a mock:', (err as Error).message);
		return { videos: MOCK, esMock: true };
	}
};
