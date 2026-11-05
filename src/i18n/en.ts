/**
 * English content. Every language file must match this shape exactly
 * (es.ts and fr.ts are typed against it, so a missing string fails the build).
 */
const en = {
  lang: 'en',
  name: 'English',

  meta: {
    home: {
      title: 'Architecture Studio Website Design | Reframe Studio',
      description: 'Architecture website design for studios that need stronger portfolio presentation, clearer positioning, and a digital experience that matches the quality of their work.',
    },
    work: {
      title: 'Work | Reframe Studio',
      description: 'A clear look at how architecture and interior studios can present their work with more clarity, confidence, and visual quality.',
    },
    services: {
      title: 'Services | Reframe Studio',
      description: 'From website redesigns to portfolio systems and search visibility foundations, every service is built around how architecture and design studios present work.',
    },
    contact: {
      title: 'Contact | Reframe Studio',
      description: 'Send your current website or project idea. We’ll reply with the clearest next step.',
    },
  },

  ui: {
    skip: 'Skip to content',
    home: 'Home',
    work: 'Work',
    services: 'Services',
    contact: 'Contact',
    cta: 'Start my site',
    menu: 'Menu',
    close: 'Close',
    language: 'Language',
    mainNav: 'Main',
    footerNav: 'Footer',
    cookieSettings: 'Cookie settings',
    backToTop: 'Back to top',
  },

  footer: {
    tagline: 'Web design studio specializing in architecture, interior design, and landscape studios.',
    about: 'REFRAME is a web design studio for architecture and interior design firms, creating refined websites, portfolio systems, and presentation concepts.',
  },

  cookie: {
    title: 'Cookies and analytics',
    body: 'We use essential cookies for the website to function properly and optional analytics cookies to understand how visitors use the site.',
    accept: 'Accept all',
    reject: 'Reject all',
  },

  cta: {
    title: 'Want your studio to feel more premium online?',
    body: 'Send your current website. We’ll tell you what should change first.',
    action: 'Request a quick audit',
    alt: 'Architecture website review materials with plans and natural samples',
  },

  home: {
    hero: {
      title: 'Your studio already feels premium. Your website should too.',
      lead: 'Architecture website design for studios that need stronger portfolio presentation, clearer positioning, and a digital experience that matches the quality of their work.',
      primary: 'See redesign previews',
      secondary: 'Request a review',
      mockAlt: 'Example architecture studio website redesign',
    },
    directions: {
      title: 'Selected website directions for architecture studios.',
      body: 'Focused examples of clearer portfolios, better mobile reading, and a stronger first impression, without generic templates.',
      names: ['Mediterranean', 'Organic', 'Avantforme', 'Futuristic', 'Japan', 'Luxury', 'Modern eco', 'Parisian', 'Dark luxury'],
      altPrefix: 'Style:',
    },
    studios: {
      title: 'Studios we design for.',
      labels: ['Architecture', 'Interiors', 'Landscape'],
    },
    pricing: {
      title: 'One clear investment for your studio.',
      price: '1,500€',
      terms: 'One-time payment',
      note: 'This package includes the development of the design shown. For any changes or additions, we’ll provide a separate quote.',
      includes: ['Website strategy', 'Custom design', 'Responsive development', 'SEO basics', 'Contact form', 'Launch support'],
      action: 'Start my site',
    },
    beyond: {
      title: 'Design beyond your website.',
      items: [
        {
          title: 'Brand & Print',
          body: 'Brochures, portfolio PDFs, business cards and stationery, presentation templates, competition documents, signage, and printed marketing materials.',
          price: ['Quoted based on scope'],
          action: 'Request a quote' as string | null,
        },
        {
          title: 'Digital Marketing',
          body: 'Social media design, Instagram templates, campaign visuals, newsletters, landing pages, digital ads, and content creation.',
          price: ['Quoted based on scope'],
          action: 'Request a quote' as string | null,
        },
        {
          title: 'Website Care',
          body: 'Hosting, backups, security updates, small fixes, content edits, and project uploads.',
          price: ['Hosting from 30€/month', 'Content updates from 120€/month'],
          action: null as string | null,
        },
      ],
    },
    friction: {
      title: 'Small friction reduces trust.',
      body: 'Prospective clients read a website much like they read a space. Sequence, proportion, and attention to detail shape the impression before a conversation begins.',
      action: 'Request a website review',
      alt: 'Website review visual composition',
      points: [
        { title: 'Positioning', body: 'Clarify what your studio is known for.' },
        { title: 'Project presentation', body: 'Improve hierarchy and reading rhythm.' },
        { title: 'Contact flow', body: 'Reduce friction from interest to enquiry.' },
      ],
    },
  },

  work: {
    title: 'Websites for studios with work worth showing properly.',
    lead: 'A clear look at how architecture and interior studios can present their work with more clarity, confidence, and visual quality.',
    listTitle: 'Selected website redesign studies',
    viewProject: 'View project',
    previewAlt: (title: string) => `${title} website redesign preview`,
  },

  project: {
    location: 'Location',
    type: 'Type',
    published: 'Published',
    updated: 'Updated',
    typeValue: 'Conceptual redesign study',
    publishedValue: '7 May 2026',
    updatedValue: '30 July 2026',
    designTitle: "Design decisions",
    designIntro: "What we chose for this studio, and why.",
    palette: "Palette",
    type: "Type",
    coverAlt: (title: string) => `${title}: desktop website preview`,
    enlarge: 'Enlarge:',
    enlarged: 'Enlarged view',
    close: 'Close',
  },

  projects: {
    'villa-architecture-studio': {
      title: 'Architecture site',
      location: 'Benahavís, Costa del Sol',
      summary: 'Site redesign, portfolio structure, mobile presentation and contact journey.',
      captions: ['Project page', 'Mobile experience'],
      typeNote: "A light, wide serif for titles. A small sans-serif for text and project facts. Spaced capitals for the logo.",
      paletteNames: ["Page", "Travertine", "Concrete", "Wood", "Bronze", "Ink"],
      decisions: [
        "The facts come first. Location, year, typology, size and status sit right under the project title, before any long text.",
        "Materials are shown, not described. Travertine, lime plaster, wood, bronze and concrete appear as samples, the way a client sees them on the studio table.",
        "On the phone, the photograph comes first and the headline follows, so the work is seen before it is explained.",
      ],
    },
    'casa-noma-marbella': {
      title: 'Interior site',
      location: 'Marbella, Costa del Sol',
      summary: 'Site redesign, service clarity, interior portfolio, mobile experience and CMS setup.',
      captions: ['Interior project page', 'Mobile experience'],
      typeNote: "A classic serif with one italic accent, on “Slow Time.” Small spaced capitals for navigation and labels.",
      paletteNames: ["Page", "Linen", "Travertine", "Oak", "Ink"],
      decisions: [
        "Photographs overlap and step across the grid, like an interiors magazine, instead of sitting in equal boxes.",
        "Location, type, size and year sit in one line under the introduction, readable at a glance.",
        "Travertine, oak and linen are shown as swatches beside the rooms they appear in.",
      ],
    },
    'forma-sur-malaga': {
      title: 'Architecture site',
      location: 'Málaga, Costa del Sol',
      summary: 'Bold redesign, project archive, visual identity, mobile structure and CMS.',
      captions: ['Project archive', 'Mobile experience'],
      typeNote: "One bold grotesque sans-serif in a few sizes. Labels in capitals. The type is as structural as the buildings.",
      paletteNames: ["Page", "Panel", "Concrete", "Light concrete", "Text"],
      decisions: [
        "Dark pages let the concrete photography hold the light. Nothing on screen is brighter than the sun on the walls.",
        "Each project shows its section and plan beside the photographs, because clients of an architecture studio read drawings too.",
        "Project facts sit in a simple table: location, completion, program, area.",
      ],
    },
    'terral-studio-estepona': {
      title: 'Landscape site',
      location: 'Estepona, Costa del Sol',
      summary: 'Site redesign, outdoor portfolio, services presentation, mobile experience and CMS.',
      captions: ['Outdoor project page', 'Mobile experience'],
      typeNote: "A soft serif in olive for titles. A light sans-serif for text.",
      paletteNames: ["Page", "Limestone", "Sage", "Lavender", "Olive"],
      decisions: [
        "Before and after photographs of the same hillside show what the garden changed, without a word of sales.",
        "“The approach” explains native planting, natural materials and tailored design in three short columns with simple line drawings.",
        "A quote from the studio closes the page, then the gallery follows the garden in order: terrace, path, planting, table.",
      ],
    },
  } as Record<string, { title: string; location: string; summary: string; captions: string[]; typeNote: string; paletteNames: string[]; decisions: string[] }>,

  services: {
    title: 'Everything a studio needs to stand out online.',
    lead: 'From website redesigns to portfolio systems and search visibility foundations, every service is built around how architecture and design studios present work, earn trust, and attract better enquiries.',
    redesign: {
      title: 'Website redesign for architecture studios',
      body: 'A refined digital presence that makes your portfolio easier to explore, your positioning clearer, and your studio more credible to high-value clients.',
      items: ['Homepage redesign', 'Project pages', 'About page', 'Enquiry flow', 'Mobile experience', 'Performance-focused build', 'Multilingual setup'],
      alt: 'Architecture studio website redesign, project page',
    },
    interiors: {
      title: 'Interior design studio websites',
      body: 'Elegant, image-led websites for studios that need to present mood, materials, style, and trust before the first meeting.',
      items: ['Visual portfolio system', 'Service pages', 'Process storytelling', 'Lead capture', 'Instagram and portfolio integration'],
      alt: 'Interior design studio website, project page',
    },
    search: {
      title: 'Search visibility foundation',
      body: 'Organic visibility is the ability to appear in unpaid searches related to your services, projects, and locations. We build it through content structure, metadata, internal links, and a clear technical foundation.',
      items: ['SEO metadata', 'Search-focused page structure', 'Structured data', 'Internal linking', 'Image alt structure', 'Performance optimization'],
    },
    hosting: {
      title: 'Hosting & maintenance',
      body: 'Keep the website fast, secure, updated, and easy to manage without worrying about technical details.',
      items: ['Vercel hosting setup', 'Monthly updates', 'Technical monitoring', 'Small content edits', 'Analytics checks'],
    },
    portfolio: {
      title: 'Portfolio systems',
      body: 'A clean structure to publish projects consistently, including images, location, service type, materials, scope, and story.',
      items: ['Content model for a CMS, or content management system', 'Project templates', 'Filters by location and type', 'Case study structure', 'Image-first layout'],
      alt: 'Project archive layout for an architecture studio',
    },
    brand: {
      title: 'Brand refinement',
      body: 'Not a full branding agency replacement. It is a precise refinement of typography, color, layout, tone, and digital consistency.',
      items: ['Visual direction', 'Typography system', 'Color system', 'Website UI kit', 'Basic brand guidelines'],
      alt: 'Typography and colour system for a studio brand',
    },
    fit: {
      title: 'Not sure which service fits?',
      body: 'Request a website review and we will tell you what your studio website needs first.',
      action: 'Request a website review',
    },
    visuals: {
      search: {
        label: 'Example search result where the studio ranks first, with performance, SEO and accessibility scores',
        query: 'architect Marbella',
        url: 'aurea-studio.com › projects',
        title: 'Aurea Studio · Architecture in Marbella',
        desc: 'Contemporary villas and private residences on the Costa del Sol. Selected projects, process and contact.',
        scores: ['Performance', 'SEO', 'Accessibility'],
      },
      portfolio: {
        label: 'Example content editor next to the published project page it creates',
        editor: 'Editor',
        page: 'Published page',
        fields: ['Project', 'Location', 'Type', 'Materials'],
        values: ['Casa Lunara', 'Marbella', 'Interior · Residential', 'Travertine, oak, linen'],
        images: 'Images',
        publish: 'Published',
      },
      brand: {
        label: 'Example brand system with a typography scale, a spacing scale and a colour palette',
        scale: ['Display', 'Heading', 'Body'],
        sample: 'Architecture',
        body: 'Light, proportion and material, in that order.',
        colors: ['Linen', 'Travertine', 'Terracotta', 'Olive', 'Basalt'],
      },
      hosting: {
        label: 'Example maintenance dashboard showing uptime, backups, updates and response time',
        status: 'All systems normal',
        uptime: 'Uptime, last 30 days',
        rows: [['Last backup', 'Today, 04:00'], ['Security updates', 'Up to date'], ['Content edits', '2 projects added'], ['Response time', '180 ms']],
      },
    },
    engagement: {
      title: 'Every engagement follows the same structure.',
      items: [
        { title: 'Review first', body: 'Every project starts with a review of your current site, positioning, and goals. This shapes the direction and scope before any work begins.' },
        { title: 'Fixed deliverables', body: 'Each package has a defined scope, so you know what you are getting before you sign.' },
        { title: 'Direct involvement', body: 'You work directly with the designer and developer. Faster revisions and cleaner decisions, with no account-manager handoffs.' },
        { title: 'Launch ready', body: 'Every project includes performance optimization, technical SEO setup, analytics configuration, and domain connection.' },
      ],
    },
  },

  contact: {
    title: 'Tell us about your studio website.',
    lead: 'Send your current website or project idea. We’ll reply with the clearest next step.',
    asideTitle: 'The right website should help clients trust your work.',
    asideBody: 'We help architecture and interior studios present their work with more clarity, trust, and consistency across desktop and mobile.',
    fields: {
      name: 'Your name',
      studio: 'Studio name',
      email: 'Email address',
      website: 'Current website URL',
      message: 'What is not working on your current site?',
    },
    submit: 'Send the current site',
    sending: 'Sending…',
    required: 'Fields marked * are required.',
    errors: {
      missing: 'Please fill in this field.',
      email: 'Please enter a valid email address.',
      url: 'Please enter the full address, including https://',
    },
    sendError: 'The message could not be sent. Please try again, or write to',
    thanks: 'Thank you. We’ll reply with the clearest next step.',
    trap: 'Leave this empty',
  },
};

export default en;
export type Content = typeof en;
