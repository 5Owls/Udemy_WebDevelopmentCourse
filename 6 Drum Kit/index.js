//Old school way of doing it
// document.querySelectorAll("button")[0].addEventListener("click", handleClick);
// document.querySelectorAll("button")[1].addEventListener("click", handleClick);
// document.querySelectorAll("button")[2].addEventListener("click", handleClick);
// document.querySelectorAll("button")[3].addEventListener("click", handleClick);
// document.querySelectorAll("button")[4].addEventListener("click", handleClick);


var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++){
  //now we add the event(button clicked with mouse)listeners everytime page refreshes
  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick );
}

document.addEventListener("keypress", handleButtonPressed);

function handleButtonPressed(event){
  //the function that handles webpage if keyboard was whatButtonPressed


  //testing event.key functionality
  // var whatButtonPressed = event.key;
  // alert("button pressed: " + whatButtonPressed)


  var whatButtonPressed = event.key;

  switch(whatButtonPressed){
    case "w":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
    break;
    case "a":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
    break;
    case "s":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
    break;
    case "d":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
    break;
    case "j":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
    break;
    case "k":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
    break;
    case "l":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
    break;
    default:
     alert("Wrong button pressed: " + event.key);
  }
}


function handleClick() {
  //what to do when the user clicks the numberOfDrumButtons


  // var myAudio = new Audio("sounds/tom-1.mp3");
  // myAudio.play();

  
  var buttonClicked = this.innerHTML;

  switch(buttonClicked){
    case "w":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
    break;
    case "a":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
    break;
    case "s":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
    break;
    case "d":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
    break;
    case "j":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
    break;
    case "k":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
    break;
    case "l":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
    break;
    default:
      console.log("Wrong button pressed");
  }
}
