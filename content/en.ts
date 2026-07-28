const en = {
  nav: {
    services: "Redesigns",
    pricing: "Pricing",
    method: "Method",
    work: "Work",
    audit: "Audit",
    seo: "Search visibility",
    contact: "Contact",
    cta: "Start my site",
  },
  hero: {
    label: "Websites for architecture and design studios",
    headline: "Your studio already feels premium. Your website should too.",
    sub: "Architecture website design for studios that need stronger portfolio presentation, clearer positioning, and a digital experience that matches the quality of their work.",
    ctaPrimary: "See redesign previews",
    ctaSecondary: "Request a review",
    proof: "Built for architecture, interior design, and landscape studios.",
  },
  problem: {
    heading: "Most studios lose trust before the first call.",
    body: "Architecture and interior design are visual businesses. When a website feels outdated, slow, generic, or hard to browse, the quality of the studio is judged before the visitor even sees the work properly.",
    cards: [
      { title: "Outdated first impression", desc: "Visitors judge the studio in under three seconds. A visual mismatch between real work and website erodes trust instantly." },
      { title: "Weak project storytelling", desc: "Projects deserve more than a gallery grid. Each piece of work should communicate scope, materials, challenge, and result." },
      { title: "Poor mobile experience", desc: "Most inquiries start on a phone. A studio website that collapses on mobile sends the wrong signal immediately." },
      { title: "No clear path to contact", desc: "If finding the contact form requires effort, most visitors leave. The path from interest to contact must be frictionless." },
      { title: "Weak search visibility", desc: "A strong architecture studio website should be easy to understand, technically sound, and structured around the services and projects clients search for." },
      { title: "Low trust for international clients", desc: "Multilingual presence, refined design, and professional copy reassure international buyers looking for a studio they can rely on." },
    ],
  },
  beforeAfter: {
    label: "The cold redesign offer",
    heading: "I do not start with a pitch. I start with proof.",
    body: "I redesign a key part of your website first, deploy it as a private Vercel preview, and send you the live link. If it works for you, we turn it into your real site.",
    cta: "Show me what my site could look like",
    before: "Before — generic, slow, hard to trust",
    after: "After — refined, editorial, clear to convert",
  },
  services: {
    label: "What we do",
    heading: "Everything a studio needs to stand out online.",
    items: [
      {
        number: "01",
        title: "Website redesign for architecture studios",
        desc: "A refined digital presence that makes your portfolio easier to explore, your positioning clearer, and your studio more credible to high-value clients.",
        deliverables: ["Homepage redesign", "Project pages", "About page", "Enquiry flow", "Mobile experience", "Performance-focused build", "Multilingual setup"],
      },
      {
        number: "02",
        title: "Interior design studio websites",
        desc: "Elegant, image-led websites for studios that need to present mood, materials, style, and trust before the first meeting.",
        deliverables: ["Visual portfolio system", "Service pages", "Process storytelling", "Lead capture", "Instagram and portfolio integration"],
      },
      {
        number: "03",
        title: "Search visibility foundation",
        desc: "Technical and content structure that helps search engines understand your services, project types, studio positioning, and portfolio pages.",
        deliverables: ["SEO metadata", "Search-focused page structure", "Structured data", "Internal linking", "Image alt structure", "Performance optimization"],
      },
      {
        number: "04",
        title: "Hosting & maintenance",
        desc: "Keep the website fast, secure, updated, and easy to manage without worrying about technical details.",
        deliverables: ["Vercel hosting setup", "Monthly updates", "Technical monitoring", "Small content edits", "Analytics checks"],
      },
      {
        number: "05",
        title: "Portfolio systems",
        desc: "A clean structure to publish projects consistently, including images, location, service type, materials, scope, and story.",
        deliverables: ["CMS-ready content model", "Project templates", "Filters by location and type", "Case study structure", "Image-first layout"],
      },
      {
        number: "06",
        title: "Brand refinement",
        desc: "Not a full branding agency replacement — a precise refinement of typography, color, layout, tone, and digital consistency.",
        deliverables: ["Visual direction", "Typography system", "Color system", "Website UI kit", "Basic brand guidelines"],
      },
    ],
  },
  method: {
    label: "The process",
    heading: "The preview comes first.",
    steps: [
      { number: "01", title: "I redesign part of your website", desc: "A focused homepage or project-page direction, created before the sales conversation." },
      { number: "02", title: "You review the preview", desc: "You open a private Vercel link and see the direction on desktop and mobile." },
      { number: "03", title: "I finalize the system", desc: "The approved direction becomes a full responsive website with portfolio structure and multilingual-ready foundations." },
      { number: "04", title: "We go live", desc: "The site is deployed, tested, connected, and ready for your studio to use with confidence." },
      { number: "05", title: "Launch", desc: "We connect the domain, test performance, review mobile, refine metadata, and prepare the site for distribution or organic discovery." },
      { number: "06", title: "Maintenance", desc: "Optional hosting, updates, portfolio publishing, SEO improvements, and monthly care." },
    ],
  },
  pricing: {
    label: "Pricing",
    heading: "Transparent pricing. No guesswork.",
    sub: "Starting prices. Final quote depends on number of pages, languages, CMS scope, and content readiness.",
    vatNote: "Prices shown excluding VAT when applicable.",
    paymentNote: "50% upfront, 50% before launch for projects above 790€. Monthly plans billed monthly.",
    cta: "Request a quote",
    oneTime: [
      {
        name: "Audit preview",
        price: "190€",
        desc: "Entry product for studios who want a professional assessment before committing.",
        includes: ["Website audit", "Homepage UX review", "Mobile review", "Visual direction notes", "SEO quick scan", "5 priority recommendations", "Optional redesign preview screenshot"],
        notIncluded: ["Full website build", "Copywriting", "Implementation"],
        cta: "Get an audit",
        featured: false,
      },
      {
        name: "Studio refresh",
        price: "From 790€",
        desc: "Affordable entry upgrade for studios with an outdated site that need a cleaner presence fast.",
        includes: ["1 to 3 pages", "Refined visual direction", "Responsive design", "Basic copy structure", "Contact CTA", "Performance optimization", "Vercel deployment", "Basic SEO setup", "1 language"],
        notIncluded: [] as string[],
        cta: "Request a quote",
        featured: false,
      },
      {
        name: "Signature site",
        price: "From 1,900€",
        desc: "Main offer for established studios that need a serious digital presence.",
        includes: ["5 to 7 pages", "Custom design system", "Multilingual optional", "Project portfolio structure", "Service pages", "About page", "Contact page", "Technical SEO", "Analytics setup", "Vercel deployment", "2 revision rounds"],
        notIncluded: [] as string[],
        cta: "Request a quote",
        featured: true,
      },
      {
        name: "Editorial studio",
        price: "From 3,500€",
        desc: "Premium offer for studios selling villas, renovations, interiors, and international projects.",
        includes: ["Full website strategy", "Custom art direction", "Multilingual EN/ES/FR", "Portfolio CMS", "Search visibility structure", "Advanced animations", "Case study templates", "Conversion strategy", "Analytics", "Launch support", "3 revision rounds"],
        notIncluded: [] as string[],
        cta: "Request a quote",
        featured: false,
      },
    ],
    recurring: [
      {
        name: "Hosting care",
        price: "49€/month",
        desc: "Basic hosting and technical peace of mind.",
        includes: ["Vercel hosting management", "Technical checks", "Uptime monitoring", "Small monthly update", "Monthly backup check"],
      },
      {
        name: "Studio care",
        price: "149€/month",
        desc: "Hosting plus regular content support.",
        includes: ["Everything in Hosting care", "2 content edits per month", "Portfolio upload support", "Analytics review", "SEO checks"],
      },
      {
        name: "Growth care",
        price: "390€/month",
        desc: "Full ongoing support with active SEO growth.",
        includes: ["Everything in Studio care", "Search visibility improvements", "One new project or insight page per month", "Search Console review", "Conversion improvements", "Monthly recommendation report"],
      },
    ],
    addons: [
      { name: "Extra language", price: "From 250€" },
      { name: "Extra page", price: "From 180€" },
      { name: "Project page upload", price: "From 90€/project" },
      { name: "Google Business Profile", price: "From 190€" },
      { name: "Project case study page", price: "From 250€/page" },
      { name: "Copy refinement", price: "From 350€" },
    ],
  },
  work: {
    label: "Web redesign case studies",
    heading: "Architecture, reframed for the screen.",
    disclaimer: "Web redesign studies showing how architecture and interior design studios can present their work with more clarity, confidence, and visual authority.",
    caseStudy: {
      keyScreens: "Selected views.",
      whatChangedHeading: "What changed",
      whatChangedThemes: [
        "Portfolio structure",
        "Mobile readability",
        "Studio positioning",
        "Path to contact",
      ] as const,
    },
    items: [
      {
        slug: "villa-architecture-studio",
        title: "Architecture site",
        location: "Benahavís, Costa del Sol",
        cardSummary: "Site redesign, portfolio structure, mobile presentation and contact journey.",
        summary: "Site redesign, portfolio structure, mobile presentation and contact journey.",
        challenge:
          "The old site made the studio's work hard to understand, especially on mobile. Projects lacked hierarchy, images felt disconnected, and the contact journey was not clear enough.",
        heroDesktop: "/images/project01/p01-project.png",
        whatChanged: [
          {
            body: "A clearer path from overview to each villa: the work reads like a curated portfolio, not a flat gallery.",
          },
          {
            body: "Tactile rhythm, readable typography, and images that keep their authority on small screens.",
          },
          {
            body: "Typography and spacing aligned with a quiet, premium presence — digital reflects build quality.",
          },
          {
            body: "Less friction from interest to contact — fewer distractions, clearer intent when someone wants to talk.",
          },
        ] as const,
        screens: [
          { label: "Project page", image: "/images/project01/p01-hero.png" },
          { label: "Mobile experience", image: "/images/project01/p01-mobileview.png" },
        ],
      },
      {
        slug: "casa-noma-marbella",
        title: "Interior site",
        location: "Marbella, Costa del Sol",
        cardSummary:
          "Site redesign, service clarity, interior portfolio, mobile experience and CMS setup.",
        summary:
          "Site redesign, service clarity, interior portfolio, mobile experience and CMS setup.",
        challenge:
          "The studio had beautiful interior projects, but the site felt too generic. It did not communicate warmth, trust, or the quality of the spaces.",
        heroDesktop: "/images/project02/p02-hero.png",
        whatChanged: [
          {
            body: "Projects read as stories, not a flat grid — craft, scale, and atmosphere come through.",
          },
          {
            body: "Softer rhythm and strong images that stay light and fast on the phone.",
          },
          {
            body: "Palette and pacing closer to a design magazine: trust comes from tone, not sales talk.",
          },
          {
            body: "Services and contact with intention: visible when it matters, without competing with the work.",
          },
        ] as const,
        screens: [
          { label: "Interior project page", image: "/images/project02/p02-project.png" },
          { label: "Mobile experience", image: "/images/project02/p02-mobileview.png" },
        ],
      },
      {
        slug: "forma-sur-malaga",
        title: "Architecture site",
        location: "Málaga, Costa del Sol",
        cardSummary:
          "Bold redesign, project archive, visual identity, mobile structure and CMS.",
        summary:
          "Bold redesign, project archive, visual identity, mobile structure and CMS.",
        challenge:
          "The studio's work had strong architectural character, but the site felt flat and forgettable. The digital identity did not reflect the boldness of the projects.",
        heroDesktop: "/images/project03/p03-hero.png",
        whatChanged: [
          {
            body: "Archive and case studies with scale, contrast, and order that match the work.",
          },
          {
            body: "Typography and margins that stay readable when the layout collapses to a single column.",
          },
          {
            body: "A sharper, more memorable graphic voice aligned with the buildings — without noisy clutter.",
          },
          {
            body: "Contact stays within reach without breaking editorial rhythm or diluting the studio's tone.",
          },
        ] as const,
        screens: [
          { label: "Project archive", image: "/images/project03/p03-project.png" },
          { label: "Mobile experience", image: "/images/project03/p03-mobileview.png" },
        ],
      },
      {
        slug: "terral-studio-estepona",
        title: "Landscape site",
        location: "Estepona, Costa del Sol",
        cardSummary:
          "Site redesign, outdoor portfolio, services presentation, mobile experience and CMS.",
        summary:
          "Site redesign, outdoor portfolio, services presentation, mobile experience and CMS.",
        challenge:
          "The studio's outdoor projects were visual and emotional, but the site felt static. It did not show the lifestyle value of terraces, gardens, and outdoor spaces.",
        heroDesktop: "/images/project04/p04-hero.png",
        whatChanged: [
          {
            body: "Outdoor work reads as lifestyle chapters: terraces, gardens, and light in sequence — not isolated photos.",
          },
          {
            body: "Large images and calm scrolling that still perform when shared from site visits.",
          },
          {
            body: "A cinematic tone aligned with Mediterranean outdoor living — without resort clichés.",
          },
          {
            body: "Services and contact follow the story — trust is built before asking for action.",
          },
        ] as const,
        screens: [
          { label: "Outdoor project page", image: "/images/project04/p04-project.png" },
          { label: "Mobile experience", image: "/images/project04/p04-mobileview.png" },
        ],
      },
    ],
  },
  audit: {
    label: "Free audit offer",
    heading: "Want to see what your studio website could become?",
    sub: "Send your current website. I will review the first impression, mobile experience, portfolio clarity, SEO basics, and contact journey — and send you a clear set of recommendations.",
    what: {
      heading: "What I review",
      items: ["First impression and visual credibility", "Mobile experience and responsiveness", "Portfolio clarity and project storytelling", "SEO basics and search visibility", "Enquiry flow and conversion path", "Typography, spacing, and image quality", "Page speed basics", "Multilingual readiness"],
    },
    receive: {
      heading: "What you receive",
      items: ["Written audit PDF or document", "5 to 10 priority recommendations", "Visual direction notes", "Optional redesign preview screenshot", "Clear next step proposal"],
    },
    who: {
      heading: "Who this is for",
      items: ["Architecture studios", "Interior design studios", "Landscape studios", "Studios preparing a relaunch", "Studios with outdated websites losing trust", "Studios targeting international clients"],
    },
    issues: {
      heading: "Common issues I find",
      items: ["Homepage with no clear hierarchy", "Gallery with no project context", "No mobile-optimized layout", "Thin search structure", "Generic or outdated typography", "Missing contact path or buried form", "No multilingual version for international clients"],
    },
    form: {
      name: "Your name",
      studio: "Studio name",
      url: "Current website URL",
      email: "Email address",
      city: "Location",
      type: "Type of studio",
      typeOptions: ["Architecture", "Interior design", "Real estate", "Other"],
      improve: "What do you most want to improve?",
      language: "Preferred language",
      consent: "I agree to be contacted about my website review request.",
      cta: "Request a website review",
      success: "Thank you. I will review your website and be in touch within 48 hours.",
      selectType: "Select type",
      selectLanguage: "Select language",
      sending: "Sending…",
      urlPlaceholder: "https://your-studio.com",
      improvePlaceholder: "Describe the main issues or goals…",
    },
    faq: [
      { q: "Is the website review really free?", a: "The first review and written recommendations are included. If you want a full redesign or implementation, that moves into a paid project." },
      { q: "How long does it take?", a: "I aim to send the first review within 48 hours. More detailed audits with preview redesigns may take 3 to 5 working days." },
      { q: "Do I need to commit to anything?", a: "Not at all. The audit is a standalone deliverable. If you want to continue, we can discuss options." },
    ],
  },
  seo: {
    label: "Search visibility for studios",
    heading: "Your work should be easy to find and easier to understand.",
    sub: "Search visibility starts with a clear architecture studio website: precise services, structured project pages, strong metadata, internal links, and fast pages that support organic discovery.",
    cities: [
      { name: "Architecture", desc: "Service pages and project pages should make typology, scope, process, and built quality clear for clients comparing architecture studios." },
      { name: "Interior design", desc: "Interior design websites need strong image sequencing, material language, service clarity, and trust signals before the first consultation." },
      { name: "Landscape", desc: "Landscape architecture websites benefit from project storytelling that explains outdoor living, planting, climate, maintenance, and long-term value." },
      { name: "Portfolio", desc: "An architecture portfolio website should turn completed work into structured, indexable case studies instead of a disconnected image gallery." },
      { name: "Redesign", desc: "An architecture website redesign should improve perception, mobile reading, speed, metadata, and the path from project interest to enquiry." },
      { name: "Multilingual", desc: "Studios working internationally need language structure, hreflang, translated metadata, and copy that still sounds natural in each market." },
      { name: "Technical SEO", desc: "Clean URLs, structured data, image optimization, internal links, and Core Web Vitals help search engines read the site properly." },
      { name: "Brand perception", desc: "Search traffic only matters if the website makes the studio feel credible, specialist, and considered once visitors arrive." },
    ],
    sections: [
      { title: "Why search visibility matters for architecture studios", body: "Clients often search by discipline, project type, style, service, and location. The website needs enough structure for search engines to understand what the studio does without turning the page into a list of keywords." },
      { title: "Project pages as SEO assets", body: "Each completed project is a piece of indexable content. A well-structured project page with scope, typology, materials, design intent, and photography can support long-tail discovery while improving the portfolio experience." },
      { title: "Multilingual SEO", body: "Studios working across markets need language versions that are technically correct and well written. Hreflang, translated metadata, and natural local phrasing help each language page reach the right audience." },
      { title: "Service pages with substance", body: "Architecture web design, interior design websites, and landscape architecture websites need service pages that explain the studio's expertise, process, and fit rather than repeating generic agency language." },
      { title: "Technical SEO", body: "Site speed, Core Web Vitals, clean URL structure, structured data, optimized images, and internal linking all affect how Google reads and ranks the site. The technical foundation should support the portfolio, not distract from it." },
    ],
  },
  contact: {
    label: "Web redesign review",
    heading: "Send the current website.",
    sub: "If there is a clear first-impression gap, the next step can be a private redesign preview. No long proposal. No abstract pitch.",
    locations: "Based in Spain. Working with architecture, interior design, and landscape studios internationally.",
    response: "Typical response within 24 hours.",
    steps: [
      "I review the current website — first impression, portfolio clarity, mobile experience and contact journey.",
      "I identify the clearest perception gap between the studio's work and its digital presence.",
      "If there is a clear opportunity, I reply within 24 hours with a concrete next step.",
      "For selected studios, that next step can be a private redesign preview — deployed and ready to judge.",
    ],
    form: {
      name: "Your name",
      email: "Email address",
      studio: "Studio name",
      city: "Location",
      url: "Current website URL",
      type: "Studio type",
      typeOptions: [
        "Architecture studio",
        "Interior design studio",
        "Villa renovation studio",
        "Real estate / developer",
        "Other",
      ],
      budget: "Budget range",
      budgetOptions: [
        "Not decided yet",
        "Under 1,000€",
        "Around 1,990€ fixed redesign",
        "2,000€ to 4,000€",
        "Monthly care only",
      ],
      message: "What is not working on your current site?",
      messagePlaceholder: "Tell me what feels outdated, unclear, hard to update, or out of step with the quality of your work.",
      cta: "Send the current site",
      microcopy: "No commitment. If there is no clear opportunity, I will say so directly.",
      success: "Received. I will review the site and reply within 24 hours.",
    },
  },
  faq: [
    { q: "Do you work with studios outside Spain?", a: "Yes. Reframe Studio is based in Spain and works with architecture, interior design, and landscape studios in Spain and internationally." },
    { q: "How long does a website redesign take?", a: "A Studio refresh takes 1 to 2 weeks. A Signature site takes 3 to 5 weeks. An Editorial studio project takes 6 to 10 weeks depending on scope and content availability." },
    { q: "Do I need to provide the copy?", a: "We can work with your existing copy or refine it. Full copywriting from scratch is available as an add-on." },
    { q: "What if I do not have professional photography?", a: "We design with the photos you have and advise on the kind of imagery that would strengthen the studio. Professional photography is not required for launch." },
    { q: "Is the Vercel preview redesign free?", a: "The redesign previews I create as part of my cold outreach process are internal. If you received a preview link and want to discuss turning it into your real site, the conversation starts there." },
    { q: "Can you manage the website ongoing?", a: "Yes. Hosting care, Studio care, and Growth care plans offer ongoing support from 49€/month." },
    { q: "Do you offer multilingual websites?", a: "Yes. We build sites in English, Spanish, and French. Additional languages are available as an option." },
  ],
  footer: {
    tagline: "Web design studio specializing in architecture, interior design, and landscape studios.",
    brandEntity:
      "REFRAME is a web design studio for architecture and interior design firms, creating refined websites, portfolio systems, and presentation concepts.",
    homeAria: "Home",
    footerNavAria: "Key pages",
    locations: "Based in Spain · Working internationally",
    email: "hello@reframestudio.es",
    whatsapp: "+34 600 000 000",
    legal: { privacy: "Privacy Policy", terms: "Terms", cookies: "Cookies" },
    copy: "© 2026 REFRAME. All rights reserved.",
    nav: {
      sitemap: "Sitemap",
      services: "Redesigns",
      pricing: "Pricing",
      method: "Method",
      work: "Work",
      audit: "Free audit",
      seo: "SEO",
      contact: "Contact",
    },
  },
  pageMeta: {
    pricing: {
      title: "Pricing — transparent website packages for studios",
      description:
        "Clear website design pricing for architecture studios, interior design studios, and landscape practices: strategy, custom design, responsive development, SEO basics, launch support, and optional care plans.",
    },
    audit: {
      title: "Free website review for architecture & interior studios",
      description:
        "Reframe Studio reviews your architecture or interior design website — first impression, mobile UX, portfolio clarity, SEO basics, and contact flow — with practical next steps.",
    },
    searchVisibility: {
      title: "Search visibility for architecture & interior studios",
      description:
        "Search visibility for architecture, interior design, and landscape studio websites: project pages, service structure, technical SEO, image metadata, internal linking, and hreflang.",
    },
  },
  home: {
    workTitle: "Selected website directions for architecture studios.",
    workBody:
      "Focused examples of clearer portfolios, better mobile reading, and a stronger first impression — without generic templates.",
    beforeTitle: "Your website should feel as considered as your projects.",
    beforeProblems: [
      "Generic templates weaken positioning",
      "A poor mobile experience erodes trust",
      "Sites that are hard to update slow the studio down",
    ],
    beforeBody:
      "Your projects are detailed and high-end. Your digital presence should feel the same.",
    beforeAfterLabels: [
      "Clearer first impression",
      "Better project presentation",
      "Easier navigation",
      "Better mobile experience",
    ],
    reviewTitle: "Small friction reduces trust.",
    reviewBody:
      "Not ready to start? Send your current site — we’ll show where you lose clarity and trust. Useful notes, no hard sell.",
    offerTitle: "One clear investment for your studio.",
    offerPriceDetail:
      "This package includes the development of the design shown. For any changes or additions, we’ll provide a separate quote.",
    offerPaymentLabel: "One-time payment",
    simpleMarketingOffer: {
      price: "1,500€",
      addonsTitle: "Design beyond your website.",
      includes: [
        "Website strategy",
        "Custom design",
        "Responsive development",
        "SEO basics",
        "Contact form",
        "Launch support",
      ],
      addonCards: [
        {
          title: "Brand & Print",
          desc: "Brochures, portfolio PDFs, business cards and stationery, presentation templates, competition documents, signage, and printed marketing materials.",
          prices: ["Quoted based on scope"],
          cta: "Request a quote",
        },
        {
          title: "Digital Marketing",
          desc: "Social media design, Instagram templates, campaign visuals, newsletters, landing pages, digital ads, and content creation.",
          prices: ["Quoted based on scope"],
          cta: "Request a quote",
        },
        {
          title: "Website Care",
          desc: "Hosting, backups, security updates, small fixes, content edits, and project uploads.",
          prices: ["Hosting from 30€/month", "Content updates from 120€/month"],
        },
      ],
    },
    showcaseLabels: [
      "Mediterranean style",
      "Organic style",
      "Avantforme style",
      "Futuristic style",
      "Japan style",
      "Luxury style",
      "Modern eco style",
      "Parisian style",
      "Dark luxury style",
    ],
    diagnosisPoints: [
      {
        title: "Positioning",
        description:
          "Your studio’s value should be understood in seconds, not guessed after scrolling.",
      },
      {
        title: "Project presentation",
        description:
          "Case studies need clearer hierarchy so each project feels intentional and premium.",
      },
      {
        title: "Contact flow",
        description:
          "From first impression to enquiry, each step should reduce friction and build trust.",
      },
    ],
    diagnosisFloatCards: [
      {
        title: "Positioning",
        description: "Clarify what your studio is known for.",
      },
      {
        title: "Project presentation",
        description: "Improve hierarchy and reading rhythm.",
      },
      {
        title: "Contact flow",
        description: "Reduce friction from interest to enquiry.",
      },
    ],
    heroMockAlt: "Example architecture studio website redesign",
    moodImageAlt: "Visual mood for the website offering",
    diagnosisImageAlt: "Website review visual composition",
    beforeAfterBeforeAlt: "Architecture studio website before redesign",
    beforeAfterAfterAlt: "Architecture studio website after redesign",
  },
  seoPage: {
    introLead:
      "Architecture clients search by discipline, project type, service, location, and credibility. Your website has to answer those signals clearly.",
    introP1:
      "A strong architecture studio website does more than look refined. It gives every project a clear title, scope, service context, image structure, and path to the next relevant page.",
    introP2:
      "Search engines reward clarity. Visitors do too. The same structure that helps Google understand your work also helps clients compare your studio with confidence.",
    stats: [
      {
        stat: "Project intent",
        desc: "Clients often search around project types, services, materials, locations, and studio specialization.",
      },
      {
        stat: "Multilingual markets",
        desc: "Studios working internationally need language structure that is technically correct and written for people.",
      },
      {
        stat: "Low visibility",
        desc: "Many studios only rank for their own name — invisible to everyone who has not already heard of them.",
      },
    ],
    citiesHeading: "Search foundations for design studios",
    practiceHeading: "What search visibility work looks like in practice",
    practiceItems: [
      {
        title: "Service pages",
        desc: "Clear pages for architecture website design, interior design websites, landscape architecture websites, and website redesign work, written for humans first.",
      },
      {
        title: "Project pages as content",
        desc: "Each completed project is structured as indexable content with location, scope, materials, and photography — rankable assets, not just gallery entries.",
      },
      {
        title: "Technical SEO",
        desc: "Page speed, Core Web Vitals, clean URLs, canonical tags, structured data, and image optimization across the site.",
      },
      {
        title: "Hreflang for multilingual",
        desc: "Correct language and region targeting so English, Spanish, and French pages reach the right audience in search results.",
      },
      {
        title: "Google Business Profile",
        desc: "Full setup and optimization: category, description, services, photos, and consistent name, address, and phone data.",
      },
    ],
    ctaHeading: "Want your studio website to become clearer in search?",
    ctaSub: "Start with a clear website review.",
    ctaLabel: "Request a website review",
  },
  pricingPage: {
    faqHeading: "Questions.",
    faq: [
      {
        q: "Is hosting required?",
        a: "No. You can host the site yourself if you prefer.",
      },
      {
        q: "Are updates included?",
        a: "Small launch fixes are included. Ongoing updates are available for 120€/month.",
      },
      {
        q: "How long does it take?",
        a: "Most websites can be launched in 2 to 4 weeks depending on content and feedback.",
      },
      {
        q: "Do I own the website?",
        a: "Yes. The 1,500€ price gives you the full website design and build.",
      },
    ],
  },
  auditPage: {
    formHeading: "Not sure if your website is working hard enough?",
    formSub: "Send your current website. We’ll reply with the clearest issues and the best next step.",
    scrollCta: "Request a quick audit",
  },
} as const;

export default en;
