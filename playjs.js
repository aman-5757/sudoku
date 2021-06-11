

let subBtn = document.querySelector("#submit");

let reSetQue = document.querySelector("#reset-que");
let markSol = document.querySelector("#travel-sol");
let newGame = document.querySelector("#new-game");

reSetQue.addEventListener("click", function(){
    resetBoard();
})

markSol.addEventListener("click",function(){
    resetBoard();
    let q = currBoard.que;
    let s = currBoard.sol;
    for(let i =0; i<9; i++){
        for(let j = 0; j<9; j++){
            let currCell = document.querySelector(`[r="${i}"][c="${j}"]`);
            if(q[i*9+j] == s[i*9+j]){
                continue;
            }
            else{
                currCell.innerHTML = s[i*9+j];
                currCell.classList.add("blue");
            }
        }
    } 
})
newGame.addEventListener("click", function(){
    location.reload();
})

//Random Set of Sudoku
let objSet = [
    {que: "2.............62....1....7...6..8...3...9...7...6..4...4....8....52.............3" , sol:"284375196739816254651942378476128539312594687598637412143769825965283741827451963"},
    {que: "..43..2.9..5..9..1.7..6..43..6..2.8719...74...5..83...6.....1.5..35.869..4291.3.." , sol:"864371259325849761971265843436192587198657432257483916689734125713528694542916378"},
    {que: ".4.1...5.1.7..396.52...8..........17...9.68..8.3.5.62..9..6.5436...8.7..25..971.." , sol:"346179258187523964529648371965832417472916835813754629798261543631485792254397186"},
    {que: "6..12.384..8459.72.....6..5...264.3..7..8...694...3...31.....5..897.....5.2...19." , sol:"695127384138459672724836915851264739273981546946573821317692458489715263562348197"},
    {que: "4972.....1..4....5....16.9862.3...4.3..9.......1.726....2..587....6....453..97.61" , sol:"497258316186439725253716498629381547375964182841572639962145873718623954534897261"},
    {que: "..591.3.8..94.3.6..275..1...3....2.1...82...7..6..7..4....8....64.15.7..89....42." , sol:"465912378189473562327568149738645291954821637216397854573284916642159783891736425"},
    {que: "1....5..738.9.....6.....48.82...1.75.4.76..2..69..2..1..5.39..4....2.1......46352" , sol:"194685237382974516657213489823491675541768923769352841215839764436527198978146352"},
    {que: "..9.6543...7...8..6..1.8.2...3.9...25.14.396.8.4...1...3.5.9..7.56.8.....7.24..9." , sol:"289765431317924856645138729763891542521473968894652173432519687956387214178246395"},
    {que: "......6577.24..1..35...6...5...2...921.3..5...471.9..8..876..9.9..5.2.3..3..182.6" , sol:"894231657762495183351876942583624719219387564647159328128763495976542831435918276"},
    {que: "5.3.7.19......675..4719.6..4...38...95.2..3......1..72...8.4..13....186..8672...5" , sol:"563472198219386754847195623472638519951247386638519472795864231324951867186723945"}
];
let osIndex = Math.floor(Math.random() * 10);
let currBoard = objSet[osIndex];
function resetBoard(){
    for(let i =0; i<9; i++){
        for(let j = 0; j<9; j++){
            let currCell = document.querySelector(`[r="${i}"][c="${j}"]`);
            if(currCell.classList.contains("blue")){
                currCell.classList.remove("blue");
            }
            currCell.innerHTML = currBoard.que[i*9+j];
        }
    }    
}
resetBoard();

subBtn.addEventListener("click", function(){
    let tmp = "";
    for(let i =0; i<9; i++){
        for(let j = 0; j<9; j++){
            let currCell = document.querySelector(`[r="${i}"][c="${j}"]`);
            tmp += currCell.innerHTML;
        }
    }
    if(tmp.localeCompare(currBoard.sol) == 0)
    {
        alert("Your solution is correct!");
    }
    else{
        alert("Try again, solution is not correct :( ");
    }
})
