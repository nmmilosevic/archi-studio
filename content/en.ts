const en = {
  nav: {
    services: "Redesigns",
    pricing: "Pricing",
    method: "Method",
    work: "Work",
    audit: "Audit",
    seo: "SEO",
    contact: "Contact",
    cta: "Start my site",
  },
  hero: {
    label: "Website redesigns for architecture",
    headline: "Your studio already feels premium. Your website should too.",
    sub: "Refined redesigns for architecture and interior design studios in Marbella, Estepona, Sotogrande, Benahavís and Málaga.",
    ctaPrimary: "See redesign previews",
    ctaSecondary: "Request a review",
    proof: "Built for studios in Marbella, Estepona, Sotogrande, Benahavís and Málaga.",
  },
  problem: {
    heading: "Most studios lose trust before the first call.",
    body: "Architecture and interior design are visual businesses. When a website feels outdated, slow, generic, or hard to browse, the quality of the studio is judged before the visitor even sees the work properly.",
    cards: [
      { title: "Outdated first impression", desc: "Visitors judge the studio in under three seconds. A visual mismatch between real work and website erodes trust instantly." },
      { title: "Weak project storytelling", desc: "Projects deserve more than a gallery grid. Each piece of work should communicate scope, materials, challenge, and result." },
      { title: "Poor mobile experience", desc: "Most inquiries start on a phone. A studio website that collapses on mobile sends the wrong signal immediately." },
      { title: "No clear path to contact", desc: "If finding the contact form requires effort, most visitors leave. The path from interest to contact must be frictionless." },
      { title: "Bad local SEO", desc: "Studios in Marbella and Estepona are invisible to searches like 'architecture studio Marbella' or 'interior design Costa del Sol'." },
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
        title: "Local SEO foundation",
        desc: "Technical and content structure to help studios appear for searches around Marbella, Estepona, Sotogrande, Málaga and the Costa del Sol.",
        deliverables: ["SEO metadata", "Local landing pages", "Structured data", "Internal linking", "Image alt structure", "Performance optimization"],
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
        includes: ["Full website strategy", "Custom art direction", "Multilingual EN/ES/FR", "Portfolio CMS", "Local SEO landing pages", "Advanced animations", "Case study templates", "Conversion strategy", "Analytics", "Launch support", "3 revision rounds"],
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
        includes: ["Everything in Studio care", "Local SEO improvements", "One new SEO page or article per month", "Search Console review", "Conversion improvements", "Monthly recommendation report"],
      },
    ],
    addons: [
      { name: "Extra language", price: "From 250€" },
      { name: "Extra page", price: "From 180€" },
      { name: "Project page upload", price: "From 90€/project" },
      { name: "Google Business Profile", price: "From 190€" },
      { name: "SEO city page", price: "From 250€/page" },
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
      items: ["First impression and visual credibility", "Mobile experience and responsiveness", "Portfolio clarity and project storytelling", "SEO basics and local search visibility", "Enquiry flow and conversion path", "Typography, spacing, and image quality", "Page speed basics", "Multilingual readiness"],
    },
    receive: {
      heading: "What you receive",
      items: ["Written audit PDF or document", "5 to 10 priority recommendations", "Visual direction notes", "Optional redesign preview screenshot", "Clear next step proposal"],
    },
    who: {
      heading: "Who this is for",
      items: ["Architecture studios on the Costa del Sol", "Interior design studios in Marbella or Estepona", "Studios preparing a relaunch", "Studios with outdated websites losing trust", "Studios targeting international clients"],
    },
    issues: {
      heading: "Common issues I find",
      items: ["Homepage with no clear hierarchy", "Gallery with no project context", "No mobile-optimized layout", "Zero local SEO structure", "Generic or outdated typography", "Missing contact path or buried form", "No multilingual version for international clients"],
    },
    form: {
      name: "Your name",
      studio: "Studio name",
      url: "Current website URL",
      email: "Email address",
      city: "City",
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
    label: "Local SEO for studios",
    heading: "Your studio deserves to be found on the Costa del Sol.",
    sub: "Architecture and interior design are highly local businesses. International clients search with location intent. Local SEO makes the difference between being found and being invisible.",
    cities: [
      { name: "Marbella", desc: "One of the most competitive luxury markets in Spain. Studios here need strong local authority, Google Business optimization, and multilingual content to capture international villa buyers." },
      { name: "Estepona", desc: "A growing market for both renovation and new build architecture. Studios in Estepona benefit from targeted content around the local property boom." },
      { name: "Benahavís", desc: "Home to some of the most exclusive villa developments in Europe. Architecture studios here need websites that match the premium standard of the market." },
      { name: "Sotogrande", desc: "High-end residential and equestrian market with strong international buyer base. Local search visibility for English and French speakers is critical." },
      { name: "Málaga", desc: "The regional hub with growing demand for interior design and architecture services. Proximity to the airport makes it a key entry point for international projects." },
      { name: "Mijas", desc: "Popular among Nordic and British buyers. Studios serving Mijas should optimize for multilingual search and Google Maps visibility." },
      { name: "Fuengirola", desc: "Dense residential market with active property renovation sector. Cost-effective SEO opportunity for smaller studios." },
      { name: "Casares", desc: "Boutique rural market with prestige villa projects. Niche positioning and local SEO can create strong organic authority." },
    ],
    sections: [
      { title: "Why local SEO matters for architecture studios", body: "Searches like 'architecture studio Marbella' or 'interior design website Estepona' have high buying intent. These searches come from property developers, villa owners, and international buyers who are ready to hire. Without local SEO structure, your studio is invisible to exactly the clients you want." },
      { title: "Project pages as SEO assets", body: "Each completed project is a piece of indexable content. A well-structured project page with location, scope, materials, and photography can rank for long-tail searches and drive discovery from property buyers and investors." },
      { title: "Multilingual SEO", body: "British, German, French, and Scandinavian buyers are active in the Costa del Sol market. A multilingual website with proper hreflang structure gives your studio visibility across language groups that your competitors probably miss." },
      { title: "Google Business Profile", body: "A fully optimized Google Business Profile positions your studio on Google Maps and in local search results. This is often the first touchpoint for local discovery and requires consistent name, address, and category data." },
      { title: "Technical SEO", body: "Site speed, Core Web Vitals, clean URL structure, structured data, and internal linking all affect how Google sees and ranks your site. We handle the technical foundation so your content can do its job." },
    ],
  },
  contact: {
    label: "Web redesign review",
    heading: "Send the current website.",
    sub: "If there is a clear first-impression gap, the next step can be a private redesign preview. No long proposal. No abstract pitch.",
    locations: "Serving studios in Marbella, Estepona, Benahavís, Sotogrande, Málaga, Mijas, Fuengirola, Casares, San Pedro and Nueva Andalucía.",
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
      city: "City",
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
    { q: "Do you work with studios outside the Costa del Sol?", a: "Our focus is the Costa del Sol, but we welcome enquiries from studios elsewhere in Spain or international studios serving Spanish clients." },
    { q: "How long does a website redesign take?", a: "A Studio refresh takes 1 to 2 weeks. A Signature site takes 3 to 5 weeks. An Editorial studio project takes 6 to 10 weeks depending on scope and content availability." },
    { q: "Do I need to provide the copy?", a: "We can work with your existing copy or refine it. Full copywriting from scratch is available as an add-on." },
    { q: "What if I do not have professional photography?", a: "We design with the photos you have and advise on the kind of imagery that would strengthen the studio. Professional photography is not required for launch." },
    { q: "Is the Vercel preview redesign free?", a: "The redesign previews I create as part of my cold outreach process are internal. If you received a preview link and want to discuss turning it into your real site, the conversation starts there." },
    { q: "Can you manage the website ongoing?", a: "Yes. Hosting care, Studio care, and Growth care plans offer ongoing support from 49€/month." },
    { q: "Do you offer multilingual websites?", a: "Yes. We build sites in English, Spanish, and French. Additional languages are available as an option." },
  ],
  footer: {
    tagline: "Web design agency specializing in architecture and interior design studios on the Costa del Sol.",
    locations: "Marbella · Estepona · Benahavís · Sotogrande · Málaga · Mijas · Fuengirola · Casares · San Pedro · Nueva Andalucía",
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
        "Starting prices for architecture and interior studio websites: audit preview, studio refresh, signature site, and editorial builds — plus optional monthly care from 49€.",
    },
    audit: {
      title: "Free website review for architecture & interior studios",
      description:
        "Send your current site for a focused review of first impression, mobile UX, portfolio clarity, SEO basics, and contact flow — with clear next steps.",
    },
    seoCostaDelSol: {
      title: "Local SEO for architecture & interior studios — Costa del Sol",
      description:
        "How studios get found by high-intent clients across Marbella, Estepona, Benahavís, Sotogrande, and Málaga: local pages, Google Business Profile, technical SEO, and multilingual structure.",
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
      "Strategy, custom design, and development. One figure. One timeline. What you need to launch a site that reflects the quality of your work.",
    offerPaymentLabel: "One-time payment",
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
      "Architecture clients search with location intent. If your studio is not in those results, it does not exist for them.",
    introP1:
      "A British buyer researching architects for their villa renovation types “architecture studio Marbella”. A French couple relocating to Sotogrande searches “interior designer Sotogrande”. A Norwegian investor looking for project management types “villa renovation Estepona”.",
    introP2:
      "These searches happen every day. The studios that appear are not necessarily the best — they are the ones Google has learned to trust for that location and service.",
    stats: [
      {
        stat: "Local search",
        desc: "Accounts for a large share of Google searches — and many of these carry high commercial intent.",
      },
      {
        stat: "Multilingual buyers",
        desc: "British, German, French, and Scandinavian buyers are central to villa and interior design demand on the Costa del Sol.",
      },
      {
        stat: "Low visibility",
        desc: "Many studios only rank for their own name — invisible to everyone who has not already heard of them.",
      },
    ],
    citiesHeading: "Architecture studios across the Costa del Sol",
    practiceHeading: "What local SEO work looks like in practice",
    practiceItems: [
      {
        title: "Local landing pages",
        desc: "A dedicated page for each city you serve: Marbella, Estepona, Benahavís, Sotogrande. Each page targets the searches happening in that market.",
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
    ctaHeading: "Want your studio to appear in these searches?",
    ctaSub: "Start with a clear website review.",
    ctaLabel: "Request a website review",
  },
  pricingPage: {
    faqHeading: "Questions.",
    faq: [
      {
        q: "Is hosting required?",
        a: "No. You can host elsewhere. Our Hosting care plans on Vercel start at 49€/month if you want us to manage it.",
      },
      {
        q: "Are updates included after launch?",
        a: "Launch fixes are included in the agreed scope. Ongoing content and SEO work is available through Studio care and Growth care.",
      },
      {
        q: "How long does a redesign take?",
        a: "A studio refresh typically takes 1–2 weeks. A signature site takes 3–5 weeks. An editorial studio build takes 6–10 weeks, depending on scope and content readiness.",
      },
      {
        q: "Do I own the website?",
        a: "Yes. After payment for the agreed scope, the site and content we deliver for you are yours.",
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
