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
Une fois un fichier ajouté un dossier, il suffit d'utiliser la syntaxe markdown afin de lié l'image ou le document en y insérant sa source. Pour savoir qu'elle chemin d'accès utiliser, il est possible de consulter les liens existants. 

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
| Image              | `![alt text](image.jpg)`                    |


- [Syntaxe avancée](https://www.markdownguide.org/cheat-sheet/#extended-syntax)
