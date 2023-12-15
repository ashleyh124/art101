//Authors - Henry Tripp Barrick, Peter Ampudia, Ashley Hom, Heidi Dullack
// Used to style and animate Extinction Timeline final project
// Date: 11-15

//Variables
//using this since jQuery isn't connecting properly to the slider
var slider = document.getElementById("slider");
var sliderYear = 0;

// Code for getting data from the slider
slider.oninput = function() {
    //Changes input value of heading currently depending on the current value of the slider
    sliderYear = slider.value;

    if (sliderYear == 0) {
        $(".map").html("<div class='map'><img class='us-map' src='./img/1900.png'></div>");
        $("#slideryear").html("<div id='slideryear'>1900</div>")
    } else if (sliderYear == 1) {
        $(".map").html("<div class='map'><img class='us-map' src='./img/1930.png'></div>");
        $("#slideryear").html("<div id='slideryear'>1930</div>")
    } else if (sliderYear == 2) {
        $(".map").html("<div class='map'><img class='us-map' src='./img/1960.png'></div>");
        $("#slideryear").html("<div id='slideryear'>1960</div>")
    } else if (sliderYear == 3) {
        $(".map").html("<div class='map'><img class='us-map' src='./img/1990.png'></div>");
        $("#slideryear").html("<div id='slideryear'>1990</div>")
    } else if (sliderYear == 4) {
        $(".map").html("<div class='map'><img class='us-map' src='./img/2020.png'></div>");
        $("#slideryear").html("<div id='slideryear'>2020</div>")
    }
}

//Sidebar code
$(".sidenav").click(function() {
    $("#infoText").css({
        opacity: "100%"
    });
    var sideAnim = anime({
        targets: '#infoText',
        translateX: -450,
        duration: 100,
        easing: 'linear'
    });
})

$(".sidenav a").click(function() {
    var navID = $(this).attr("id");
    var arrLink = $(this).attr("animal");
    $("#anmDesc").html(descHolder[arrLink]);
    console.log(navID)
    console.log(arrLink)
})

//Intro page code
$(".start").click(function() {
    document.getElementById('overlay').style.animation = "fade 1s linear";

    function hideIntro() {
        $("#overlay").hide();
    }

    setTimeout(hideIntro, 970);
});

//This is an array which holds the text and formatting for all our descriptions
var descHolder = ["<h3>California Condor</h3> <p>Scientific Name: Gymnogyps californianus<p> <img class='animal-image' src='./img/condor.jpeg'></br> <p>The California Condor is one of the largest bird species currently alive. They used to inhabit most of the southwest, but after settlers expanded west the birds were both hunted down and had their food supply (comprising mostly of large animals) taken by people. They became extinct in the wild in 1987 (with only 22 in captivity), with lead poisoning and habitat loss being leading causes of death.<br><br>Despite this great decline in population, with recovery efforts of the U.S. Fish and Wildlife Service, the number of California Condors has since increased to over 500 as of 2023 and are being reintegrated into the wild. </p>", "<h3>Gray Wolf</h3> <p>Scientific Name: Canis lupus</p> <img class='animal-image' src='./img/graywolf.jpg'></br> <p>As a species native to California, the Gray Wolf had disappeared from the state in the 1920s. In 2014, the species was listed as endangered, with possible causes being human activity such as hunting.<br><br>Just recently in 2020, the US FWS took away the protections of the Gray Wolf under its title as an endangered species, despite its population not returning anywhere close to what it once was. Luckily, in 2022, this choice was overturned and the protection Gray Wolves once had by the FWS was restored. </p>", "<h3>San Joaquin Kit Fox</h3> <p>Scientific Name: Vulpes macrotis</p> <img class='animal-image' src='./img/kitfox.jpg'></br> <p>The San Joaquin Kit Fox has been threatened with habitat loss through the use of pesticides, and has been listed as endangered since 1967. The species resides in the San Joaquin Valley of California, and its population has been exponentially decreasing since 1930. <br><br> In 1998, The San Joaquin Kit Fox was included in a recovery plan through the U.S. FWS, and its population has remained steady in recent years. </p>", "<h3>Franklin's Bumblebee</h3> <p>Scientific Name: Bombus franklini</p> <img class='animal-image' src='./img/bee.jpg'></br> <p>The Franklins' Bumblebee has not been seen since 2006, and is a critically endangered species. It lives in an area in a 13,000 square mile area in Northern California and Southern Oregon. Out of all North American bumble bees, the Franklin's Bumble Bee has the smallest range distribution. Because this species of bumble bee never received legal protection, pesticides and habitat destruction have continued to harm its ability to survive, and it is not clear whether they are entirely extinct or not. </p>", "<h3>Lionfish</h3> <p>Scientific Name: Pterois</p> <img class='animal-image' src='./img/lionfish.webp'></br> <p>The lionfish is is an invasive species and is found in the U.S. Atlantic Coast waters. Lionfish, originally native to the seas of the Indo-Pacific, found their way to the eastern coast of the United States around 1980. Their existence threatens native fishes and the coral reef ecosystems as they consume an incredible amount of prey, with their diet consisting largely of native fish that serve key roles in their ecosystem. </p> <p>Researchers at the National Oceanic and Atmospheric Administration have concluded that these populations are still expected to grow and will put a strain on local fisheries. Interestingly enough, one suggested remedy that may help against this invasive species is the promotion of lionfish fisheries. If properly supported large-scale fisheries could overfish the lionfish population, helping to mitigate their effects.", "<h3>Zebra Mussel</h3> <p>Scientific Name: Dreissena polymorpha</p> <img class='animal-image' src='./img/mussel.jpeg'></br> <p>Native to the Black Sea and brought to the Great Lakes through a single cargo ship, the zebra mussel has rapidly grown in population and is now found in over 30 states, including the Great Lakes. Zebra mussels have a few negative effects on the North American environment, such as filtering out the algae that native species use for food, and clogging up the water intake pipes of power plants.</p> <p>The spread of Zebra Mussels can be limited through a few ways. Firstly, the use of Zebra Mussels as pets, bait, or food should be avoided. Proper cleaning of a boat is important, such as washing it off and avoiding the transfer of water from one body of water to another. </p>"]
