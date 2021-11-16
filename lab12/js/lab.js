/**
 * Author:    Robert Williams
 * Created:   11.15.2021
 *
 *
 **/


//This functions sorts names using if statements by getting the remainder of 4.
function sortingHat(str){
  //Variable to get the length of the value in the input
  let length = str.length;
  //Calculates the remainder
  let mod = length % 4
  //If statements to determine what should be returned from the remainder.
  if(mod == 0){
    return "Gryffindor";
  }
  if(mod == 1){
    return "Hufflepuff";
  }
  if(mod == 2){
    return "Ravenclaw";
  }
  if(mod == 3){
    return "Slytherin";
  }
//var mybutton = $("#button");
}
//This allows the function to run whenever the button is clicked.
$("#button").click(function(){
  //This gets the input in the text field.
  name = $("#input").val();
  //This gets the output from the function.
  var house = sortingHat(name);
  //This changes the text of the id in the html page.
  $("#house").text("House " + house + "!");

  $(this).parent().toggleClass("background");
})
