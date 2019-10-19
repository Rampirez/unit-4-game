var compNum = 0;
var userNum = 0;
var wins = 0;
var losses = 0;
var button1 = 0;
var button2 = 0;
var button3 = 0;
var button4 = 0;

function compNumSelect() {
    compNum = Math.floor(Math.random() * 101) + 20;
    $("#computer-number").text(compNum);
}

function buttonNumSelect() {
    button1 = Math.floor(Math.random() * 12) + 1;
    button2 = Math.floor(Math.random() * 12) + 1;
    button3 = Math.floor(Math.random() * 12) + 1;
    button4 = Math.floor(Math.random() * 12) + 1;
}

function checkGameState() {
    if (userNum == compNum) {
        alert("You won!");
        userNum = 0;
        compNumSelect();
        buttonNumSelect();
        wins++;
        $("#user-number").text(userNum);
        $("#win-num").text(wins);
    } else if (userNum > compNum) {
        alert("You lost! The computer's number was " + compNum + " and your's was " + userNum);
        userNum = 0;
        compNumSelect();
        buttonNumSelect();
        losses++;
        $("#user-number").text(userNum);
        $("#loss-num").text(losses);
    } else {}

}

buttonNumSelect();
$("#computer-number").text(compNumSelect());

$(document).ready(function() {
    $("#button1").click(function(){
        userNum = button1 + userNum;
        $("#user-number").text(userNum);
        checkGameState();
    });
    $("#button2").click(function(){
        userNum = button2 + userNum;
        $("#user-number").text(userNum);
        checkGameState();
    });
    $("#button3").click(function(){
        userNum = button3 + userNum;
        $("#user-number").text(userNum);
        checkGameState();
    });
    $("#button4").click(function(){
        userNum = button4 + userNum;
        $("#user-number").text(userNum);
        checkGameState();
    });

    
});

