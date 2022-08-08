//Get a random number between 1 and 6
var playerOneRandomNumber = Math.floor(Math.random()*6) + 1;
var playerTwoRandomNumber = Math.floor(Math.random()*6) + 1;

//for testing purposes
console.log(playerOneRandomNumber);
console.log(playerTwoRandomNumber);

//updates the h1 to say who won
if (playerOneRandomNumber > playerTwoRandomNumber){
   document.querySelector("h1").textContent = "🚩Player One Wins!";
}else if (playerTwoRandomNumber > playerOneRandomNumber) {
   document.querySelector("h1").textContent = "Player Two Wins!🚩";
}else{
  document.querySelector("h1").textContent = "Draw!"
}

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
