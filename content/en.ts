const en = {
  nav: {
    services: "Redesigns",
    pricing: "Pricing",
    method: "Method",
    work: "Work",
    audit: "Audit",
    seo: "SEO",
    contact: "Contact",
    cta: "Start your website",
  },
  hero: {
    label: "Architecture website redesigns",
    headline: "We design websites for architecture and interior design studios.",
    sub: "Clear project presentation, better mobile experience, and a website that helps clients trust your studio.",
    ctaPrimary: "See redesign previews",
    ctaSecondary: "Request a redesign review",
    proof: "Built for studios in Marbella, Estepona, Sotogrande, Benahavís and Málaga.",
  },
  problem: {
    heading: "Most studios lose trust before the first call.",
    body: "Architecture and interior design are visual businesses. When a website feels outdated, slow, generic, or hard to browse, the quality of the studio is judged before the visitor even sees the work properly.",
    cards: [
      { title: "Outdated first impression", desc: "Visitors judge the studio in under three seconds. A visual mismatch between real work and website erodes trust instantly." },
      { title: "Weak project storytelling", desc: "Projects deserve more than a gallery grid. Each piece of work should communicate scope, materials, challenge, and result." },
      { title: "Poor mobile experience", desc: "Most inquiries start on a phone. A studio website that collapses on mobile sends the wrong signal immediately." },
      { title: "No clear enquiry path", desc: "If finding the contact form requires effort, most visitors leave. The path from interest to contact must be frictionless." },
      { title: "Bad local SEO", desc: "Studios in Marbella and Estepona are invisible to searches like 'architecture studio Marbella' or 'interior design Costa del Sol'." },
      { title: "Low trust for international clients", desc: "Multilingual presence, refined design, and professional copy reassure international buyers looking for a studio they can rely on." },
    ],
  },
  beforeAfter: {
    label: "The cold redesign offer",
    heading: "I do not start with a pitch. I start with proof.",
    body: "I redesign a key part of your website first, deploy it as a private Vercel preview, and send you the live link. If it feels right, the preview becomes the foundation for the real website.",
    cta: "Show me what my site could look like",
    before: "Before - generic, slow, hard to trust",
    after: "After - refined, editorial, conversion-clear",
  },
  services: {
    label: "Redesign scope",
    heading: "The website is treated as a portfolio environment, not a list of services.",
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
        desc: "A restrained refinement of typography, color, layout, tone, and digital consistency when the existing identity needs more discipline online.",
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
      { number: "04", title: "Launch", desc: "The site is deployed, tested, connected, and ready for your studio to use with confidence." },
      { number: "05", title: "Final polish", desc: "Domain, performance, mobile behaviour, metadata, and preview details are refined before the site goes live." },
      { number: "06", title: "Maintain", desc: "Optional hosting, updates, portfolio publishing, SEO improvements, and monthly care." },
    ],
  },
  pricing: {
    label: "Pricing",
    heading: "Transparent pricing. No guesswork.",
    sub: "Starting prices. Final quote depends on number of pages, languages, CMS scope, and content readiness.",
    vatNote: "Prices shown excluding IVA when applicable.",
    paymentNote: "50% upfront, 50% before launch for projects above €790. Monthly plans billed monthly.",
    cta: "Request a quote",
    oneTime: [
      {
        name: "Audit Preview",
        price: "€190",
        desc: "Entry product for cold leads who want a professional assessment before committing.",
        includes: ["Website audit", "Homepage UX review", "Mobile review", "Visual direction notes", "SEO quick scan", "5 priority recommendations", "Optional redesign preview screenshot"],
        notIncluded: ["Full website build", "Copywriting", "Implementation"],
        cta: "Get an audit",
        featured: false,
      },
      {
        name: "Studio Refresh",
        price: "From €790",
        desc: "Affordable entry upgrade for studios with an outdated site that need a cleaner presence fast.",
        includes: ["1 to 3 pages", "Refined visual direction", "Responsive design", "Basic copy structure", "Contact CTA", "Performance optimization", "Vercel deployment", "Basic SEO setup", "1 language"],
        notIncluded: [] as string[],
        cta: "Request a quote",
        featured: false,
      },
      {
        name: "Signature Website",
        price: "From €1,900",
        desc: "Main offer for established studios that need a serious digital presence.",
        includes: ["5 to 7 pages", "Custom design system", "Multilingual optional", "Project portfolio structure", "Service pages", "About page", "Contact page", "Technical SEO", "Analytics setup", "Vercel deployment", "2 revision rounds"],
        notIncluded: [] as string[],
        cta: "Request a quote",
        featured: true,
      },
      {
        name: "Editorial Studio",
        price: "From €3,500",
        desc: "Premium offer for studios selling villas, renovations, interiors, and international projects.",
        includes: ["Full website strategy", "Custom art direction", "Multilingual EN/ES/FR", "Portfolio CMS", "Local SEO landing pages", "Advanced animations", "Case study templates", "Conversion strategy", "Analytics", "Launch support", "3 revision rounds"],
        notIncluded: [] as string[],
        cta: "Request a quote",
        featured: false,
      },
    ],
    recurring: [
      {
        name: "Hosting Care",
        price: "€49/month",
        desc: "Basic hosting and technical peace of mind.",
        includes: ["Vercel hosting management", "Technical checks", "Uptime monitoring", "Small monthly update", "Monthly backup check"],
      },
      {
        name: "Studio Care",
        price: "€149/month",
        desc: "Hosting plus regular content support.",
        includes: ["Everything in Hosting Care", "2 content edits per month", "Portfolio upload support", "Analytics review", "SEO checks"],
      },
      {
        name: "Growth Care",
        price: "€390/month",
        desc: "Full ongoing support with active SEO growth.",
        includes: ["Everything in Studio Care", "Local SEO improvements", "One new SEO page or article per month", "Search Console review", "Conversion improvements", "Monthly recommendation report"],
      },
    ],
    addons: [
      { name: "Extra language", price: "From €250" },
      { name: "Extra page", price: "From €180" },
      { name: "Project page upload", price: "From €90/project" },
      { name: "Google Business Profile", price: "From €190" },
      { name: "SEO city page", price: "From €250/page" },
      { name: "Copywriting refinement", price: "From €350" },
    ],
  },
  work: {
    label: "Website redesign studies",
    heading: "Architecture work, reframed for the screen.",
    disclaimer: "Website redesign studies showing how architecture and interior design studios can present their work with more clarity, confidence, and visual authority.",
    caseStudy: {
      keyScreens: "Selected views.",
      whatChangedHeading: "What changed",
      whatChangedThemes: [
        "Portfolio structure",
        "Mobile readability",
        "Studio positioning",
        "Inquiry flow",
      ] as const,
    },
    items: [
      {
        slug: "villa-architecture-studio",
        title: "Architecture Website",
        location: "Benahavís, Costa del Sol",
        cardSummary: "A calm premium architecture website for high-end residential projects in Benahavís.",
        summary:
          "A refined digital presence for a residential architecture studio, designed to make complex projects feel calm, credible, and easy to explore.",
        challenge:
          "The old website made the studio's work difficult to understand, especially on mobile. Projects lacked hierarchy, images felt disconnected, and the contact flow was not clear enough.",
        heroDesktop: "/images/project01/p01-project.png",
        whatChanged: [
          {
            title: "Project clarity",
            body: "Before, the studio's work felt visually strong but difficult to scan. The redesign gives each project a clearer structure, from first impression to detailed case study.",
          },
          {
            title: "Premium restraint",
            body: "The interface avoids loud effects and lets the architecture carry the value. Typography, spacing, and motion stay calm and controlled.",
          },
          {
            title: "Mobile confidence",
            body: "The mobile version was treated as a real client experience, not a compressed desktop layout.",
          },
          {
            title: "Easier enquiry path",
            body: "The contact route was simplified so interested clients can move from inspiration to enquiry without friction.",
          },
        ] as const,
        screens: [
          { label: "Main project page", image: "/images/project01/p01-hero.png" },
          { label: "Responsive studio experience", image: "/images/project01/p01-mobileview.png" },
        ],
      },
      {
        slug: "casa-noma-marbella",
        title: "Interior Website",
        location: "Marbella, Costa del Sol",
        cardSummary:
          "A warm interior website for a Marbella studio focused on atmosphere, materials, and lifestyle.",
        summary:
          "A softer digital experience for an interior design studio, built around atmosphere, material detail, and a slower way to discover each space.",
        challenge:
          "The studio had beautiful interior projects, but the website felt too generic. It did not communicate warmth, trust, or the quality of the spaces.",
        heroDesktop: "/images/project02/p02-hero.png",
        whatChanged: [
          {
            title: "Atmosphere-led structure",
            body: "The portfolio was redesigned to feel less like a gallery and more like a guided visit through each interior.",
          },
          {
            title: "Material rhythm",
            body: "Soft spacing, warm tones, and editorial pacing help the website reflect the studio's interior language.",
          },
          {
            title: "Calm mobile reading",
            body: "Layouts were simplified so images, text, and project details still feel spacious on smaller screens.",
          },
          {
            title: "Softer enquiry moment",
            body: "The enquiry path feels more discreet and natural, matching the quiet tone of the studio.",
          },
        ] as const,
        screens: [
          { label: "Interior project story", image: "/images/project02/p02-project.png" },
          { label: "Mobile interior experience", image: "/images/project02/p02-mobileview.png" },
        ],
      },
      {
        slug: "forma-sur-malaga",
        title: "Architecture Website",
        location: "Málaga, Costa del Sol",
        cardSummary:
          "A bold architecture website for a Málaga studio with a sharper, more graphic identity.",
        summary:
          "A darker, more architectural web presence for a studio with strong forms, sharp contrast, and a clear point of view.",
        challenge:
          "The studio's work had strong architectural character, but the website felt flat and forgettable. The digital identity did not match the boldness of their projects.",
        heroDesktop: "/images/project03/p03-hero.png",
        whatChanged: [
          {
            title: "Stronger visual identity",
            body: "The redesign gives the studio a more memorable digital voice, with bolder contrast and a clearer graphic system.",
          },
          {
            title: "Archive logic",
            body: "Projects are organised like a curated archive, making the studio's body of work feel intentional and easy to navigate.",
          },
          {
            title: "Compact mobile system",
            body: "The mobile layout keeps the same intensity as desktop while staying readable and fast to browse.",
          },
          {
            title: "Controlled contact flow",
            body: "Enquiry moments are present but restrained, so the commercial path does not weaken the editorial tone.",
          },
        ] as const,
        screens: [
          { label: "Project archive", image: "/images/project03/p03-project.png" },
          { label: "Mobile architecture experience", image: "/images/project03/p03-mobileview.png" },
        ],
      },
      {
        slug: "terral-studio-estepona",
        title: "Landscape Website",
        location: "Estepona, Costa del Sol",
        cardSummary:
          "A Mediterranean landscape design website for an Estepona studio focused on gardens, outdoor living, and place.",
        summary:
          "A natural, image-led website for a landscape studio, designed to show outdoor projects through light, texture, and a strong sense of place.",
        challenge:
          "The studio's outdoor projects were visual and emotional, but the website felt static. It did not show the lifestyle value of terraces, gardens, and outdoor spaces.",
        heroDesktop: "/images/project04/p04-hero.png",
        whatChanged: [
          {
            title: "Sense of place",
            body: "The redesign frames each garden as part of the Mediterranean landscape, not just a collection of finished images.",
          },
          {
            title: "Outdoor portfolio flow",
            body: "Projects now unfold through terraces, planting, materials, and views, helping clients understand the full outdoor experience.",
          },
          {
            title: "Natural mobile rhythm",
            body: "The mobile experience keeps the calm pace of the site, with large imagery and simple reading moments.",
          },
          {
            title: "Gentle enquiry path",
            body: "The contact flow stays quiet and natural, appearing only when the visitor has enough context to act.",
          },
        ] as const,
        screens: [
          { label: "Outdoor project story", image: "/images/project04/p04-project.png" },
          { label: "Mobile garden experience", image: "/images/project04/p04-mobileview.png" },
        ],
      },
    ],
  },
  audit: {
    label: "Free audit offer",
    heading: "Want to see what your studio website could become?",
    sub: "Send your current website. I will review the first impression, mobile experience, portfolio clarity, SEO basics, and enquiry flow - and send you a clear set of recommendations.",
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
      { title: "Technical SEO", body: "Site speed, Core Web Vitals, clean URL structure, structured data, and internal linking all affect how Google reads a studio website. The technical foundation should support the portfolio rather than compete with it." },
    ],
  },
  contact: {
    label: "Website redesign review",
    heading: "Send the current website.",
    sub: "If there is a clear first-impression gap, the next step can be a private redesign preview. No long proposal. No abstract pitch.",
    locations: "Serving studios across Marbella, Estepona, Benahavís, Sotogrande, Málaga, Mijas, Fuengirola, Casares, San Pedro, and Nueva Andalucía.",
    response: "Typical response within 24 hours.",
    steps: [
      "I review the current website - first impression, portfolio clarity, mobile experience, and enquiry path.",
      "I identify the clearest perception gap between the studio's work and its digital presence.",
      "If there is a strong opportunity, I reply within 24 hours with a clear next step.",
      "For selected studios, that next step can be a private redesign preview - deployed and ready to judge.",
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
        "Real estate / development",
        "Other",
      ],
      budget: "Budget range",
      budgetOptions: [
        "Not sure yet",
        "Under €1,000",
        "Around €1,990 fixed redesign",
        "€2,000 to €4,000",
        "Monthly care only",
      ],
      message: "What feels wrong with the current website?",
      messagePlaceholder: "What feels outdated, unclear, or difficult to use?",
      cta: "Send your website",
      microcopy: "No commitment. If there is no clear opportunity, I will say it directly.",
      success: "Received. I will review the site and reply within 24 hours.",
    },
  },
  faq: [
    { q: "Do you work with studios outside the Costa del Sol?", a: "The focus is the Costa del Sol, but studios elsewhere in Spain can still request a review when the positioning fits." },
    { q: "How long does a website redesign take?", a: "The fixed redesign usually takes 2 to 4 weeks depending on content readiness, portfolio size, and feedback speed." },
    { q: "Do I need to provide the copy?", a: "Existing copy can be refined and tightened. Full copywriting from scratch can be added when needed." },
    { q: "What if I do not have professional photography?", a: "The redesign works with the strongest imagery available and identifies where better photography would change the perception of the studio." },
    { q: "Is the Vercel preview redesign free?", a: "The cold outreach redesign previews I create as part of my process are internal. If you received a preview link and want to discuss turning it into your real website, the conversation starts there." },
    { q: "Can you manage the website ongoing?", a: "Yes. Website Care keeps the site maintained after launch for €149/month." },
    { q: "Do you offer multilingual websites?", a: "Yes. English, Spanish, and French foundations are supported, with additional languages handled as agreed additions." },
  ],
  footer: {
    tagline: "A web design studio for architecture and interior design firms.",
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
      audit: "Free Audit",
      seo: "SEO",
      contact: "Contact",
    },
  },
} as const;

export default en;
