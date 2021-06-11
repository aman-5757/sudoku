let homeBtn = document.querySelector("#home");
let githubBtn = document.querySelector("#github");
let linkedinBtn = document.querySelector("#linkedin");

homeBtn.addEventListener("click", function(){
    window.location.assign("./index.html");
})

githubBtn.addEventListener("click", function(){
    window.location.assign("https://github.com/aman-5757/sudoku");
})

linkedinBtn.addEventListener("click", function(){
    window.location.assign("https://www.linkedin.com/in/aman5757/");
})
