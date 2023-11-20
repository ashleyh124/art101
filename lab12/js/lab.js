/*
   lab.js - This simple JavaScript/jQuery script gets a value from an input field and outputs a modified version.
   Requirements: jQuery must be loaded for this script to work.
   Author: Ashley Hom and Cho Wing Koon
   Date created: 20 November 2023
*/

console.log("Welcome to hedgerows, the college of programming");

function sortingHat(str) {
  var length = str.length
  var mod = length % 4
  
  if (mod == 0) {
    house = "Gryffindor";
  }

  else if (mod == 1) {
    house = "Ravenclaw"
  }
  
  else if (mod == 2) {
    house = "Slytherin";
  }
  
  else if (mod == 3) {
    house = "Hufflepuff";
  }
  return house;
}

$("#button").click(function(){
    // get value of input field
    const name = $("#input").val();
    // get an anagram of the input
    house = sortingHat(name);
    // append a new div to our output div
    $('#output').html('<div class="text"><p>' + "The sorting Hat has sorted you into " + house + '</p></div>');
});