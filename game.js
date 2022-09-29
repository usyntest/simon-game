var sequence = [];
var colors = ["green", "red", "yellow", "blue"];
var level = 0;
var clicks = [];

$("*").keydown(start);

function start() {
  console.log("it starts");

  if ($("#level-title").hasClass("game-over")) {
    $("#level-title").removeClass("game-over");
  }
  $("*").off("keydown", start);
  changeLevel();
  $(".btn").click(main);
}

function main(elem) {
  // push the btn clicked into clicks
  clicks.push($(elem).attr("id"));
  // check if its eql to the element at the same place in sequence
  var position = clicks.length - 1;
  if (!(clicks[position] === sequence[position])) {
    audioPlay("wrong");
    $("#level-title").addClass("game-over");
    $("#level-title").text("Press A Key to Start");
  } else {
    console.log("it is correct");
  }
}

function changeLevel() {
  // increase the level and change the title
  level += 1;
  $("#level-title").text("Level " + level);

  // add the color to the sequence
  sequence.push(randomColor());
}

function randomColor() {
  // generatest a random number between 1 and 4 and gives out a color;
  var random = Math.floor(Math.random() * 4) + 1;
  var color = colors[random];

  // the random color that is generated is highlighted
  $(`#${color}`).addClass("pressed");
  setTimeout(function () {
    $(`#${color}`).removeClass("pressed");
  }, 200);

  // the color that is generated returned
  return color;
}

function audioPlay(path) {
  var audio = new Audio(`sounds/${path}.mp3`);
  audio.play();
}
// function main() {
//   while (true) {
//     if (clicked(this)) {
//       console.log("They are equal");
//     } else {
//       console.log("Pushed the wrong button");
//       break;
//     }
//   }
// }

// function start() {
//   sequence.push(randomColor());
//   $("#level-title");
// }

// function clicked(elem) {
//   clicks.push($(elem).attr("id"));
//   if (clicks === sequence) {
//     changeLevel();
//     return true;
//   }
//   return false;
// }

// function changeLevel() {
//   level += 1;
//   $("#levelTitle").text("Level " + level);
// }
