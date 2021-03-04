var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var images1 = ["", "images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];
var images2 = ["", "images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];

document.querySelector(".img1").setAttribute("src", images1[randomNumber1]);
document.querySelector(".img2").setAttribute("src", images2[randomNumber2]);
    
if(images1[randomNumber1] > images2[randomNumber2]){
document.querySelector("h1").innerHTML = "Player 1 Wins!";
}else if(images1[randomNumber1] < images2[randomNumber2]){
document.querySelector("h1").innerHTML = "Player 2 Wins!";
}else if(images1[randomNumber1] === images2[randomNumber2]){
document.querySelector("h1").innerHTML = "Draw, roll again!";
}
  




