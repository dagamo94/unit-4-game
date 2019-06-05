// The player will have to guess the answer, just like in Word Guess. This time, though, the player will guess with numbers instead of letters. 
// Here's how the app works:



// There will be four crystals displayed as buttons on the page.
// Each crystal should have a random hidden value between 1 - 12.

// The player will be shown a random number at the start of the game.
// The random number shown at the start of the game should be between 19 - 120.

// When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 


// Your game will hide this amount until the player clicks a crystal.
// When they do click one, update the player's score counter.


// The player wins if their total score matches the random number from the beginning of the game.
// The player loses if their score goes above the random number.

// The game restarts whenever the player wins or loses.


// When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.


// The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.


//create variables to track

// wins
// losses
// goal for the round (random number)
// score
// values of each crystal

// create a reset function to start/reset game
    // create new randomo number
    // assign new values to each crystal
    // update wins, score, and goal to page
    // reset user score to 0
    // update losses, score, and goal to page

// create a 'win/lose' function to test win/lose
    // if score === goal
            //wins++
            //call reset function

        // if score > goal
            //losses++
            //call reset function

// create a click event
    // grab the value of crsytal that was clicked
    // add that value to the player's score
    // call win/lose function
        
var wins = 0;
var losses = 0;
var randomGoal = Math.ceil(Math.random() * 101) + 19;
var userScore = 0;
var crystalValues = [];


function randomCrystalValues(){
    for(var i = 0; i < 4; i++){
        crystalValues[i] = Math.floor(Math.random()*12) + 1;
    }

}


function resetGame(){
    randomGoal = Math.ceil(Math.random() * 100) + 19;
    userScore = 0;

    // UPDATE NEW VALUES TO THE HTML PAGE CODE BELOW 
    for(var i = 0; i < 4; i++){
        //randomCrystalValues();
        crystalValues[i] = Math.floor(Math.random()*12) + 1;
        $("#d" + (i+1)).attr("data-value", crystalValues[i]);
    }

    $("#wins-text").text(wins);
    $("#losses-text").text(losses);
    $("#target-score-text").text(randomGoal);
    $("#user-score-text").text(userScore);
}

function winOrLose(){
    if(userScore === randomGoal){
        wins++;
        alert("won!!!");
        resetGame();
    }else if (userScore > randomGoal){
        losses++;
        alert("lost!!!");
        resetGame();
    }
}


resetGame();

$("#diamond-buttons").on("click", ".diamond", function(){
    var value = $(this).attr("data-value");
    // alert("You clicked the button with value " + value); 
    userScore += parseInt(value);
    $("#user-score-text").text(userScore);
    winOrLose();
    console.log("Target goal: " + randomGoal);
    console.log("Current score: " + userScore);
    console.log("Wins: " + wins);
    console.log("Losses: " + losses);

} );


// document.onkeyup = function(event){
//     //resetGame();
//     console.log(resetGame());
//     console.log(crystalValues);
// }
