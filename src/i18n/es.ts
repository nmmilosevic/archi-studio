/** Spanish content. Copy taken from the live site (reframestudio.es/es); new UI strings translated. */
import type { Content } from './en';

const es: Content = {
  lang: 'es',
  name: 'Español',

  meta: {
    home: {
      title: 'Reframe Studio · Webs, marca e impresión para arquitectos e interioristas',
      description: 'Webs, marca, impresión y redes para estudios de arquitectura, interiorismo y paisajismo. Hechas con el mismo cuidado que pones en un plano.',
    },
    work: {
      title: 'Cuatro estudios sobre cómo *mostrar* el trabajo.',
      description: 'Estudios de rediseño web para arquitectura e interiorismo, con proyectos mejor estructurados, posicionamiento claro y presentación móvil cuidada.',
    },
    services: {
      title: 'Web, marca, impresión y *todo* lo demás.',
      description: 'Rediseño web, sistemas de portafolio, visibilidad en buscadores, alojamiento y refinamiento de marca para estudios de arquitectura, interiorismo y paisajismo.',
    },
    contact: {
      title: 'Cuéntanos sobre tu *estudio*.',
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
    tagline: 'Estudio de diseño para arquitectos, interioristas y paisajistas. Webs, marca, impresión y marketing.',
  },

  cookie: {
    title: 'Cookies y analítica',
    body: 'Usamos cookies esenciales para que la web funcione correctamente y cookies de analítica opcionales para entender cómo se usa el sitio.',
    accept: 'Aceptar todo',
    reject: 'Rechazar todo',
  },

  cta: {
    title: 'Envíanos tu web. Te diremos qué *arreglar primero*.',
    body: 'Una revisión breve y sincera de lo que funciona y lo que no. Sin presentaciones comerciales.',
    action: 'Solicitar una revisión',
    alt: 'Materiales de revisión web con planos y muestras naturales',
  },

  home: {
    hero: {
      title: 'Diseñas espacios bonitos. Tu web debería *sentirse* como uno.',
      lead: 'Envíanos tu web actual o una idea de proyecto. Te responderemos con un siguiente paso claro.',
      primary: 'Ver el trabajo',
      secondary: 'Reservar una revisión',
      mockAlt: 'Ejemplo de rediseño web para estudio de arquitectura',
    },
    directions: {
      title: 'Nueve direcciones. *Cero* plantillas.',
      body: 'Cada una parte de un tipo de estudio real: villas mediterráneas, interiores serenos, hormigón visto. Encuentra la que se parece a ti.',
      names: ['Mediterráneo', 'Orgánico', 'Avantforme', 'Futurista', 'Japonés', 'Lujo', 'Eco moderno', 'Parisino', 'Lujo oscuro'],
      altPrefix: 'Estilo:',
    },
    studios: {
      title: 'Con quién *trabajamos*.',
      labels: ['Arquitectura', 'Interiorismo', 'Paisajismo'],
    },
    pricing: {
      title: 'Un precio. *Sin* sorpresas.',
      price: '1.500€',
      terms: 'Pago único',
      note: 'Incluye el diseño que ves y su desarrollo. ¿Más páginas o cambios después? Te lo presupuestamos antes, para que nada aparezca en una factura que no esperabas.',
      included: 'Qué incluye',
      includes: ['Estrategia web', 'Diseño a medida', 'Desarrollo responsive', 'Bases SEO', 'Formulario de contacto', 'Soporte de lanzamiento'],
      action: 'Empezar mi web',
    },
    beyond: {
      title: 'No *solo* webs.',
      items: [
        {
          title: 'Marca e impresión',
          body: 'Tarjetas, folletos, portafolios en PDF, paneles de concurso, señalética. Todo lo que acaba en papel o en una pared.',
          price: ['Presupuesto por proyecto'],
          action: 'Pedir presupuesto',
        },
        {
          title: 'Marketing digital',
          body: 'Plantillas de Instagram, visuales de campaña, newsletters, landing pages y anuncios. Tu feed, por fin coherente con tu marca.',
          price: ['Presupuesto por proyecto'],
          action: 'Pedir presupuesto',
        },
        {
          title: 'Mantenimiento web',
          body: 'Alojamiento, copias de seguridad, actualizaciones de seguridad, pequeños ajustes. Subimos tus nuevos proyectos.',
          price: ['Alojamiento desde 30€/mes', 'Actualizaciones de contenido desde 120€/mes'],
          action: null,
        },
      ],
    },
    faq: {
      title: "Lo que más nos *preguntan*.",
      aside: "Respuestas claras antes de comprometerte a nada.",
      items: [
        { q: "¿Qué incluyen los 1.500€?", a: "Estrategia, diseño a medida, desarrollo responsive, bases SEO, formulario de contacto y soporte de lanzamiento. ¿Más páginas o cambios después? Te los presupuestamos antes. Sin facturas sorpresa." },
        { q: "¿Con quién voy a trabajar?", a: "Con quien diseña y desarrolla tu web. Sin gestores de cuenta ni intermediarios: las decisiones son rápidas y nada se pierde por el camino." },
        { q: "¿Puedo añadir proyectos yo mismo?", a: "Sí, si quieres. Podemos dejar la web preparada para que añadas un proyecto en pocos clics. O los subimos nosotros, desde 120€/mes." },
        { q: "¿Os ocupáis del alojamiento y el dominio?", a: "Conectamos tu dominio en el lanzamiento. Alojamiento, copias de seguridad y actualizaciones de seguridad desde 30€/mes, para que no tengas que pensar en la parte técnica." },
        { q: "¿Puede estar mi web en varios idiomas?", a: "Sí. La configuración multilingüe forma parte de nuestro trabajo web. Esta misma web funciona en inglés, español y francés." },
        { q: "¿Cómo empezamos?", a: "Envíanos tu web actual. Primero la revisamos y te decimos qué necesita, para que conozcas el alcance y el precio antes de firmar." },
      ],
      cardTitle: "¿Te queda alguna duda?",
      cardBody: "Escríbenos. Te responde una persona de verdad.",
      cardAction: "Contactar",
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
      body: 'Una web que hace fácil recorrer tu portafolio y que los clientes adecuados te tomen en serio.',
      items: ['Rediseño de portada', 'Páginas de proyectos', 'Página sobre nosotros', 'Flujo de consulta', 'Experiencia móvil', 'Construcción orientada al rendimiento', 'Configuración multilingüe'],
      alt: 'Rediseño web para estudio de arquitectura, página de proyecto',
    },
    interiors: {
      title: 'Webs para estudios de diseño de interiores',
      body: 'Webs visuales que transmiten el ambiente, los materiales y la sensación de un espacio antes de la primera reunión.',
      items: ['Sistema de portafolio visual', 'Páginas de servicios', 'Narrativa del proceso', 'Captación de leads', 'Integración con Instagram y portafolio'],
      alt: 'Web para estudio de interiorismo, página de proyecto',
    },
    search: {
      title: 'Fundamentos de visibilidad',
      body: 'Aparecer cuando alguien busca “arquitecto en Marbella” no es suerte. Es estructura, metadatos, enlaces y una web rápida. Lo dejamos todo bien hecho.',
      items: ['Metadatos SEO', 'Estructura de páginas orientada a búsqueda', 'Datos estructurados', 'Enlazado interno', 'Estructura de alt en imágenes', 'Optimización de rendimiento'],
    },
    hosting: {
      title: 'Alojamiento y mantenimiento',
      body: 'Mantenemos la web rápida, segura y al día. Tú no tienes que pensar en ello.',
      items: ['Configuración de alojamiento en Vercel', 'Actualizaciones mensuales', 'Monitoreo técnico', 'Pequeñas ediciones de contenido', 'Revisiones de analítica'],
    },
    portfolio: {
      title: 'Sistemas de portafolio',
      body: 'Una forma clara de publicar cada proyecto: fotos, ubicación, tipo, materiales, alcance y la historia detrás.',
      items: ['Modelo para CMS, el sistema de gestión de contenidos', 'Plantillas de proyectos', 'Filtros por ubicación y tipo', 'Estructura de caso de estudio', 'Diseño centrado en la imagen'],
      alt: 'Archivo de proyectos para un estudio de arquitectura',
    },
    brand: {
      title: 'Refinamiento de marca',
      body: 'No es un rebranding completo. Es un ajuste cuidadoso de tipografía, color, maquetación y tono, para que todo parezca salir del mismo estudio.',
      items: ['Dirección visual', 'Sistema tipográfico', 'Sistema de color', 'Kit de UI para la web', 'Guía básica de marca'],
      alt: 'Sistema tipográfico y de color para la marca de un estudio',
    },
    fit: {
      title: '¿No sabes por dónde *empezar*?',
      body: 'Envíanos tu web. Te diremos qué necesita primero.',
      action: 'Reservar una revisión',
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
      title: 'Cómo *funciona* cada proyecto.',
      items: [
        { title: 'Primero, la revisión', body: 'Empezamos por tu web actual, tu posicionamiento y tus objetivos. Eso marca la dirección antes de diseñar nada.' },
        { title: 'Entregables definidos', body: 'Sabes exactamente qué recibirás antes de firmar.' },
        { title: 'Implicación directa', body: 'Hablas con quien diseña y desarrolla. Sin intermediarios.' },
        { title: 'Lista para publicar', body: 'Velocidad, SEO, analítica y tu dominio, todo listo antes de publicar.' },
      ],
    },
  },

  contact: {
    title: 'Cuéntanos sobre la web de tu estudio.',
    lead: 'Envíanos tu web actual o la idea de tu proyecto. Te responderemos con el siguiente paso más claro.',
    asideTitle: 'Una buena web hace que los clientes confíen en tu trabajo antes de conocerte.',
    asideBody: 'Ayudamos a estudios de arquitectura e interiorismo a mostrar su trabajo con claridad, en cualquier pantalla.',
    fields: {
      name: 'Tu nombre',
      studio: 'Nombre del estudio',
      email: 'Dirección de email',
      website: 'URL de la web actual',
      message: '¿Qué sientes que no funciona en la web actual?',
    },
    submit: 'Enviar',
    sending: 'Enviando…',
    required: 'Los campos marcados con * son obligatorios.',
    errors: {
      missing: 'Por favor, rellena este campo.',
      email: 'Introduce un email válido.',
      url: 'Introduce la dirección completa, con https://',
    },
    sendError: 'No se pudo enviar el mensaje. Inténtalo de nuevo o escribe a',
    thanks: 'Recibido. Te responderemos con un siguiente paso claro.',
    trap: 'Deja este campo vacío',
  },
};

export default es;
