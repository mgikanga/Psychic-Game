// my variables
var letterPicked;
var userKey;
var g = 10; //guesses allowed
var w = 0;// wins 
var l = 0; // 

//randomly pick a letter
var myLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var computeGuess = Math.floor(Math.random() * myLetters.length);
var letterPicked = myLetters[computeGuess];
console.log(letterPicked);
// letter check loop 
document.onkeyup = function (event) {
    var userKey = String.fromCharCode(event.which).toLowerCase();
    console.log(userKey);

    //if user get the letter wins
    if (userKey === letterPicked) {
        var mychar = document.getElementById("guesses");
        mychar.textContent = "Your guesse: ";
        w++;
        var win = document.getElementById("wins");
        win.textContent = "Wins:" + w;
        start();
        console.log("wins" + w);
        console.log(letterPicked);
    }

    //user doesn't get the letter guess go down

    else {
        g--;
        var gues = document.getElementById("left");
        gues.textContent = "Guesses left: " + g;
        guesses.textContent += userKey + ' , ';
        console.log("guess" + g);
    }
    // if user runs out of guesses losses goes up
    if (g === 0) {
        l++;
        var loss = document.getElementById("losses");
        loss.textContent = "Losses: " + l;
    }
}


//funtction to reset the game
function start() {
    g = 10;
    l = 0;
    w = 0;
    var computeGuess = Math.floor(Math.random() * myLetters.length);
    var letterPicked = myLetters[computeGuess];
    // my variables
    var letterPicked = myLetters[computeGuess];
    var userKey = String.fromCharCode(event.which).toLowerCase();
}