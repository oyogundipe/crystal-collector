//document loads

//$(document).ready(function() {

// variables
var currentScore = 0;
var wins = 0;
var randomNumber = 0;
$("#wins").html("<h3>WINS: " + wins + "</h3>");
var losses = 0;
$("#losses").html("<h3>LOSSES: " + losses + "</h3>");
var red = 0;
var blue = 0;
var yellow = 0;
var purple = 0;

// functions

    // starting game
    var startGame = function() {
        randomNumber = Math.floor((Math.random()* 100) + 19);
    // random value of crystals 1 - 12
        red = Math.floor((Math.random()* 12) + 1);
        purple = Math.floor((Math.random()* 12) + 1);
        yellow = Math.floor((Math.random()* 12) + 1);
        blue = Math.floor((Math.random()* 12) + 1);

        
    // clearing game
    $("#gameStatus").empty()};

    // clicking cyrstals
    $("#redcrystal").click(function(){
        currentScore = currentScore + crystal1;
        $("#currentScore").text(" " + currentScore);
        checkWin();
    });

    $("#bluecrystal").click(function(){
        currentScore = currentScore + crystal2;
        $("#currentScore").text(" " + currentScore);
        checkWin();
    });

    $("#yellowcrystal").click(function(){
        currentScore = currentScore + crystal3;
        $("currentScore").text(" " + currentScore);
        checkWin();
    });

    $("#purplerystal").click(function(){
        currentScore = currentScore + crystal4;
        $("currentScore").text(" " + currentScore);
        checkWin();
    });
    // calculating wins and losses
    var checkWin = function() {

        // if the currentScore is greater than the randomNumber, the user has lost
        if (currentScore > randomNumber) {
            // adds one point to the losses counter
            losses ++;
            // updates html to current
            $("#losses").html("<h1>LOSSES: " + losses + "</h1>");
            // checks in console
            console.log("Losses count is " + losses);
          ;
        }
    
        // if the current score is equal to the randomNumber it generated to match the user has won
        else if (currentScore === randomNumber) {
            // adds one point to the wins counter
            wins ++;
            // updates html to current
            $("#wins").html("<h1>WINS: " + wins + "</h1>");
            // check in console
            console.log("Win count is " + wins);
           
        }
    };


