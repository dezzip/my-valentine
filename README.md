# 💝 My Valentine - Alpaga Edition

Une page interactive et amusante pour demander à quelqu'un d'être votre Valentine, avec des alpagas mignons et un bouton "Non" impossible à cliquer !

## ✨ Fonctionnalités

### 🎮 Interactions
- **GIF Alpaga animé** au démarrage
- **Bouton "Non" fuyant** : Essayez de passer votre souris dessus... il s'échappe ! 🏃‍♂️
- **Bouton "Oui" grandissant** : Plus on refuse, plus il devient gros
- **Changement d'images** :
  - Alpaga triste 😢 quand on arrive à cliquer sur "Non"
  - Alpaga heureux 😊 quand on clique sur "Oui"

### 🎨 Design
- **Font Pixel Art** style rétro (Press Start 2P)
- **Couleurs douces** rose et blanc
- **Responsive** et adapté à tous les écrans
- **Message personnalisé** : "Coucou petit koala, veux tu être mon/ma Valentine?"

## 🎥 Démonstration

Visitez le projet sur GitHub : **[https://github.com/dezzip/my-valentine](https://github.com/dezzip/my-valentine)**

![Demo](demo.gif)
> *GIF de démonstration disponible dans le repository*

## 🚀 Installation

### Utilisation locale

1. **Clonez le repository**
```bash
git clone https://github.com/dezzip/my-valentine.git
cd my-valentine
```

2. **Ouvrez simplement le fichier**
```bash
open index.html
```
Ou double-cliquez sur `index.html` dans votre navigateur

### Déploiement sur un serveur

#### Option 1 : Hébergement statique (Netlify, Vercel, GitHub Pages)
1. Uploadez tous les fichiers
2. Le site est prêt !

#### Option 2 : Serveur web classique
1. Uploadez les fichiers via FTP dans votre dossier web :
   - `index.html`
   - `script.js`
   - `style.css`
   - Dossier `img/` (avec toutes les images)

#### Option 3 : Sous-domaine WordPress
1. Créez un dossier `valentine/` dans votre thème
2. Uploadez tous les fichiers
3. Utilisez le template `page-valentine.php` fourni

## 📁 Structure du projet

```
my-valentine/
├── index.html          # Page principale
├── script.js           # Logique interactive
├── style.css           # Styles visuels
├── page-valentine.php  # Template WordPress (optionnel)
├── img/
│   ├── alpaga.gif      # Alpaga animé (page d'accueil)
│   ├── alpaga-sad.jpeg # Alpaga triste (clic sur "Non")
│   └── aplaga happy.webp # Alpaga heureux (clic sur "Oui")
└── README.md
```

## 🎯 Comment ça marche ?

### Le bouton "Non" fuyant
```javascript
// Détecte le survol et déplace le bouton aléatoirement
noButton.addEventListener("mouseenter", moveNoButton);
noButton.addEventListener("mouseover", moveNoButton);
```

### Le bouton "Oui" grandissant
Chaque fois qu'on essaie de cliquer sur "Non", le bouton "Oui" devient 1.3x plus grand !

### Changement d'images
- **Au démarrage** : `alpaga.gif` (animé)
- **Clic sur "Non"** : `alpaga-sad.jpeg` (triste)
- **Clic sur "Oui"** : `aplaga happy.webp` (content)

## 🛠️ Personnalisation

### Changer le message
Dans `index.html`, ligne 18 :
```html
<p class="title">Coucou petit koala, veux tu être mon/ma Valentine?</p>
```

### Changer les images
Remplacez les fichiers dans le dossier `img/` en gardant les mêmes noms :
- `alpaga.gif` - Image/GIF d'ouverture
- `alpaga-sad.jpeg` - Réaction au "Non"
- `aplaga happy.webp` - Réaction au "Oui"

### Ajuster la vitesse du bouton
Dans `script.js`, modifiez la fonction `moveNoButton()` pour changer la zone de déplacement.

### Changer les couleurs
Dans `style.css` :
```css
body {
  background-color: #fff0f6; /* Couleur de fond */
}

.title {
  color: #f53699; /* Couleur du texte */
}
```

## 💡 Idées d'amélioration

- [ ] Ajouter des sons
- [ ] Ajouter des confettis quand on clique sur "Oui"
- [ ] Mode sombre
- [ ] Partager sur les réseaux sociaux
- [ ] Ajouter plus d'animations CSS
- [ ] Compteur de tentatives de clic sur "Non"

## 📝 Crédit

Créé avec ❤️ par **Jeremy**

## 📄 Licence

Ce projet est libre d'utilisation. Amusez-vous bien ! 🎉

---

⭐ **Projet sur GitHub** : [https://github.com/dezzip/my-valentine](https://github.com/dezzip/my-valentine)
