// Variables initiales pour le système d'EXP
let currentExp = 0;
let currentLevel = 1;
let expForNextLevel = 100;

// Fonction pour mettre à jour l'affichage de l'EXP
function updateExpBar() {
    const expBar = document.getElementById('exp-bar');
    const expDisplay = document.getElementById('exp');
    const levelDisplay = document.getElementById('level');
    const expNextLevelDisplay = document.getElementById('exp-next-level');

    // Calcul du pourcentage de progression
    const progressPercent = (currentExp / expForNextLevel) * 100;
    expBar.style.width = progressPercent + '%';

    // Mettre à jour l'affichage de l'EXP et du niveau
    expDisplay.textContent = currentExp;
    levelDisplay.textContent = currentLevel;
    expNextLevelDisplay.textContent = expForNextLevel;
}

// Fonction pour ajouter de l'EXP
function addExp(expAmount) {
    currentExp += expAmount;

    // Si l'EXP dépasse ou égale l'EXP nécessaire pour passer au niveau suivant
    if (currentExp >= expForNextLevel) {
        currentExp = currentExp - expForNextLevel;
        currentLevel++;
        expForNextLevel += 50; // Augmente le seuil d'EXP nécessaire pour les niveaux suivants

        // Afficher un message ou une animation pour notifier le changement de niveau
        alert(`Félicitations ! Vous avez atteint le niveau ${currentLevel}.`);
    }

    // Mettre à jour la barre d'EXP
    updateExpBar();
}

// Initialisation de la barre d'EXP
updateExpBar();

// Exemple d'ajout d'EXP (par exemple, après avoir complété une action)
addExp(50); // Ajoute 50 points d'EXP à l'utilisateur

// Gestion des thèmes (thème sombre ou clair) avec localStorage
function applyTheme(theme) {
    const body = document.getElementById('body');
    if (theme === 'light') {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
    } else if (theme === 'dark') {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
    }
}

// Fonction pour définir le thème et l'enregistrer dans le localStorage
function setTheme(theme) {
    localStorage.setItem('theme', theme); // Enregistre le thème dans le localStorage
    applyTheme(theme);
}

// Lorsque la page se charge, applique le thème enregistré
window.onload = function() {
    const savedTheme = localStorage.getItem('theme') || 'light'; // Par défaut, le thème clair
    applyTheme(savedTheme); // Applique le thème au chargement de la page
}
