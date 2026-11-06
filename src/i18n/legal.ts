/**
 * Legal pages (privacy, terms, cookies) in EN / ES / FR.
 * Ported from the previous site and updated for this build: contact form via FormSubmit,
 * hosting on GitHub Pages, web fonts from Fontshare and Google Fonts, analytics only with consent.
 * Not legal advice: have a legal advisor review before relying on it.
 */
import type { Lang } from './index';

export type LegalDoc = 'privacy' | 'terms' | 'cookies';
export const legalDocs: LegalDoc[] = ['privacy', 'terms', 'cookies'];
type Section = { h: string; p: string[] };
type Doc = { title: string; meta: string; updated: string; sections: Section[] };

const EMAIL = 'hello@reframestudio.es';

export const legal: Record<Lang, { labels: Record<LegalDoc, string>; nav: string; docs: Record<LegalDoc, Doc> }> = {
  en: {
    labels: { privacy: 'Privacy', terms: 'Terms', cookies: 'Cookies' },
    nav: 'Legal',
    docs: {
      privacy: {
        title: 'Privacy policy',
        meta: 'How Reframe Studio collects, uses and protects personal data under the GDPR.',
        updated: 'Last updated: 6 November 2026',
        sections: [
          { h: 'Who we are', p: [`Reframe Studio is an independent design studio on the Costa del Sol, Spain, working for architecture, interior design and landscape studios. We are the data controller for this website. Contact: ${EMAIL}.`] },
          { h: 'What data we collect', p: ['Only what you send us through the contact form: your name, email address, studio name, website and message.', 'When you visit the site, our host (GitHub Pages) and our font providers (Fontshare and Google Fonts) receive technical data such as your IP address so the pages and fonts can be delivered.'] },
          { h: 'How we use it', p: ['To answer your enquiry and, if we work together, to run the project. We never sell your data or use it for third-party marketing.'] },
          { h: 'Who processes it', p: ['Form messages are delivered to our inbox by FormSubmit (formsubmit.co). Our email is hosted by Infomaniak in Switzerland. The site is hosted by GitHub Pages. If you accept analytics cookies, Google Analytics measures visits with anonymised IP addresses.'] },
          { h: 'How long we keep it', p: ['Enquiries that don’t lead to a project are deleted within 12 months. Client records are kept for as long as Spanish tax and accounting law requires.'] },
          { h: 'Your rights', p: [`Under the GDPR you can access, correct, delete, restrict or move your data, and object to its use. Write to ${EMAIL}. You can also complain to the Spanish Data Protection Agency (aepd.es).`] },
          { h: 'Cookies', p: ['Essential storage keeps the site working and remembers your cookie choice. Analytics only runs if you accept it. See the cookie policy for details.'] },
          { h: 'Changes', p: ['We may update this policy. The latest version always lives on this page.'] },
        ],
      },
      terms: {
        title: 'Terms of service',
        meta: 'The terms that apply to projects with Reframe Studio.',
        updated: 'Last updated: 6 November 2026',
        sections: [
          { h: 'Services', p: ['Reframe Studio provides website design and development, brand identity, print design, social and marketing design, and related technical services such as hosting and maintenance.'] },
          { h: 'Quotes and payment', p: ['Every project starts with a written quote. For one-time projects above 790€, 50% is due at the start and 50% before delivery. Monthly care plans are billed at the start of each billing period.'] },
          { h: 'Revisions', p: ['Each project includes the number of revision rounds set out in the quote. Extra rounds beyond that scope are billed separately.'] },
          { h: 'Intellectual property', p: ['Once paid in full, you own the final deliverables. Source files are available on request. We may show the work in our portfolio unless you ask us not to.'] },
          { h: 'Liability', p: ['Reframe Studio is not liable for indirect, consequential or incidental damages arising from the use of the delivered work.'] },
          { h: 'Governing law', p: ['These terms are governed by Spanish law. Any dispute falls under the courts of Málaga.'] },
        ],
      },
      cookies: {
        title: 'Cookie policy',
        meta: 'Which cookies and storage Reframe Studio uses, and how to change your choice.',
        updated: 'Last updated: 6 November 2026',
        sections: [
          { h: 'What cookies are', p: ['Cookies and similar storage are small files a site keeps on your device, to work properly or to measure visits.'] },
          { h: 'Essential', p: ['We store your cookie choice in your browser (localStorage, key “reframe:cookies”). This is needed for the site to respect your decision and needs no consent.'] },
          { h: 'Analytics (optional)', p: ['If you click “Accept all”, we load Google Analytics, which sets cookies such as _ga to count visits and see which pages are useful. IP addresses are anonymised. If you reject, nothing is loaded.'] },
          { h: 'Changing your choice', p: ['Use “Cookie settings” in the footer at any time, or clear cookies in your browser.'] },
          { h: 'Contact', p: [`Questions about cookies: ${EMAIL}.`] },
        ],
      },
    },
  },
  es: {
    labels: { privacy: 'Privacidad', terms: 'Condiciones', cookies: 'Cookies' },
    nav: 'Legal',
    docs: {
      privacy: {
        title: 'Política de privacidad',
        meta: 'Cómo Reframe Studio recoge, usa y protege los datos personales según el RGPD.',
        updated: 'Última actualización: 6 de noviembre de 2026',
        sections: [
          { h: 'Quiénes somos', p: [`Reframe Studio es un estudio de diseño independiente en la Costa del Sol (España) que trabaja para estudios de arquitectura, interiorismo y paisajismo. Somos los responsables del tratamiento de los datos de esta web. Contacto: ${EMAIL}.`] },
          { h: 'Qué datos recogemos', p: ['Solo los que nos envías mediante el formulario de contacto: nombre, email, nombre del estudio, web y mensaje.', 'Al visitar la web, nuestro alojamiento (GitHub Pages) y nuestros proveedores de tipografías (Fontshare y Google Fonts) reciben datos técnicos como tu dirección IP para poder servir las páginas y las fuentes.'] },
          { h: 'Para qué los usamos', p: ['Para responder a tu consulta y, si trabajamos juntos, para llevar a cabo el proyecto. Nunca vendemos tus datos ni los usamos para marketing de terceros.'] },
          { h: 'Quién los trata', p: ['Los mensajes del formulario llegan a nuestro correo a través de FormSubmit (formsubmit.co). Nuestro correo está alojado en Infomaniak (Suiza). La web está alojada en GitHub Pages. Si aceptas las cookies de analítica, Google Analytics mide las visitas con la IP anonimizada.'] },
          { h: 'Cuánto tiempo los guardamos', p: ['Las consultas que no terminan en proyecto se eliminan en un plazo de 12 meses. Los datos de clientes se conservan el tiempo que exige la normativa fiscal y contable española.'] },
          { h: 'Tus derechos', p: [`Según el RGPD puedes acceder, rectificar, suprimir, limitar o portar tus datos, y oponerte a su uso. Escríbenos a ${EMAIL}. También puedes reclamar ante la Agencia Española de Protección de Datos (aepd.es).`] },
          { h: 'Cookies', p: ['El almacenamiento esencial mantiene la web funcionando y recuerda tu elección de cookies. La analítica solo se activa si la aceptas. Consulta la política de cookies.'] },
          { h: 'Cambios', p: ['Podemos actualizar esta política. La versión vigente estará siempre en esta página.'] },
        ],
      },
      terms: {
        title: 'Condiciones del servicio',
        meta: 'Las condiciones que se aplican a los proyectos con Reframe Studio.',
        updated: 'Última actualización: 6 de noviembre de 2026',
        sections: [
          { h: 'Servicios', p: ['Reframe Studio ofrece diseño y desarrollo web, identidad de marca, diseño de impresos, diseño para redes y marketing, y servicios técnicos relacionados como alojamiento y mantenimiento.'] },
          { h: 'Presupuestos y pago', p: ['Cada proyecto empieza con un presupuesto por escrito. En proyectos puntuales de más de 790€, el 50% se abona al inicio y el 50% antes de la entrega. Los planes mensuales de mantenimiento se facturan al inicio de cada periodo.'] },
          { h: 'Revisiones', p: ['Cada proyecto incluye las rondas de revisión indicadas en el presupuesto. Las rondas adicionales se facturan aparte.'] },
          { h: 'Propiedad intelectual', p: ['Una vez abonado el total, los entregables finales son tuyos. Los archivos fuente están disponibles bajo petición. Podemos mostrar el trabajo en nuestro portafolio salvo que nos pidas lo contrario.'] },
          { h: 'Responsabilidad', p: ['Reframe Studio no se hace responsable de daños indirectos, consecuentes o incidentales derivados del uso del trabajo entregado.'] },
          { h: 'Ley aplicable', p: ['Estas condiciones se rigen por la ley española. Cualquier disputa se somete a los tribunales de Málaga.'] },
        ],
      },
      cookies: {
        title: 'Política de cookies',
        meta: 'Qué cookies y almacenamiento usa Reframe Studio y cómo cambiar tu elección.',
        updated: 'Última actualización: 6 de noviembre de 2026',
        sections: [
          { h: 'Qué son las cookies', p: ['Las cookies y el almacenamiento similar son pequeños archivos que una web guarda en tu dispositivo para funcionar o medir visitas.'] },
          { h: 'Esenciales', p: ['Guardamos tu elección de cookies en tu navegador (localStorage, clave «reframe:cookies»). Es necesario para respetar tu decisión y no requiere consentimiento.'] },
          { h: 'Analítica (opcional)', p: ['Si pulsas «Aceptar todo», cargamos Google Analytics, que instala cookies como _ga para contar visitas y ver qué páginas son útiles. La IP se anonimiza. Si rechazas, no se carga nada.'] },
          { h: 'Cambiar tu elección', p: ['Usa «Configurar cookies» en el pie de página cuando quieras, o borra las cookies desde tu navegador.'] },
          { h: 'Contacto', p: [`Dudas sobre cookies: ${EMAIL}.`] },
        ],
      },
    },
  },
  fr: {
    labels: { privacy: 'Confidentialité', terms: 'Conditions', cookies: 'Cookies' },
    nav: 'Mentions légales',
    docs: {
      privacy: {
        title: 'Politique de confidentialité',
        meta: 'Comment Reframe Studio collecte, utilise et protège les données personnelles selon le RGPD.',
        updated: 'Dernière mise à jour : 6 novembre 2026',
        sections: [
          { h: 'Qui sommes-nous', p: [`Reframe Studio est un studio de design indépendant sur la Costa del Sol (Espagne), au service des studios d’architecture, d’architecture d’intérieur et de paysage. Nous sommes responsables du traitement des données de ce site. Contact : ${EMAIL}.`] },
          { h: 'Données collectées', p: ['Uniquement ce que vous nous envoyez via le formulaire de contact : nom, email, nom du studio, site web et message.', 'Lors de votre visite, notre hébergeur (GitHub Pages) et nos fournisseurs de polices (Fontshare et Google Fonts) reçoivent des données techniques comme votre adresse IP pour afficher les pages et les polices.'] },
          { h: 'Utilisation', p: ['Pour répondre à votre demande et, si nous travaillons ensemble, mener le projet. Nous ne vendons jamais vos données et ne les utilisons pas pour du marketing tiers.'] },
          { h: 'Sous-traitants', p: ['Les messages du formulaire arrivent dans notre boîte via FormSubmit (formsubmit.co). Notre messagerie est hébergée par Infomaniak (Suisse). Le site est hébergé par GitHub Pages. Si vous acceptez les cookies d’analyse, Google Analytics mesure les visites avec une IP anonymisée.'] },
          { h: 'Durée de conservation', p: ['Les demandes sans suite sont supprimées sous 12 mois. Les données clients sont conservées le temps exigé par la loi fiscale et comptable espagnole.'] },
          { h: 'Vos droits', p: [`Selon le RGPD, vous pouvez accéder à vos données, les rectifier, les supprimer, en limiter l’usage, les récupérer et vous opposer à leur traitement. Écrivez à ${EMAIL}. Vous pouvez aussi saisir l’autorité espagnole de protection des données (aepd.es).`] },
          { h: 'Cookies', p: ['Le stockage essentiel fait fonctionner le site et retient votre choix. L’analyse ne s’active que si vous l’acceptez. Voir la politique cookies.'] },
          { h: 'Modifications', p: ['Cette politique peut évoluer. La version en vigueur est toujours sur cette page.'] },
        ],
      },
      terms: {
        title: 'Conditions de service',
        meta: 'Les conditions applicables aux projets avec Reframe Studio.',
        updated: 'Dernière mise à jour : 6 novembre 2026',
        sections: [
          { h: 'Services', p: ['Reframe Studio propose la conception et le développement de sites web, l’identité de marque, le design print, le design pour les réseaux et le marketing, ainsi que des services techniques associés comme l’hébergement et la maintenance.'] },
          { h: 'Devis et paiement', p: ['Chaque projet commence par un devis écrit. Pour les projets ponctuels de plus de 790€, 50 % sont dus au démarrage et 50 % avant la livraison. Les forfaits mensuels de maintenance sont facturés en début de période.'] },
          { h: 'Révisions', p: ['Chaque projet inclut le nombre de séries de révisions prévu au devis. Les séries supplémentaires sont facturées à part.'] },
          { h: 'Propriété intellectuelle', p: ['Après paiement complet, les livrables finaux vous appartiennent. Les fichiers sources sont disponibles sur demande. Nous pouvons présenter le travail dans notre portfolio, sauf demande contraire.'] },
          { h: 'Responsabilité', p: ['Reframe Studio n’est pas responsable des dommages indirects, consécutifs ou accessoires liés à l’utilisation du travail livré.'] },
          { h: 'Droit applicable', p: ['Ces conditions sont régies par le droit espagnol. Tout litige relève des tribunaux de Málaga.'] },
        ],
      },
      cookies: {
        title: 'Politique cookies',
        meta: 'Les cookies et le stockage utilisés par Reframe Studio, et comment changer votre choix.',
        updated: 'Dernière mise à jour : 6 novembre 2026',
        sections: [
          { h: 'Qu’est-ce qu’un cookie', p: ['Les cookies et stockages similaires sont de petits fichiers qu’un site garde sur votre appareil pour fonctionner ou mesurer les visites.'] },
          { h: 'Essentiels', p: ['Nous enregistrons votre choix dans votre navigateur (localStorage, clé « reframe:cookies »). C’est nécessaire pour respecter votre décision et ne demande pas de consentement.'] },
          { h: 'Analyse (facultatif)', p: ['Si vous cliquez sur « Tout accepter », nous chargeons Google Analytics, qui dépose des cookies comme _ga pour compter les visites et voir quelles pages sont utiles. L’IP est anonymisée. Si vous refusez, rien n’est chargé.'] },
          { h: 'Changer votre choix', p: ['Utilisez « Paramètres cookies » en bas de page à tout moment, ou effacez les cookies dans votre navigateur.'] },
          { h: 'Contact', p: [`Questions sur les cookies : ${EMAIL}.`] },
        ],
      },
    },
  },
};
