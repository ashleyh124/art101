/* index.js - Lab 9 Javascript
 * Author: Ashley Hom and Cho Wing Koon
 * Created: 8 November
 * License: Public Domain
*/

var bonusButton = $(".special-section").append("<button id='special-sections button'>Press for changes</button>");

// create a button for challenge
var challengeButton = $(".challenge").append("<button id='challenge-button'>Press for challenge</button>");

// create a button for problems
var problemsButton = $(".problems").append("<button id='problems-button'>Press for problems</button>");

// create a button for results
var resultsButton = $(".results").append("<button id='results-button'>Press for results</button>");

// create a click listener for challenge
$("#challenge-button").click(function(){
    // add "special" class to section
    $(".challenge").toggleClass("special");
    console.log("These are the challenges for lab 9.");
})

// create a click listener for problems
$("#problems-button").click(function(){
    // add "special" class to section
    $(".problems").toggleClass("special");
    console.log("These are the problems for lab 9.");
})

// create a click listener for results
$("#results-button").click(function(){
    // add "special" class to section
    $(".results").toggleClass("special");
    console.log("These are the results for lab 9.");
})

// bonus

$(".special-sections button").click(function(){
    $(this).parent().toggleClass("special");
})