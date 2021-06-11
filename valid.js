let validCheckBtn = document.querySelector("#validate-btn");
let resetBtn = document.querySelector("#reset-btn");
let allCell = document.querySelector('[r="0"][c="0"]');
let board = [[],[],[],[],[],[],[],[],[]];
let copy;

validCheckBtn.addEventListener("click", function(){
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
    if(isValid){
        alert("Sudoku is Valid");
    }
    else{
        alert("Sudoku is Invalid");
    }
    board = [[],[],[],[],[],[],[],[],[]];

})
resetBtn.addEventListener("click", function(){
    for(let i =0; i<9; i++){
        for(let j = 0; j<9; j++){
            let currCell = document.querySelector(`[r="${i}"][c="${j}"]`);
            currCell.innerHTML = ".";
        }
    }
    board = [[],[],[],[],[],[],[],[],[]];

})

function isValidCheck(copy){
    for (let i = 0; i < 9; i++) {
        let row = new Set(),
            col = new Set(),
            box = new Set();
    
        for (let j = 0; j < 9; j++) {
          let _row = board[i][j];
          let _col = board[j][i];
          let _box = board[3*Math.floor(i/3)+Math.floor(j/3)][3*(i%3)+(j%3)]
          
          if (_row != '.') {
            if (row.has(_row)) return false;
            row.add(_row);
          }
          if (_col != '.') {
            if (col.has(_col)) return false;
            col.add(_col);
          }
          
          if (_box != '.') {
            if (box.has(_box)) return false;
            box.add(_box);
          } 
        }
    }
    return true;
}


