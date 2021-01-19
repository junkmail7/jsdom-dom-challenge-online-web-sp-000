let timer = document.getElementById("counter");
let seconds = parseInt(timer.innerText);
function groovin() {
    setInterval(function() {
    timer.innerText = seconds++;
    }, 1000);
}
groovin();


let minus = document.getElementById("minus");
minus.addEventListener("click", function(){
    timer.innerText = seconds--;
})

let plus = document.getElementById("plus");
plus.addEventListener("click", function(){
    timer.innerText = seconds++;
})

let pause = document.getElementById("pause");
pause.addEventListener("click", function(){
    clearInterval(groovin);
}) 

let heart = document.getElementById("heart");

