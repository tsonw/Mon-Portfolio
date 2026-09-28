<div align="center">
  <img src="./public/LogoTS.png" alt="Thai Son portfolio logo" width="110" />

  # Thai Son Hoang — Portfolio

  A bilingual portfolio presenting my background, technical skills, education, and software projects.

  Un portfolio bilingue présentant mon parcours, mes compétences techniques, ma formation et mes projets informatiques.

  [View the portfolio](https://tsonw.github.io/Mon-Portfolio/) · [GitHub profile](https://github.com/tsonw) · [LinkedIn](https://www.linkedin.com/in/thai-son-hoang-648423332/)

  ![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
  ![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)
  ![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)
  ![GitHub Pages](https://img.shields.io/badge/Hosted_on-GitHub_Pages-222222?logo=github&logoColor=white)
</div>

<p align="center">
  <a href="#english">English</a> · <a href="#francais">Français</a>
</p>

---

<a id="english"></a>

## English

### About the project

This repository contains the source code for my personal portfolio. It introduces me as a third-year Computer Science student at IUT d'Orsay and showcases my academic path, technical toolkit, and selected personal and university projects.

The interface is available in French and English and is designed as a single-page experience with smooth navigation between sections.

### Live website

The production version is available at:

**[tsonw.github.io/Mon-Portfolio](https://tsonw.github.io/Mon-Portfolio/)**

### Key features

- French and English interfaces with in-app language switching
- Hero section with social links and downloadable résumé
- About section with current internship-search status
- Education timeline and categorized technical skills
- Academic and personal project showcases
- Project image galleries with previous/next navigation
- Smooth scrolling and automatic scroll restoration between routes
- Static production build deployed to GitHub Pages

### Technology stack

| Category | Technologies |
| --- | --- |
| Front end | React 19, JavaScript, HTML5, CSS3 |
| Build tooling | Vite 7 |
| Routing | React Router 7 |
| Styling | Custom component-based CSS |
| Code quality | ESLint 9 |
| Hosting | GitHub Pages |

### Project structure

```text
Mon-Portfolio/
├── public/                 # Public files and downloadable résumés
├── src/
│   ├── assets/             # Images, icons, animations, and project media
│   ├── Components/
│   │   ├── english/        # English-language sections
│   │   └── main/           # French-language sections
│   ├── Pages/              # Route-level page composition
│   ├── Styles/             # Global and component stylesheets
│   ├── App.jsx             # Application routes
│   └── main.jsx            # React entry point and router configuration
├── index.html
├── package.json
└── vite.config.js
```

### Getting started

#### Prerequisites

- [Node.js](https://nodejs.org/) `20.19+` or `22.12+`
- npm (included with Node.js)
- Git

#### Installation

```bash
git clone https://github.com/tsonw/Mon-Portfolio.git
cd Mon-Portfolio
npm install
```

#### Local development

```bash
npm run dev
```

Open the local URL displayed by Vite in your browser.

### Available scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite development server with hot reload |
| `npm run build` | Generate an optimized production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint across the project |
| `npm run deploy` | Build and publish `dist/` to GitHub Pages |

### Routes

| Route | Language | Description |
| --- | --- | --- |
| `/` | French | Default portfolio page |
| `/en` | English | English portfolio page |

The application is configured with the `/Mon-Portfolio/` base path in both Vite and React Router for GitHub Pages hosting.

### Updating portfolio content

- Edit French sections in `src/Components/main/`.
- Edit English sections in `src/Components/english/`.
- Update page composition and routes in `src/Pages/` and `src/App.jsx`.
- Add project screenshots and other media under `src/assets/`.
- Replace downloadable résumé files under `public/` while preserving or updating their referenced filenames.

After making changes, verify the application before deployment:

```bash
npm run lint
npm run build
npm run preview
```

### Deployment

The repository uses the `gh-pages` package. To publish a production build:

```bash
npm run deploy
```

This command runs the production build and publishes the generated `dist/` directory to GitHub Pages.

### Contributing

This is a personal portfolio, but constructive feedback and improvements are welcome. Please open an issue or create a focused pull request with a clear description of the proposed change.

### License

No open-source license is currently included in this repository. The source code and visual assets remain the property of the author unless explicit permission is granted.

---

<a id="francais"></a>

## Français

### À propos du projet

Ce dépôt contient le code source de mon portfolio personnel. Il me présente en tant qu'étudiant en troisième année de BUT Informatique à l'IUT d'Orsay et met en valeur mon parcours universitaire, mes compétences techniques ainsi qu'une sélection de projets personnels et académiques.

L'interface est disponible en français et en anglais. Elle est conçue comme une expérience monopage avec une navigation fluide entre les différentes sections.

### Site en ligne

La version en production est disponible à l'adresse suivante :

**[tsonw.github.io/Mon-Portfolio](https://tsonw.github.io/Mon-Portfolio/)**

### Fonctionnalités principales

- Interfaces en français et en anglais avec changement de langue intégré
- Section d'accueil avec liens vers les réseaux sociaux et CV téléchargeable
- Section À propos indiquant la recherche actuelle de stage
- Parcours de formation et compétences techniques classées par catégorie
- Présentation de projets académiques et personnels
- Galeries d'images avec navigation précédente/suivante
- Défilement fluide et restauration automatique de la position entre les routes
- Génération statique optimisée et déploiement sur GitHub Pages

### Technologies utilisées

| Catégorie | Technologies |
| --- | --- |
| Front-end | React 19, JavaScript, HTML5, CSS3 |
| Outil de build | Vite 7 |
| Routage | React Router 7 |
| Mise en forme | CSS personnalisé par composant |
| Qualité du code | ESLint 9 |
| Hébergement | GitHub Pages |

### Structure du projet

```text
Mon-Portfolio/
├── public/                 # Fichiers publics et CV téléchargeables
├── src/
│   ├── assets/             # Images, icônes, animations et médias des projets
│   ├── Components/
│   │   ├── english/        # Sections en anglais
│   │   └── main/           # Sections en français
│   ├── Pages/              # Composition des pages associées aux routes
│   ├── Styles/             # Styles globaux et styles des composants
│   ├── App.jsx             # Définition des routes
│   └── main.jsx            # Point d'entrée React et configuration du routeur
├── index.html
├── package.json
└── vite.config.js
```

### Installation

#### Prérequis

- [Node.js](https://nodejs.org/) `20.19+` ou `22.12+`
- npm (inclus avec Node.js)
- Git

#### Cloner et installer le projet

```bash
git clone https://github.com/tsonw/Mon-Portfolio.git
cd Mon-Portfolio
npm install
```

#### Lancer le serveur de développement

```bash
npm run dev
```

Ouvrez ensuite dans votre navigateur l'adresse locale affichée par Vite.

### Scripts disponibles

| Commande | Description |
| --- | --- |
| `npm run dev` | Démarre le serveur Vite avec rechargement à chaud |
| `npm run build` | Génère une version de production optimisée dans `dist/` |
| `npm run preview` | Prévisualise localement la version de production |
| `npm run lint` | Analyse le projet avec ESLint |
| `npm run deploy` | Compile et publie le dossier `dist/` sur GitHub Pages |

### Routes

| Route | Langue | Description |
| --- | --- | --- |
| `/` | Français | Page principale du portfolio |
| `/en` | Anglais | Version anglaise du portfolio |

L'application utilise le chemin de base `/Mon-Portfolio/` dans Vite et React Router afin d'être compatible avec l'hébergement GitHub Pages.

### Modifier le contenu du portfolio

- Modifiez les sections françaises dans `src/Components/main/`.
- Modifiez les sections anglaises dans `src/Components/english/`.
- Mettez à jour la composition des pages et les routes dans `src/Pages/` et `src/App.jsx`.
- Ajoutez les captures d'écran et autres médias dans `src/assets/`.
- Remplacez les CV téléchargeables dans `public/` en conservant leurs noms ou en mettant à jour les références correspondantes.

Après chaque modification, vérifiez l'application avant le déploiement :

```bash
npm run lint
npm run build
npm run preview
```

### Déploiement

Le dépôt utilise le paquet `gh-pages`. Pour publier une nouvelle version :

```bash
npm run deploy
```

Cette commande génère la version de production puis publie le dossier `dist/` sur GitHub Pages.

### Contribution

Ce projet est un portfolio personnel, mais les retours constructifs et les améliorations sont les bienvenus. Vous pouvez ouvrir une issue ou proposer une pull request ciblée en décrivant clairement la modification souhaitée.

### Licence

Aucune licence open source n'est actuellement incluse dans ce dépôt. Le code source et les ressources visuelles restent la propriété de l'auteur, sauf autorisation explicite.

---

<div align="center">
  Designed and developed by <strong>Thai Son Hoang</strong>.<br />
  Conçu et développé par <strong>Thai Son Hoang</strong>.
</div>
