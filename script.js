var subCount = 0;
var chanName = "LiveCountsEdit Channel";

$("h1").click(function(){
   chanName = window.prompt("Enter the new channel name:" , chanName);
    $("h1").text(chanName);
});

$("#subCountButton").click(function(){
    subCount = parseInt(document.getElementById("subCountInput").value);
    $("#count").html(subCount);
});