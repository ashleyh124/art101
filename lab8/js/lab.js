/* index.js - Lab 8 Javascript
 * Author: Ashley Hom and Cho Wing Koon
 * Created: 3 November
 * License: Public Domain
*/

function square(x){
    var results = x * x
    return results;
}

// test function
console.log("What is the square of 7?", square(7));
console.log("What is the square of -12?", square(-12));

var randomArray = [2, 16, 21, 5, 58, 9]
console.log("My array:", randomArray);

var squaredResult = randomArray.map(square);
// should return [4, 256, 441, 25, 3364, 81]
console.log("Squaring the values of the array:", squaredResult);


var results = randomArray.map(function(x){
    return x + 5;
})
// should return [7, 21, 26, 10, 63, 14]
console.log("Adding 5 to each value of the array:", results);

// bonus: create function that takes a callback as a parameter and runs it
// learned how to do this through https://stackoverflow.com/questions/3458553/javascript-passing-parameters-to-a-callback-function
function division(a, b){
    divResult = a / b;
}

function callback(para){
    para();
}

callback(function(){
    var x = window.prompt("Give a number for x:");
    var y = window.prompt("Give a number for y:");
    division(x, y)
})

console.log("Dividing x by y:", divResult);