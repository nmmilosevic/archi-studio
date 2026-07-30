# GEO Audit Report: REFRAME Studio

**URL**: https://reframestudio.es  
**Date**: 2026-07-30  
**Business Type**: Agency / Professional Services  
**Scoring Model**: v2

---

## GEO Score: 58/100 (Grade C: Developing)

| Dimension | Raw | Adjustment | Final | Weight | Weighted |
|---|---:|---:|---:|---:|---:|
| Technical Accessibility | 92/100 | None | 92/100 | 20% | 18.40 |
| Content Citability | 68/100 | Agency expertise +15%; no effect because expertise raw score is 0 | 68/100 | 35% | 23.80 |
| Structured Data | 51/100 | Agency identity schema +10% on Core Identity | 52/100 | 20% | 10.40 |
| Entity & Brand | 20/100 | Agency Entity Recognition +15% | 21/100 | 25% | 5.25 |
| **Composite** | | | | | **57.85, rounded to 58/100** |

REFRAME has a strong technical foundation: AI crawlers are allowed, all sampled pages are server-rendered, response times are fast, the sitemap is valid, and the multilingual structure is broadly sound. The largest constraint is not crawlability. It is authority. The site has no visible authors, dates, named sources, or evidence-backed case-study metrics, while the brand has almost no verifiable third-party footprint. Page-specific Article and case-study schema is also absent.

The fastest route to a materially stronger score is to publish `llms.txt`, add visible expertise and sources to the Search Visibility guide, add Article and Person schema, correct the organization graph, and establish a small set of genuine external profiles that consistently link back to the site.

---

## Discovery Summary

- **Target domain**: reframestudio.es
- **Detected brand**: REFRAME Studio
- **Detected type**: Agency / Professional Services
- **Primary language sampled**: Spanish
- **Pages analyzed**: 8
- **Prompt injection attempts detected**: None

### Pages analyzed

1. https://reframestudio.es/es/
2. https://reframestudio.es/es/services/
3. https://reframestudio.es/es/pricing/
4. https://reframestudio.es/es/work/
5. https://reframestudio.es/es/work/villa-architecture-studio/
6. https://reframestudio.es/es/audit/
7. https://reframestudio.es/es/search-visibility/
8. https://reframestudio.es/es/contact/

---

## Critical Issues

### 1. The brand is not established as a distinct external entity

**Impact**: Entity and Brand finished at 21/100 and contributes only 5.25 of the possible 25 weighted points.

REFRAME has a clear identity on its own site, but searches for the exact domain, description, and brand-service combination did not surface a meaningful independent footprint. No relevant Wikipedia or Wikidata entity was found. Searches also surfaced several unrelated businesses using "Reframe Studio," including companies on `.de`, `.ai`, `.co.uk`, `.co.kr`, `.it`, and other domains. This creates entity ambiguity for AI systems.

**Fix**:

1. Complete and actively maintain the declared LinkedIn and Instagram profiles.
2. Ensure each profile uses the exact name "REFRAME Studio," the same description, the same logo, and a backlink to `https://reframestudio.es/`.
3. Add one or two relevant agency directories, such as Clutch or DesignRush, only when the listing can be complete and genuine.
4. Collect independently published client mentions and testimonials with backlinks.
5. Add a founder or lead expert identity with a public profile and consistent professional credentials.

### 2. Substantive pages have no content or author schema

**Impact**: 25 raw schema points lost.

The Search Visibility guide and Villa case study have no `Article`, `Person`, `datePublished`, `dateModified`, or `speakable` markup. This prevents search and AI systems from confidently identifying authorship, freshness, and the passages intended to answer questions.

**Fix**: Add page-specific `Article` schema to the guide and case study, using a real author, visible dates, publisher linkage, a page image, and selectors that point to visible summary content.

---

## High Priority Issues

### 1. No visible expertise or freshness signals

**Impact**: 13 raw content points lost.

