// Initialisation des variables globales
let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameActive = true;

// Sélection des éléments du DOM
const cells = document.querySelectorAll('.cell');
const statusDisplay = document.getElementById('status');

// Les 8 combinaisons gagnantes (indices du tableau)
const winConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Horizontales
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Verticales
    [0, 4, 8], [2, 4, 6]             // Diagonales
];

// Fonction pour vérifier le gagnant
function checkWinner() {
    return winConditions.some(condition => {
        return board[condition[0]] !== "" &&
               board[condition[0]] === board[condition[1]] &&
               board[condition[1]] === board[condition[2]];
    });
}

// Fonction globale pour réinitialiser le jeu (liée au bouton HTML)
window.resetGame = function() {
    board = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    gameActive = true;
    statusDisplay.innerText = "Tour du joueur : X";
    
    // Nettoyage visuel des cases
    cells.forEach(cell => {
        cell.innerText = "";
        cell.classList.remove('x', 'o');
    });
};

// Gestion des clics sur les cases
cells.forEach(cell => {
    cell.addEventListener('click', () => {
        const index = parseInt(cell.getAttribute('data-index'));

        // Vérifier si la case est vide et le jeu actif
        if (board[index] !== "" || !gameActive) return;

        // Mise à jour de la donnée et du visuel
        board[index] = currentPlayer;
        cell.innerText = currentPlayer;
        cell.classList.add(currentPlayer.toLowerCase()); // Ajoute classe 'x' ou 'o' pour le CSS

        // Vérification de victoire ou match nul
        if (checkWinner()) {
            statusDisplay.innerText = `Le joueur ${currentPlayer} a gagné !`;
            gameActive = false;
        } else if (!board.includes("")) {
            statusDisplay.innerText = "Match nul !";
            gameActive = false;
        } else {
            // Changement de joueur
            currentPlayer = currentPlayer === "X" ? "O" : "X";
            statusDisplay.innerText = `Tour du joueur : ${currentPlayer}`;
        }
    });
});