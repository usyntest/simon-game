var colors = ["green", "red", "yellow", "blue"];

var clicks = [];
var sequence = [];

var started = false;

var level = 0;

$(document).keypress(function () {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

$(".btn").click(function () {
  var userChosenColor = $(this).attr("id");
  clicks.push(userChosenColor);

  checkAnswer(clicks.length - 1);

  playAudio(userChosenColor);
  animatePress(userChosenColor);
});

function nextSequence() {
  clicks = [];
  level += 1;
  $("#level-title").text("Level " + level);

  var randomNum = Math.floor(Math.random() * 4);
  var color = colors[randomNum];

  if (sequence.length === 0) {
    sequence.push(color);
  } else if (sequence[sequence.length - 1] === color) {
    nextSequence();
  } else {
    sequence.push(color);
  }

  $("#" + color)
    .fadeOut(100)
    .fadeIn(100);

  playAudio(color);
}

function checkAnswer(currentLevel) {
  if (clicks[currentLevel] === sequence[currentLevel]) {
    if (clicks.length === sequence.length) {
      console.log("right");
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    playAudio("wrong");
    $("body").addClass("game-over");
    $("#level-title").text("Game Over, Press Any Key to Restart");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);
    wrong();
  }
}

function wrong() {
  started = false;
  sequence = [];
  level = 0;
}

function animatePress(color) {
  $("#" + color).addClass("pressed");

  setTimeout(function () {
    $("#" + color).removeClass("pressed");
  }, 100);
}

function playAudio(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}
