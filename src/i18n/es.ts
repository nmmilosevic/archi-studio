/** Spanish content. Copy taken from the live site (reframestudio.es/es); new UI strings translated. */
import type { Content } from './en';

const es: Content = {
  lang: 'es',
  name: 'Español',

  meta: {
    home: {
      title: 'Diseño web para estudios de arquitectura | Reframe Studio',
      description: 'Diseño y rediseño web para estudios de arquitectura e interiorismo, con portafolios refinados, estructura multilingüe y rutas de contacto claras.',
    },
    work: {
      title: 'Proyectos web de estudios de arquitectura | Reframe Studio',
      description: 'Estudios de rediseño web para arquitectura e interiorismo, con proyectos mejor estructurados, posicionamiento claro y presentación móvil cuidada.',
    },
    services: {
      title: 'Servicios web para estudios de arquitectura | Reframe Studio',
      description: 'Rediseño web, sistemas de portafolio, visibilidad en buscadores, alojamiento y refinamiento de marca para estudios de arquitectura, interiorismo y paisajismo.',
    },
    contact: {
      title: 'Contacta con Reframe Studio',
      description: 'Cuéntanos sobre la web de tu estudio de arquitectura o interiorismo y recibe una recomendación clara para el siguiente paso.',
    },
  },

  ui: {
    skip: 'Saltar al contenido',
    home: 'Inicio',
    work: 'Proyectos',
    services: 'Servicios',
    contact: 'Contacto',
    cta: 'Empezar mi web',
    menu: 'Menú',
    close: 'Cerrar',
    language: 'Idioma',
    mainNav: 'Principal',
    footerNav: 'Pie de página',
    cookieSettings: 'Configurar cookies',
    backToTop: 'Volver arriba',
  },

  footer: {
    tagline: 'Estudio de diseño web especializado en estudios de arquitectura, interiorismo y paisajismo.',
    about: 'REFRAME es un estudio de diseño web para firmas de arquitectura e interiorismo que crea webs refinadas, sistemas de portafolio y conceptos de presentación.',
  },

  cookie: {
    title: 'Cookies y analítica',
    body: 'Usamos cookies esenciales para que la web funcione correctamente y cookies de analítica opcionales para entender cómo se usa el sitio.',
    accept: 'Aceptar todo',
    reject: 'Rechazar todo',
  },

  cta: {
    title: '¿Quieres que tu estudio se vea más premium online?',
    body: 'Envíanos tu web actual. Te diremos qué deberías cambiar primero.',
    action: 'Solicitar una auditoría rápida',
    alt: 'Materiales de revisión web con planos y muestras naturales',
  },

  home: {
    hero: {
      title: 'Tu estudio ya parece premium. Tu web también debería.',
      lead: 'Diseño web para estudios de arquitectura, interiorismo y paisajismo que necesitan mejor presentación de portfolio, posicionamiento más claro y una experiencia digital a la altura de su trabajo.',
      primary: 'Ver previews de rediseño',
      secondary: 'Solicitar revisión',
      mockAlt: 'Ejemplo de rediseño web para estudio de arquitectura',
    },
    directions: {
      title: 'Webs para estudios con trabajo que merece mostrarse bien.',
      body: 'Ejemplos enfocados: portfolios más claros, mejor lectura en móvil y una primera impresión más sólida, sin plantillas genéricas.',
      names: ['Mediterráneo', 'Orgánico', 'Avantforme', 'Futurista', 'Japonés', 'Lujo', 'Eco moderno', 'Parisino', 'Lujo oscuro'],
      altPrefix: 'Estilo:',
    },
    studios: {
      title: 'Los estudios para los que diseñamos.',
      labels: ['Arquitectura', 'Interiorismo', 'Paisajismo'],
    },
    pricing: {
      title: 'Una inversión clara para tu estudio.',
      price: '1.500€',
      terms: 'Pago único',
      note: 'Esta oferta incluye el desarrollo del diseño presentado. Para cualquier cambio o añadido, te enviaremos un presupuesto adicional.',
      includes: ['Estrategia web', 'Diseño a medida', 'Desarrollo responsive', 'Bases SEO', 'Formulario de contacto', 'Soporte de lanzamiento'],
      action: 'Empezar mi web',
    },
    beyond: {
      title: 'Diseño más allá de tu web.',
      items: [
        {
          title: 'Marca e impresión',
          body: 'Folletos, portfolios en PDF, tarjetas y papelería, plantillas de presentación, documentos para concursos, señalética y material de marketing impreso.',
          price: ['Presupuesto según el alcance'],
          action: 'Solicitar presupuesto',
        },
        {
          title: 'Marketing digital',
          body: 'Diseño para redes sociales, plantillas de Instagram, visuales de campaña, newsletters, landing pages, anuncios digitales y creación de contenido.',
          price: ['Presupuesto según el alcance'],
          action: 'Solicitar presupuesto',
        },
        {
          title: 'Mantenimiento web',
          body: 'Alojamiento, copias de seguridad, actualizaciones de seguridad, pequeños ajustes, edición de contenidos y subida de proyectos.',
          price: ['Alojamiento desde 30€/mes', 'Actualizaciones de contenido desde 120€/mes'],
          action: null,
        },
      ],
    },
    friction: {
      title: 'La fricción reduce la confianza.',
      body: 'Un cliente potencial lee una web como lee un espacio. La secuencia, la proporción y la atención al detalle construyen la impresión antes de iniciar una conversación.',
      action: 'Solicitar revisión web',
      alt: 'Composición visual para la revisión web',
      points: [
        { title: 'Posicionamiento', body: 'Aclara por lo que tu estudio es conocido.' },
        { title: 'Presentación de proyectos', body: 'Mejora la jerarquía y el ritmo de lectura.' },
        { title: 'Flujo de contacto', body: 'Menos fricción del interés a la consulta.' },
      ],
    },
  },

  work: {
    title: 'Webs para estudios con trabajo que merece mostrarse bien.',
    lead: 'Una mirada clara a cómo los estudios de arquitectura e interiorismo pueden presentar su trabajo con más claridad, confianza y calidad visual.',
    listTitle: 'Estudios de rediseño web seleccionados',
    viewProject: 'Ver proyecto',
    previewAlt: (title) => `Vista previa del rediseño: ${title}`,
  },

  project: {
    location: 'Ubicación',
    type: 'Tipo',
    published: 'Publicado',
    updated: 'Actualizado',
    typeValue: 'Estudio conceptual de rediseño',
    publishedValue: '7 de mayo de 2026',
    updatedValue: '30 de julio de 2026',
    designTitle: "Decisiones de diseño",
    designIntro: "Qué elegimos para este estudio y por qué.",
    palette: "Paleta",
    type: "Tipografía",
    coverAlt: (title) => `${title}: vista previa de la web en escritorio`,
    enlarge: 'Ampliar:',
    enlarged: 'Vista ampliada',
    close: 'Cerrar',
  },

  projects: {
    'villa-architecture-studio': {
      title: 'Web de Arquitectura',
      location: 'Benahavís, Costa del Sol',
      summary: 'Rediseño web, estructura de portafolio, presentación móvil y flujo de contacto.',
      captions: ['Página de proyecto', 'Experiencia móvil'],
      typeNote: "Una serif ligera y amplia para los títulos. Una sans-serif pequeña para el texto y los datos del proyecto. Mayúsculas espaciadas para el logotipo.",
      paletteNames: ["Fondo", "Travertino", "Hormigón", "Madera", "Bronce", "Tinta"],
      decisions: [
        "Primero, los datos. Ubicación, año, tipología, superficie y estado aparecen justo debajo del título, antes de cualquier texto largo.",
        "Los materiales se muestran, no se describen. Travertino, mortero de cal, madera, bronce y hormigón aparecen como muestras, como el cliente los vería sobre la mesa del estudio.",
        "En el móvil, primero la fotografía y después el titular: la obra se ve antes de explicarse.",
      ],
    },
    'casa-noma-marbella': {
      title: 'Web de Interiorismo',
      location: 'Marbella, Costa del Sol',
      summary: 'Rediseño web, claridad de servicios, portafolio de interiorismo, experiencia móvil y configuración del CMS.',
      captions: ['Página de proyecto de interiorismo', 'Experiencia móvil'],
      typeNote: "Una serif clásica con un único acento en cursiva, en “Slow Time.” Pequeñas mayúsculas espaciadas para la navegación y las etiquetas.",
      paletteNames: ["Fondo", "Lino", "Travertino", "Roble", "Tinta"],
      decisions: [
        "Las fotografías se superponen y se escalonan en la retícula, como en una revista de interiorismo, en lugar de ocupar cajas iguales.",
        "Ubicación, tipo, superficie y año en una sola línea bajo la introducción, legibles de un vistazo.",
        "Travertino, roble y lino aparecen como muestras junto a los espacios en los que se usan.",
      ],
    },
    'forma-sur-malaga': {
      title: 'Web de Arquitectura',
      location: 'Málaga, Costa del Sol',
      summary: 'Rediseño web contundente, archivo de proyectos, identidad visual, estructura móvil y CMS.',
      captions: ['Archivo de proyectos', 'Experiencia móvil'],
      typeNote: "Una única sans-serif grotesca y contundente, en pocos tamaños. Etiquetas en mayúsculas. La tipografía es tan estructural como los edificios.",
      paletteNames: ["Fondo", "Panel", "Hormigón", "Hormigón claro", "Texto"],
      decisions: [
        "Las páginas oscuras dejan que la fotografía del hormigón lleve la luz. Nada en pantalla brilla más que el sol sobre los muros.",
        "Cada proyecto muestra su sección y su planta junto a las fotografías, porque los clientes de un estudio de arquitectura también leen planos.",
        "Los datos del proyecto en una tabla sencilla: ubicación, finalización, programa, superficie.",
      ],
    },
    'terral-studio-estepona': {
      title: 'Web de paisajismo',
      location: 'Estepona, Costa del Sol',
      summary: 'Rediseño web, portafolio exterior, presentación de servicios, experiencia móvil y CMS.',
      captions: ['Página de proyecto exterior', 'Experiencia móvil'],
      typeNote: "Una serif suave en verde oliva para los títulos. Una sans-serif ligera para el texto.",
      paletteNames: ["Fondo", "Piedra caliza", "Salvia", "Lavanda", "Oliva"],
      decisions: [
        "Fotografías del antes y el después de la misma ladera muestran lo que cambió el jardín, sin una palabra de venta.",
        "“El enfoque” explica la plantación autóctona, los materiales naturales y el diseño a medida en tres columnas breves con dibujos sencillos.",
        "Una cita del estudio cierra la página y la galería recorre el jardín en orden: terraza, sendero, plantación, mesa.",
      ],
    },
  },

  services: {
    title: 'Todo lo que un estudio necesita para destacar online.',
    lead: 'Desde rediseños web y sistemas de portafolio hasta bases de visibilidad en buscadores, cada servicio se adapta a cómo los estudios de arquitectura y diseño presentan su trabajo, generan confianza y atraen mejores consultas.',
    redesign: {
      title: 'Rediseño web para estudios de arquitectura',
      body: 'Una presencia digital refinada que facilita la exploración de tu portafolio, clarifica tu posicionamiento y hace que tu estudio sea más creíble para clientes de alto valor.',
      items: ['Rediseño de portada', 'Páginas de proyectos', 'Página sobre nosotros', 'Flujo de consulta', 'Experiencia móvil', 'Construcción orientada al rendimiento', 'Configuración multilingüe'],
      alt: 'Rediseño web para estudio de arquitectura, página de proyecto',
    },
    interiors: {
      title: 'Webs para estudios de diseño de interiores',
      body: 'Webs elegantes y visuales para estudios que necesitan transmitir ambiente, materiales, estilo y confianza antes de la primera reunión.',
      items: ['Sistema de portafolio visual', 'Páginas de servicios', 'Narrativa del proceso', 'Captación de leads', 'Integración con Instagram y portafolio'],
      alt: 'Web para estudio de interiorismo, página de proyecto',
    },
    search: {
      title: 'Fundamentos de visibilidad',
      body: 'La visibilidad orgánica es la capacidad de aparecer en búsquedas no pagadas relacionadas con tus servicios, proyectos y ubicaciones. La trabajamos con estructura de contenido, metadatos, enlazado interno y una base técnica clara.',
      items: ['Metadatos SEO', 'Estructura de páginas orientada a búsqueda', 'Datos estructurados', 'Enlazado interno', 'Estructura de alt en imágenes', 'Optimización de rendimiento'],
    },
    hosting: {
      title: 'Alojamiento y mantenimiento',
      body: 'Mantén la web rápida, segura, actualizada y fácil de gestionar sin preocuparte por los detalles técnicos.',
      items: ['Configuración de alojamiento en Vercel', 'Actualizaciones mensuales', 'Monitoreo técnico', 'Pequeñas ediciones de contenido', 'Revisiones de analítica'],
    },
    portfolio: {
      title: 'Sistemas de portafolio',
      body: 'Una estructura limpia para publicar proyectos de forma consistente, incluyendo imágenes, ubicación, tipo de servicio, materiales, alcance e historia.',
      items: ['Modelo para CMS, el sistema de gestión de contenidos', 'Plantillas de proyectos', 'Filtros por ubicación y tipo', 'Estructura de caso de estudio', 'Diseño centrado en la imagen'],
      alt: 'Archivo de proyectos para un estudio de arquitectura',
    },
    brand: {
      title: 'Refinamiento de marca',
      body: 'No es un reemplazo de agencia de branding completa, sino un refinamiento preciso de tipografía, color, layout, tono y consistencia digital.',
      items: ['Dirección visual', 'Sistema tipográfico', 'Sistema de color', 'Kit de UI para la web', 'Guía básica de marca'],
      alt: 'Sistema tipográfico y de color para la marca de un estudio',
    },
    fit: {
      title: '¿No sabes qué servicio encaja?',
      body: 'Solicita una revisión web y te diremos qué necesita primero la web de tu estudio.',
      action: 'Solicitar una revisión web',
    },
    visuals: {
      search: {
        label: 'Ejemplo de resultado de búsqueda donde el estudio aparece primero, con puntuaciones de rendimiento, SEO y accesibilidad',
        query: 'arquitecto Marbella',
        url: 'aurea-studio.com › proyectos',
        title: 'Aurea Studio · Arquitectura en Marbella',
        desc: 'Villas contemporáneas y residencias privadas en la Costa del Sol. Proyectos, proceso y contacto.',
        scores: ['Rendimiento', 'SEO', 'Accesibilidad'],
      },
      portfolio: {
        label: 'Ejemplo de editor de contenidos junto a la página de proyecto publicada que genera',
        editor: 'Editor',
        page: 'Página publicada',
        fields: ['Proyecto', 'Ubicación', 'Tipo', 'Materiales'],
        values: ['Casa Lunara', 'Marbella', 'Interiorismo · Residencial', 'Travertino, roble, lino'],
        images: 'Imágenes',
        publish: 'Publicado',
      },
      brand: {
        label: 'Ejemplo de sistema de marca con escala tipográfica, escala de espaciado y paleta de color',
        scale: ['Display', 'Titular', 'Texto'],
        sample: 'Arquitectura',
        body: 'Luz, proporción y materia, en ese orden.',
        colors: ['Lino', 'Travertino', 'Terracota', 'Oliva', 'Basalto'],
      },
      hosting: {
        label: 'Ejemplo de panel de mantenimiento con disponibilidad, copias de seguridad, actualizaciones y tiempo de respuesta',
        status: 'Todo funciona correctamente',
        uptime: 'Disponibilidad, últimos 30 días',
        rows: [['Última copia de seguridad', 'Hoy, 04:00'], ['Actualizaciones de seguridad', 'Al día'], ['Ediciones de contenido', '2 proyectos añadidos'], ['Tiempo de respuesta', '180 ms']],
      },
    },
    engagement: {
      title: 'Todos los proyectos siguen la misma estructura.',
      items: [
        { title: 'Primero, la revisión', body: 'Cada proyecto empieza con una revisión de tu web actual, tu posicionamiento y tus objetivos. Así definimos la dirección y el alcance antes de comenzar.' },
        { title: 'Entregables definidos', body: 'Cada paquete tiene un alcance claro, para que sepas qué recibirás antes de firmar.' },
        { title: 'Implicación directa', body: 'Trabajas directamente con quien diseña y desarrolla. Revisiones más rápidas y decisiones más claras, sin intermediarios.' },
        { title: 'Lista para publicar', body: 'Cada proyecto incluye optimización de rendimiento, SEO técnico, configuración de analítica y conexión del dominio.' },
      ],
    },
  },

  contact: {
    title: 'Cuéntanos sobre la web de tu estudio.',
    lead: 'Envíanos tu web actual o la idea de tu proyecto. Te responderemos con el siguiente paso más claro.',
    asideTitle: 'La web adecuada debe ayudar a que los clientes confíen en tu trabajo.',
    asideBody: 'Ayudamos a estudios de arquitectura e interiorismo a presentar su trabajo con más claridad, confianza y coherencia en ordenador y móvil.',
    fields: {
      name: 'Tu nombre',
      studio: 'Nombre del estudio',
      email: 'Dirección de email',
      website: 'URL de la web actual',
      message: '¿Qué sientes que no funciona en la web actual?',
    },
    submit: 'Enviar web actual',
    sending: 'Enviando…',
    required: 'Los campos marcados con * son obligatorios.',
    errors: {
      missing: 'Por favor, rellena este campo.',
      email: 'Introduce un email válido.',
      url: 'Introduce la dirección completa, con https://',
    },
    sendError: 'No se pudo enviar el mensaje. Inténtalo de nuevo o escribe a',
    thanks: 'Gracias. Te responderemos con el siguiente paso más claro.',
    trap: 'Deja este campo vacío',
  },
};

export default es;
