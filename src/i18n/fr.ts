/** French content. Copy taken from the live site (reframestudio.es/fr); new UI strings translated. */
import type { Content } from './en';

const fr: Content = {
  lang: 'fr',
  name: 'Français',

  meta: {
    home: {
      title: 'Reframe Studio · Sites, identité et print pour architectes et architectes d’intérieur',
      description: 'Sites, identité, print et réseaux pour studios d’architecture, d’intérieur et de paysage. Faits avec le soin que vous mettez dans un plan.',
    },
    work: {
      title: 'Quatre études pour *montrer* le travail.',
      description: 'Études de refonte pour studios d’architecture et d’intérieur, avec projets mieux structurés, positionnement clair et présentation mobile soignée.',
    },
    services: {
      title: 'Web, identité, print et *tout* le reste.',
      description: 'Refonte de site, portfolio, visibilité organique, hébergement et raffinement de marque pour studios d’architecture, d’intérieur et de paysage.',
    },
    contact: {
      title: 'Parlez-nous de votre *studio*.',
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
    tagline: 'Studio de design pour architectes, architectes d’intérieur et paysagistes. Sites, identité, print et marketing.',
  },

  cookie: {
    title: 'Cookies et statistiques',
    body: 'Nous utilisons des cookies essentiels au bon fonctionnement du site et des cookies de mesure d’audience optionnels pour comprendre comment le site est utilisé.',
    accept: 'Tout accepter',
    reject: 'Tout refuser',
  },

  cta: {
    title: 'Envoyez-nous votre site. On vous dira quoi *corriger d’abord*.',
    body: 'Une revue courte et honnête de ce qui marche et de ce qui ne marche pas. Pas de présentation commerciale.',
    action: 'Demander une revue',
    alt: 'Documents d’analyse web avec plans et échantillons naturels',
  },

  home: {
    hero: {
      title: 'Vous concevez de beaux espaces. Votre site devrait *en être* un.',
      lead: 'Envoyez votre site actuel ou une idée de projet. On vous répond avec une prochaine étape claire.',
      primary: 'Voir le travail',
      secondary: 'Réserver une revue',
      mockAlt: 'Exemple de refonte de site pour studio d’architecture',
    },
    directions: {
      title: 'Neuf directions. *Zéro* template.',
      body: 'Chacune part d’un vrai type de studio : villas méditerranéennes, intérieurs calmes, béton brut. Trouvez celle qui vous ressemble.',
      names: ['Méditerranéen', 'Organique', 'Avantforme', 'Futuriste', 'Japonais', 'Luxe', 'Éco moderne', 'Parisien', 'Luxe sombre'],
      altPrefix: 'Style :',
    },
    studios: {
      title: 'Avec qui nous *travaillons*.',
      labels: ['Architecture', 'Intérieur', 'Paysage'],
    },
    pricing: {
      title: 'Un prix. *Aucune* surprise.',
      price: '1 500€',
      terms: 'Paiement unique',
      note: 'Cela couvre le design présenté et son développement. Plus de pages ou des changements plus tard ? On vous fait un devis avant, pour qu’aucune facture ne vous surprenne.',
      included: 'Ce qui est inclus',
      includes: ['Stratégie site web', 'Design sur mesure', 'Développement responsive', 'Bases SEO', 'Formulaire de contact', 'Support au lancement'],
      action: 'Commencer le site',
    },
    beyond: {
      title: 'Pas *seulement* des sites.',
      items: [
        {
          title: 'Identité & impression',
          body: 'Cartes de visite, brochures, portfolios PDF, planches de concours, signalétique. Tout ce qui finit sur papier ou sur un mur.',
          price: ['Devis par projet'],
          action: 'Demander un devis',
        },
        {
          title: 'Marketing digital',
          body: 'Modèles Instagram, visuels de campagne, newsletters, landing pages et publicités. Votre feed, enfin cohérent.',
          price: ['Devis par projet'],
          action: 'Demander un devis',
        },
        {
          title: 'Maintenance du site',
          body: 'Hébergement, sauvegardes, mises à jour de sécurité, petites corrections. On met en ligne vos nouveaux projets.',
          price: ['Hébergement à partir de 30€/mois', 'Mises à jour de contenu à partir de 120€/mois'],
          action: null,
        },
      ],
    },
    faq: {
      title: "Les questions qu’on nous *pose* souvent.",
      aside: "Des réponses claires avant de vous engager.",
      items: [
        { q: "Que comprend le prix de 1 500€ ?", a: "La stratégie, le design sur mesure, le développement responsive, les bases SEO, un formulaire de contact et l’accompagnement au lancement. Plus de pages ou des changements plus tard ? On vous fait un devis avant. Aucune facture surprise." },
        { q: "Avec qui vais-je travailler ?", a: "Avec la personne qui conçoit et développe votre site. Pas de chef de projet ni d’intermédiaire : les décisions vont vite et rien ne se perd." },
        { q: "Puis-je ajouter mes projets moi-même ?", a: "Oui, si vous le souhaitez. On peut préparer le site pour que vous ajoutiez un projet en quelques clics. Ou on s’en charge pour vous, à partir de 120€/mois." },
        { q: "Vous gérez l’hébergement et le domaine ?", a: "On connecte votre domaine au lancement. Hébergement, sauvegardes et mises à jour de sécurité à partir de 30€/mois, pour ne jamais vous soucier de la technique." },
        { q: "Mon site peut-il être multilingue ?", a: "Oui. La configuration multilingue fait partie de notre travail. Ce site fonctionne d’ailleurs en anglais, espagnol et français." },
        { q: "Comment commence-t-on ?", a: "Envoyez-nous votre site actuel. On le passe en revue et on vous dit ce dont il a besoin, pour connaître le périmètre et le prix avant de signer." },
      ],
      cardTitle: "Encore une question ?",
      cardBody: "Écrivez-nous. C’est une vraie personne qui vous répond.",
      cardAction: "Nous contacter",
    },
  },

  work: {
    title: 'Des sites pour les studios dont le travail mérite d’être bien présenté.',
    lead: 'Un regard clair sur la façon dont les studios d’architecture et d’intérieur peuvent présenter leur travail avec plus de clarté, de confiance et de qualité visuelle.',
    listTitle: 'Études de refonte de site sélectionnées',
    viewProject: 'Voir le projet',
    previewAlt: (title) => `Aperçu de la refonte : ${title}`,
  },

  project: {
    location: 'Lieu',
    type: 'Type',
    published: 'Publié',
    updated: 'Mis à jour',
    typeValue: 'Étude conceptuelle de refonte',
    publishedValue: '7 mai 2026',
    updatedValue: '30 juillet 2026',
    designTitle: "Choix de *design*.",
    designIntro: "Ce que nous avons choisi pour ce studio, et pourquoi.",
    palette: "Palette",
    type: "Typographie",
    coverAlt: (title) => `${title} : aperçu du site sur ordinateur`,
    enlarge: 'Agrandir :',
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
        "Sur mobile, la photographie vient d’abord et le titre ensuite : l’œuvre se voit avant de s’expliquer.",
      ],
    },
    'casa-noma-marbella': {
      title: 'Site d’Intérieur',
      location: 'Marbella, Costa del Sol',
      summary: 'Refonte du site, clarté des services, portfolio intérieur, expérience mobile et mise en place CMS.',
      captions: ['Page projet intérieur', 'Expérience mobile'],
      typeNote: "Une serif classique avec un seul accent en italique, sur « Slow Time. » De petites capitales espacées pour la navigation et les libellés.",
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
        "Les données du projet dans un tableau simple : lieu, achèvement, programme, surface.",
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
        "« L’approche » présente plantation locale, matériaux naturels et design sur mesure en trois courtes colonnes avec des dessins simples.",
        "Une citation du studio clôt la page, puis la galerie suit le jardin dans l’ordre : terrasse, sentier, plantations, table.",
      ],
    },
  },

  services: {
    title: 'Tout ce dont un studio a besoin pour se démarquer en ligne.',
    lead: 'De la refonte de site aux systèmes de portfolio et aux bases de visibilité dans les moteurs de recherche, chaque service s’adapte à la façon dont les studios d’architecture et de design présentent leur travail, inspirent confiance et attirent de meilleures demandes.',
    redesign: {
      title: 'Refonte de site pour studios d’architecture',
      body: 'Un site qui rend votre portfolio facile à parcourir, et qui fait que les bons clients vous prennent au sérieux.',
      items: ['Refonte de la page d’accueil', 'Pages de projets', 'Page à propos', 'Parcours de demande', 'Expérience mobile', 'Construction axée sur la performance', 'Configuration multilingue'],
      alt: 'Refonte de site pour studio d’architecture, page projet',
    },
    interiors: {
      title: 'Sites pour studios de design d’intérieur',
      body: 'Des sites portés par l’image, qui transmettent l’ambiance, les matériaux et le ressenti d’une pièce avant le premier rendez-vous.',
      items: ['Système de portfolio visuel', 'Pages de services', 'Narration du processus', 'Captation de leads', 'Intégration Instagram et portfolio'],
      alt: 'Site pour studio de design d’intérieur, page projet',
    },
    search: {
      title: 'Fondation de visibilité',
      body: 'Apparaître quand quelqu’un cherche « architecte à Marbella » n’a rien d’un hasard. C’est de la structure, des métadonnées, des liens et un site rapide. On met tout en place correctement.',
      items: ['Métadonnées SEO', 'Structure de pages orientée recherche', 'Données structurées', 'Maillage interne', 'Structure alt des images', 'Optimisation des performances'],
    },
    hosting: {
      title: 'Hébergement et maintenance',
      body: 'On garde le site rapide, sûr et à jour. Vous n’avez pas à y penser.',
      items: ['Configuration d’hébergement Vercel', 'Mises à jour mensuelles', 'Surveillance technique', 'Petites modifications de contenu', 'Vérifications analytiques'],
    },
    portfolio: {
      title: 'Systèmes de portfolio',
      body: 'Une manière claire de publier chaque projet : photos, lieu, type, matériaux, périmètre et l’histoire derrière.',
      items: ['Modèle pour CMS, le système de gestion de contenu', 'Modèles de projets', 'Filtres par localisation et type', 'Structure d’étude de cas', 'Mise en page centrée sur l’image'],
      alt: 'Archive de projets pour un studio d’architecture',
    },
    brand: {
      title: 'Raffinement de marque',
      body: 'Pas une refonte complète. Un réglage soigné de la typographie, des couleurs, de la mise en page et du ton, pour que tout semble venir du même studio.',
      items: ['Direction visuelle', 'Système typographique', 'Système de couleurs', 'Kit UI pour le site', 'Lignes directrices de marque de base'],
      alt: 'Système typographique et couleurs pour la marque d’un studio',
    },
    fit: {
      title: 'Vous ne savez pas par où *commencer* ?',
      body: 'Envoyez-nous votre site. On vous dira ce dont il a besoin en premier.',
      action: 'Réserver une revue',
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
      title: 'Comment se *déroule* chaque projet.',
      items: [
        { title: 'La revue d’abord', body: 'On commence par votre site actuel, votre positionnement et vos objectifs. Cela fixe la direction avant tout design.' },
        { title: 'Livrables définis', body: 'Vous savez exactement ce que vous recevez avant de signer.' },
        { title: 'Implication directe', body: 'Vous parlez à la personne qui conçoit et développe. Personne entre les deux.' },
        { title: 'Prêt à publier', body: 'Vitesse, SEO, statistiques et domaine, tout est prêt avant la mise en ligne.' },
      ],
    },
  },

  contact: {
    title: 'Parlez-nous du site de votre studio.',
    lead: 'Envoyez-nous votre site actuel ou votre idée de projet. Nous vous répondrons avec la prochaine étape la plus claire.',
    asideTitle: 'Un bon site donne confiance dans votre travail avant même la rencontre.',
    asideBody: 'Nous aidons les studios d’architecture et d’intérieur à montrer leur travail clairement, sur tous les écrans.',
    fields: {
      name: 'Votre nom',
      studio: 'Nom du studio',
      email: 'Adresse email',
      website: 'URL du site actuel',
      message: 'Qu’est-ce qui ne fonctionne pas sur le site actuel ?',
    },
    submit: 'Envoyer',
    sending: 'Envoi…',
    required: 'Les champs marqués d’un * sont obligatoires.',
    errors: {
      missing: 'Merci de remplir ce champ.',
      email: 'Saisissez une adresse email valide.',
      url: 'Saisissez l’adresse complète, avec https://',
    },
    sendError: 'Le message n’a pas pu être envoyé. Réessayez ou écrivez à',
    thanks: 'Bien reçu. On revient vers vous avec une prochaine étape claire.',
    trap: 'Laissez ce champ vide',
  },
};

export default fr;
