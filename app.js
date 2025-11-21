const { act } = require("react");

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


//shoog shideh event listener
document.querySelector(".btn-roll").addEventListener("click",function shooShid(){
    // 1 - 6 dotorh sanamsargui neg too gargaj awna
    var diceNumber = Math.floor(Math.random() * 6) + 1;

    //shoonii zurgiig web deer gargaj irne
    diceDom.style.display = "block";

    //buusan sanamsargui toond hargalzah shoonii zurgiig web deer gargaj ireh
    diceDom.src = 'dice-' + diceNumber + '.png';

    //buusan too ni 1 - ees ylgaatai bol idewhitei toglogchiin eeljiin onoog nemegduulne
    if(diceNumber !== 1){
        //1 - ees ylgaatai too buulaa
        roundScore += diceNumber;
        document.getElementById('current-' + activePlayer).textContent = roundScore;
    } else {
        //1 buusan tul toglogchiin eeljiig ene hesegt solino

        //ene toglogchiin eeljiindee tsugluulsan onooog 0 bolgono
        roundScore = 0;
        document.getElementById('current-' + activePlayer).textContent = 0;

        //toglogchiin eeljiig nuguu togloogch ruu shiljuulne
        activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

        //active iin ulaan tsegiig shiljuuleh
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');

        //shoog tur alga bolgono
        diceDom.style.display = "none";
    }    
});

//HOLD button of event listener
document.querySelector('.btn-hold').addEventListener('click', function (){
    //ug toglogchiin tsugluulsan eeljiin onoog global onood nemeh
    scores[activePlayer] = scores[activePlayer] + roundScore;
    //delgets deer onoog uurchilnu
    document.getElementById('score-' +activePlayer).textContent = scores[activePlayer];

    //eeljiin onoog ni 0 bolgono

    //toglogchiin eeljiig solino
})



