/***********************
 * TIC-TAC-TOE (10x6)
 ***********************/
const board = document.getElementById("board");
const statusText = document.getElementById("game-status");
const restartBtn = document.getElementById("restart");

const rows = 6;
const cols = 10;
let boardState = Array(rows * cols).fill(null);
let currentPlayer = "X";
let gameActive = true;

// Kreye tablo ak selil yo
function createBoard() {
  board.innerHTML = "";
  for (let i = 0; i < rows * cols; i++) {
    let cell = document.createElement("div");
    cell.classList.add("cell");
    cell.dataset.index = i;
    cell.addEventListener("click", handleCellClick);
    board.appendChild(cell);
  }
}

// Klike sou yon selil
function handleCellClick(event) {
  const cell = event.target;
  const index = cell.dataset.index;

  if (boardState[index] || !gameActive) return;

  boardState[index] = currentPlayer;
  cell.textContent = currentPlayer;

  if (checkWin()) {
    statusText.textContent = `Jwè ${currentPlayer} genyen!`;
    gameActive = false;
    return;
  }

  currentPlayer = currentPlayer === "X" ? "O" : "X";
  statusText.textContent = `Jwè ${currentPlayer} ap jwe`;
}

// Verifye si gen gayan
function checkWin() {
  // Tcheke ganyan orizontal, vètikal, ak dyagonal
  return false;
}

// Rekòmanse jwèt la
restartBtn.addEventListener("click", () => {
  boardState.fill(null);
  gameActive = true;
  currentPlayer = "X";
  statusText.textContent = "Nouvo jwèt!";
  createBoard();
});

// Kreye tablo a lè paj la chaje
createBoard();

/***********************
 * DEPOZE CRYPTO (SIMILASYON)
 ***********************/
const cryptoDepositBtn = document.getElementById("crypto-deposit");
const cryptoStatus = document.getElementById("crypto-status");

cryptoDepositBtn.addEventListener("click", () => {
  cryptoStatus.textContent = "Ap trete tranzaksyon...";
  setTimeout(() => {
    cryptoStatus.textContent = "Depo crypto reyalize ak siksè!";
  }, 2000);
});

/***********************
 * DEPOZE MANYÈL
 ***********************/
const manualForm = document.getElementById("manual-deposit-form");
const manualStatus = document.getElementById("manual-status");

manualForm.addEventListener("submit", (event) => {
  event.preventDefault();
  manualStatus.textContent = "Ap verifye prèv depo...";
  setTimeout(() => {
    manualStatus.textContent = "Depo ou soumèt avèk siksè. Ap tann konfimasyon.";
  }, 3000);
});
