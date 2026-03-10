let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameActive = true;

const cells = document.querySelectorAll('.cell');
const statusDisplay = document.getElementById('status');

const winConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

cells.forEach(cell => cell.addEventListener('click', () => {
    const index = cell.getAttribute('data-index');
    if (board[index] !== "" || !gameActive) return;

    board[index] = currentPlayer;
    cell.innerText = currentPlayer;
    
    if (checkWinner()) {
        statusDisplay.innerText = `Joueur ${currentPlayer} a gagné !`;
        gameActive = false;
    } else if (!board.includes("")) {
        statusDisplay.innerText = "Match nul !";
        gameActive = false;
    } else {
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        statusDisplay.innerText = `Tour du joueur : ${currentPlayer}`;
    }
}));

function checkWinner() {
    return winConditions.some(cond => {
        return cond.every(i => board[i] === currentPlayer);
    });
}

function resetGame() {
    board = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    gameActive = true;
    cells.forEach(cell => cell.innerText = "");
    statusDisplay.innerText = "Tour du joueur : X";
}