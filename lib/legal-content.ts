import { isLocale } from "@/lib/locale-navigation";

export type LegalDocumentKind = "privacy" | "terms" | "cookies";

interface LegalSection {
  heading: string;
  paragraphs: readonly string[];
}

export interface LegalDocument {
  heading: string;
  notice: string;
  sections: readonly LegalSection[];
}

const LEGAL_CONTENT = {
  en: {
    privacy: {
      heading: "Privacy Policy",
      notice: "Draft document. Review with a legal advisor before launch.",
      sections: [
        { heading: "1. Who we are", paragraphs: ["REFRAME is an independent web design studio operating on the Costa del Sol, Spain. We provide website design and redesign services for architecture and interior design studios.", "Contact: hello@reframestudio.es"] },
        { heading: "2. What data we collect", paragraphs: ["We collect personal data only when you submit a form on this website. This may include your name, email address, studio name, city, website URL, and any message you provide."] },
        { heading: "3. How we use your data", paragraphs: ["We use your contact information solely to respond to your enquiry or website review request. We do not share your data with third parties for marketing purposes."] },
        { heading: "4. Data retention", paragraphs: ["We retain personal data only for as long as necessary to fulfil the purpose for which it was collected."] },
        { heading: "5. Your rights", paragraphs: ["Under the GDPR and applicable Spanish law, you have the right to access, rectify, or delete your personal data. To exercise these rights, contact hello@reframestudio.es."] },
        { heading: "6. Cookies", paragraphs: ["This website uses essential cookies and optional cookies based on your consent. See our Cookie Policy for details."] },
        { heading: "7. Updates", paragraphs: ["This policy may be updated periodically. The latest version will always be available at this URL."] },
      ],
    },
    terms: {
      heading: "Terms of Service",
      notice: "Draft document. Review with a legal advisor before launch.",
      sections: [
        { heading: "1. Services", paragraphs: ["REFRAME provides website design, redesign, portfolio presentation, deployment, and related technical services for architecture and interior design studios."] },
        { heading: "2. Payment terms", paragraphs: ["For one-time projects above 790€, 50% is due at the start of the project and 50% before delivery. Website review work is confirmed before any paid implementation. Monthly care plans are billed at the start of each billing period."] },
        { heading: "3. Revisions", paragraphs: ["Each project package includes the number of revision rounds specified in the project agreement. Additional revisions beyond the agreed scope are billed separately."] },
        { heading: "4. Intellectual property", paragraphs: ["After full payment, the client receives ownership of the final website deliverables. Design assets and source files remain available for transfer on request."] },
        { heading: "5. Limitation of liability", paragraphs: ["REFRAME is not liable for indirect, consequential, or incidental damages arising from the use of delivered services or websites."] },
        { heading: "6. Governing law", paragraphs: ["These terms are governed by the laws of Spain. Any dispute is subject to the jurisdiction of the courts of Málaga."] },
      ],
    },
    cookies: {
      heading: "Cookie Policy",
      notice: "Draft document. Review with a legal advisor before launch.",
      sections: [
        { heading: "What cookies are", paragraphs: ["Cookies are small text files stored on your device when you visit a website. They help the website function correctly and may be used to analyse traffic or remember your preferences."] },
        { heading: "Cookies we use", paragraphs: ["We use cookies that are necessary for the site to operate. Optional analytics and marketing cookies remain disabled unless you consent to them."] },
        { heading: "Analytics", paragraphs: ["When you allow analytics cookies, we may use privacy-conscious analytics tools to understand site traffic and improve the experience."] },
        { heading: "Managing cookies", paragraphs: ["You can update your choices through the cookie settings on this site and control or delete cookies through your browser settings. Disabling certain cookies may affect site functionality."] },
        { heading: "Contact", paragraphs: ["For questions about this Cookie Policy, contact hello@reframestudio.es."] },
      ],
    },
  },
  es: {
    privacy: {
      heading: "Política de privacidad",
      notice: "Documento provisional. Revísalo con un asesor legal antes de publicar.",
      sections: [
        { heading: "1. Quiénes somos", paragraphs: ["REFRAME es un estudio independiente de diseño web con sede en la Costa del Sol, España. Ofrecemos servicios de diseño y rediseño web para estudios de arquitectura e interiorismo.", "Contacto: hello@reframestudio.es"] },
        { heading: "2. Qué datos recopilamos", paragraphs: ["Solo recopilamos datos personales cuando envías un formulario en esta web. Pueden incluir tu nombre, dirección de email, nombre del estudio, ciudad, URL de la web y cualquier mensaje que proporciones."] },
        { heading: "3. Cómo usamos tus datos", paragraphs: ["Usamos tus datos de contacto únicamente para responder a tu consulta o solicitud de revisión web. No compartimos tus datos con terceros con fines de marketing."] },
        { heading: "4. Conservación de datos", paragraphs: ["Conservamos los datos personales solo durante el tiempo necesario para cumplir la finalidad para la que se recopilaron."] },
        { heading: "5. Tus derechos", paragraphs: ["Según el RGPD y la legislación española aplicable, tienes derecho a acceder, rectificar o eliminar tus datos personales. Para ejercer estos derechos, escribe a hello@reframestudio.es."] },
        { heading: "6. Cookies", paragraphs: ["Esta web usa cookies esenciales y cookies opcionales según tu consentimiento. Consulta nuestra Política de cookies para obtener más información."] },
        { heading: "7. Actualizaciones", paragraphs: ["Esta política puede actualizarse periódicamente. La versión más reciente estará siempre disponible en esta URL."] },
      ],
    },
    terms: {
      heading: "Términos del servicio",
      notice: "Documento provisional. Revísalo con un asesor legal antes de publicar.",
      sections: [
        { heading: "1. Servicios", paragraphs: ["REFRAME ofrece diseño y rediseño web, presentación de portafolios, despliegue y servicios técnicos relacionados para estudios de arquitectura e interiorismo."] },
        { heading: "2. Condiciones de pago", paragraphs: ["En proyectos puntuales superiores a 790€, se abona el 50% al inicio y el 50% antes de la entrega. El trabajo de revisión web se confirma antes de cualquier implementación de pago. Los planes mensuales se facturan al inicio de cada periodo."] },
        { heading: "3. Revisiones", paragraphs: ["Cada paquete incluye el número de rondas de revisión indicado en el acuerdo del proyecto. Las revisiones adicionales fuera del alcance acordado se facturan por separado."] },
        { heading: "4. Propiedad intelectual", paragraphs: ["Tras el pago completo, el cliente recibe la propiedad de los entregables finales de la web. Los recursos de diseño y archivos fuente pueden transferirse bajo solicitud."] },
        { heading: "5. Limitación de responsabilidad", paragraphs: ["REFRAME no se hace responsable de daños indirectos, consecuentes o incidentales derivados del uso de los servicios o webs entregados."] },
        { heading: "6. Legislación aplicable", paragraphs: ["Estos términos se rigen por la legislación española. Cualquier disputa queda sometida a la jurisdicción de los tribunales de Málaga."] },
      ],
    },
    cookies: {
      heading: "Política de cookies",
      notice: "Documento provisional. Revísalo con un asesor legal antes de publicar.",
      sections: [
        { heading: "Qué son las cookies", paragraphs: ["Las cookies son pequeños archivos de texto que se guardan en tu dispositivo cuando visitas una web. Ayudan a que funcione correctamente y pueden usarse para analizar el tráfico o recordar tus preferencias."] },
        { heading: "Cookies que usamos", paragraphs: ["Usamos cookies necesarias para el funcionamiento de la web. Las cookies analíticas y de marketing opcionales permanecen desactivadas salvo que las aceptes."] },
        { heading: "Analítica", paragraphs: ["Cuando permites las cookies analíticas, podemos usar herramientas de analítica respetuosas con la privacidad para comprender el tráfico y mejorar la experiencia."] },
        { heading: "Gestionar las cookies", paragraphs: ["Puedes actualizar tus preferencias desde la configuración de cookies de esta web y controlar o eliminar cookies desde tu navegador. Desactivar algunas cookies puede afectar al funcionamiento."] },
        { heading: "Contacto", paragraphs: ["Para cualquier pregunta sobre esta Política de cookies, escribe a hello@reframestudio.es."] },
      ],
    },
  },
  fr: {
    privacy: {
      heading: "Politique de confidentialité",
      notice: "Document provisoire. Faites-le vérifier par un conseiller juridique avant la mise en ligne.",
      sections: [
        { heading: "1. Qui sommes-nous", paragraphs: ["REFRAME est un studio indépendant de design web installé sur la Costa del Sol, en Espagne. Nous proposons des services de conception et de refonte de sites pour les studios d’architecture et d’intérieur.", "Contact : hello@reframestudio.es"] },
        { heading: "2. Données collectées", paragraphs: ["Nous collectons des données personnelles uniquement lorsque vous envoyez un formulaire sur ce site. Elles peuvent inclure votre nom, votre adresse email, le nom du studio, la ville, l’URL du site et tout message fourni."] },
        { heading: "3. Utilisation de vos données", paragraphs: ["Nous utilisons vos coordonnées uniquement pour répondre à votre demande ou à votre demande de revue de site. Nous ne partageons pas vos données avec des tiers à des fins marketing."] },
        { heading: "4. Conservation des données", paragraphs: ["Nous conservons les données personnelles uniquement pendant la durée nécessaire à la finalité pour laquelle elles ont été collectées."] },
        { heading: "5. Vos droits", paragraphs: ["Conformément au RGPD et au droit espagnol applicable, vous pouvez accéder à vos données, les rectifier ou les supprimer. Pour exercer ces droits, écrivez à hello@reframestudio.es."] },
        { heading: "6. Cookies", paragraphs: ["Ce site utilise des cookies essentiels et des cookies facultatifs selon votre consentement. Consultez notre Politique relative aux cookies pour plus d’informations."] },
        { heading: "7. Mises à jour", paragraphs: ["Cette politique peut être mise à jour périodiquement. La version la plus récente sera toujours disponible à cette URL."] },
      ],
    },
    terms: {
      heading: "Conditions d’utilisation",
      notice: "Document provisoire. Faites-le vérifier par un conseiller juridique avant la mise en ligne.",
      sections: [
        { heading: "1. Services", paragraphs: ["REFRAME fournit des services de conception et de refonte de sites, de présentation de portfolios, de déploiement et des prestations techniques associées pour les studios d’architecture et d’intérieur."] },
        { heading: "2. Conditions de paiement", paragraphs: ["Pour les projets ponctuels supérieurs à 790€, 50% sont dus au démarrage et 50% avant la livraison. Le travail de revue de site est confirmé avant toute mise en œuvre payante. Les formules mensuelles sont facturées au début de chaque période."] },
        { heading: "3. Révisions", paragraphs: ["Chaque offre comprend le nombre de séries de révisions indiqué dans l’accord du projet. Les révisions supplémentaires hors du périmètre convenu sont facturées séparément."] },
        { heading: "4. Propriété intellectuelle", paragraphs: ["Après paiement intégral, le client devient propriétaire des livrables finaux du site. Les ressources de design et fichiers source peuvent être transférés sur demande."] },
        { heading: "5. Limitation de responsabilité", paragraphs: ["REFRAME n’est pas responsable des dommages indirects, consécutifs ou accessoires liés à l’utilisation des services ou sites livrés."] },
        { heading: "6. Droit applicable", paragraphs: ["Ces conditions sont régies par le droit espagnol. Tout litige relève de la compétence des tribunaux de Málaga."] },
      ],
    },
    cookies: {
      heading: "Politique relative aux cookies",
      notice: "Document provisoire. Faites-le vérifier par un conseiller juridique avant la mise en ligne.",
      sections: [
        { heading: "Que sont les cookies", paragraphs: ["Les cookies sont de petits fichiers texte enregistrés sur votre appareil lorsque vous visitez un site. Ils assurent son bon fonctionnement et peuvent servir à analyser le trafic ou à mémoriser vos préférences."] },
        { heading: "Cookies utilisés", paragraphs: ["Nous utilisons des cookies nécessaires au fonctionnement du site. Les cookies statistiques et marketing facultatifs restent désactivés tant que vous ne les acceptez pas."] },
        { heading: "Statistiques", paragraphs: ["Lorsque vous autorisez les cookies statistiques, nous pouvons utiliser des outils respectueux de la vie privée pour comprendre le trafic et améliorer l’expérience."] },
        { heading: "Gérer les cookies", paragraphs: ["Vous pouvez modifier vos choix depuis les paramètres des cookies de ce site et contrôler ou supprimer les cookies dans votre navigateur. La désactivation de certains cookies peut affecter le fonctionnement."] },
        { heading: "Contact", paragraphs: ["Pour toute question sur cette politique, écrivez à hello@reframestudio.es."] },
      ],
    },
  },
} as const satisfies Record<string, Record<LegalDocumentKind, LegalDocument>>;

export function getLegalContent(locale: string, kind: LegalDocumentKind): LegalDocument {
  return LEGAL_CONTENT[isLocale(locale) ? locale : "es"][kind];
}
