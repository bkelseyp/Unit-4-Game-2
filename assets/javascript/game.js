$(document).ready(function () {

    // generate random number
    var Random = Math.floor(Math.random() * 101 + 19);

    $('#randon-Match-Number').text(Random);

    var num1 = Math.floor(Math.random() * 11 + 1);
    var num2 = Math.floor(Math.random() * 11 + 1);
    var num3 = Math.floor(Math.random() * 11 + 1);
    var num4 = Math.floor(Math.random() * 11 + 1);

    var wins = 0;
    var losses = 0;
    var yourTotal = 0;

// update score text
    $('#win-Number').text(wins);
    $('#lose-Number').text(losses);

// restart Game 
function reset() {
    Random = Math.floor(Math.random() * 101 + 19);
    console.log(Random);
    $('#randon-Match-Number').text(Random);
    num1 = Math.floor(Math.random() * 11 + 1);
    num2 = Math.floor(Math.random() * 11 + 1);
    num3 = Math.floor(Math.random() * 11 + 1);
    num4 = Math.floor(Math.random() * 11 + 1);
    yourTotal = 0;
    $('#Final-Number').text(yourTotal);
}
// set up Alerts
function youWin() {
    alert("Yay, You won!");
    wins++;
    $('#win-Number').text(wins);
    reset();
}
//addes the losses to the yourTotal
function youLose() {
    alert("Try Again!");
    losses++;
    $('#lose-Number').text(losses);
    reset()
}

// Crystal On clicks Below
$('#Box-Crystal-1').on('click', function () {
    yourTotal = yourTotal + num1;
    console.log("Your New Total Is: " + yourTotal);
    $('#Final-Number').text(yourTotal);
    //sets win/lose conditions
    if (yourTotal == Random) {
        youWin();
    }
    else if (yourTotal > Random) {
        youLose();
    }
});
$('#Box-Crystal-2').on('click', function () {
    yourTotal = yourTotal + num2;
    console.log("Your New Total Is: " + yourTotal);
    $('#Final-Number').text(yourTotal);
    //sets win/lose conditions
    if (yourTotal == Random) {
        youWin();
    }
    else if (yourTotal > Random) {
        youLose();
    }
});
$('#Box-Crystal-3').on('click', function () {
    yourTotal = yourTotal + num3;
    console.log("Your New Total Is: " + yourTotal);
    $('#Final-Number').text(yourTotal);
    //sets win/lose conditions
    if (yourTotal == Random) {
        youWin();
    }
    else if (yourTotal > Random) {
        youLose();
    }
});
$('#Box-Crystal-4').on('click', function () {
    yourTotal = yourTotal + num4;
    console.log("Your New Total Is: " + yourTotal);
    $('#Final-Number').text(yourTotal);
    //sets win/lose conditions
    if (yourTotal == Random) {
        youWin();
    }
    else if (yourTotal > Random) {
        youLose();
    }
});
});