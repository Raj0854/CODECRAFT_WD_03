const cells = document.querySelectorAll(".cell");
const statusText = document.getElementById("status");
const restartBtn = document.getElementById("restartBtn");

let currentPlayer = "X";

let gameRunning = true;

let board = ["", "", "", "", "", "", "", ""];


const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [2, 4, 6]
];


cells.forEach(function (cell, index) {

    cell.addEventListener("click", function () {

        if (cell.textContent !== "" || gameRunning === false) {
            return;
        }

        cell.textContent = currentPlayer;

        board[index] = currentPlayer;

        checkWinner();

    });

});


function checkWinner() {

    for (let condition of winningConditions) {

        let first = board[condition[0]];
        let second = board[condition[1]];
        let third = board[condition[2]];

        if (
            first !== "" &&
            first === second &&
            second === third
        ) {

            statusText.textContent =
                "Player " + currentPlayer + " wins!";

            gameRunning = false;

            return;
        }
    }


    if (!board.includes("")) {

        statusText.textContent = "It's a draw!";

        gameRunning = false;

        return;
    }


    if (currentPlayer === "X") {
        currentPlayer = "O";
    } else {
        currentPlayer = "X";
    }

    statusText.textContent =
        "Player " + currentPlayer + "'s turn";
}


restartBtn.addEventListener("click", restartGame);


function restartGame() {

    currentPlayer = "X";

    gameRunning = true;

    board = ["", "", "", "", "", "", "", ""];

    statusText.textContent = "Player X's turn";


    cells.forEach(function (cell) {
        cell.textContent = "";
    });
}