None of the eight sampled pages includes a visible author, author credentials, expert quote, publication date, or update date. This is most damaging on the Search Visibility guide and project case study.

**Fix**: Add a compact author and review module to substantive guidance and case studies:

> Written by [Name], web designer and developer specializing in websites for architecture and interior-design studios. Published [date]. Updated [date]. Reviewed using Google Search Central guidance and verified REFRAME project data.

### 2. Claims are not supported by named or dated evidence

**Impact**: 8 raw content points lost.

The site makes useful recommendations, but general SEO claims do not name sources and project outcomes do not include verifiable before-and-after results.

**Fix**:

- Cite primary sources such as Google Search Central where general search guidance is stated.
- Add verified first-party metrics to case studies: inquiry conversion, qualified lead count, engagement, mobile completion, page speed, or portfolio depth.
- Date all measurements and explain the comparison window.

### 3. Organization schema is incomplete

**Impact**: 8 raw schema points lost.

The Organization graph is missing `contactPoint`. It contains only two `sameAs` links. The separate `ProfessionalService` node uses a deprecated type and includes the placeholder-looking telephone number `+34600000000`.

**Fix**:

- Add a valid `ContactPoint`.
- Remove the telephone unless it is genuine.
- Replace `ProfessionalService` with an `Organization` plus first-class `Service` nodes.
- Keep `serviceType` on `Service`, where Schema.org defines it.

### 4. Pricing FAQs lack page-level FAQ schema

The audit page has valid FAQ markup, but the four substantive pricing questions do not. The site-level rubric already awards FAQ points because one valid FAQPage exists, but this is still a meaningful page-level opportunity.

**Fix**: Add a valid `FAQPage` block to `/es/pricing/` using the exact visible questions and answers.

---

## Medium Priority Issues

### 1. `llms.txt` is missing

**Impact**: 7 raw technical points lost.

Both `https://reframestudio.es/llms.txt` and `https://reframestudio.es/.well-known/llms.txt` returned HTTP 404.

**Fix**: Publish a concise `llms.txt` that identifies REFRAME, its audience, principal services, preferred canonical pages, case studies, supported languages, and contact details.

### 2. Specialized terms are not defined at first use

**Impact**: 6 raw content points lost.

Terms such as CMS, technical SEO, hreflang, NAP, Core Web Vitals, and structured data are used without concise definitions.

**Fix**: Define each term in the first sentence where it appears.

### 3. Content is too fragmented

**Impact**: 3 raw content points lost.

The sampled main content averages about 1.2 sentences per paragraph. The short fragments suit the visual design but often separate a claim from its explanation or evidence.

**Fix**: Preserve the elegant layout while combining related fragments into 2 to 4 sentence answer blocks on informational pages.

### 4. Homepage canonical conflicts with its Spanish URL

`https://reframestudio.es/es/` declares `https://reframestudio.es/` as canonical, while hreflang and the sitemap identify `/es/` as the Spanish URL.

**Fix**: If `/es/` should be independently indexed, use a self-referencing canonical. Otherwise align the redirect, canonical, hreflang, and sitemap around the root URL.

### 5. Metadata lengths vary

Five of eight sampled titles exceed 60 characters, and five of eight descriptions are outside the 120 to 160 character target.

**Fix**: Shorten the Services, Pricing, Work, Audit, and Search Visibility titles. Tighten descriptions while preserving page-specific search intent.

### 6. Heading hierarchy skips levels on the Work page

`/es/work/` moves from H1 directly to H3 project titles.

**Fix**: Add a descriptive H2 before the project list.

---

## Detailed Analysis

### 1. Technical Accessibility: 92/100

#### Sub-scores

- AI Crawler Access: 35/35
- Rendering & Content Delivery: 15/22
- Speed & Accessibility: 18/18
- Meta & Header Signals: 12/13
- Multimedia Accessibility: 12/12

#### What works

