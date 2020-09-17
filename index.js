//adds EventListener to the document and waits for the user to press down a keyboard key
//the event.key (the key on the keyboard) gets passed to the playSound function, defined below
document.addEventListener("keydown", function(event) {
  playSound(event.key);
  buttonAnimation(event.key)
});

//querySelectorAll finds all the elements with class of "drum"
//then it loops through each of them and adds the event listener waiting for one of these elements to be clicked
//the handleClick function then refers to the playSound function, passing in "this.innerHTML" (which is the text of the button tag)
//the innerHTML matches one of the assigned cases below
var drumSelector = document.querySelectorAll(".drum");

for (var i = 0; i < drumSelector.length; i++) {
  drumSelector[i].addEventListener("click", function handleClick() {
    playSound(this.innerHTML)
    buttonAnimation(this.innerHTML)
  });
}

//playSound passes "key" through to match one of the designated cases assigned to play a sound.
//"key" may either be "event.key" or "this.innerHTML"
//each case creates a new Audio object and then uses the "play()" method to play the sound from the selected url
function playSound(key) {



  switch (key) {
    case "f":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.currentTime = 0;
      tom1.play();
      break;

    case "g":
    case "h":
    case "k":
    case "l":
    case ";":
      var snare = new Audio("sounds/snare.mp3");
      snare.currentTime = 0;
      snare.play();
      break;

    case "z":
    case "x":
    case "c":
    case "v":
    case " ":
    case "b":
    case ",":
    case ".":
    case "/":
      var bass = new Audio("sounds/kick-bass.mp3");
      bass.currentTime = 0;
      bass.play();
      break;

    case "j":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.currentTime = 0 ';
      tom2.play();
      break;

    case "n":
    case "a":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.currentTime = 0;
      tom3.play();
      break;

    case "m":
    case "s":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.currentTime = 0;
      tom4.play();
      break;

    case "d":
    case "q":
    case "w":
    case "e":
    case "r":
    case "t":
    case "y":
    case "u":
    case "i":
    case "o":
    case "p":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    default:
      console.log(event);
  }
}

//animates button
function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  console.log(activeButton.classList);
  activeButton.classList.add("pressed");
  setTimeout(function(currentKey) {
    activeButton.classList.remove("pressed");
  }, 100);

}