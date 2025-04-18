# Instructions

## Mise à jour du CV

Pour mettre à jour le CV, il faut simplement ajouter le nouveau CV au format PDF dans le dossier `CV` situé dans le dossier `assets`
[Lien vers le dossier CV](https://github.com/tripledoublev/celia/tree/main/assets/CV)

Afin de maintenir toujours le même lien, le CV doit être nommé ainsi:
- `CPS_CV_EN.pdf`  
- `CPS_CV_FR.pdf`  

## Mise à jour de la biographie

Les fichiers contenant la biographie sont nommés ainsi:
- EN: dans le dossier `en`: [bio.md](https://github.com/tripledoublev/celia/blob/main/en/bio.md)
- FR: [bio.md](https://github.com/tripledoublev/celia/blob/main/bio.md)

Il suffit de mettre à jour le contenu du fichier en question en cliquant sur le bouton `✏️` (`edit`) en haut à droite de la page.

## Structure des dossiers

Le site est organisé selon une structure Jekyll standard avec des dossiers spécifiques pour différents types de contenu :

```
.
├── _config.yml           # Configuration principale du site
├── _config_staging.yml   # Configuration pour l'environnement de staging
├── _data/               # Données et traductions
├── _includes/           # Composants réutilisables
│   ├── head.html        # En-tête HTML
│   ├── nav.html         # Navigation
│   ├── project_list.html # Liste des projets
│   └── image_gallery.html # Galerie d'images
├── _layouts/            # Templates de pages
│   ├── page.html        # Template de page standard
│   ├── project.html     # Template de page de projet
│   └── custom_index.html # Template de page d'accueil
├── _plugins/            # Plugins Jekyll personnalisés
├── _posts/              # Articles de blog
├── _projects/           # Contenu des projets
├── assets/              # Ressources statiques
│   ├── CV/             # Fichiers CV
│   ├── css/            # Feuilles de style
│   ├── js/             # Scripts JavaScript
│   ├── icons/          # Icônes
│   ├── img/            # Images générales
│   │   |── projects/   # Images des projets
|   |   └── press       # Image de presse
│   ├── press/          # PDF de presse
│   └── fonts/          # Polices de caractères
├── en/                  # Contenu en anglais
├── scripts/             # Scripts utilitaires
├── dldimg.py           # Script de téléchargement d'images
├── index.md            # Page d'accueil
├── bio.md              # Biographie
├── presse.md           # Page de presse
└── projets.md          # Liste des projets
```

### Organisation des projets

Les projets sont gérés avec une structure spécifique :
- Les métadonnées et le contenu textuel des projets sont définis dans le dossier `_projects/`
- Les images sont organisées dans des sous-dossiers par projet dans `assets/img/projects/`

### Création d'un nouveau projet

Pour créer un nouveau projet, suivez ces étapes :

1. **Créer le dossier des images**
   - Créez un nouveau dossier dans `assets/img/projects/` avec le nom du projet (en minuscules, sans espaces)
   - Exemple : `assets/img/projects/mon-nouveau-projet`

2. **Ajouter les images**
   - Placez toutes les images du projet dans le dossier créé
   - L'image d'en-tête doit être nommée `header.webp` et placée à la racine du dossier
   - Toutes les images doivent être au format WebP pour une meilleure performance
   - La galerie d'images sera générée automatiquement à partir des images dans le dossier
   - Pour les PDFs, créez un dossier `pdf` et placez-y les fichiers PDF
   - Pour les captures d'écran de PDFs, nommez-les avec le préfixe `pdf_`

3. **Créer les sous-titres (optionnel)**
   - Créez un fichier `captions.yml` dans le dossier du projet pour les sous-titres des images
   - Structure du fichier :
   ```yaml
   image1.webp: "Description de l'image 1"
   image2.webp: "Description de l'image 2"
   ```

4. **Créer le fichier du projet**
   - Créez un fichier `nom-du-projet.md` dans le dossier `_projects`
   - Utilisez le front matter suivant :
   ```markdown
   ---
   layout: project
   title: "Titre du projet"
   year: 2024
   header_image: assets/img/projects/nom-du-projet/header.webp
   gallery_folder: assets/img/projects/nom-du-projet
   lang: fr
   ---
   
   Contenu du projet en Markdown
   ```

### Utilisation de header_image

L'image d'en-tête (`header.webp`) est utilisée de plusieurs façons :
- Elle apparaît en haut de la page du projet
- Elle est utilisée comme vignette dans la liste des projets
- Elle doit être de haute qualité et représentative du projet
- Dimensions recommandées : 1920x1080 pixels
- Format : WebP pour une meilleure performance

## Gestion des médias

### Images de presse
- Placer les images dans `assets/img/press/`
- Format : WebP
- Nommage : descriptif et en minuscules

### PDFs de presse
- Placer les fichiers PDF dans `assets/press/`
- Nommage : descriptif et en minuscules

### Structure des projets
```
assets/img/projects/
└── nom-du-projet/
    ├── header.webp          # Image d'en-tête
    ├── image1.webp          # Images de la galerie
    ├── image2.webp
    ├── pdf/                 # Dossier pour les PDFs
    │   └── document.pdf
    ├── pdf.webp             # Image pour les PDFs
    └── captions.yml         # Sous-titres des images 
```

## Internationalisation

### Structure des fichiers
- Français : fichiers à la racine
- Anglais : fichiers dans le dossier `/en/`
- Les fichiers doivent avoir le même nom dans les deux langues

### Front Matter
```markdown
---
layout: project
title: "Titre du projet"
year: 2024
header_image: assets/img/projects/nom-du-projet/header.webp
gallery_folder: assets/img/projects/nom-du-projet
lang: fr  # ou 'en' pour la version anglaise
---
```

## Guide d'internationalisation (i18n)

Ce site web prend en charge le contenu en français et en anglais. Voici comment gérer le contenu multilingue sur ce site.

### Structure des répertoires

- Les pages spécifiques à une langue se trouvent à la racine ou dans les répertoires `/en/`
- Les ressources partagées (images, CSS, JavaScript) sont dans `/assets/`
- Les traductions sont stockées dans `/_data/translations.yml`
- Les définitions de langues sont dans `/_data/languages.yml`

### Ajout de nouveau contenu

#### Création d'une nouvelle page

1. Créez la version française principale de la page dans le répertoire racine ou approprié
2. Créez la version anglaise dans le répertoire `/en/` avec le même nom de fichier
3. Assurez-vous que les deux pages ont le même attribut `identifier` dans le front matter

Exemple de front matter pour une page française :
```yaml
---
layout: page
title: Mon Titre
permalink: /mon-titre/
lang: fr
identifier: ma-page
---
```

Exemple de front matter pour l'équivalent anglais :
```yaml
---
layout: page
title: My Title
permalink: /en/my-title/
lang: en
identifier: ma-page
---
```

#### Ajout de traductions

Pour ajouter de nouvelles traductions de texte UI :

1. Ouvrez `/_data/translations.yml`
2. Ajoutez votre nouveau texte sous la section appropriée (ou créez-en une nouvelle)
3. Incluez les traductions pour les deux langues

Exemple :
```yaml
button:
  fr:
    submit: "Soumettre"
    cancel: "Annuler"
  en:
    submit: "Submit"
    cancel: "Cancel"
```

#### Utilisation des traductions dans les modèles

Pour utiliser du texte traduit dans les modèles, utilisez le filtre `t` :

```liquid
{{ 'button.submit' | t }}
```

Cela affichera "Soumettre" sur les pages françaises et "Submit" sur les pages anglaises.

### Changement de langue

Le sélecteur de langue conserve automatiquement la page actuelle lorsque c'est possible. Par exemple, lors de la consultation d'une page de projet en français, cliquer sur "EN" vous amènera à la version anglaise du même projet.

### Implémentation technique

- Le plugin Jekyll dans `_plugins/i18n_filter.rb` fournit la traduction et la gestion des URL
- `assets/js/language-switcher.js` aide à changer de langue côté client
- Chaque page a un attribut `lang` dans son front matter
- Les pages qui doivent être liées dans différentes langues partagent le même `identifier`

### Langue par défaut

Le français (fr) est la langue par défaut du site.

## Fonctionnement des branches

Le projet utilise deux branches principales pour le déploiement:

- **staging**: Les changements poussés sur la branche `staging` sont déployés sur [https://tripledoublev.github.io/celia/](https://tripledoublev.github.io/celia/).
- **main**: Les changements poussés sur la branche `main` sont déployés sur [https://www.celia-perrin-sidarous.com/](https://www.celia-perrin-sidarous.com/).

Il faut s'assurer d'effectuer les modifications sur la branche appropriée en fonction de l'environnement de déploiement souhaité.

## Formattage du texte en Markdown

Syntaxe de base:

| Element            | Markdown Syntax                             |
|--------------------|---------------------------------------------|
| Heading            | `# H1`<br>`## H2`<br>`### H3`               |
| Bold               | `**bold text**`                             |
| Italic             | `*italicized text*`                         |
| Blockquote         | `> blockquote`                              |
| Ordered List       | `1. First item`<br>`2. Second item`<br>`3. Third item` |
| Unordered List     | `- First item`<br>`- Second item`<br>`- Third item` |
| Code               | `` `code` ``                                |
| Horizontal Rule    | `---`                                       |
| Link               | `[title](https://www.example.com)`           |
| Image              | `![alt text](image.webp)`                    |


- [Syntaxe avancée](https://www.markdownguide.org/cheat-sheet/#extended-syntax)

## Configuration du développement

### Prérequis
- Ruby 2.7 ou supérieur
- Bundler
- Jekyll

### Installation
1. Cloner le dépôt
2. Installer les dépendances :
```bash
bundle install
```

### Lancement du serveur local
```bash
bundle exec jekyll serve
```
Le site sera disponible à l'adresse `http://localhost:4000`

## Optimisation des images

### Conversion en WebP
Toutes les images doivent être converties en format WebP pour une meilleure performance. 

### Taille et qualité recommandées
- Images d'en-tête (header.webp) : 1920x1080 pixels
- Qualité WebP : 80-85% pour un bon compromis qualité/taille

## Workflow de déploiement

### Branches
- `main` : Production (https://www.celia-perrin-sidarous.com/)
- `staging` : Pré-production (https://tripledoublev.github.io/celia/)

### Processus de déploiement
1. Créer une branche de fonctionnalité depuis `staging`
2. Faire les modifications
3. Tester localement avec `bundle exec jekyll serve`
4. Soumettre une pull request vers `staging`
5. Après validation, merger dans `staging`
6. Une fois testé en pré-production, merger `staging` dans `main`

### Fichiers de configuration
- `_config.yml` : Configuration principale
- `_config_staging.yml` : Configuration spécifique à l'environnement de staging
