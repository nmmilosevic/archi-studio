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
      description: "Websites, brand identity, print and social for architecture and interior design studios. One studio for everything clients see.",
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
    cta: 'Start a project',
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
      includesNotes: ['We map the pages, the projects and what visitors should find first.', 'Built around your work. No template, no theme.', 'Sharp on a phone, a tablet and a 27-inch screen.', 'Clean structure, fast pages, titles Google can read.', 'Enquiries land straight in your inbox.', 'We go live together and fix anything that shows up.'],
      action: 'Start a project',
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
    designTitle: "Design *decisions*.",
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
      "title": "Web, brand, print and *everything* in between.",
      "lead": "Architecture and interior studios get judged everywhere: the site, the business card, the competition board, the Instagram grid. We design all of it, so it all looks like one studio.",
      "disciplines": [
        {
          "id": "web",
          "name": "Web",
          "line": "Sites and portfolios that bring in enquiries."
        },
        {
          "id": "brand",
          "name": "Brand",
          "line": "Type, colour and tone that hold together."
        },
        {
          "id": "print",
          "name": "Print",
          "line": "Anything that ends up on paper or on a wall."
        },
        {
          "id": "marketing",
          "name": "Social & marketing",
          "line": "Your feed and your newsletters, on brand."
        }
      ],
      "web": {
        "title": "Websites",
        "body": "A site that makes your portfolio easy to explore and makes the right clients take you seriously. Fast, found on Google, and looked after once it’s live.",
        "groups": [
          {
            "title": "Design & build",
            "items": [
              "Studio websites",
              "Redesigns",
              "Multilingual sites",
              "Enquiry flow"
            ]
          },
          {
            "title": "Portfolio",
            "items": [
              "Project pages",
              "Filters by type and place",
              "Case study structure",
              "Editable by you"
            ]
          },
          {
            "title": "Search & care",
            "items": [
              "SEO foundation",
              "Performance",
              "Hosting",
              "Monthly updates"
            ]
          }
        ],
        "alt": "Architecture studio website, project page"
      },
      "brand": {
        "title": "Brand identity",
        "body": "From a careful refresh to a full identity. Logo, type, colour and tone, set down in guidelines you’ll actually use.",
        "items": [
          "Logo and wordmark",
          "Typography system",
          "Colour palette",
          "Stationery",
          "Brand guidelines",
          "Tone of voice"
        ]
      },
      "print": {
        "title": "Print",
        "body": "Business cards, brochures, portfolio books, competition boards, signage. Anything that ends up on paper or on a wall, designed and prepared for the printer.",
        "items": [
          "Business cards and stationery",
          "Brochures and portfolio books",
          "Competition and project boards",
          "Site hoardings and signage",
          "Exhibition panels",
          "Print-ready files"
        ]
      },
      "social": {
        "title": "Social & marketing",
        "body": "Instagram templates, campaign visuals, newsletters and landing pages. Your feed, finally on brand, and easy for your team to keep up.",
        "items": [
          "Instagram templates",
          "Project launch posts",
          "Campaign visuals",
          "Newsletters",
          "Landing pages",
          "Ads"
        ]
      },
      "between": {
        "title": "And everything *in between*.",
        "body": "The pieces that don’t fit a category but still land in front of clients.",
        "items": [
          {
            "title": "Pitch decks",
            "body": "Presentations that hold the room."
          },
          {
            "title": "Award submissions",
            "body": "Entries laid out to stand out on a jury table."
          },
          {
            "title": "Project sheets",
            "body": "A one-page summary for every project."
          },
          {
            "title": "Email signatures",
            "body": "Small, but seen a hundred times a day."
          },
          {
            "title": "Photo direction",
            "body": "Briefs and shot lists for your photographer."
          },
          {
            "title": "Website copy",
            "body": "Words that sound like your studio."
          }
        ]
      },
      "fit": {
        "title": "Not sure where to *start*?",
        "body": "Tell us what you have and what isn’t working. We’ll tell you what to fix first.",
        "action": "Get in touch"
      },
      "engagement": {
        "title": "How every project *runs*.",
        "items": [
          {
            "title": "Review first",
            "body": "We start with what you already have: site, brand, print, feed. That sets the direction before anything gets designed."
          },
          {
            "title": "Fixed deliverables",
            "body": "You know exactly what you’re getting before you sign."
          },
          {
            "title": "Direct involvement",
            "body": "You talk to the person designing it. Nobody in between."
          },
          {
            "title": "Ready to use",
            "body": "Sites live, files print-ready, templates handed over. Nothing left half done."
          }
        ]
      },
    "visuals": {
      "web": {"label": "Example studio website shown on a laptop and a phone", "url": "aurea-studio.com", "nav": ["Projects", "Studio", "Contact"], "headline": "Architecture in harmony with place.", "cta": "View projects", "projects": ["Villa Aurora", "Casa Lunara", "Casa Bruta"]},
      "print": {
        "label": "Example print set for a studio: a brochure spread, business cards and a competition board",
        "book": "Selected works",
        "years": "2019–2025",
        "board": "Casa Lunara",
        "boardSub": "Competition entry · Marbella",
        "name": "Aurea Studio",
        "role": "Architecture",
        "city": "Marbella"
      },
      "social": {
        "label": "Example Instagram grid and newsletter designed for a studio",
        "handle": "aurea.studio",
        "stats": [["128", "posts"], ["4.2k", "followers"], ["312", "following"]],
        "name": "Aurea Studio",
        "bio": "Architecture · Marbella",
        "bio2": "Villas and private homes on the Costa del Sol",
        "link": "aurea-studio.com",
        "follow": "Follow",
        "message": "Message",
        "highlights": ["Villas", "Process", "Interiors", "Press"],
        "tiles": [
          "New project",
          "Casa Lunara",
          "Light first.",
          "Process",
          "Marbella",
          "Material"
        ],
        "mailFrom": "Aurea Studio",
        "mailSubject": "New project: Casa Lunara",
        "mailCta": "See the project"
      },
      "brand": {
        label: 'Example brand system with a typography scale, a spacing scale and a colour palette',
        scale: ['Display', 'Heading', 'Body'],
        sample: 'Architecture',
        body: 'Light, proportion and material, in that order.',
        colors: ['Linen', 'Travertine', 'Terracotta', 'Olive', 'Basalt'],
      },
    }
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
