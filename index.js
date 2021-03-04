var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var images1 = ["", "dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice5.png", "dice6.png"];
var images2 = ["", "dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice5.png", "dice6.png"];

document.querySelector(".img1").setAttribute("src", images1[randomNumber1]);
document.querySelector(".img2").setAttribute("src", images2[randomNumber2]);
    
if(images1[randomNumber1] > images2[randomNumber2]){
document.querySelector("h1").innerHTML = "Player 1 Wins!";
}else if(images1[randomNumber1] < images2[randomNumber2]){
document.querySelector("h1").innerHTML = "Player 2 Wins!";
}else if(images1[randomNumber1] === images2[randomNumber2]){
document.querySelector("h1").innerHTML = "Draw, roll again!";
}
  




