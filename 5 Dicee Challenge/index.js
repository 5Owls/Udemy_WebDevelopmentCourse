//Get a random number between 1 and 6
var playerOneRandomNumber = Math.floor(Math.random()*6);
var playerTwoRandomNumber = Math.floor(Math.random()*6);
console.log(playerOneRandomNumber);
//link images to number...lets use if:
if(playerOneRandomNumber === 1){
  document.querySelector(".img1").src = "images/dice1.png";
}else if(playerOneRandomNumber === 2){
  document.querySelector(".img1").src = "images/dice2.png";
}else if(playerOneRandomNumber === 3){
  document.querySelector(".img1").src = "images/dice3.png";
}else if(playerOneRandomNumber === 4){
  document.querySelector(".img1").src = "images/dice4.png";
}else if(playerOneRandomNumber === 5){
  document.querySelector(".img1").src = "images/dice5.png";
}else {
  document.querySelector(".img1").src = "images/dice6.png";
}

if(playerTwoRandomNumber === 1){
  document.querySelector(".img2").src = "images/dice1.png"
}else if(playerTwoRandomNumber === 2){
  document.querySelector(".img2").src = "images/dice2.png"
}else if(playerTwoRandomNumber === 3){
  document.querySelector(".img2").src = "images/dice3.png"
}else if(playerTwoRandomNumber === 4){
  document.querySelector(".img2").src = "images/dice4.png"
}
else if (playerTwoRandomNumber === 5){
  document.querySelector(".img2").src = "images/dice5.png"
}else{
  document.querySelector(".img2").src = "images/dice6.png";
}
