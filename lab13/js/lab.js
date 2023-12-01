/*
   lab.js - Lab 13
   Requirements: jQuery must be loaded for this script to work.
   Author: Ashley Hom and Cho Wing Koon
   Date created: 24 November 2023
*/

function FizzBuzz(Max) {
    //create empty string
    longString = "";

    for (var index=1; index <=Max; index++){
        str = "";

        //if number is a multiple of 3
        if(index%3 == 0) {
            // Used help from ChatGPT to create colors for Fizz, Buzz, Boom, and Bang in the JS output
            str += "<span class='fizz'>Fizz</span>";
        }

        //if number is a multiple of 5
        if(index%5 == 0) {
            str += "<span class='buzz'>Buzz</span>";
        }

        //if number is a multiple of 7
        if(index%7 == 0) {
            str += "<span class='boom'>Boom</span>";
        }

        //if number is a multiple of 9
        if(index%9 == 0) {
            str += "<span class='bang'>Bang</span>";
        }

        //logic referred to lecture
        if (str != "") { 
            //add exclamation point if string has a word
            str += "!"; 
        } 

        longString += index + " " + str + "<br>"; 
    }

    $("#output").html(longString);
}

$("#run").click(function(){
    // get value of input field
    const input = $("#max").val();
    $("#output").toggleClass("column");
    //run the FizzBuzz() function
    FizzBuzz(input);
});