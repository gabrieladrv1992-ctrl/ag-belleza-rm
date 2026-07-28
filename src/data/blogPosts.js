import { placeholderTile } from '@/lib/placeholder'

const posts = [
  {
    id: 1,
    slug: 'nuevas-normativas-sanitarias-2026',
    titulo: 'Nuevas normativas sanitarias para salones de belleza en 2026',
    resumen: 'La SEREMI de Salud actualiza los protocolos de higiene para centros de estética y peluquerías en toda la Región Metropolitana.',
    contenido: [
      'Durante julio de 2026, la SEREMI de Salud Metropolitana publicó una actualización de los protocolos de higiene y bioseguridad aplicables a salones de belleza, barberías y centros de estética.',
      'Entre los principales cambios se encuentran nuevos requisitos de esterilización de instrumental, registro de trazabilidad de productos cosméticos y capacitación obligatoria del personal en manejo de residuos cortopunzantes.',
      'Desde la Asociación Gremial estamos organizando talleres gratuitos para todos nuestros socios y socias con el fin de facilitar la adecuación a esta normativa antes de la fecha de fiscalización.',
    ],
    categoria: 'Normativa',
    autor: 'Directiva AG Belleza RM',
    fecha: '2026-07-10',
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
    id: 3,
    slug: 'balance-primer-semestre-2026',
    titulo: 'Balance del primer semestre 2026: más de 200 nuevos socios',
    resumen: 'La asociación reporta un crecimiento sostenido y la incorporación de nuevas comunas al directorio gremial.',
    contenido: [
      'Durante el primer semestre de 2026, la Asociación Gremial incorporó a más de 200 nuevos profesionales de la belleza, consolidando su presencia en comunas como Maipú, La Florida y Puente Alto.',
      'El crecimiento se atribuye a la difusión de los talleres de capacitación gratuitos y a los convenios de formalización tributaria impulsados junto al Ministerio de Economía.',
      'Se espera que para fines de 2026 la asociación supere los 800 socios activos en la Región Metropolitana.',
    ],
    categoria: 'Institucional',
    autor: 'Directiva AG Belleza RM',
    fecha: '2026-07-02',
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

export const blogPosts = posts.map((post, index) => ({
  ...post,
  imagen: placeholderTile(post.categoria, index, '900x600'),
}))
