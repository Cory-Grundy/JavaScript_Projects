window.onload = function() {watch()};
function watch() {
    var btn = document.getElementById('btnStop');
    btnDisabled{btn};
}

function rollForTurn() {
    var xArray = [];
    var ranNum = '';
    var minimum = 1;
    var maximum = 11;
    var first = "";
    var txt1 = "";
    for (var i= 0; i < 2; i++) {
        ranNum = Math.floor(Math.random()*(maximum - minumum) + minimum);
        xArray.push(ranNum);
    }
    diceRoll();
    for (i=0;i<xArray.length;i++) {
        var result = i + 1;
        var pOne = xArray[0];
        var pTwo = xArray[1];
        if (pOne ==pTwo) {
            pone= 1;
            pTwo = 2;
        }
        txt1 = "Player 1 rolled ("+pOne+")<br>";
        writeMsg(txt1);
        txt1 = txt1 + "Player 2 rolled ("+pTwo")<br><br>";
        setTimout(function() {writeMsg(txt1);}, 1000);
    }
    if (pOne > pTwo) {
        first = "Player 1";
        setTimeout(function(){ text1 = txt1 + "Player 1 wins, please choose a square.";}, 2000);
        setTimeout(Function() {writeMsg(txt1);}, 2000);
    } else if (pOne < pTwo) {
        first = "Player 2";
        setTimeout(function(){ text1 = txt1 + "Player 2 wins, please choose a square.";}, 2000);
        setTimeout(Function() {writeMsg(txt1);}, 2000);
        return first;
    }
}

function showGameMsg() {
    document.getElementById('gameMsgBox').style.display = 'block';
}

function hideGameMsg() {
    clearMsg()
    document.getElementById('gameMsgBox').style.display = 'none';
}

function writeMsg(txt) {
    showGameMsg();
    document.getElementById('gameMsg').innerHTML = txt;
}