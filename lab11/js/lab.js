/**
 * Author:    Robert Williams
 * Created:   11.8.2021
 *
 *
 **/






//This appends a button to the challenge section.
$("#challenge").css("color", "red");

$("#challenge").append("<button id='c-button'>Press me!</button>");

//Appends button to problem

$("#problem").append("<button id='p-button'>No press me!</button>");

//Appends button to results.
$("#results").append("<button id='r-button'>You have to press me!</button>");

$("#c-button").click(function(){

$(this).parent().toggleClass("size");
})

$("#p-button").click(function(){
  $(this).parent().toggleClass("padding");
})

$("#r-button").click(function(){
  $(this).parent().toggleClass("special");
})
