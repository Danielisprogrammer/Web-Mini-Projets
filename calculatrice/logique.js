const display = document.getElementById('display');
const buttons = document.getElementById('buttons');

buttons.addEventListener('click', (e) => {
    if (e.target.tagName !== 'BUTTON') return;
    
    const value = e.target.dataset.value;

    if (value === 'C') {
        display.innerText = '0';
    } else if (value === '=') {
        try {
            display.innerText = eval(display.innerText);
        } catch {
            display.innerText = 'Erreur';
        }
    } else {
        if (display.innerText === '0') display.innerText = value;
        else display.innerText += value;
    }
});