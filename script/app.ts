
const screenElement = document.querySelector<HTMLInputElement>('#screen');
const buttonElements = document.querySelectorAll<HTMLButtonElement>('.boutton');


if (!screenElement) {
    throw new Error('Élément #screen introuvable dans le DOM.');
}

// Fonction pour mettre à jour le contenu de l'écran
function updateScreen(content: string): void {
    if (screenElement) {
        screenElement.value = content;
    }
}

// Fonction pour obtenir le contenu actuel de l'écran
function getScreenContent(): string {
    return screenElement?.value || '';
}

// Ajout des événements pour les boutons
buttonElements.forEach((button) => {
    button.addEventListener('click', (e) => {
        const buttonContent = (e.target as HTMLButtonElement).innerText;
        let input = buttonContent;

        if (input === 'x') {
            input = '*';
        }

        const currentContent = getScreenContent();
        updateScreen(currentContent + input);
    });
});

// Fonctions mathématiques
function sin(): void {
    const content = Number(getScreenContent());
    updateScreen(Math.sin(content).toString());
}

function cos(): void {
    const content = Number(getScreenContent());
    updateScreen(Math.cos(content).toString());
}

function tan(): void {
    const content = Number(getScreenContent());
    updateScreen(Math.tan(content).toString());
}

function pow(): void {
  
    const content = getScreenContent().split('^');  

    if (content.length === 2) {
        const base = Number(content[0].trim());    
        const exponent = Number(content[1].trim()); 
        if (isNaN(base) || isNaN(exponent)) {
            updateScreen(" Valeur invalide");
        } else {
            const result = Math.pow(base, exponent);  
            updateScreen(result.toString());  
                  }
    } else {
        updateScreen("Format invalide");  
    }
}

function sqrt(): void {
    const content = Number(getScreenContent());
    updateScreen(Math.sqrt(content).toString());
    if (isNaN(content) || content < 0) {
      updateScreen('Maths Error');
      return;
  }
}

function log(): void {
    const content = Number(getScreenContent());
    updateScreen(Math.log(content).toString());
}

function e(): void {
    updateScreen('2.71828182846');
}

function fact(): void {
    const content = Number(getScreenContent());
    if (isNaN(content) || content < 0) {
        updateScreen('Maths Error');
        return;
    }
    let factorial = 1;
    for (let i = 1; i <= content; i++) {
        factorial *= i;
    }
    updateScreen(factorial.toString());
}

function backspc(): void {
    const content = getScreenContent();
    updateScreen(content.slice(0, -1));
}

// Fonction pour calculer le pourcentage
function calculatePercentage(): void {
    const content = Number(getScreenContent());
    updateScreen((content / 100).toString());
}

// Fonctions de conversion
function convertToBinary(): void {
    const content = parseInt(getScreenContent() || '0', 10);
    updateScreen(content.toString(2));
    if (isNaN(content) || content < 0) {
      updateScreen('Maths Error');
      return;
  } 
}

function convertToHexadecimal(): void {
    const content = parseInt(getScreenContent() || '0', 10);
    updateScreen(content.toString(16).toUpperCase());
    if (isNaN(content) || content < 0) {
      updateScreen('Maths Error');
      return;
  }
}

function convertToDecimal(): void {
    const content = getScreenContent() || '0';
    if (/^[01]+$/.test(content)) {
        updateScreen(parseInt(content, 2).toString());
    } else if (/^[0-9A-F]+$/i.test(content)) {
        updateScreen(parseInt(content, 16).toString());
    } else {
        updateScreen('Maths Error');
    }
}

// Fonction pour afficher l'heure et mettre à jour le timer
function afficherHeure(): void {
    const timerElement = document.getElementById('timer')!;

    if (!timerElement) {
        throw new Error('Élément #timer introuvable dans le DOM.');
    }

    // Fonction pour mettre à jour le timer
    function updateTimer(): void {
        
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');

        timerElement.textContent = `${hours}h ${minutes}m ${seconds}s`;

        setTimeout(updateTimer, 1000);
    }

    updateTimer();
}

// Fonction pour basculer entre le mode scientifique et normal
function toggleScientificMode(): void {
    
    const normalMode = document.querySelector('.mode_normal') as HTMLElement;
    const scientificMode = document.querySelector('.mode_scientifique') as HTMLElement;

    
    if (scientificMode.style.display === 'none') {
        scientificMode.style.display = 'block'; 
        normalMode.style.display = 'none';     
    } else {
        scientificMode.style.display = 'none'; 
        normalMode.style.display = 'block';    
    }
}


