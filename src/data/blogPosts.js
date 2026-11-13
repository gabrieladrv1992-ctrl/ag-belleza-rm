import { placeholderTile } from '@/lib/placeholder'

const posts = [
  {
    id: 1,
    slug: 'nuevas-normativas-sanitarias-2026',
    titulo: 'Requisitos sanitarios para institutos de belleza y cosmetología en Chile',
    resumen: 'Una guía inicial con fuentes oficiales sobre institutos de belleza, cosmetología y procedimientos estéticos.',
    contenido: [
      'Los requisitos dependen de los servicios que presta cada establecimiento. El Decreto 244 de 1975 regula los institutos de belleza y establecimientos similares y define el alcance de sus actividades.',
      'El Decreto 88 de 1980 regula el ejercicio de la cosmetología. Establece requisitos de autorización para ejercer y dispone que estas labores se desarrollen en establecimientos autorizados conforme a la normativa aplicable.',
      'La SEREMI de Salud Metropolitana distingue los institutos de belleza de las salas de procedimientos y señala que los procedimientos estéticos de salud deben cumplir los requisitos aplicables a estas últimas. Antes de ofrecer un servicio, consulta con la autoridad sanitaria sobre la autorización del establecimiento, las competencias del personal y las condiciones específicas que corresponden.',
      'Consulta también a la municipalidad por la patente y los requisitos del local. Esta guía es informativa y no reemplaza la revisión del caso concreto por la autoridad competente.',
    ],
    fuentes: [
      { titulo: 'Decreto 244: institutos de belleza y establecimientos similares', url: 'https://www.bcn.cl/leychile/navegar?idNorma=253946' },
      { titulo: 'Decreto 88: ejercicio de la cosmetología', url: 'https://www.bcn.cl/leychile/navegar?idNorma=253933' },
      { titulo: 'Cuenta pública SEREMI de Salud RM: establecimientos estéticos', url: 'https://seremi13.redsalud.gob.cl/wp-content/uploads/2026/01/08-07-2025_Informe_Cuenta_Publica_2025.pdf' },
      { titulo: 'Material de apoyo y trámites de la SEREMI de Salud RM', url: 'https://seremi13.redsalud.gob.cl/material-de-apoyo/' },
    ],
    categoria: 'Normativa',
    autor: 'Equipo editorial',
    fecha: '2026-11-13',
    tiempoLectura: 4,
  },
  {
    id: 2,
    slug: 'convenio-proveedores-insumos-2026',
    titulo: 'Nuevo convenio con proveedores de insumos profesionales',
    resumen: 'Socios y socias acceden a descuentos exclusivos en productos de peluquería, cosmetología y barbería.',
    contenido: [
      'La Asociación firmó un convenio con tres distribuidoras nacionales de insumos profesionales, permitiendo a los socios acceder a descuentos de entre 15% y 30% en productos seleccionados.',
      'El beneficio se activa presentando el carné de socio vigente o el estado de cuenta al día en los puntos de venta adheridos.',
      'Este convenio busca fortalecer la competitividad de los profesionales independientes frente a las grandes cadenas del retail de belleza.',
    ],
    categoria: 'Beneficios',
    autor: 'Comisión de Convenios',
    fecha: '2026-06-28',
    tiempoLectura: 3,
  },
  {
    id: 4,
    slug: 'tendencias-beauty-2026',
    titulo: 'Tendencias Beauty 2026: minimalismo, skinimalism y color natural',
    resumen: 'Un repaso de las tendencias que marcarán el año en maquillaje, peluquería y cuidado de la piel.',
    contenido: [
      'El 2026 consolida el "skinimalism" como filosofía central: rutinas de piel simplificadas y maquillajes que privilegian la luminosidad natural por sobre la cobertura total.',
      'En peluquería, los tonos champagne, caramelo y castaño cálido dominan las salas de coloración, mientras que los cortes texturizados de bajo mantenimiento ganan terreno.',
      'Invitamos a nuestros socios a los próximos talleres temáticos para actualizar sus técnicas conforme a estas tendencias.',
    ],
    categoria: 'Tendencias',
    autor: 'Comisión de Formación',
    fecha: '2026-06-15',
    tiempoLectura: 5,
  },
  {
    id: 5,
    slug: 'jornada-solidaria-belleza-sin-fronteras',
    titulo: 'Jornada solidaria "Belleza sin Fronteras" llegó a más de 300 personas',
    resumen: 'Socios voluntarios ofrecieron servicios gratuitos de peluquería y cuidado personal en albergues de la región.',
    contenido: [
      'Más de 40 socios y socias participaron voluntariamente en la jornada "Belleza sin Fronteras", entregando cortes de pelo, manicure y tratamientos faciales gratuitos en hogares de acogida de la Región Metropolitana.',
      'La actividad se enmarca en el compromiso social de la asociación con la comunidad y busca repetirse semestralmente.',
      'Agradecemos profundamente a todos quienes donaron su tiempo y talento para esta iniciativa.',
    ],
    categoria: 'Comunidad',
    autor: 'Comisión Social',
    fecha: '2026-05-20',
    tiempoLectura: 2,
  },
  {
    id: 6,
    slug: 'alianza-institutos-tecnicos-2026',
    titulo: 'Alianza con institutos técnicos para prácticas profesionales',
    resumen: 'Estudiantes de institutos de belleza podrán realizar sus prácticas en salones asociados a la gremial.',
    contenido: [
      'La Asociación firmó convenios con dos institutos técnicos de la Región Metropolitana para facilitar prácticas profesionales de estudiantes de cosmetología y peluquería en salones de socios.',
      'La iniciativa busca fortalecer la empleabilidad temprana y asegurar que los nuevos profesionales se formen bajo los estándares éticos y técnicos del gremio.',
      'Los socios interesados en recibir practicantes pueden inscribirse a través de la secretaría de la asociación.',
    ],
    categoria: 'Educación',
    autor: 'Comisión de Formación',
    fecha: '2026-04-30',
    tiempoLectura: 3,
  },
]

export const blogPosts = posts.map((post) => ({
  ...post,
  imagen: placeholderTile(post.categoria, post.id - 1, '900x600'),
}))
