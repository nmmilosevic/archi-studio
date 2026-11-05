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
      title: 'Services | Reframe Studio',
      description: "Sites web, identité de marque, print et réseaux sociaux pour studios d’architecture et d’architecture d’intérieur. Un seul studio pour tout ce que vos clients voient.",
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
    cta: 'Démarrer un projet',
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
      includesNotes: ['On définit les pages, les projets et ce que le visiteur doit trouver en premier.', 'Pensé pour votre travail. Pas de template, pas de thème.', 'Net sur mobile, sur tablette et sur un écran de 27 pouces.', 'Structure propre, pages rapides, titres lisibles par Google.', 'Les demandes arrivent directement dans votre boîte mail.', 'On met en ligne ensemble et on corrige ce qui se présente.'],
      action: 'Démarrer un projet',
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
      "title": "Web, identité, print et *tout* ce qu’il y a entre les deux.",
      "lead": "Un studio d’architecture ou d’intérieur est jugé partout : le site, la carte de visite, la planche de concours, le feed Instagram. On dessine tout, pour que tout ressemble au même studio.",
      "disciplines": [
        {
          "id": "web",
          "name": "Web",
          "line": "Des sites et portfolios qui amènent des demandes."
        },
        {
          "id": "brand",
          "name": "Identité",
          "line": "Typographie, couleur et ton qui tiennent ensemble."
        },
        {
          "id": "print",
          "name": "Print",
          "line": "Tout ce qui finit sur papier ou sur un mur."
        },
        {
          "id": "marketing",
          "name": "Réseaux & marketing",
          "line": "Votre feed et vos newsletters, à votre image."
        }
      ],
      "web": {
        "title": "Sites web",
        "body": "Un site qui rend votre portfolio facile à parcourir et qui fait que les bons clients vous prennent au sérieux. Rapide, visible sur Google, et suivi une fois en ligne.",
        "groups": [
          {
            "title": "Design et développement",
            "items": [
              "Sites de studio",
              "Refontes",
              "Sites multilingues",
              "Parcours de demande"
            ]
          },
          {
            "title": "Portfolio",
            "items": [
              "Pages projet",
              "Filtres par type et lieu",
              "Structure d’étude de cas",
              "Modifiable par vous"
            ]
          },
          {
            "title": "SEO et suivi",
            "items": [
              "Bases SEO",
              "Performance",
              "Hébergement",
              "Mises à jour mensuelles"
            ]
          }
        ],
        "alt": "Site de studio d’architecture, page projet"
      },
      "brand": {
        "title": "Identité de marque",
        "body": "D’un ajustement soigné à une identité complète. Logo, typographie, couleur et ton, réunis dans une charte que vous utiliserez vraiment.",
        "items": [
          "Logo et logotype",
          "Système typographique",
          "Palette de couleurs",
          "Papeterie",
          "Charte graphique",
          "Ton de voix"
        ]
      },
      "print": {
        "title": "Print",
        "body": "Cartes de visite, brochures, books portfolio, planches de concours, signalétique. Tout ce qui finit sur papier ou sur un mur, conçu et préparé pour l’imprimeur.",
        "items": [
          "Cartes de visite et papeterie",
          "Brochures et books portfolio",
          "Planches de concours et de projet",
          "Palissades de chantier et signalétique",
          "Panneaux d’exposition",
          "Fichiers prêts à imprimer"
        ]
      },
      "social": {
        "title": "Réseaux & marketing",
        "body": "Templates Instagram, visuels de campagne, newsletters et landing pages. Votre feed enfin à votre image, et simple à tenir pour votre équipe.",
        "items": [
          "Templates Instagram",
          "Posts de lancement de projet",
          "Visuels de campagne",
          "Newsletters",
          "Landing pages",
          "Publicités"
        ]
      },
      "between": {
        "title": "Et tout ce qu’il y a *entre les deux*.",
        "body": "Les pièces qui n’entrent dans aucune case, mais que vos clients voient quand même.",
        "items": [
          {
            "title": "Présentations",
            "body": "Des présentations qui convainquent en rendez-vous."
          },
          {
            "title": "Candidatures aux prix",
            "body": "Des dossiers pensés pour sortir du lot devant un jury."
          },
          {
            "title": "Fiches projet",
            "body": "Un résumé d’une page pour chaque projet."
          },
          {
            "title": "Signatures email",
            "body": "Petites, mais vues cent fois par jour."
          },
          {
            "title": "Direction photo",
            "body": "Briefs et listes de prises pour votre photographe."
          },
          {
            "title": "Textes du site",
            "body": "Des mots qui sonnent comme votre studio."
          }
        ]
      },
      "fit": {
        "title": "Vous ne savez pas par où *commencer* ?",
        "body": "Dites-nous ce que vous avez et ce qui ne marche pas. On vous dira quoi corriger en premier.",
        "action": "Nous écrire"
      },
      "engagement": {
        "title": "Comment se *déroule* chaque projet.",
        "items": [
          {
            "title": "La revue d’abord",
            "body": "On commence par ce que vous avez déjà : site, identité, print, feed. Cela fixe la direction avant tout design."
          },
          {
            "title": "Livrables définis",
            "body": "Vous savez exactement ce que vous recevez avant de signer."
          },
          {
            "title": "Implication directe",
            "body": "Vous parlez à la personne qui le conçoit. Personne entre les deux."
          },
          {
            "title": "Prêt à l’emploi",
            "body": "Site en ligne, fichiers prêts à imprimer, templates livrés. Rien à moitié fini."
          }
        ]
      },
    "visuals": {
      "web": {"label": "Exemple de site de studio sur un ordinateur portable et un téléphone", "url": "aurea-studio.com", "nav": ["Projets", "Studio", "Contact"], "headline": "Une architecture en harmonie avec le lieu.", "cta": "Voir les projets", "projects": ["Villa Aurora", "Casa Lunara", "Casa Bruta"]},
      "print": {
        "label": "Exemple de pièces imprimées pour un studio : une brochure ouverte, des cartes de visite et une planche de concours",
        "book": "Projets choisis",
        "years": "2019–2025",
        "board": "Casa Lunara",
        "boardSub": "Concours · Marbella",
        "name": "Aurea Studio",
        "role": "Architecture",
        "city": "Marbella"
      },
      "social": {
        "label": "Exemple de feed Instagram et de newsletter conçus pour un studio",
        "handle": "aurea.studio",
        "stats": [["128", "publications"], ["4,2k", "abonnés"], ["312", "abonnements"]],
        "name": "Aurea Studio",
        "bio": "Architecture · Marbella",
        "bio2": "Villas et maisons privées sur la Costa del Sol",
        "link": "aurea-studio.com",
        "follow": "Suivre",
        "message": "Message",
        "highlights": ["Villas", "Process", "Intérieurs", "Presse"],
        "tiles": [
          "Nouveau projet",
          "Casa Lunara",
          "La lumière d’abord.",
          "Process",
          "Marbella",
          "Matière"
        ],
        "mailFrom": "Aurea Studio",
        "mailSubject": "Nouveau projet : Casa Lunara",
        "mailCta": "Voir le projet"
      },
      "brand": {
        label: 'Exemple de système de marque avec échelle typographique, échelle d’espacement et palette de couleurs',
        scale: ['Display', 'Titre', 'Texte'],
        sample: 'Architecture',
        body: 'La lumière, la proportion, la matière, dans cet ordre.',
        colors: ['Lin', 'Travertin', 'Terre cuite', 'Olive', 'Basalte'],
      },
    }
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
