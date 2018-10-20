// Var input for HTML

var guessesSoFar = [];
var guessesLeft = 9;
var wins = 0;
var losses = 0;

// put into html
var userGuessText = document.getElementById("guessdivs");
var guessesLeftText = document.getElementById("divsleft");
var winsText = document.getElementById("windiv");
var lossesText = document.getElementById("lossdiv");


// Var for user and comp guess
var userGuess = 0;
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", ];
var compGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + guessesSoFar + " Computer picked: " + compGuess);
document.onkeyup = function (event) {
    var userGuess = (event.key).toLowerCase();
    console.log("You picked: "+ userGuess);
    
    if (guessesSoFar.indexOf(userGuess) < 0 && computerChoices.indexOf(userGuess) >= 0) {
        guessesSoFar[guessesSoFar.length] = userGuess;
        guessesLeft--;

        console.log(guessesSoFar)

        userGuessText.textContent =  guessesSoFar;
        guessesLeftText.textContent =  guessesLeft;
        winsText.textContent =  wins;
        lossesText.textContent= losses;



    }

    if (compGuess == userGuess) {
        wins++;
        alert("You won!");
        guessesLeft = 9;
        guessesSoFar = [];
        compGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
       
        console.log(compGuess)

        userGuessText.textContent =  guessesSoFar;
        guessesLeftText.textContent =  guessesLeft;
        winsText.textContent =  wins;
        lossesText.textContent= losses;


    }

    if (guessesLeft == 0) {
        losses++;
        alert("You're a Loser!");
        guessesLeft = 9;
        guessesSoFar = [];
        compGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
       
        console.log(compGuess)

        userGuessText.textContent =  guessesSoFar;
        guessesLeftText.textContent =  guessesLeft;
        winsText.textContent =  wins;
        lossesText.textContent= losses;
    
    
    
    
    }
    
    



}