let solBtn = document.querySelector("#solution");
solBtn.addEventListener("click", function(){
    for(let i =0; i<9; i++){
        for(let j = 0; j<9; j++){
            let currCell = document.querySelector(`[r="${i}"][c="${j}"]`);
            let val = currCell.innerHTML;
            board[i].push(val);
        }
    }
    copy = board;
    //check validity wala function if returns true then alert
    let isValid = isValidCheck(copy);
    if(!isValid){
        alert("Sudoku is In-valid, hence can't be Solved");
    }
    else{
        sudokuSolver(copy);
    }
    board = [[],[],[],[],[],[],[],[],[]];

})
function sudokuSolver(copy){
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
          if (copy[i][j] === ".") {
            let char = "1";
            while (+char <= 9) {
              if (isValidSudoku(i, j, copy, char)) {
                copy[i][j] = char;
                if (sudokuSolver(copy)) {
                  return true;
                } else {
                  copy[i][j] = ".";
                }
              }
              char = (+char + 1).toString();
            }
            return false;
          }
        }
      }
      print(copy);
      return true;
}
function print(copy){
    for(let i =0; i<9; i++){
        for(let j = 0; j<9; j++){
            let currCell = document.querySelector(`[r="${i}"][c="${j}"]`);
            currCell.innerHTML = copy[i][j];
        }
    }
    alert("Solved Successfully, Press OK to view the answer.");
}
const isValidSudoku = (row, col, board, char) => {
    for (let i = 0; i < 9; i++) {
      if (board[row][i] == char) {
        return false;
      }
    }
  
    for (let i = 0; i < 9; i++) {
      if (board[i][col] == char) {
        return false;
      }
    }
  
    const x = ~~(row / 3) * 3;
    const y = ~~(col / 3) * 3;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[x + i][y + j] == char) {
          return false;
        }
      }
    }
  
    return true;
  };



