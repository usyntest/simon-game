var sequence = [];
var level = 1;
var clicks = [];

var btn = document.querySelectorAll(".btn");

for (var i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", clicked);
}

function main() {
  
}

function clicked() {
  switch (this.id) {
    case "red":
      clicks.push("red");
      check();
      playAudio("red");
      break;
    case "yellow":
      clicks.push("red");
      check();
      playAudio("yellow");
      break;
    case "green":
      clicks.push("red");
      check();
      playAudio("green");
      break;
    default:
      clicks.push("red");
      check();
      playAudio("blue");
      break;
  }
}

function check() {

}

function playAudio(path) {
  var audio = new Audio(`sounds/${path}.mp3`);
  audio.play();
}

function nextSequence() {
  var next = Math.floor(Math.random() * 4) + 1;
  if (sequence[sequence.length - 1] === next) {
    nextSequence();
    return;
  }
  sequence.push(next);
}
