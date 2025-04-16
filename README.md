#  Instructions

## Mise à jour du CV

Pour mettre à jour le CV, il faut simplement ajouter le nouveau CV au format PD dans le dossier `CV` situé dans le dossier `assets`
[Lien vers le dossier CV](https://github.com/tripledoublev/celia/tree/main/assets/CV)

- Add files

Afin de maintenir toujours le même lien, le CV doit être nommé ainsi:
- `CPS_CV_EN.pdf`  
- `CPS_CV_FR.pdf`  

## Mise à jour de la biographie

Les fichiers contenant la biographie sont nommés ainsi:
- [en.markdown](https://github.com/tripledoublev/celia/blob/main/en.markdown)
- [fr.markdown](https://github.com/tripledoublev/celia/blob/main/fr.markdown)

Il suffit de mettre à jour le contenu du fichier en question en clickant sur le bouton `✏️` (`edit`) en haut à droite de la page.

## Structure des dossiers

Pour ajouter des fichiers, il suffit de les mettre dans le dossier approprié.

Tous les fichiers sur le site se retrouvent dans le dossier `assets`:

```
└─ assets  
    ├── CV  
    ├── css  
    ├── fonts  
    │   ├── grandhaven  
    │   └── spectral  
    ├── img  
    └── press  
```
Une fois un fichier ajouté un dossier, il suffit d'utiliser la syntaxe markdown afin de lier l'image ou le document en y insérant sa source. Pour savoir qu'elle chemin d'accès utiliser, il est possible de consulter les liens existants. 

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