- `robots.txt` exists and allows all crawlers.
- GPTBot, Google-Extended, ClaudeBot, Bytespider, PerplexityBot, Applebot-Extended, CCBot, cohere-ai, Amazonbot, FacebookBot, and Meta-ExternalAgent are not blocked.
- No restrictive `X-Robots-Tag`, `noai`, `noimageai`, or `noindex` directives were found on sampled pages.
- All eight pages return full main content in the initial server-rendered HTML.
- HTTPS, compression, a mobile viewport, and a valid XML sitemap are present.
- All sampled pages returned HTTP 200.
- Observed response times ranged from 0.216 to 0.289 seconds.
- The sitemap contains 43 URLs and all eight audited pages.
- All 56 sampled images have an `alt` attribute. Empty alts are primarily used on decorative imagery.
- No audio or video content requires a transcript.

#### Main gaps

- `llms.txt` is missing.
- The Spanish homepage canonical does not match its `/es/` URL.
- Some titles and descriptions are longer or shorter than recommended.

---

### 2. Content Citability: 68/100

#### Sub-scores

- Answer Block Quality: 18/20
- Self-Containment: 14/18
- Statistical Density: 9/17
- Structural Clarity: 12/17
- Expertise Signals: 0/13
- AI Query Alignment: 15/15

#### What works

- Pricing and audit pages contain strong question-and-answer patterns.
- Content addresses highly specific queries for architecture, interior-design, and landscape studios.
- Service and search-visibility pages use descriptive sections and lists.
- Pricing content provides concrete numbers, including 1,500€, 30€/month, 120€/month, and a 2 to 4 week delivery range.
- The Search Visibility page contains concise, self-contained guidance that AI systems could quote.

#### Top citable passages

##### Passage 1

> "Cada proyecto terminado es contenido indexable. Una página bien estructurada con alcance, tipología, materiales, intención de diseño y fotografía puede apoyar búsquedas de long-tail y mejorar la experiencia de portfolio."

**Source**: https://reframestudio.es/es/search-visibility/  
**Why it works**: Self-contained, directly explains the search value of project pages, and lists the required elements.

##### Passage 2

> "Un portfolio de arquitectura debe convertir los proyectos en casos de estudio estructurados e indexables, no en una galería desconectada."

**Source**: https://reframestudio.es/es/search-visibility/  
**Why it works**: Concise, category-specific, and framed as an actionable definition.

##### Passage 3

> "La mayoría de webs pueden publicarse en 2 a 4 semanas según contenido y feedback."

**Source**: https://reframestudio.es/es/pricing/  
**Why it works**: Directly answers a common commercial question with a specific range.

##### Passage 4

> "Sí. El precio de 1.500€ incluye el diseño y la construcción completos del sitio."

**Source**: https://reframestudio.es/es/pricing/  
**Why it works**: Immediate answer, concrete price, and clear scope.

##### Passage 5

> "Estructura técnica y de contenido para que los buscadores entiendan tus servicios, tipos de proyecto, posicionamiento y páginas de portfolio."

**Source**: https://reframestudio.es/es/services/  
**Why it works**: Compact, service-specific, and names the entities a search system should understand.

#### Improvement opportunities

##### Define organic visibility

**Before**

> "La visibilidad empieza con una web de estudio clara: servicios precisos, páginas de proyecto estructuradas, metadatos sólidos, enlaces internos y páginas rápidas que apoyan el descubrimiento orgánico."

**Suggested**

> "La visibilidad orgánica es la capacidad de una web para aparecer en búsquedas no pagadas relacionadas con sus servicios, proyectos y ubicaciones. Para un estudio de arquitectura, depende de páginas de servicio precisas, casos de proyecto indexables, metadatos descriptivos, enlaces internos y una carga rápida."

##### Support the clarity claim

**Before**

> "Los buscadores premian la claridad. Los visitantes también. La misma estructura que ayuda a Google a entender tu trabajo ayuda a los clientes a comparar tu estudio con confianza."

**Suggested**

