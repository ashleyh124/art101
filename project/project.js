//Authors - Henry Tripp Barrick 
// Used to style and animate Extinction Timeline final project
// Date: 11-15

//Variables
//using this since jQuery isn't connecting properly to the slider
var slider = document.getElementById("slider");
var sliderYear = 2023;

// Code for getting data from the slider
//slider.oninput = function(){
    //Changes input value of heading currently depending on the current value of the slider
    //sliderYear = slider.value;

//Sidebar code
$("#mySidenav").click(function(){
    $("#infoText").css({opacity: "100%"});
})

$("#anm1").click(function(){ 
    $("#anmDesc").html("<h3>California Condor</h3> <img class='animal-image' src='./img/condor.jpg'></br> <p>The California Condor became extinct in the wild in 1987 (with only 22 in captivity), with lead poisoning and habitat loss being leading causes of death.<br><br>However, with recovery efforts of the U.S. Fish and Wildlife Service, the number of California Condors has since increased to over 500 as of 2023.</p>");
})  
$("#anm2").click(function(){
    $("#anmDesc").html("<h3>Gray Wolf</h3> <p>As a species native to California, the Gray Wolf had disappeared from the state in the 1920s. In 2014, the species was listed as endangered, with possible causes being human activity such as hunting. Just recently in 2022, Gray Wolves have returned back to California on their own.</p>");
})
$("#anm3").click(function(){
    $("#anmDesc").html("<h3>San Joaquin Kit Fox</h3> <p>The San Joaquin Kit Fox has been threatened with habitat loss and the use of pesticides, and was listed as endangered in 1967.</p>");
})
$("#anm4").click(function(){
    $("#anmDesc").html("<h3>Franklin's Bumblebee</h3> <p>The Franklins' Bumblebee has not been seen since 2006, and is a critically endangered species.</p>");
})


//Intro page code
$("#start").click(function () {
    $("#introPage").toggleClass("overlay");
    $(".overlay").toggleClass("start");
    this.style.display='none';
});