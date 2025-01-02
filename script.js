// TP 2 : Devinez le nombre mystère
// Objectif :
// Créer un jeu où l'utilisateur doit deviner un nombre aléatoire généré par le programme.

// Instructions :
// Générer un nombre aléatoire :
// Utiliser Math.random() et Math.floor() pour générer un nombre entier aléatoire entre 1 et 100.

// Initialiser le nombre d'essais :
// Créer une variable pour suivre le nombre d'essais de l'utilisateur, initialisée à 0.

// Boucle de jeu :
// Utiliser une boucle while qui continue tant que l'utilisateur n'a pas deviné le nombre.
// Demander à l'utilisateur de deviner le nombre avec prompt().
// Incrémenter le nombre d'essais.
// Utiliser des conditions pour comparer le nombre deviné au nombre mystère :
// Si le nombre deviné est trop bas, afficher un message à l'utilisateur.
// Si le nombre deviné est trop haut, afficher un message à l'utilisateur.
// Si le nombre deviné est correct, afficher un message de félicitations avec le nombre d'essais, puis terminer la boucle.

// Limite d'essais :
// Ajouter une condition pour limiter le nombre d'essais.
// Si la limite est atteinte, afficher un message à l'utilisateur et terminer la boucle.

// Tips :
// Des conditions if comparent le nombre deviné au nombre mystère pour guider l'utilisateur.

function random() {
    return Math.floor(Math.random() * 100)+1;
}

function devinerJeux() {
    let nbMystere = random();
    let essai = 0
    while (essai != nbMystere){
        let nb = parseInt(prompt("Devinez le nombre mystère entre 1 et 100"));
        if (nb < nbMystere) {
            document.write("Le nombre deviné est trop bas");
        } else if (nb > nbMystere) {
            document.write("Le nombre deviné est trop haut");
        }
        else {
            document.write("Bravo, vous avez deviné le nombre mystère en " + essai + " essais");
        }
        essai++;

        if (essai == nbMystere) {
            document.write("Vous avez atteint la limite d'essais");
        }
    }   
}


/*-----------------------------------------------------------------------------*/

// Version HTML
function devinerJeuxHTML() {
    let nbMystere = random();
    let essai = 0;
    let message = document.getElementById('message');
    let attempts = document.getElementById('attempts');
    let form = document.getElementById('form');

    form.onsubmit = function(event) {
        event.preventDefault();
        let input = document.getElementById('nombre');
        let nb = parseInt(input.value);
        if (nb < nbMystere) {
            message.textContent = "Le nombre deviné est trop bas";
        } else if (nb > nbMystere) {
            message.textContent = "Le nombre deviné est trop haut";
        } else {
            message.textContent = "Bravo, vous avez deviné le nombre mystère en " + essai + " essais";
            form.disabled = true;
        }
        essai++;
        attempts.textContent = "Nombre d'essais : " + essai;
        input.value = '';
    }
}


// Version HTML avec Bonus
function devinerJeuxHTMLBonus() {
    let nbMystere = random();
    let essai = 0;
    const MAX_ESSAIS = 10;
    let message = document.getElementById('message');
    let attempts = document.getElementById('attempts');
    let input = document.getElementById('nombre');
    let btn = document.getElementById('submitBtn');

    // Créer le bouton rejouer
    let rejouerBtn = document.createElement('button');
    rejouerBtn.textContent = 'Rejouer';
    rejouerBtn.style.display = 'none';
    rejouerBtn.style.marginLeft = '10px';
    btn.parentNode.appendChild(rejouerBtn);

    function afficherMessage(texte, type) {
        message.textContent = texte;
        if (type === 'erreur') {
            message.style.color = '#dc3545';
        } else if (type === 'succes') {
            message.style.color = '#28a745';
        } else {
            message.style.color = '#ffc107';
        }
    }

    function rejouer() {
        nbMystere = random();
        essai = 0;
        btn.disabled = false;
        rejouerBtn.style.display = 'none';
        message.textContent = '';
        attempts.textContent = "Nombre d'essais : 0";
        input.value = '';
        input.focus();
    }

    // Gestion du clic sur le bouton
    btn.onclick = function() {
        let nb = parseInt(input.value);

        if (isNaN(nb) || nb < 1 || nb > 100) {
            afficherMessage('Veuillez entrer un nombre entre 1 et 100', 'erreur');
            return;
        }

        essai++;
        let essaisRestants = MAX_ESSAIS - essai;
        attempts.textContent = `Nombre d'essais : ${essai} (${essaisRestants} restants)`;

        if (nb < nbMystere) {
            afficherMessage("Le nombre deviné est trop bas", 'indice');
        } else if (nb > nbMystere) {
            afficherMessage("Le nombre deviné est trop haut", 'indice');
        } else {
            afficherMessage("Bravo, vous avez deviné le nombre mystère en " + essai + " essais ! 🎉", 'succes');
            btn.disabled = true;
            rejouerBtn.style.display = 'inline-block';
        }

        if (essai >= MAX_ESSAIS && nb !== nbMystere) {
            afficherMessage(`Game Over ! Le nombre était ${nbMystere}`, 'erreur');
            btn.disabled = true;
            rejouerBtn.style.display = 'inline-block';
        }

        input.value = '';
        input.focus();
    }

    rejouerBtn.onclick = rejouer;

    // Support de la touche Entrée
    input.addEventListener('keyup', function(e) {
        if (e.key === 'Enter' && !btn.disabled) {
            btn.onclick();
        }
    });
}   

devinerJeuxHTMLBonus();