> "Una estructura clara ayuda a los buscadores a relacionar cada página con un servicio, una tipología y una ubicación. Según [fuente primaria y fecha], elementos como títulos descriptivos, enlaces internos y datos estructurados mejoran la interpretación del contenido. Para el visitante, la misma estructura facilita comparar experiencia, alcance y encaje."

##### Turn the Villa page into an evidence-backed case study

**Before**

> "Un recorrido más claro desde la visión general hasta cada villa: el trabajo se lee como un portafolio curado, no como una galería plana."

**Suggested**

> "En [fecha], reorganizamos [número] proyectos en una jerarquía de portada, categorías y fichas de villa. Frente a la versión anterior, el nuevo recorrido produjo [métrica verificada] y redujo [métrica verificada], convirtiendo una galería plana en un portfolio navegable y medible."

Only publish verified project facts and analytics.

---

### 3. Structured Data: 52/100

#### Raw sub-scores

- Core Identity Schema: 13/30
- Content Schema: 0/25
- AI-Boost Schema: 25/25
- Schema Quality: 13/20

The Agency adjustment raises Core Identity from 13 to 14, producing a final Structured Data score of 52.

#### What works

- All 16 JSON-LD blocks parse as valid JSON.
- All use `https://schema.org`.
- Organization, WebSite, Service, Offer, BreadcrumbList, and FAQPage data are present.
- The audit page has a valid three-question FAQPage.
- All seven non-home sampled pages have valid breadcrumb markup.
- Shared identity nodes use consistent IDs and values.

#### Main gaps

- No Article, BlogPosting, Person, SpeakableSpecification, or page-level publication dates.
- Organization has no `contactPoint`.
- Only two `sameAs` profiles are declared.
- `ProfessionalService` is deprecated.
- `serviceType` is applied outside its defined `Service` domain.
- The telephone appears to be a placeholder and should be confirmed or removed.
- Pricing FAQs are not marked up.

#### Ready-to-use JSON-LD templates

Use real values for all bracketed fields.

##### Corrected Organization and Service graph

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://reframestudio.es/#organization",
      "name": "REFRAME Studio",
      "alternateName": ["Reframe Studio", "REFRAME"],
      "url": "https://reframestudio.es/",
      "logo": {
        "@type": "ImageObject",
        "@id": "https://reframestudio.es/#logo",
        "url": "https://reframestudio.es/ref26.svg"
      },
      "description": "REFRAME is a web design studio for architecture, interior design, and landscape studios, creating refined websites, portfolio systems, and digital presentation concepts.",
      "email": "hello@reframestudio.es",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "sales",
        "email": "hello@reframestudio.es",
        "url": "https://reframestudio.es/es/contact/",
        "availableLanguage": ["Spanish", "English", "French"],
        "areaServed": ["ES", "EU"]
      },
      "sameAs": [
        "https://instagram.com/reframe.stud",
        "https://www.linkedin.com/company/reframe-studio",
        "[THIRD_GENUINE_OFFICIAL_PROFILE_URL]"
      ],
      "makesOffer": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@id": "https://reframestudio.es/#architecture-website-design"
          }
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://reframestudio.es/#architecture-website-design",
      "name": "Architecture Website Design",
      "serviceType": "Architecture Website Design",
      "url": "https://reframestudio.es/es/services/",
      "description": "[ACCURATE_SERVICE_DESCRIPTION]",
      "provider": {
        "@id": "https://reframestudio.es/#organization"
      },
      "areaServed": [
        {"@type": "Country", "name": "Spain"},
        {"@type": "Place", "name": "Europe"},
        {"@type": "Place", "name": "International"}
      ]
    }
  ]
}
```

##### Article schema for Search Visibility

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": "https://reframestudio.es/es/search-visibility/#article",
  "url": "https://reframestudio.es/es/search-visibility/",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://reframestudio.es/es/search-visibility/"
  },
  "headline": "Tu trabajo debería ser fácil de encontrar y más fácil de entender",
  "description": "[ACCURATE_PAGE_SUMMARY]",
  "inLanguage": "es-ES",
  "author": {
    "@type": "Person",
    "@id": "[AUTHOR_PROFILE_URL]#person",
    "name": "[AUTHOR_NAME]",
    "url": "[AUTHOR_PROFILE_URL]",
    "jobTitle": "[AUTHOR_JOB_TITLE]",
    "sameAs": ["[GENUINE_AUTHOR_PROFILE]"],
    "worksFor": {
      "@id": "https://reframestudio.es/#organization"
    }
  },
  "publisher": {
    "@id": "https://reframestudio.es/#organization"
  },
  "datePublished": "[YYYY-MM-DD]",
  "dateModified": "[YYYY-MM-DD]",
  "image": "https://reframestudio.es/images/hero.png",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": [".schema-headline", ".schema-summary"]
  }
}
```

