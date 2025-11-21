//toglogchiin elljiig hadgalah huwisagch
var activePlayer = 1;

// toglogchdiin tsugluulsan onoog hadgalah huwisagch
var scores = [0,0];

//toglogchiin eeljindee tsugluulj baigaa onooog hadgalah huwisagch
var roundScore = 0;

//shoonii ali talaaraa buusniig hadgalah huwisagch heregtei , 1- 6 gesen utgiig ene huwisagchid snamasrguigeer uusgej ugnu
var diceNumber = Math.floor(Math.random() * 6) + 1;

//<div class="player-score" id="score-0">43</div>
// window.document.querySelector('#score-0').textContent = dice;

//Start 

document.getElementById('score-0').textContent = "0";
document.getElementById('score-1').textContent = "0";
document.getElementById('current-0').textContent = "0";
document.getElementById('current-1').textContent = "0";

var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";

document.querySelector(".btn-roll").addEventListener("click",function shooShid(){
    var diceNumber = Math.floor(Math.random() * 6) + 1;

    diceDom.style.display = "block";
    diceDom.src = 'dice-' + diceNumber + '.png';


});




