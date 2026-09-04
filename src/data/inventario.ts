/**
 * Inventario — convierte el sistema de bloques (componentes.ts) en una lista
 * de ítems etiquetados en texto plano, para la página /textos.
 *
 * Cada ítem tiene su "etiqueta" (h1/h2/h3/h4/p/li/blockquote/…, es decir qué
 * elemento HTML lo mostraría en la página real) y su texto plano (sin
 * markdown ligero: se limpian **negrita**, *cursiva* y [etiqueta](url)).
 */
import { componentePorId } from './componentes';
import type { Bloque, BloquePagina } from './componentes';

export interface ItemInventario {
	/** Etiqueta del elemento en la página real: h1, h2, h3, h4, p, li, … */
	etiqueta: string;
	/** Texto plano (sin markdown). */
	texto: string;
}

export interface PaginaInventario {
	/** Ruta pública de la página (ej: '/facultad/'). */
	ruta: string;
	/** Título principal de la página (su h1). */
	titulo: string;
	/** Items de todo el contenido de la página. */
	secciones: ItemInventario[];
}

/** Limpia el markdown ligero de un texto para dejarlo en texto plano. */
export function aTextoPlano(s: string): string {
	return s
		// [etiqueta](url) → etiqueta
		.replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
		// **negrita** → negrita
		.replace(/\*\*([^*]+)\*\*/g, '$1')
		// *cursiva* → cursiva
		.replace(/\*([^*\n]+)\*/g, '$1')
		// fugas de acentos tipográficos que el render escapa literalmente
		.trim();
}

const item = (etiqueta: string, texto: string): ItemInventario => ({
	etiqueta,
	texto: aTextoPlano(texto),
});

/**
 * Recorre un array de bloques y produce los items del inventario.
 * Los bloques con tipo 'componente' se despliegan resolviendo el componente
 * común correspondiente (recursivamente, por si un bloque cita otro).
 */
export function bloquesAItems(bloques: BloquePagina[], out: ItemInventario[] = []): ItemInventario[] {
	for (const b of bloques) {
		if (b.tipo === 'componente') {
			const cc = componentePorId[b.nombre];
			if (cc) bloquesAItems(cc.bloques as BloquePagina[], out);
			continue;
		}
		desplegar(b, out);
	}
	return out;
}

function desplegar(b: Bloque, out: ItemInventario[]) {
	switch (b.tipo) {
		case 'titulo': {
			if (b.kicker) out.push(item('p', b.kicker));
			out.push(item(`h${b.nivel ?? 2}`, b.texto));
			break;
		}
		case 'texto':
			for (const p of b.parrafos) out.push(item('p', p));
			break;
		case 'lista':
			for (const li of b.items) out.push(item(b.ordenada ? 'ol > li' : 'li', li));
			break;
		case 'chips':
			for (const li of b.items) out.push(item('li (chips)', li));
			break;
		case 'contadores':
			for (const c of b.items) out.push(item('li (contador)', `${c.valor} — ${c.etiqueta}`));
			break;
		case 'beneficio':
			out.push(item('h4', b.titulo));
			if (b.subtitulo) out.push(item('p', b.subtitulo));
			out.push(item('p', b.descripcion));
			out.push(item('p (precio)', b.precio));
			break;
		case 'total-beneficios':
			out.push(item('p (total-beneficios)', `${b.titulo} ${b.valor}`));
			if (b.nota) out.push(item('p (nota)', b.nota));
			break;
		case 'cita':
			out.push(item('blockquote', b.lineas.join(' ')));
			out.push(item('p (autor)', b.autor));
			break;
		case 'stats':
			out.push(item('p (stats)', b.filas.map((f) => `${f.region} ${f.pct}`).join(' · ')));
			for (const f of b.frases) out.push(item('p (stats)', f));
			out.push(item('p (referencia)', b.referencia));
			break;
		case 'faq':
			out.push(item('summary', b.pregunta));
			for (const r of b.respuesta) out.push(item('p (respuesta)', r));
			if (b.lista) for (const li of b.lista) out.push(item('li', li));
			if (b.cierre) for (const c of b.cierre) out.push(item('p (cierre)', c));
			break;
		case 'cta':
			out.push(item('h3', b.titulo));
			if (b.subtitulo) out.push(item('p', b.subtitulo));
			for (const a of b.acciones) out.push(item('a (cta)', a.etiqueta));
			break;
		case 'enlace':
			out.push(item('a', b.etiqueta));
			break;
		case 'persona':
			out.push(item('h4', b.nombre));
			if (b.titulo) out.push(item('p (título)', b.titulo));
			for (const bio of b.bio) out.push(item('p', bio));
			if (b.boton) out.push(item('a (botón)', b.boton.etiqueta));
			break;
		case 'equipo':
			for (const p of b.personas) {
				out.push(item('li (persona)', [p.nombre, p.titulo].filter(Boolean).join(' — ')));
				if (p.bio) for (const bio of p.bio) out.push(item('p', bio));
			}
			break;
		case 'tarjetas':
			for (const t of b.items) {
				out.push(item('li (tarjeta)', [t.titulo, t.descripcion].filter(Boolean).join(' — ')));
			}
			break;
		default: {
			// Bloque desconocido/futuro: se ignora para no romper el inventario.
			const _never: never = b;
			void _never;
		}
	}
}
