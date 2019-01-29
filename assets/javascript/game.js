let numWins = 0;
let numLosses = 0;
let guessesLeft = 9;
// make the random character to guess


function makeRandomChar() {
    let randomLetter = "";
    let possible = "abcdefghijklmnopqrstuvwxyz";
    for(let i=0;i<1;i++) {
        randomLetter += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return randomLetter;
}
let randomLetter = makeRandomChar();

// on key press down do function if I do keypressup the F5 is registered as the first guess.
document.onkeydown = function (e) {

    document.getElementById("soFar").innerHTML += e.key + ", ";
    guessesLeft--;
    document.getElementById("guessesLeft").innerHTML = guessesLeft;
    if (e.key === randomLetter){
       // if letter is guessed then
        numWins++;
        //wins go up
        document.getElementById("wins").innerHTML = numWins;
        guessesLeft = 9;
        //reset random letter and guesses to 9
        randomLetter = makeRandomChar();
        document.getElementById("soFar").innerHTML = "";
        //remove the innerHTML from the previous guess to blank it for next try
    }
    else if (guessesLeft === 0) {
        //if guesses run out
        numLosses++;
        // losses go up
        document.getElementById("losses").innerHTML = numLosses;
        guessesLeft = 9;
        // reset random letter and guesses to 9
        document.getElementById("soFar").innerHTML = "";
        //remove the innerHTML from the previous guess to blank it for next try
    }
}