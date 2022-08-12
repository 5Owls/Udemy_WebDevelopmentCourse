//Updated version using less code. The previous version used switch statements
//in two different functions to handle keypress or button clicked.
//This version combines the two to only use one switch statment but there are
//still two different functions to handle differnet events.


//We get a max value for loop to run through, that doesnt include other buttons.
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

//now we add the event(button clicked with mouse)listeners everytime page refreshes
for (var i = 0; i < numberOfDrumButtons; i++){

  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick );
}

document.addEventListener("keypress", handleButtonPressed);


//handle click of mouse on page
function handleClick(){
  var text = this.innerHTML;
  console.log(text);
  makeSound(text);

  addAnimation(text);

}

//handle click of keyboard
function handleButtonPressed(){
  makeSound(event.key);
  addAnimation(event.key)
}

//function to playsound
function makeSound(key){
  switch(key){
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

function addAnimation(key){
  //we need to know what button was pressed so we can apply animation
  var activeButton = document.querySelector("." + key);
  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed")}, 100);

}
