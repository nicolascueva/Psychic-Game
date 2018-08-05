var wins = 0;
var losses = 0;
var guessesLeft = 9;
var letterLog = [];

// alphabet for computer generated random letter
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// begin function: everything triggers when user presses a button
document.onkeyup = function (event) {
    var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log(computerChoice)
    //above generates random number

    var letterLog = document.getElementById("letterLog");
    letterLog.textContent += event.key;
    // Above adds each letter typed to the guesses so far


    var userGuess = event.key;


    //if else statements begin
    // if they win then
    if (userGuess === computerChoice) {
        wins++;
        guessesLeft = 9;
        letterLog.textContent = "";
        // if they dont guess correct
    } else {
        guessesLeft--;
    }
    // adds loss when they lose the game
    if (guessesLeft === 0) {
        losses++;
        guessesLeft = 9;
        letterLog.textContent = "";
    }
    // adds/changes html to html document
    document.getElementById('wins').innerHTML = wins;
    document.getElementById('losses').innerHTML = losses;
    document.getElementById('guessesLeft').innerHTML = guessesLeft;
};