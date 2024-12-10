var screenElement = document.querySelector('#screen');
var buttonElements = document.querySelectorAll('.boutton');
if (!screenElement) {
    throw new Error('Élément #screen introuvable dans le DOM.');
}
// Fonction pour mettre à jour le contenu de l'écran
function updateScreen(content) {
    if (screenElement) {
        screenElement.value = content;
    }
}
// Fonction pour obtenir le contenu actuel de l'écran
function getScreenContent() {
    return (screenElement === null || screenElement === void 0 ? void 0 : screenElement.value) || '';
}
// Ajout des événements pour les boutons
buttonElements.forEach(function (button) {
    button.addEventListener('click', function (e) {
        var buttonContent = e.target.innerText;
        var input = buttonContent;
        if (input === 'x') {
            input = '*';
        }
        var currentContent = getScreenContent();
        updateScreen(currentContent + input);
    });
});
// Fonctions mathématiques
function sin() {
    var content = Number(getScreenContent());
    updateScreen(Math.sin(content).toString());
}
function cos() {
    var content = Number(getScreenContent());
    updateScreen(Math.cos(content).toString());
}
function tan() {
    var content = Number(getScreenContent());
    updateScreen(Math.tan(content).toString());
}
function pow() {
    var content = getScreenContent().split('^');
    if (content.length === 2) {
        var base = Number(content[0].trim());
        var exponent = Number(content[1].trim());
        if (isNaN(base) || isNaN(exponent)) {
            updateScreen(" Valeur invalide");
        }
        else {
            var result = Math.pow(base, exponent);
            updateScreen(result.toString());
        }
    }
    else {
        updateScreen("Format invalide");
    }
}
function sqrt() {
    var content = Number(getScreenContent());
    updateScreen(Math.sqrt(content).toString());
    if (isNaN(content) || content < 0) {
        updateScreen('Maths Error');
        return;
    }
}
function log() {
    var content = Number(getScreenContent());
    updateScreen(Math.log(content).toString());
}
function e() {
    updateScreen('2.71828182846');
}
function fact() {
    var content = Number(getScreenContent());
    if (isNaN(content) || content < 0) {
        updateScreen('Maths Error');
        return;
    }
    var factorial = 1;
    for (var i = 1; i <= content; i++) {
        factorial *= i;
    }
    updateScreen(factorial.toString());
}
function backspc() {
    var content = getScreenContent();
    updateScreen(content.slice(0, -1));
}
// Fonction pour calculer le pourcentage
function calculatePercentage() {
    var content = Number(getScreenContent());
    updateScreen((content / 100).toString());
}
// Fonctions de conversion
function convertToBinary() {
    var content = parseInt(getScreenContent() || '0', 10);
    updateScreen(content.toString(2));
    if (isNaN(content) || content < 0) {
        updateScreen('Maths Error');
        return;
    }
}
function convertToHexadecimal() {
    var content = parseInt(getScreenContent() || '0', 10);
    updateScreen(content.toString(16).toUpperCase());
    if (isNaN(content) || content < 0) {
        updateScreen('Maths Error');
        return;
    }
}
function convertToDecimal() {
    var content = getScreenContent() || '0';
    if (/^[01]+$/.test(content)) {
        updateScreen(parseInt(content, 2).toString());
    }
    else if (/^[0-9A-F]+$/i.test(content)) {
        updateScreen(parseInt(content, 16).toString());
    }
    else {
        updateScreen('Maths Error');
    }
}
// Fonction pour afficher l'heure et mettre à jour le timer
function afficherHeure() {
    var timerElement = document.getElementById('timer');
    if (!timerElement) {
        throw new Error('Élément #timer introuvable dans le DOM.');
    }
    // Fonction pour mettre à jour le timer
    function updateTimer() {
        var now = new Date();
        var hours = now.getHours().toString().padStart(2, '0');
        var minutes = now.getMinutes().toString().padStart(2, '0');
        var seconds = now.getSeconds().toString().padStart(2, '0');
        timerElement.textContent = "".concat(hours, "h ").concat(minutes, "m ").concat(seconds, "s");
        setTimeout(updateTimer, 1000);
    }
    updateTimer();
}
// Fonction pour basculer entre le mode scientifique et normal
function toggleScientificMode() {
    // Sélectionner les éléments avec les classes .mode_normal et .mode_scientifique
    var normalMode = document.querySelector('.mode_normal');
    var scientificMode = document.querySelector('.mode_scientifique');
    // Vérifier si l'élément scientificMode est masqué
    if (scientificMode.style.display === 'none') {
        scientificMode.style.display = 'block'; // Afficher le mode scientifique
        normalMode.style.display = 'none'; // Masquer le mode normal
    }
    else {
        scientificMode.style.display = 'none'; // Masquer le mode scientifique
        normalMode.style.display = 'block'; // Afficher le mode normal
    }
}