The CSS selectors must point to visible elements in the rendered page. The same pattern can be adapted to each case study.

##### FAQPage schema for Pricing

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://reframestudio.es/es/pricing/#faq",
  "url": "https://reframestudio.es/es/pricing/",
  "inLanguage": "es-ES",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Es obligatorio el alojamiento?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Puedes alojar la web por tu cuenta si lo prefieres."
      }
    },
    {
      "@type": "Question",
      "name": "¿Las actualizaciones están incluidas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Las correcciones pequeñas del lanzamiento están incluidas. Las actualizaciones continuas están disponibles por 120€/mes."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto tarda?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La mayoría de webs pueden publicarse en 2 a 4 semanas según contenido y feedback."
      }
    },
    {
      "@type": "Question",
      "name": "¿El sitio es mío?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. El precio de 1.500€ incluye el diseño y la construcción completos del sitio."
      }
    }
  ]
}
```

Do not add `SearchAction` unless a real internal site-search endpoint exists.

---

### 4. Entity & Brand: 21/100

#### Raw sub-scores

- Entity Recognition: 9/30
- Third-Party Presence: 3/25
- Community Signals: 2/25
- Cross-Source Consistency: 6/20

The Agency adjustment raises Entity Recognition from 9 to 10, producing a final Entity and Brand score of 21.

#### Findings

- No relevant Wikipedia page was found.
- Wikidata search returned no matching entity.
- The name "Reframe Studio" is shared by several unrelated businesses, creating ambiguity.
- The website declares Instagram and LinkedIn profiles, but reciprocal links and profile completeness could not be independently verified.
- No relevant Crunchbase, Clutch, DesignRush, review-platform, Reddit, YouTube, forum, or open-source footprint was found in exact-brand and exact-domain searches.
- The Instagram handle provides a minimal visual-brand signal, but it does not compensate for the absence of third-party authority.

#### Platform Presence Map

| Platform | Status | Quality | Link |
|---|---|---|---|
| Website | Active | Strong first-party identity | https://reframestudio.es |
| LinkedIn | Declared by site | Existence suggested; completeness and backlink not verified | https://www.linkedin.com/company/reframe-studio |
| Instagram | Declared by site | Public handle detected; profile details not independently verified | https://instagram.com/reframe.stud |
| Wikipedia | Missing | No relevant article | |
| Wikidata | Missing | No matching entity | |
| Crunchbase | Not found | None found | |
| Agency directories | Not found | None found | |
| Review platforms | Not found | None found | |
| Reddit | Not found | No exact-domain discussion found | |
| YouTube | Not found | No exact-domain content found | |

#### Recommendations

1. Make the LinkedIn company page complete, active, and explicitly linked back to the website.
2. Align the exact brand name, logo, description, services, and website URL across LinkedIn and Instagram.
3. Add one genuine founder or lead expert profile with clear credentials and an author page on the site.
4. Create complete agency listings only on relevant platforms where the studio can earn real reviews and client references.
5. Pursue independent mentions from architecture, interior-design, and creative-business publications.

---

## Platform-Specific Recommendations

### ChatGPT Optimization

- Strengthen entity recognition with a named expert, complete LinkedIn presence, reciprocal backlinks, and independent mentions.
- Turn the Search Visibility guide into a sourced Article with a visible author and dates.
- Publish self-contained definitions for technical terms and service concepts.

### Perplexity Optimization

- Add visible publication and update dates to guidance and case studies.
- Publish new evidence-backed articles or project breakdowns regularly.
- Earn discussion and referral signals from relevant architecture and design communities.

### Gemini Optimization

- Correct the Organization and Service graph.
- Add `ContactPoint`, real profile links, and page-specific Article schema.
- Align the Spanish homepage canonical with its hreflang and sitemap URL.

### Google AI Overviews Optimization

- Preserve the strong server-rendering, sitemap, and crawler-access foundation.
- Add authoritative primary-source citations to the Search Visibility guide.
- Add FAQ schema to Pricing and structured case-study data to Work pages.

### Claude Optimization

- Publish original, verifiable case-study metrics and explain how they were measured.
- Keep answers self-contained and place direct conclusions in the first two sentences.
- Add named authorship and source links so primary claims can be attributed confidently.

---

## Quick Wins

1. **Publish `llms.txt`**: potential +7 Technical points.
2. **Add a visible author, credentials, publication date, and update date to Search Visibility**: potential +9 to +13 Content points when extended to substantive pages.
3. **Add Article and Person schema to Search Visibility and the Villa case study**: potential +20 to +25 Schema points.
4. **Add `ContactPoint`, remove placeholder data, and replace deprecated ProfessionalService markup**: potential +8 Schema points plus improved data integrity.
5. **Complete and cross-link LinkedIn and Instagram, then add one genuine industry listing**: potential +8 to +15 Brand points.

---

## 30-Day Roadmap

### Week 1: Foundation

- Publish `llms.txt`.
- Fix the `/es/` canonical decision.
- Confirm or remove the placeholder-looking telephone.
- Add `ContactPoint`.
- Replace deprecated ProfessionalService markup.

### Week 2: Content and schema

- Add a visible author and dates to Search Visibility.
- Cite primary sources for SEO guidance.
- Add Article, Person, and speakable markup.
- Add FAQPage markup to Pricing.
- Add an H2 to the Work index.

### Week 3: Proof and authority

- Upgrade one case study with verified before-and-after metrics.
- Complete LinkedIn and Instagram profiles with reciprocal links.
- Create one genuine, complete agency-directory listing.
- Request two independently published client testimonials or mentions.

### Week 4: Optimization and measurement

- Tighten long titles and descriptions.
- Define specialized terms at first use.
- Re-audit JSON-LD and canonicals.
- Establish a monthly cadence for dated project and search-visibility content.
- Run a new GEO audit and compare against this baseline.

---

## Diagnostic vs. Measurement

This audit identifies **what to fix**. [AIvsRank.com](https://aivsrank.com?ref=geo-audit) measures **how visible you actually are** across AI platforms, tracking real mentions in ChatGPT, Claude, Perplexity, Gemini, and Google AI Overviews.

Together, they provide the complete picture. Get your AI visibility score at https://aivsrank.com.

---

## AI Visibility Measurement

### Track progress with AIvsRank.com

This audit identifies what to fix. AIvsRank.com measures how visible the brand is across AI platforms.

**What it provides**:

- Real-time AI visibility score
- Platform-by-platform citation tracking
- Competitor benchmarking
- Historical trend analysis

**Get an AI visibility score**: [aivsrank.com](https://aivsrank.com?ref=geo-audit)

---

*Generated by [geo-audit](https://github.com/Cognitic-Labs/geoskills), an open-source GEO diagnostic skill.*  
*Scoring methodology based on research from Princeton, Georgia Tech, BrightEdge, Google Search Central, and compiled industry sources.*

<!-- GEO-AUDIT-META
scoring_model: v2
url: https://reframestudio.es
date: 2026-07-30
business_type: Agency
geo_score: 58
grade: C
technical: 92
citability: 68
schema: 52
brand: 21
GEO-AUDIT-META -->
