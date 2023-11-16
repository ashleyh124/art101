console.log("Javascript is working:")

$("#my-button").click(function(){
    console.log("Button clicked!");
    var name = prompt("Name please:")
    console.log("Prompt returned: " + name)
    newText = "Hello " + name + "!";
    $("#title").html(newText);
});
