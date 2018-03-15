// my variables
var letterPicked;
var computeGuess;
var userKey;
//holds all the user guesses
var guessesSoFar=[];
var g = 10; //guesses allowed
var w = 0;// wins 
var l = 0; // losses

//computer randomly pick a letter
var myLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var computeGuess = Math.floor(Math.random() * myLetters.length);
var letterPicked = myLetters[computeGuess];
console.log(letterPicked); 
// letter check loop 
document.onkeyup = function (event) {
    var userKey = String.fromCharCode(event.keyCode).toLowerCase();
    console.log(userKey);
    //make sure user only input allowed keys and  only once
if (guessesSoFar.indexOf(userKey)<0 && myLetters.indexOf(userKey)>= 0){
    guessesSoFar[guessesSoFar.length]=userKey;
    g--;
  //user doesn't get the letter and its a validn one guess go down
    var gues = document.getElementById("left");
    gues.textContent = "Guesses left: " + g;
    guesses.textContent = "Your guesses: " + guessesSoFar + ' , ';
    
}


    //if userkey is same as  letterpicked wins and the game reset guesses left, letterpicked and guessed letters
    if (userKey === letterPicked) {
        w++;
        var win = document.getElementById("wins");
        win.textContent = "Wins:" + w;
        g = 10;
        var gues = document.getElementById("left");
        gues.textContent = "Guesses left: " + g;
        guessesSoFar = [];
        var clear = document.getElementById("guesses");
        clear.textContent = "Your guesses: " + guessesSoFar ;
        var computeGuess = Math.floor(Math.random() * myLetters.length);
        console.log(computeGuess); 
    }
    // if user runs out of guesses losses goes up
    if (g === 0) {
        l++;
        var loss = document.getElementById("losses");
        loss.textContent = "Losses: " + l;
        g = 10;
        var gues = document.getElementById("left");
        gues.textContent = "Guesses left: " + g;
        guessesSoFar = [];
    guesses.textContent = "Your guesses: " + guessesSoFar ;
    var computeGuess = Math.floor(Math.random() * myLetters.length);
//var letterPicked = myLetters[computeGuess];
//console.log(letterPicked);
    }

}

// reset function
    var r = document.getElementById("give");
    document.onclick = function(event) {
        // set wins to zero
        w = 0;
        var win = document.getElementById("wins");
        win.textContent = "Wins:" + w;
         // set losses to zero
        l=0;
        var loss = document.getElementById("losses");
        loss.textContent = "Losses: " + l;
 // set guesses to ten
        g = 10;
        var gues = document.getElementById("left");
        gues.textContent = "Guesses left: " + g;
//  set letter guessed back to null
        guessesSoFar = [];
        var clear = document.getElementById("guesses");
    clear.textContent = "Your guesses: " + guessesSoFar ;

       var computeGuess = Math.floor(Math.random() * myLetters.length);
var letterPicked = myLetters[computeGuess];
    console.log(letterPicked);
};
//function begin
