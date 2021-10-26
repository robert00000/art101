/**
 * Author:    Robert Williams
 * Created:   10.25.2021
 *
 * (c) Copyright by Blub Corp.
 **/
//This function sorts by turning the string into an array, rearranges the name to alphabetical order
//and returns it into a string.
function sortString(){
  var userName = prompt("Please enter your name", "Your a wizard Harry.");
  //This splits the name into a string.
  var myArray = userName.split("");
  console.log("This is the array",  myArray);
  //This sorts the array.
  var arraySorted = myArray.sort();
  console.log("This is the sorted array.",  arraySorted);
  //This Variable converts the array into a string.
  var nameSorted = myArray.join("");
  console.log("This is when the array is joined and turned into a string", nameSorted);
  //Returns the output.
  return nameSorted;
}
//This displays the message in the page.
document.writeln("I think I corrected your name.", sortString(), "</br>");
