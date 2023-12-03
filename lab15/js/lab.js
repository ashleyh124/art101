/*
   lab.js - Lab 15
   Requirements: jQuery must be loaded for this script to work.
   Author: Ashley Hom and Cho Wing Koon
   Date created: 1 December 2023
*/

const ENDPOINT = "http://www.yerkee.com/api/fortune";

// attach an event listener
$("#activate").click(function(){
    $.ajax({
        "url": ENDPOINT,
        "type": "GET",
        // "dataType": "json",
        success: function(data) {
            console.log(data.fortune)
            text = data.fortune
            $("#output").append("<p>" + text);
        },
        error: function(data) {
            console.log("Error")
        }
    })
})














// ajax
//   $.ajax({
//     "url": ENDPOINT,
//     "data": {id: 7},
//     "type": "GET",
//     "dataType": "json",
//     success: function(data) {
//         // do stuff
//         console.log(data.chain.evolves_to[0].species.name);
//         // extract the results
//         pokemon = data.chain.evolves_to[0].species.name;
//         // add to output div
//         $("#output").append("<p>" + pokemon);
//     },
//     "error": function(){
//     }

  
//   .done(function(data){
//     console.log(data);
//     // in the callback:
//     // extract the results
//     jokeText = data.joke;
//     // add to output div
//     $("#output").append("<p>" + jokeText);
//   })