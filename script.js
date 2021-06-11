let playClick = document.querySelector(".play-sudoku");
let validClick = document.querySelector(".valid-sudoku");
let solveClick = document.querySelector(".solve-sudoku");

playClick.addEventListener("click", function(){
    window.location.assign("./play.html");
})
validClick.addEventListener("click", function(){
    window.location.assign("./valid.html");
})
solveClick.addEventListener("click", function(){
    window.location.assign("./solver.html");
})