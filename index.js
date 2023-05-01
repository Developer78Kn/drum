var numOfButtons = document.querySelectorAll(".drum").length;

for(var i = 0; i < numOfButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
      // alert(this.innerHTML);
      playSound(this.innerHTML);
      btnAnimation(this.innerHTML);
    });
}

document.addEventListener("keypress", function(event){
  // alert(event.key);
  playSound(event.key);
  btnAnimation(event.key);
});


function playSound(key){
  switch(key){
    case "w": new Audio("sounds/tom-1.mp3").play();break;
    case "a": new Audio("sounds/tom-2.mp3").play();break;
    case "s": new Audio("sounds/tom-3.mp3").play();break;
    case "d": new Audio("sounds/tom-4.mp3").play();break;
    case "j": new Audio("sounds/snare.mp3").play();break;
    case "k": new Audio("sounds/crash.mp3").play();break;
    case "l": new Audio("sounds/kick-bass.mp3").play();break;
    default: console.log(key);
  }
}

function btnAnimation(key){
  var actBtn = document.querySelector("."+key);
  actBtn.classList.add("pressed");

  setTimeout(function() {
    actBtn.classList.remove("pressed");
  }, 100);

}
