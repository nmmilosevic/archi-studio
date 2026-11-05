/** French content. Copy taken from the live site (reframestudio.es/fr); new UI strings translated. */
import type { Content } from './en';

const fr: Content = {
  lang: 'fr',
  name: 'Français',

  meta: {
    home: {
      title: 'Sites web pour studios d’architecture | Reframe Studio',
      description: 'Conception et refonte de sites pour studios d’architecture et d’intérieur, avec portfolios raffinés, structure multilingue et parcours de contact clairs.',
    },
    work: {
      title: 'Projets web de studios d’architecture | Reframe Studio',
      description: 'Études de refonte pour studios d’architecture et d’intérieur, avec projets mieux structurés, positionnement clair et présentation mobile soignée.',
    },
    services: {
      title: 'Services web pour studios d’architecture | Reframe Studio',
      description: 'Refonte de site, portfolio, visibilité organique, hébergement et raffinement de marque pour studios d’architecture, d’intérieur et de paysage.',
    },
    contact: {
      title: 'Contacter Reframe Studio',
      description: 'Parlez-nous du site de votre studio d’architecture ou d’intérieur et recevez une recommandation claire pour la prochaine étape.',
    },
  },

  ui: {
    skip: 'Aller au contenu',
    home: 'Accueil',
    work: 'Réalisations',
    services: 'Services',
    contact: 'Contact',
    cta: 'Commencer le site',
    menu: 'Menu',
    close: 'Fermer',
    language: 'Langue',
    mainNav: 'Principale',
    footerNav: 'Pied de page',
    cookieSettings: 'Paramètres des cookies',
    backToTop: 'Haut de page',
  },

  footer: {
    tagline: 'Studio de design web spécialisé pour les studios d’architecture, de design intérieur et de paysage.',
    about: 'REFRAME est un studio de design web pour les agences d’architecture et d’intérieur, créant des sites raffinés, des systèmes de portfolio et des concepts de présentation.',
  },

  cookie: {
    title: 'Cookies et statistiques',
    body: 'Nous utilisons des cookies essentiels au bon fonctionnement du site et des cookies de mesure d’audience optionnels pour comprendre comment le site est utilisé.',
    accept: 'Tout accepter',
    reject: 'Tout refuser',
  },

  cta: {
    title: 'Votre studio doit paraître plus premium en ligne.',
    body: 'Envoyez votre site actuel. Nous vous dirons ce qui doit changer en premier.',
    action: 'Demander un audit rapide',
    alt: 'Documents d’analyse web avec plans et échantillons naturels',
  },

  home: {
    hero: {
      title: 'Votre studio paraît déjà premium. Votre site devrait aussi.',
      lead: 'Design de sites pour studios d’architecture, de design intérieur et de paysage qui ont besoin d’un portfolio plus fort, d’un positionnement plus clair et d’une expérience digitale à la hauteur de leur travail.',
      primary: 'Voir les previews',
      secondary: 'Demander une revue',
      mockAlt: 'Exemple de refonte de site pour studio d’architecture',
    },
    directions: {
      title: 'Des directions de site pour studios dont le travail mérite d’être bien présenté.',
      body: 'Exemples ciblés : portfolios plus clairs, meilleure lecture mobile et première impression plus forte, sans templates génériques.',
      names: ['Méditerranéen', 'Organique', 'Avantforme', 'Futuriste', 'Japonais', 'Luxe', 'Éco moderne', 'Parisien', 'Luxe sombre'],
      altPrefix: 'Style :',
    },
    studios: {
      title: 'Les studios pour lesquels nous concevons.',
      labels: ['Architecture', 'Intérieur', 'Paysage'],
    },
    pricing: {
      title: 'Un investissement clair pour votre studio.',
      price: '1 500€',
      terms: 'Paiement unique',
      note: 'Cette offre comprend le développement du design présenté. Pour toute modification ou ajout, nous vous proposerons un devis complémentaire.',
      includes: ['Stratégie site web', 'Design sur mesure', 'Développement responsive', 'Bases SEO', 'Formulaire de contact', 'Support au lancement'],
      action: 'Commencer le site',
    },
    beyond: {
      title: 'Le design au-delà de votre site web.',
      items: [
        {
          title: 'Identité & impression',
          body: 'Brochures, portfolios PDF, cartes de visite et papeterie, modèles de présentation, dossiers de concours, signalétique et supports marketing imprimés.',
          price: ['Devis selon le périmètre'],
          action: 'Demander un devis',
        },
        {
          title: 'Marketing digital',
          body: 'Design pour les réseaux sociaux, modèles Instagram, visuels de campagne, newsletters, landing pages, publicités digitales et création de contenu.',
          price: ['Devis selon le périmètre'],
          action: 'Demander un devis',
        },
        {
          title: 'Maintenance du site',
          body: 'Hébergement, sauvegardes, mises à jour de sécurité, petites corrections, modifications de contenu et ajout de projets.',
          price: ['Hébergement à partir de 30€/mois', 'Mises à jour de contenu à partir de 120€/mois'],
          action: null,
        },
      ],
    },
    friction: {
      title: 'Les frictions réduisent la confiance.',
      body: 'Un client potentiel lit un site comme il lit un espace. La séquence, les proportions et l’attention portée aux détails façonnent l’impression avant même la première conversation.',
      action: 'Demander une revue du site',
      alt: 'Composition visuelle pour la revue de site',
      points: [
        { title: 'Positionnement', body: 'Clarifiez ce pour quoi votre studio est reconnu.' },
        { title: 'Présentation des projets', body: 'Améliorez la hiérarchie et le rythme de lecture.' },
        { title: 'Parcours de contact', body: 'Réduisez les frictions de l’intérêt à la prise de contact.' },
      ],
    },
  },

  work: {
    title: 'Des sites pour les studios dont le travail mérite d’être bien présenté.',
    lead: 'Un regard clair sur la façon dont les studios d’architecture et d’intérieur peuvent présenter leur travail avec plus de clarté, de confiance et de qualité visuelle.',
    listTitle: 'Études de refonte de site sélectionnées',
    viewProject: 'Voir le projet',
    previewAlt: (title) => `Aperçu de la refonte : ${title}`,
  },

  project: {
    location: 'Lieu',
    type: 'Type',
    published: 'Publié',
    updated: 'Mis à jour',
    typeValue: 'Étude conceptuelle de refonte',
    publishedValue: '7 mai 2026',
    updatedValue: '30 juillet 2026',
    designTitle: "Choix de design",
    designIntro: "Ce que nous avons choisi pour ce studio, et pourquoi.",
    palette: "Palette",
    type: "Typographie",
    coverAlt: (title) => `${title} : aperçu du site sur ordinateur`,
    enlarge: 'Agrandir :',
    enlarged: 'Vue agrandie',
    close: 'Fermer',
  },

  projects: {
    'villa-architecture-studio': {
      title: 'Site d’Architecture',
      location: 'Benahavís, Costa del Sol',
      summary: 'Refonte du site, structure du portfolio, présentation mobile et parcours de contact.',
      captions: ['Page projet', 'Expérience mobile'],
      typeNote: "Une serif légère et ample pour les titres. Une petite sans-serif pour le texte et les données du projet. Des capitales espacées pour le logo.",
      paletteNames: ["Fond", "Travertin", "Béton", "Bois", "Bronze", "Encre"],
      decisions: [
        "Les faits d’abord. Lieu, année, typologie, surface et statut se trouvent juste sous le titre, avant tout texte long.",
        "Les matériaux sont montrés, pas décrits. Travertin, enduit à la chaux, bois, bronze et béton apparaissent comme des échantillons, comme le client les verrait sur la table du studio.",
        "Sur mobile, la photographie vient d’abord et le titre ensuite : l’œuvre se voit avant de s’expliquer.",
      ],
    },
    'casa-noma-marbella': {
      title: 'Site d’Intérieur',
      location: 'Marbella, Costa del Sol',
      summary: 'Refonte du site, clarté des services, portfolio intérieur, expérience mobile et mise en place CMS.',
      captions: ['Page projet intérieur', 'Expérience mobile'],
      typeNote: "Une serif classique avec un seul accent en italique, sur « Slow Time. » De petites capitales espacées pour la navigation et les libellés.",
      paletteNames: ["Fond", "Lin", "Travertin", "Chêne", "Encre"],
      decisions: [
        "Les photographies se chevauchent et décalent la grille, comme dans un magazine de décoration, au lieu de remplir des cases égales.",
        "Lieu, type, surface et année sur une seule ligne sous l’introduction, lisibles d’un coup d’œil.",
        "Travertin, chêne et lin apparaissent en échantillons à côté des pièces où ils sont utilisés.",
      ],
    },
    'forma-sur-malaga': {
      title: 'Site d’Architecture',
      location: 'Málaga, Costa del Sol',
      summary: 'Refonte audacieuse, archive de projets, identité visuelle, structure mobile et CMS.',
      captions: ['Archive de projets', 'Expérience mobile'],
      typeNote: "Une seule grotesque sans-serif affirmée, en quelques tailles. Libellés en capitales. La typographie est aussi structurelle que les bâtiments.",
      paletteNames: ["Fond", "Panneau", "Béton", "Béton clair", "Texte"],
      decisions: [
        "Les pages sombres laissent la photographie du béton porter la lumière. Rien à l’écran n’est plus lumineux que le soleil sur les murs.",
        "Chaque projet montre sa coupe et son plan à côté des photographies, car les clients d’un studio d’architecture lisent aussi les dessins.",
        "Les données du projet dans un tableau simple : lieu, achèvement, programme, surface.",
      ],
    },
    'terral-studio-estepona': {
      title: 'Site paysager',
      location: 'Estepona, Costa del Sol',
      summary: 'Refonte du site, portfolio outdoor, présentation des services, expérience mobile et CMS.',
      captions: ['Page projet outdoor', 'Expérience mobile'],
      typeNote: "Une serif douce en vert olive pour les titres. Une sans-serif légère pour le texte.",
      paletteNames: ["Fond", "Pierre calcaire", "Sauge", "Lavande", "Olive"],
      decisions: [
        "Des photographies avant et après de la même colline montrent ce que le jardin a changé, sans un mot de vente.",
        "« L’approche » présente plantation locale, matériaux naturels et design sur mesure en trois courtes colonnes avec des dessins simples.",
        "Une citation du studio clôt la page, puis la galerie suit le jardin dans l’ordre : terrasse, sentier, plantations, table.",
      ],
    },
  },

  services: {
    title: 'Tout ce dont un studio a besoin pour se démarquer en ligne.',
    lead: 'De la refonte de site aux systèmes de portfolio et aux bases de visibilité dans les moteurs de recherche, chaque service s’adapte à la façon dont les studios d’architecture et de design présentent leur travail, inspirent confiance et attirent de meilleures demandes.',
    redesign: {
      title: 'Refonte de site pour studios d’architecture',
      body: 'Une présence digitale raffinée qui rend votre portfolio plus facile à explorer, votre positionnement plus clair et votre studio plus crédible auprès de clients à haute valeur.',
      items: ['Refonte de la page d’accueil', 'Pages de projets', 'Page à propos', 'Parcours de demande', 'Expérience mobile', 'Construction axée sur la performance', 'Configuration multilingue'],
      alt: 'Refonte de site pour studio d’architecture, page projet',
    },
    interiors: {
      title: 'Sites pour studios de design d’intérieur',
      body: 'Des sites web élégants et visuels pour les studios qui ont besoin de présenter l’ambiance, les matériaux, le style et la confiance avant la première réunion.',
      items: ['Système de portfolio visuel', 'Pages de services', 'Narration du processus', 'Captation de leads', 'Intégration Instagram et portfolio'],
      alt: 'Site pour studio de design d’intérieur, page projet',
    },
    search: {
      title: 'Fondation de visibilité',
      body: 'La visibilité organique est la capacité d’apparaître dans les recherches non payantes liées à vos services, projets et localisations. Nous la construisons par la structure du contenu, les métadonnées, le maillage interne et une base technique claire.',
      items: ['Métadonnées SEO', 'Structure de pages orientée recherche', 'Données structurées', 'Maillage interne', 'Structure alt des images', 'Optimisation des performances'],
    },
    hosting: {
      title: 'Hébergement et maintenance',
      body: 'Gardez le site rapide, sécurisé, mis à jour et facile à gérer sans vous soucier des détails techniques.',
      items: ['Configuration d’hébergement Vercel', 'Mises à jour mensuelles', 'Surveillance technique', 'Petites modifications de contenu', 'Vérifications analytiques'],
    },
    portfolio: {
      title: 'Systèmes de portfolio',
      body: 'Une structure propre pour publier des projets de manière cohérente, incluant les images, la localisation, le type de service, les matériaux, la portée et l’histoire.',
      items: ['Modèle pour CMS, le système de gestion de contenu', 'Modèles de projets', 'Filtres par localisation et type', 'Structure d’étude de cas', 'Mise en page centrée sur l’image'],
      alt: 'Archive de projets pour un studio d’architecture',
    },
    brand: {
      title: 'Raffinement de marque',
      body: 'Pas un remplacement d’agence de branding complète, mais un affinement précis de la typographie, la couleur, la mise en page, le ton et la cohérence digitale.',
      items: ['Direction visuelle', 'Système typographique', 'Système de couleurs', 'Kit UI pour le site', 'Lignes directrices de marque de base'],
      alt: 'Système typographique et couleurs pour la marque d’un studio',
    },
    fit: {
      title: 'Vous ne savez pas quel service choisir ?',
      body: 'Demandez une revue de site et nous vous dirons ce dont le site de votre studio a besoin en premier.',
      action: 'Demander une revue de site',
    },
    visuals: {
      search: {
        label: 'Exemple de résultat de recherche où le studio apparaît en premier, avec scores de performance, SEO et accessibilité',
        query: 'architecte Marbella',
        url: 'aurea-studio.com › projets',
        title: 'Aurea Studio · Architecture à Marbella',
        desc: 'Villas contemporaines et résidences privées sur la Costa del Sol. Projets, processus et contact.',
        scores: ['Performance', 'SEO', 'Accessibilité'],
      },
      portfolio: {
        label: 'Exemple d’éditeur de contenu à côté de la page projet publiée qu’il génère',
        editor: 'Éditeur',
        page: 'Page publiée',
        fields: ['Projet', 'Lieu', 'Type', 'Matériaux'],
        values: ['Casa Lunara', 'Marbella', 'Intérieur · Résidentiel', 'Travertin, chêne, lin'],
        images: 'Images',
        publish: 'Publié',
      },
      brand: {
        label: 'Exemple de système de marque avec échelle typographique, échelle d’espacement et palette de couleurs',
        scale: ['Display', 'Titre', 'Texte'],
        sample: 'Architecture',
        body: 'La lumière, la proportion, la matière, dans cet ordre.',
        colors: ['Lin', 'Travertin', 'Terre cuite', 'Olive', 'Basalte'],
      },
      hosting: {
        label: 'Exemple de tableau de bord de maintenance avec disponibilité, sauvegardes, mises à jour et temps de réponse',
        status: 'Tous les systèmes fonctionnent',
        uptime: 'Disponibilité, 30 derniers jours',
        rows: [['Dernière sauvegarde', 'Aujourd’hui, 04:00'], ['Mises à jour de sécurité', 'À jour'], ['Modifications de contenu', '2 projets ajoutés'], ['Temps de réponse', '180 ms']],
      },
    },
    engagement: {
      title: 'Chaque mission suit la même structure.',
      items: [
        { title: 'La revue d’abord', body: 'Chaque projet commence par une revue de votre site actuel, de votre positionnement et de vos objectifs. Elle définit la direction et le périmètre avant le début du travail.' },
        { title: 'Livrables définis', body: 'Chaque offre possède un périmètre clair, afin que vous sachiez ce que vous recevrez avant de signer.' },
        { title: 'Implication directe', body: 'Vous travaillez directement avec la personne qui conçoit et développe. Des révisions plus rapides et des décisions plus nettes, sans intermédiaire.' },
        { title: 'Prêt à publier', body: 'Chaque projet inclut l’optimisation des performances, le SEO technique, la configuration des statistiques et la connexion du domaine.' },
      ],
    },
  },

  contact: {
    title: 'Parlez-nous du site de votre studio.',
    lead: 'Envoyez-nous votre site actuel ou votre idée de projet. Nous vous répondrons avec la prochaine étape la plus claire.',
    asideTitle: 'Le bon site doit aider les clients à faire confiance à votre travail.',
    asideBody: 'Nous aidons les studios d’architecture et d’intérieur à présenter leur travail avec plus de clarté, de confiance et de cohérence sur ordinateur et mobile.',
    fields: {
      name: 'Votre nom',
      studio: 'Nom du studio',
      email: 'Adresse email',
      website: 'URL du site actuel',
      message: 'Qu’est-ce qui ne fonctionne pas sur le site actuel ?',
    },
    submit: 'Envoyer le site actuel',
    sending: 'Envoi…',
    required: 'Les champs marqués d’un * sont obligatoires.',
    errors: {
      missing: 'Merci de remplir ce champ.',
      email: 'Saisissez une adresse email valide.',
      url: 'Saisissez l’adresse complète, avec https://',
    },
    sendError: 'Le message n’a pas pu être envoyé. Réessayez ou écrivez à',
    thanks: 'Merci. Nous vous répondrons avec la prochaine étape la plus claire.',
    trap: 'Laissez ce champ vide',
  },
};

export default fr;
