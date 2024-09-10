let currentExp = 0;
let currentLevel = 1;
let expForNextLevel = 100;

function updateExpBar() {
    const expBar = document.getElementById('exp-bar');
    const expDisplay = document.getElementById('exp');
    const levelDisplay = document.getElementById('level');
    const expNextLevelDisplay = document.getElementById('exp-next-level');

    const progressPercent = (currentExp / expForNextLevel) * 100;
    expBar.style.width = progressPercent + '%';

    expDisplay.textContent = currentExp;
    levelDisplay.textContent = currentLevel;
    expNextLevelDisplay.textContent = expForNextLevel;
}

function addExp(expAmount) {
    currentExp += expAmount;

    if (currentExp >= expForNextLevel) {
        currentExp = currentExp - expForNextLevel;
        currentLevel++;
        expForNextLevel += 50;

        alert(`Félicitations ! Vous avez atteint le niveau ${currentLevel}.`);
    }

    updateExpBar();
}

updateExpBar();

addExp(50);

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

function setTheme(theme) {
    localStorage.setItem('theme', theme);
    applyTheme(theme);
}

window.onload = function() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);
}
