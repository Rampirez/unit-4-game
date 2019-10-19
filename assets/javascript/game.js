var compNum = 0;
var userNum = 0;
var wins = 0;
var losses = 0;
var button1 = 0;
var button2 = 0;
var button3 = 0;
var button4 = 0;

//This selects the computers random number and displays it on screen when called
function compNumSelect() {
  compNum = Math.floor(Math.random() * 101) + 20;
  $("#computer-number").text(compNum);
}

//this resets all the buttons random values when called
function buttonNumSelect() {
  button1 = Math.floor(Math.random() * 12) + 1;
  button2 = Math.floor(Math.random() * 12) + 1;
  button3 = Math.floor(Math.random() * 12) + 1;
  button4 = Math.floor(Math.random() * 12) + 1;
}

//this checks to see if you have won, lost, or still need to keep playing
function checkGameState() {
  if (userNum == compNum) {
    //this is the win state
    alert("You won!");
    userNum = 0;
    compNumSelect();
    buttonNumSelect();
    wins++;
    $("#user-number").text(userNum);
    $("#win-num").text(wins);
  } else if (userNum > compNum) {
    //this is the lose state
    alert(
      "You lost! The computer's number was " +
        compNum +
        " and your's was " +
        userNum
    );
    userNum = 0;
    compNumSelect();
    buttonNumSelect();
    losses++;
    $("#user-number").text(userNum);
    $("#loss-num").text(losses);
  } else {
    //do nothing here so the game can go on!!
  }
}

//these two functions kick off the game on page load-in
buttonNumSelect();
compNumSelect();

//this listens for the specific buttons, and adds to the user number based on what they press
$(document).ready(function() {
  $("#button1").click(function() {
    userNum = button1 + userNum;
    $("#user-number").text(userNum);
    checkGameState();
  });
  $("#button2").click(function() {
    userNum = button2 + userNum;
    $("#user-number").text(userNum);
    checkGameState();
  });
  $("#button3").click(function() {
    userNum = button3 + userNum;
    $("#user-number").text(userNum);
    checkGameState();
  });
  $("#button4").click(function() {
    userNum = button4 + userNum;
    $("#user-number").text(userNum);
    checkGameState();
  });
});
