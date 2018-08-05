var wins = 0;
var losses = 0;
var guessesLeft = 9;
var letterLog = [];

// document.getElementById("guessesLeft");
// guessesLeft.textContent;

/*document.getElementById("guessesLeft");
guessesLeft.textContent = guessesLeft;
var guessesLeft = 9;*/

/*var guessesLeft = document.getElementById("guessesLeft");
guessesLeft.textContent = guessesLeft;*/
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];




document.onkeyup = function (event) {
    var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log(computerChoice)


    var letterLog = document.getElementById("letterLog");
    //var letter = event.key.toLowerCase();
    letterLog.textContent += event.key;
    // Above adds each letter typed to the guesses so far


    var userGuess = event.key;



    if (userGuess === computerChoice) {
        wins++;
        guessesLeft = 9;
        letterLog = [];
        //letterLog = "";
    } else {
        guessesLeft--;
    }

    if (guessesLeft === 0) {
        losses++;
        guessesLeft = 9;
        /*function empty() {
            letterLog.length = 0;
        }
        empty();*/

        /*for (var i = letterLog.length; i > 0; i--) {
            letterLog.pop();
        }*/
    }



    document.getElementById('wins').innerHTML = wins;
    document.getElementById('losses').innerHTML = losses;
    document.getElementById('guessesLeft').innerHTML = guessesLeft;




    /*function updateGuesses() {
        document.getElementById("guessesLeft").textContent = guessesLeft;
    }
    guessesLeft--;
    updateGuesses();*/



    /*guessesLeft--;
    document.getElementById("guessesLeft");
    guessesLeft.textContent = guessesLeft;*/

};