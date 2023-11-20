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
  
  /* descriptions of Hogwarts Houses from https://www.wizardingworld.com/features/hogwarts-house-meanings */

  if (mod == 0) {
    house = "Gryffindor";
    description = "Gryffindor house is where you would find the pluckiest and most daring students (there's a reason the house symbol is the brave lion). The house colours are scarlet and gold, the common room lies up in Gryffindor Tower and the Head of House is Professor Minerva McGonagall."
  }

  else if (mod == 1) {
    house = "Ravenclaw"
    description = "If you are looking for the brainiest students – you would find them in Ravenclaw (with a couple of notable exceptions like Hermione Granger). The Ravenclaw colours are blue and bronze, the emblem is an eagle, the Head of House is Professor Filius Flitwick and the common room sits at the top of Ravenclaw Tower behind an enchanted knocker."
  }
  
  else if (mod == 2) {
    house = "Slytherin";
    description = "Slytherin house has an unfortunate reputation. While it is true that a lot of dark witches and wizards were sorted into Slytherin, not all who belong to this house are bad. In fact, there are a lot of excellent qualities the Sorting Hat looks for in potential Slytherins and Merlin himself even belonged to this misunderstood house!"
  }
  
  else if (mod == 3) {
    house = "Hufflepuff";
    description = "Hufflepuff is where you will find the most trustworthy and hardworking students. In fact, out of all the houses Hufflepuff has produced the least number of dark witches and wizards. The badger is the symbol of this house, the colours are yellow and black, the Head of House is Professor Pomona Sprout and the common room can be found near the kitchens in Hogwarts."
  }
  return house;
}

$("#button").click(function(){
    // get value of input field
    const name = $("#input").val();
    // get an anagram of the input
    house = sortingHat(name);
    // append a new div to our output div
    $('#output').html('<div class="text"><p>' + "The sorting Hat has sorted you into " + house + "!" + '<br><br>' + description + '</p></div>');
});