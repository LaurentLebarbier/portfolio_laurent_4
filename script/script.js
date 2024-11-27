// Définir les variables CSS pour les thèmes clair et sombre
const root = document.documentElement;
const themeToggleBtn = document.getElementById('theme-toggle');

const themes = {
    light: {
        '--bg-color': '#ffffff',
        '--text-color': '#000000',
        '--button-bg': '#000000',
        '--button-text': '#ffffff'
    },
    dark: {
        '--bg-color': '#1c1c1c',
        '--text-color': '#ffffff',
        '--button-bg': '#ffffff',
        '--button-text': '#000000'
    }
};

// Détecter le thème actuel (sombre ou clair)
let currentTheme = localStorage.getItem('theme') || 'light';
setTheme(currentTheme);

// Changer de thème lors du clic
themeToggleBtn.addEventListener('click', () => {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(currentTheme);
    localStorage.setItem('theme', currentTheme); // Sauvegarder la préférence de l'utilisateur
});

function setTheme(theme) {
    const themeVariables = themes[theme];
    for (let variable in themeVariables) {
        root.style.setProperty(variable, themeVariables[variable]);
    }
    themeToggleBtn.textContent = theme === 'light' ? 'Passer en mode sombre' : 'Passer en mode clair';
}
