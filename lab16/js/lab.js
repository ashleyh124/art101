/*
   lab.js - Lab 16
   Requirements: jQuery must be loaded for this script to work.
   Author: Ashley Hom and Cho Wing Koon
   Date created: 6 December 2023
*/

const ENDPOINT = "https://xkcd.com/614/info.0.json";

// Using the core $.ajax() method 

$("#comic").click(function(){
    $.ajax({
        // The URL for the request (from the api docs)
        url: ENDPOINT,
        // Whether this is a POST or GET request
        type: "GET",
        // The type of data we expect back
        dataType : "json",
        // What do we do when the api call is successful
        //   all the action goes in here
        success: function(comicObj) {
            // do stuff
            console.log(comicObj);
            const title = comicObj.title;
            const img = comicObj.img;
            const alt = comicObj.alt;
            $("#output").append("<p>" + title + "</p>");
            $("#output").append("<img src='" + img + "'/>");
            $("#output").append("<p>" + alt + "</p>");
        },
        // What we do if the api call fails
        error: function(jqXHR, textStatus, errorThrown) { 
            // do stuff
            console.log("Error:", textStatus, errorThrown);
        }
    })
})

comicNumber = 10
  
let bonusEndpoint = "https://xkcd.com/10/info.0.json";

function getAndPutData(){ 
    $.ajax({
        url: bonusEndpoint,
        type: "GET",
        dataType: "json",
        success: function(comicObj) {
            console.log(comicObj);
            const title = comicObj.title;
            const img = comicObj.img;
            const alt = comicObj.alt;
            $("#output").append("<p>" + title + "</p>");
            $("#output").append("<img src='" + img + "'/>");
            $("#output").append("<p>" + alt + "</p>");
        },
        // What we do if the api call fails
        error: function(jqXHR, textStatus, errorThrown) { 
        // do stuff
            console.log("Error:", textStatus, errorThrown);
        }
    })
}

$("#bonus").click(function(){
    getAndPutData(bonusEndpoint);
})


$("#previous").click(function(){
    if (comicNumber > 1) {
        comicNumber -= 1;
        bonusEndpoint = `https://xkcd.com/${comicNumber}/info.0.json`;
        getAndPutData(bonusEndpoint);
    }
})

$("#next").click(function(){
    if (comicNumber > 1) {
        comicNumber += 1;
        bonusEndpoint = `https://xkcd.com/${comicNumber}/info.0.json`;
        getAndPutData(bonusEndpoint);
    }
})

