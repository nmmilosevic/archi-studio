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
      title: 'Servicios | Reframe Studio',
      description: "Webs, identidad de marca, impresión y redes para estudios de arquitectura e interiorismo. Un solo estudio para todo lo que ven tus clientes.",
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
      includesNotes: ['Definimos las páginas, los proyectos y lo primero que debe encontrar quien visita.', 'Pensado para tu trabajo. Sin plantillas, sin temas.', 'Impecable en móvil, tablet y en una pantalla de 27 pulgadas.', 'Estructura limpia, páginas rápidas y títulos que Google entiende.', 'Las consultas llegan directamente a tu bandeja de entrada.', 'Publicamos juntos y arreglamos lo que aparezca.'],
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
    designTitle: "Decisiones de *diseño*.",
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
      "title": "Web, marca, impresión y *todo* lo que hay entre medias.",
      "lead": "A un estudio de arquitectura o interiorismo lo juzgan en todas partes: la web, la tarjeta, el panel de concurso, el feed de Instagram. Lo diseñamos todo, para que todo parezca un mismo estudio.",
      "disciplines": [
        {
          "id": "web",
          "name": "Web",
          "line": "Webs y portafolios que traen consultas."
        },
        {
          "id": "brand",
          "name": "Marca",
          "line": "Tipografía, color y tono que encajan."
        },
        {
          "id": "print",
          "name": "Impresión",
          "line": "Todo lo que acaba en papel o en una pared."
        },
        {
          "id": "marketing",
          "name": "Redes y marketing",
          "line": "Tu feed y tus newsletters, con tu marca."
        }
      ],
      "web": {
        "title": "Webs",
        "body": "Una web que hace fácil recorrer tu portafolio y que los clientes adecuados te tomen en serio. Rápida, visible en Google y cuidada una vez publicada.",
        "groups": [
          {
            "title": "Diseño y desarrollo",
            "items": [
              "Webs de estudio",
              "Rediseños",
              "Webs multilingües",
              "Flujo de consultas"
            ]
          },
          {
            "title": "Portafolio",
            "items": [
              "Páginas de proyecto",
              "Filtros por tipo y lugar",
              "Estructura de caso de estudio",
              "Editable por ti"
            ]
          },
          {
            "title": "SEO y mantenimiento",
            "items": [
              "Base SEO",
              "Rendimiento",
              "Alojamiento",
              "Actualizaciones mensuales"
            ]
          }
        ],
        "alt": "Web de estudio de arquitectura, página de proyecto"
      },
      "brand": {
        "title": "Identidad de marca",
        "body": "Desde un ajuste cuidadoso hasta una identidad completa. Logo, tipografía, color y tono, recogidos en un manual que de verdad vas a usar.",
        "items": [
          "Logo y logotipo",
          "Sistema tipográfico",
          "Paleta de color",
          "Papelería",
          "Manual de marca",
          "Tono de voz"
        ]
      },
      "print": {
        "title": "Impresión",
        "body": "Tarjetas, folletos, libros de portafolio, paneles de concurso, señalética. Todo lo que acaba en papel o en una pared, diseñado y preparado para imprenta.",
        "items": [
          "Tarjetas y papelería",
          "Folletos y libros de portafolio",
          "Paneles de concurso y de proyecto",
          "Vallas de obra y señalética",
          "Paneles de exposición",
          "Archivos listos para imprenta"
        ]
      },
      "social": {
        "title": "Redes y marketing",
        "body": "Plantillas de Instagram, visuales de campaña, newsletters y landing pages. Tu feed, por fin con tu marca, y fácil de mantener para tu equipo.",
        "items": [
          "Plantillas de Instagram",
          "Posts de lanzamiento de proyecto",
          "Visuales de campaña",
          "Newsletters",
          "Landing pages",
          "Anuncios"
        ]
      },
      "between": {
        "title": "Y todo lo que hay *entre medias*.",
        "body": "Las piezas que no encajan en ninguna categoría, pero que tus clientes también ven.",
        "items": [
          {
            "title": "Presentaciones",
            "body": "Presentaciones que convencen en la sala."
          },
          {
            "title": "Candidaturas a premios",
            "body": "Dossiers pensados para destacar ante un jurado."
          },
          {
            "title": "Fichas de proyecto",
            "body": "Un resumen de una página para cada proyecto."
          },
          {
            "title": "Firmas de email",
            "body": "Pequeñas, pero se ven cien veces al día."
          },
          {
            "title": "Dirección fotográfica",
            "body": "Briefs y listas de tomas para tu fotógrafo."
          },
          {
            "title": "Textos web",
            "body": "Palabras que suenan a tu estudio."
          }
        ]
      },
      "fit": {
        "title": "¿No sabes por dónde *empezar*?",
        "body": "Cuéntanos qué tienes y qué no funciona. Te diremos qué arreglar primero.",
        "action": "Escríbenos"
      },
      "engagement": {
        "title": "Cómo *funciona* cada proyecto.",
        "items": [
          {
            "title": "Primero, la revisión",
            "body": "Empezamos por lo que ya tienes: web, marca, impresos, feed. Eso marca la dirección antes de diseñar nada."
          },
          {
            "title": "Entregables definidos",
            "body": "Sabes exactamente qué recibirás antes de firmar."
          },
          {
            "title": "Implicación directa",
            "body": "Hablas con quien lo diseña. Sin intermediarios."
          },
          {
            "title": "Listo para usar",
            "body": "Webs publicadas, archivos listos para imprenta, plantillas entregadas. Nada a medias."
          }
        ]
      },
    "visuals": {
      "print": {
        "label": "Ejemplo de piezas impresas para un estudio: un folleto abierto, tarjetas de visita y un panel de concurso",
        "book": "Obras seleccionadas",
        "years": "2019–2025",
        "board": "Casa Lunara",
        "boardSub": "Propuesta de concurso · Marbella",
        "name": "Aurea Studio",
        "role": "Arquitectura",
        "city": "Marbella"
      },
      "social": {
        "label": "Ejemplo de feed de Instagram y newsletter diseñados para un estudio",
        "handle": "aurea.studio",
        "stats": [
          [
            "128",
            "posts"
          ],
          [
            "4,2k",
            "seguidores"
          ]
        ],
        "tiles": [
          "Nuevo proyecto",
          "Casa Lunara",
          "Primero, la luz.",
          "Proceso",
          "Marbella",
          "Materia"
        ],
        "mailFrom": "Aurea Studio",
        "mailSubject": "Nuevo proyecto: Casa Lunara",
        "mailCta": "Ver el proyecto"
      },
      "brand": {
        label: 'Ejemplo de sistema de marca con escala tipográfica, escala de espaciado y paleta de color',
        scale: ['Display', 'Titular', 'Texto'],
        sample: 'Arquitectura',
        body: 'Luz, proporción y materia, en ese orden.',
        colors: ['Lino', 'Travertino', 'Terracota', 'Oliva', 'Basalto'],
      },
    }
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
