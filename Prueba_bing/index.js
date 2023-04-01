// Here is a possible code to create a sudoku game in JavaScript:

// Define the board
var board = [
  [0, 0, 0, 2, 6, 0, 7, 0, 1],
  [6, 8, 0, 0, 7, 0, 0, 9, 0],
  [1, 9, 0, 0, 0, 4, 5, 0, 0],
  [8, 2, 0, 1, 0, 0, 0, 4, 0],
  [0, 0, 4, 6, 0, 2, 9, 0, 0],
  [0, 5, 0, 0, 0, 3, 0, 2, 8],
  [0, 0, 9, 3, 0, 0, 0, 7 ,4],
   [0 ,4 ,0 ,0 ,5 ,0 ,0 ,3 ,6],
   [7 ,0 ,3 ,0 ,1 ,8 ,0 ,0 ,0]
];

// Define the size of the board
var size = board.length;

// Define the size of each sub-grid
var subSize = Math.sqrt(size);

// Create a function to display the board
function displayBoard() {
    for (var i = 0; i < size; i++) {
        if (i % subSize == 0 && i != size - subSize) {
            console.log("-".repeat(size * subSize + subSize -1));
        }
        var row = "";
        for (var j = 0; j < size; j++) {
            if (j % subSize == subSize -1 && j != size -1) {
                row += board[i][j] + " | ";
            } else {
                row += board[i][j] + " ";
            }
        }
        console.log(row);
    }
}

// Create a function to check if a number is valid in a given position
function isValid(row,col,num) {
    // Check row
    for (var i = 0; i < size; i++) {
        if (board[row][i] == num) {
            return false;
        }
    }
    // Check column
    for (var j = 0; j < size; j++) {
        if (board[j][col] == num) {
            return false;
        }
    }
    // Check sub-grid
    var subRow = Math.floor(row / subSize) * subSize;
    var subCol = Math.floor(col / subSize) * subSize;
    for (var i = subRow; i < subRow + subSize; i++) {
        for (var j = subCol; j < subCol + subSize; j++) {
            if (board[i][j] == num) {
                return false;
            }
        }
    }
    // Number is valid
    return true;
}

// Create a function to solve the board recursively
function solve() {
    for (var row = 0; row < size; row++) {
        for (var col = 0; col < size; col++) {
            // Find an empty cell
            if (board[row][col] == "") {
                // Try each number from one to nine
                for (var num =1 ; num <= size; num++) {
                    if (isValid(row,col,num)) {
                        // Place the number in the cell
                        board[row][col] = num;
                        // Recursively solve the rest of the board
                        if (solve()) {
                            return true;
                        } else {
                            // Undo the move
                            board[row][col] = "";
                        }
                    }
                }
                // No valid number found
                return false;
            }
        }
    }
    // Board is solved
    return true;
}

// Display the initial board
console.log("Initial Board:");
displayBoard();

// Solve the board
if (solve()) {
    console.log("Solved Board:");
    displayBoard();
} else {
    console.log("No solution found.");
}