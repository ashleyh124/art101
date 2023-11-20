/*
   lab.js - This simple JavaScript/jQuery script gets a value from an input field and outputs a modified version.
   Requirements: jQuery must be loaded for this script to work.
   Author: Ashley Hom and Cho Wing Koon
   Date created: 17 November 2023
*/

// Sorts the characters of a string in alphabetical order.
function sortName(inputName) {
    // We have to convert our string to an array and back again to sort it
    return inputName.split('').sort().join('');
}

// click listener for button
$("#submit").click(function(){
    // get value of input field
    const name = $("#user-name").val();
    // now let's sort it
    nameSorted = sortName(name);
    // append a new div to our output div
    $("#output").html('<div class="text"><p>' + nameSorted + '</p></div>');
});

// bonus
// codes referenced from lecture 11/17

function anagram(inputName) {
    // convert the name string to an array
    const letters = inputName.split('');
    // use the Fisher-Yates (Knuth) shuffle algorithm to mix letters
    for (let i = letters.length - 1; i > 0; i--) {
        const length = Math.floor(Math.random() * (i + 1));
        [letters[i], letters[length]] = [letters[length], letters[i]];
    }
    // join letters back into one string
    return letters.join('');
}

$("#anagram").click(function(){
    // get value of input field
    const input = $("#user-name").val();
    // get an anagram of the input
    anagram = anagram(input);
    // append a new div to our output div
    $('#output').html('<div class="text"><p>' + anagram + '</p></div>');
});
