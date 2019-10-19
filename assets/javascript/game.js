var compNum = 0;
var userNum = 0;

function compNumSelect() {
    compNum = Math.floor(Math.random() * 101) + 20;
    return compNum
}

$("#computer-number").text(compNumSelect());