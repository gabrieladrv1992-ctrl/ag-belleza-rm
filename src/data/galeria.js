import { placeholderColors, placeholderTile } from '@/lib/placeholder'

export const galeriaCategorias = [
  'Talleres',
  'Laboratorios',
  'Capacitaciones',
  'Eventos Gremiales',
]

const items = [
  { id: 1, titulo: 'Taller de Balayage y Técnicas de Color', categoria: 'Talleres', fecha: '2026-05-16', lugar: 'Sede Gremial, Santiago Centro', descripcion: 'Jornada práctica de coloración dictada por socias especialistas en peluquería.' },
  { id: 2, titulo: 'Visita a Laboratorio Dermocosmético', categoria: 'Laboratorios', fecha: '2026-04-22', lugar: 'Laboratorio Cosmética RM, Quilicura', descripcion: 'Recorrido y charla técnica sobre formulación de productos cosméticos junto a un laboratorio asociado.' },
  { id: 3, titulo: 'Capacitación en Normativa Sanitaria', categoria: 'Capacitaciones', fecha: '2026-06-04', lugar: 'Sede Gremial, Santiago Centro', descripcion: 'Actualización de protocolos de higiene y bioseguridad para salones y centros de estética.' },
  { id: 4, titulo: 'Asamblea General de Socios 2026', categoria: 'Eventos Gremiales', fecha: '2026-03-14', lugar: 'Centro de Eventos Providencia', descripcion: 'Encuentro anual de socios y socias para revisar avances y proyectos del gremio.' },
  { id: 5, titulo: 'Taller de Barbería Clásica', categoria: 'Talleres', fecha: '2026-05-30', lugar: 'Sede Gremial, Santiago Centro', descripcion: 'Práctica de afeitado a navaja y diseño de barba con instructores del gremio.' },
  { id: 6, titulo: 'Ensayo de Fórmulas con Laboratorio Aliado', categoria: 'Laboratorios', fecha: '2026-06-18', lugar: 'Laboratorio Cosmética RM, Quilicura', descripcion: 'Pruebas de nuevas líneas de tratamiento capilar en conjunto con nuestros socios técnicos.' },
  { id: 7, titulo: 'Capacitación en Atención al Cliente', categoria: 'Capacitaciones', fecha: '2026-04-09', lugar: 'Sede Gremial, Santiago Centro', descripcion: 'Taller de habilidades blandas y experiencia de servicio para equipos de salón.' },
  { id: 8, titulo: 'Aniversario N° 12 de la Asociación', categoria: 'Eventos Gremiales', fecha: '2026-02-20', lugar: 'Salón de Eventos Las Condes', descripcion: 'Celebración junto a socios, autoridades locales e invitados del rubro.' },
  { id: 9, titulo: 'Taller de Nail Art y Encapsulados', categoria: 'Talleres', fecha: '2026-06-27', lugar: 'Sede Gremial, Santiago Centro', descripcion: 'Perfeccionamiento en técnicas de esculpido y diseño de uñas.' },
  { id: 10, titulo: 'Charla Técnica sobre Ingredientes Activos', categoria: 'Laboratorios', fecha: '2026-05-08', lugar: 'Laboratorio Cosmética RM, Quilicura', descripcion: 'Presentación de nuevos activos cosméticos y su aplicación en tratamientos faciales.' },
  { id: 11, titulo: 'Capacitación en Formalización Tributaria', categoria: 'Capacitaciones', fecha: '2026-03-26', lugar: 'Sede Gremial, Santiago Centro', descripcion: 'Orientación para socios sobre boleta electrónica, inicio de actividades y régimen simplificado.' },
  { id: 12, titulo: 'Jornada Solidaria "Belleza sin Fronteras"', categoria: 'Eventos Gremiales', fecha: '2026-05-20', lugar: 'Hogar de Acogida, La Florida', descripcion: 'Servicios gratuitos de peluquería y cuidado personal realizados por socios voluntarios.' },
  { id: 13, titulo: 'Taller de Maquillaje Editorial', categoria: 'Talleres', fecha: '2026-04-18', lugar: 'Estudio Fotográfico Providencia', descripcion: 'Práctica de maquillaje para producción fotográfica junto a maquilladoras del gremio.' },
  { id: 14, titulo: 'Encuentro con Proveedores e Insumos', categoria: 'Eventos Gremiales', fecha: '2026-06-11', lugar: 'Sede Gremial, Santiago Centro', descripcion: 'Presentación de nuevos convenios y descuentos con distribuidoras de insumos profesionales.' },
]

export const galeria = items.map((item, index) => ({
  ...item,
  imagen: placeholderTile('', index),
  esEjemplo: true,
  colorTexto: `#${placeholderColors(index).fg}`,
}))
