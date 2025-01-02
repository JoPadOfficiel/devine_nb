# Projet : Devine le Nombre

## Objectif
Créer un jeu interactif en HTML, CSS et JavaScript où l'utilisateur doit deviner un nombre aléatoire.

---

## Description du jeu
L'utilisateur doit deviner un nombre compris entre 1 et 100. Le jeu lui fournit des indices comme "Plus grand" ou "Plus petit" pour l'aider. Une fois le bon nombre deviné, un message de victoire s'affiche.

---

## Consignes

### Fonctionnalités attendues

#### 1. **HTML**
- Un champ de saisie pour entrer un nombre.
- Un bouton "Soumettre" pour valider la réponse.
- Une zone d'affichage pour les indices et le message de victoire.

#### 2. **CSS**
- Un design simple mais agréable.
- Stylisez :
  - Le champ de saisie.
  - Le bouton.
  - La zone d'affichage des messages.

#### 3. **JavaScript**
- Générer un nombre aléatoire entre 1 et 100 au début de la partie.
- Vérifier la réponse de l'utilisateur :
  - Si le nombre est trop petit, afficher "Plus grand".
  - Si le nombre est trop grand, afficher "Plus petit".
  - Si le joueur devine correctement, afficher un message de victoire.

---

## Organisation du travail

### **Jour 1 : Structure HTML et CSS**
1. Créez une page avec :
   - Un champ pour entrer le nombre.
   - Un bouton "Soumettre".
   - Une zone pour afficher les messages.
2. Ajoutez un style basique pour rendre la page agréable.

### **Jour 2 : Logique du jeu avec JavaScript**
1. Générez un nombre aléatoire au chargement de la page.
2. Ajoutez un événement au clic sur le bouton :
   - Vérifiez si le nombre entré est correct.
   - Affichez "Plus grand" ou "Plus petit" selon le cas.
   - Affichez un message de victoire lorsque le bon nombre est trouvé.

---

## Bonus pour les élèves avancés
1. Limitez le nombre d'essais (par exemple, 10).
2. Ajoutez un bouton "Rejouer" qui redémarre la partie.
3. Changez la couleur des messages (rouge pour les erreurs, vert pour la victoire).

---

## Fichiers attendus
- **index.html** : Contient la structure de la page.
- **style.css** : Contient les styles de la page.
- **script.js** : Contient la logique du jeu en JavaScript.

---

## Exemples de rendu

### Exemple d'affichage initial
```
Entrez un nombre entre 1 et 100 : [______] [Soumettre]

[Zone pour afficher les messages]
```

### Exemple d'affichage après quelques essais
```
Entrez un nombre entre 1 et 100 : [______] [Soumettre]

Plus grand !
```

### Exemple d'affichage en cas de victoire
```
Entrez un nombre entre 1 et 100 : [______] [Soumettre]

Bravo ! Vous avez trouvé le nombre ! 🎉
