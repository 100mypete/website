var compSequence = [];
var userSequence = [];

const start = document.querySelector('')

// function addColor(arr) {
//   var colors = ["red","green","blue","yellow"];
//   arr.push(colors[Math.floor(Math.random() * colors.length)]);
// };
//
// function blink(arr) {
//   var i = 0;
//
//   var interval = setInterval(function() {
//     $("." + arr[i]).fadeTo("slow", 0).fadeTo("slow",1);
//     i++;
//     if (i >= arr.length) {
//       clearInterval(interval);
//     }
//   }, 1500);
// };
//
// function resetUser() {
//   userSequence = [];
// };
//
// function nextRound() {
//   rounds++;
// };
//
// function resetGame() {
//   rounds = 0;
//   compSequence = [];
//   $("#playButton").on("click");
//   resetUser();
// };
//
// function playerTurn() {
//   $("#playButton").off("click");
//
//   nextRound();
//   addColor(compSequence);
//   blink(compSequence);
//
//   $(".button").off("click").on("click", function() {
//     userSequence.push($(this).attr("id"));
//
//     if (JSON.stringify(compSequence) === JSON.stringify(userSequence)) {
//       resetUser();
//       playerTurn();
//       break;
//     }
//
//     if (answers[i] !== compSequence[i]) {
//       alert("GAME OVER");
//       resetGame();
//       break;
//     }
//   });
// };
//
// $("#playButton").click(function() {
//   playerTurn();
// });

// $("#playButton").click(function() {
//   nextSequence();
// });
//
// function nextSequence() {
//   var randomNumber = Math.floor(Math.random()*4);
//   compSequence.push(randomNumber);
//   showSequence(compSequence[compSequence.length - 1]);
//   userSequence = [];
// };
//
// function showSequence(thing) {
//
//   switch (thing) {
//     case 0:
//       $("#redButton").addClass("glowRed");
//       setTimeout(function() {
//         $("#redButton").removeClass("glowRed");
//       },250);
//       break;
//     case 1:
//       $("#greenButton").addClass("glowGreen");
//       setTimeout(function() {
//         $("#greenButton").removeClass("glowGreen");
//       },250);
//       break;
//     case 2:
//       $("#blueButton").addClass("glowBlue");
//       setTimeout(function() {
//         $("#blueButton").removeClass("glowBlue");
//       },250);
//       break;
//     case 3:
//       $("#yellowButton").addClass("glowYellow");
//       setTimeout(function() {
//         $("#yellowButton").removeClass("glowYellow");
//       },250);
//       break;
//   }
//
// };
//
// $(".button").click(function() {
//   var clicked = $(this).attr("id");
//   switch(clicked) {
//     case "redButton":
//       userSequence.push(0);
//       showSequence(0);
//       break;
//     case "greenButton":
//       userSequence.push(1);
//       showSequence(1);
//       break;
//     case "blueButton":
//       userSequence.push(2);
//       showSequence(2);
//       break;
//     case "yellowButton":
//       userSequence.push(3);
//       showSequence(3);
//       break;
//   }
//
//   checkSequence(userSequence.length - 1);
//
// });
//
// function checkSequence(index) {
//   if (userSequence[index] === compSequence[index] && compSequence.length === userSequence.length) {
//     setTimeout(function() {
//       nextSequence();
//     },1000);
//   }
//   else {
//     gameOver();
//   }
// };
//
// function gameOver() {
//   $(".simonBox").css("background-color", "red");
//   $("h2").text("GAME OVER");
//   setTimeout(function() {
//     $(".simonBox").css("background-color", "#AEFAF7");
//     $("h2").text("THE SIMON GAME");
//   },1500);
//   compSequence = [];
// };
