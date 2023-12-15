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
        "dataType": "json",
    })
    .done(function(data) {
        console.log(data.fortune);
        text = data.fortune;
        $("#output").append("<p>" + text);
    })
})