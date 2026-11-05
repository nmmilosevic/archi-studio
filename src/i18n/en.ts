/**
 * English content. Every language file must match this shape exactly
 * (es.ts and fr.ts are typed against it, so a missing string fails the build).
 */
const en = {
  lang: 'en',
  name: 'English',

  meta: {
    home: {
      title: 'Reframe Studio · Websites, brand and print for architects and interior designers',
      description: 'Websites, brand, print and social for architecture, interior and landscape studios. Made with the care you put into a floor plan.',
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
    tagline: 'A design studio for architects, interior designers and landscape studios. Websites, brand, print and marketing.',
    about: 'REFRAME makes websites, portfolios, print and social content for studios whose work deserves better than a template.',
  },

  cookie: {
    title: 'Cookies and analytics',
    body: 'We use essential cookies for the website to function properly and optional analytics cookies to understand how visitors use the site.',
    accept: 'Accept all',
    reject: 'Reject all',
  },

  cta: {
    title: 'Send us your site. We’ll tell you what to *fix first*.',
    body: 'A short, honest review of what’s working and what isn’t. No pitch deck.',
    action: 'Request a review',
    alt: 'Architecture website review materials with plans and natural samples',
  },

  home: {
    hero: {
      title: 'You design beautiful spaces. Your website should *feel* like one.',
      lead: 'Websites, brand, print and social for architects and interior designers. Made with the same care you put into a floor plan.',
      primary: 'See the work',
      secondary: 'Book a site review',
      mockAlt: 'Example architecture studio website redesign',
    },
    directions: {
      title: 'Nine directions. *Zero* templates.',
      body: 'Each one starts from a real kind of studio: Mediterranean villas, quiet interiors, raw concrete. Find the one that feels like you.',
      names: ['Mediterranean', 'Organic', 'Avantforme', 'Futuristic', 'Japan', 'Luxury', 'Modern eco', 'Parisian', 'Dark luxury'],
      altPrefix: 'Style:',
    },
    studios: {
      title: 'Who we *work* with.',
      labels: ['Architecture', 'Interiors', 'Landscape'],
    },
    pricing: {
      title: 'One price. *No* surprises.',
      price: '1,500€',
      terms: 'One-time payment',
      note: 'That covers the design you see and the build. Want more pages or changes later? We quote it first, so nothing lands on an invoice you didn’t expect.',
      included: 'What’s included',
      includes: ['Website strategy', 'Custom design', 'Responsive development', 'SEO basics', 'Contact form', 'Launch support'],
      action: 'Start my site',
    },
    beyond: {
      title: 'Not *just* websites.',
      items: [
        {
          title: 'Brand & Print',
          body: 'Business cards, brochures, portfolio PDFs, competition boards, signage. Anything that ends up on paper or on a wall.',
          price: ['Priced per project'],
          action: 'Ask for a quote' as string | null,
        },
        {
          title: 'Digital Marketing',
          body: 'Instagram templates, campaign visuals, newsletters, landing pages and ads. Your feed, finally on brand.',
          price: ['Priced per project'],
          action: 'Ask for a quote' as string | null,
        },
        {
          title: 'Website Care',
          body: 'Hosting, backups, security updates, small fixes. New projects uploaded for you.',
          price: ['Hosting from 30€/month', 'Content updates from 120€/month'],
          action: null as string | null,
        },
      ],
    },
    faq: {
      title: "Questions we hear *a lot*.",
      aside: "Straight answers before you commit to anything.",
      items: [
        { q: "What does the 1,500€ cover?", a: "Strategy, custom design, the responsive build, SEO basics, a contact form and launch support. Want more pages or changes later? We quote them first. No surprise invoices." },
        { q: "Who will I actually work with?", a: "The person designing and building your site. No account managers, no hand-offs, so decisions are quick and nothing gets lost." },
        { q: "Can I add new projects myself?", a: "Yes, if you want to. We can set the site up so you add a project in a few clicks. Or we upload them for you, from 120€/month." },
        { q: "Do you handle hosting and the domain?", a: "We connect your domain at launch. Hosting, backups and security updates are available from 30€/month, so you never have to think about the technical side." },
        { q: "Can my site be in more than one language?", a: "Yes. Multilingual setup is part of our website work. This site runs in English, Spanish and French." },
        { q: "How do we start?", a: "Send us your current site. We review it first and tell you what it needs, so you know the scope and the price before you sign." },
      ],
      cardTitle: "Still have a question?",
      cardBody: "Write to us. A real person answers.",
      cardAction: "Get in touch",
    },
  },

  work: {
    title: 'Four studies in *showing* the work.',
    lead: 'Redesign concepts for studios on the Costa del Sol. Not client work: studies, so you can see how we think.',
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
    title: 'Web, brand, print and *everything* in between.',
    lead: 'Everything here is built around how architecture and interior studios actually win work: the portfolio, the first impression, the enquiry.',
    redesign: {
      title: 'Website redesign for architecture studios',
      body: 'A site that makes your portfolio easy to explore, and makes the right clients take you seriously.',
      items: ['Homepage redesign', 'Project pages', 'About page', 'Enquiry flow', 'Mobile experience', 'Performance-focused build', 'Multilingual setup'],
      alt: 'Architecture studio website redesign, project page',
    },
    interiors: {
      title: 'Interior design studio websites',
      body: 'Image-led sites that carry the mood, the materials and the feel of a room before the first meeting.',
      items: ['Visual portfolio system', 'Service pages', 'Process storytelling', 'Lead capture', 'Instagram and portfolio integration'],
      alt: 'Interior design studio website, project page',
    },
    search: {
      title: 'Search visibility foundation',
      body: 'Showing up when someone searches “architect in Marbella” isn’t luck. It’s structure, metadata, links and a fast site. We set all of it up properly.',
      items: ['SEO metadata', 'Search-focused page structure', 'Structured data', 'Internal linking', 'Image alt structure', 'Performance optimization'],
    },
    hosting: {
      title: 'Hosting & maintenance',
      body: 'We keep the site fast, safe and up to date. You never have to think about it.',
      items: ['Vercel hosting setup', 'Monthly updates', 'Technical monitoring', 'Small content edits', 'Analytics checks'],
    },
    portfolio: {
      title: 'Portfolio systems',
      body: 'One clean way to publish every project: photos, location, type, materials, scope and the story behind it.',
      items: ['Content model for a CMS, or content management system', 'Project templates', 'Filters by location and type', 'Case study structure', 'Image-first layout'],
      alt: 'Project archive layout for an architecture studio',
    },
    brand: {
      title: 'Brand refinement',
      body: 'Not a full rebrand. A careful tune-up of type, colour, layout and tone, so everything looks like it comes from the same studio.',
      items: ['Visual direction', 'Typography system', 'Color system', 'Website UI kit', 'Basic brand guidelines'],
      alt: 'Typography and colour system for a studio brand',
    },
    fit: {
      title: 'Not sure where to *start*?',
      body: 'Send us your site. We’ll tell you what it needs first.',
      action: 'Book a site review',
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
      title: 'How every project *runs*.',
      items: [
        { title: 'Review first', body: 'We start with your current site, your positioning and your goals. That sets the direction before any design happens.' },
        { title: 'Fixed deliverables', body: 'You know exactly what you’re getting before you sign.' },
        { title: 'Direct involvement', body: 'You talk to the person designing and building it. Nobody in between.' },
        { title: 'Launch ready', body: 'Speed, SEO, analytics and your domain, all set up before you go live.' },
      ],
    },
  },

  contact: {
    title: 'Tell us about your *studio*.',
    lead: 'Send your current site or a project idea. We’ll reply with a clear next step.',
    asideTitle: 'A good website makes clients trust your work before they meet you.',
    asideBody: 'We help architecture and interior studios show their work clearly, on every screen.',
    fields: {
      name: 'Your name',
      studio: 'Studio name',
      email: 'Email address',
      website: 'Current website URL',
      message: 'What is not working on your current site?',
    },
    submit: 'Send it over',
    sending: 'Sending…',
    required: 'Fields marked * are required.',
    errors: {
      missing: 'Please fill in this field.',
      email: 'Please enter a valid email address.',
      url: 'Please enter the full address, including https://',
    },
    sendError: 'The message could not be sent. Please try again, or write to',
    thanks: 'Got it. We’ll get back to you with a clear next step.',
    trap: 'Leave this empty',
  },
};

export default en;
export type Content = typeof en;
