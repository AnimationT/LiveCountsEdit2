var subCount = 0;
var chanName = "LiveCountsEdit Channel";
var amType = "things";

$("h1").click(function(){
   chanName = window.prompt("Enter the new channel name:" , chanName);
    $("h1").text(chanName);
});

$("h2").click(function(){
    amType = window.prompt("What amount are you measuring?" , amType);
     $("h2").text(amType);
 });

$("#subCountButton").click(function(){
    subCount = parseInt(document.getElementById("subCountInput").value);
    $("#count").html(subCount);
});