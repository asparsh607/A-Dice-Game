var randomNum1 = Math.random() * 6;
var randomNum2 = Math.random() * 6;

var random1 =  Math.floor(randomNum1) + 1;
var random2 =  Math.floor(randomNum2) + 1;

var randomDice1 = `images/dice${random1}.png`;
var randomDice2 = `images/dice${random2}.png`;


var img1 = document.querySelectorAll("img")[0];
var img2 = document.querySelectorAll("img")[1];

img1.setAttribute("src", randomDice1);
img2.setAttribute("src", randomDice2);

var pWins = document.querySelector("h1");
var playerFlag1 = document.querySelectorAll("div>p")[0];
var playerFlag2 = document.querySelectorAll("div>p")[1];


if (random1 > random2) {
    pWins.innerText = "Player 1 Wins";
    playerFlag1.innerText = "Player 1 🚩";
}else if (random2 > random1) {
    pWins.innerText = "Player 2 Wins";
    playerFlag2.innerText = "Player 2 🚩";
}else{
    pWins.innerText = "Match Draw"
}