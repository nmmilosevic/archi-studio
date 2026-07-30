# GEO and SEO Content Fix Report

**Site:** https://reframestudio.es  
**Date:** 30 July 2026  
**Primary language reviewed:** Spanish  
**Localized implementations:** Spanish, English, and French  
**Pages prioritized:** Services, Pricing, Search Visibility, Work index, and case studies

## Executive summary

The content now gives search engines and answer systems clearer definitions, direct answers, visible source signals, consistent dates, and self-contained explanations. The implementation also aligns page titles, descriptions, canonical URLs, internal page hierarchy, and structured data with the visible content.

No performance claims, client outcomes, awards, addresses, telephone numbers, or personal author identities were invented. REFRAME Studio is used as the organization author where authorship is required.

## Main issues addressed

| Issue | Before | Implemented fix |
|---|---|---|
| Key concepts lacked definitions | SEO, CMS, hreflang, and NAP appeared without enough context | Added plain-language definitions at first use |
| Search content was difficult to quote independently | Several paragraphs depended on neighboring context | Rewrote answer blocks so each explains its subject directly |
| Pricing answers were indirect | The main offer and timeline required interpretation | Added the 1.500€ price and the usual 2 to 4 week timeframe |
| Technical advice had no visible sources | Search guidance made unsupported references | Added three official Google Search Central sources and a consultation date |
| Editorial identity was weak | No visible author or update information | Added organization byline and update date |
| Case studies lacked publication context | Concept work could be mistaken for client work | Added a visible conceptual study label and publication dates |
| Page summaries were broad | Metadata exceeded useful focus on several pages | Shortened titles and descriptions around each page intent |
| Work index skipped a heading level | The grid moved from H1 to card H3 headings | Added a localized H2 above the selected studies |

## Representative rewrites

### Organic visibility

**Before:** The service named search visibility without defining the outcome.

**After:** “La visibilidad orgánica es la capacidad de aparecer en búsquedas no pagadas relacionadas con tus servicios, proyectos y ubicaciones. La trabajamos con estructura de contenido, metadatos, enlazado interno y una base técnica clara.”

### Search engine optimization

**Before:** The page discussed SEO benefits before explaining the term.

**After:** “La optimización para buscadores, o SEO, organiza el contenido y la base técnica para que una web pueda rastrearse, interpretarse e indexarse.”

### Technical SEO

**Before:** Technical tasks appeared as a list without a definition.

**After:** “El SEO técnico cubre velocidad, Core Web Vitals, URLs limpias, canónicas, datos estructurados, rastreo e imágenes optimizadas.”

### Hreflang

**Before:** The term was used as specialist shorthand.

**After:** “Hreflang identifica el idioma y la región de cada URL para que las versiones en español, inglés y francés lleguen al público adecuado.”

### CMS

**Before:** CMS appeared without expansion.

**After:** “Modelo para CMS, el sistema de gestión de contenidos.”

### NAP

**Before:** NAP appeared as an unexplained acronym.

**After:** “NAP significa nombre, dirección y teléfono.”

### Principal website price

**Before:** The introduction described transparent pricing without answering the price question.

**After:** “La web principal cuesta 1.500€. El presupuesto cambia cuando el proyecto añade páginas, idiomas, un sistema de gestión de contenidos o nuevo contenido.”

### Delivery timeline

**Before:** The answer was broad and conditional.

**After:** “El plazo habitual es de 2 a 4 semanas desde la recepción del contenido y la aprobación del alcance. Los idiomas adicionales, la migración extensa del portfolio o nuevas rondas de revisión amplían el calendario.”

## Citability improvements

| Check | Result |
|---|---|
| Direct definition appears near the start of the guide | Pass |
| Important acronyms are expanded | Pass |
| Pricing contains exact public figures | Pass |
| Timeline contains a concrete range and conditions | Pass |
| Search guidance cites named primary sources | Pass |
| Sources are visible to users | Pass |
| Author and update date are visible | Pass |
| Structured data matches visible content | Pass |
| Concept case studies are identified as concepts | Pass |
| Unsupported numerical performance claims were avoided | Pass |

## Source policy

The Search Visibility guide links to official Google Search Central documentation for developer SEO fundamentals, canonical URLs, and structured data. Sources were selected because they directly support the technical recommendations on the page.

## Implementation files

- `content/es.ts`
- `content/en.ts`
- `content/fr.ts`
- `lib/page-copy.ts`
- `lib/structured-data.ts`
- `app/[locale]/(site)/search-visibility/page.tsx`
- `app/[locale]/(site)/pricing/page.tsx`
- `app/[locale]/(site)/work/page.tsx`
- `app/[locale]/(site)/work/[slug]/page.tsx`
- `public/llms.txt`
- `public/llms-full.txt`

