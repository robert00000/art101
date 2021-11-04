/**
 * Author:    Robert Williams
 * Created:   11.3.2021
 *
 *
 **/

 var button = document.getElementById("my-button");
 button.onclick = function(){sortString};
 button.addEventListener("click", sortString);
 console.log("inner html ", button.innerHTML);


//Sorts the string inputted when the button is clicked.
 function sortString(){
   //Gets id from the html.
   var userName = document.getElementById("user-name");
   var name = userName.value;
   //This splits the name into a string.
   var myArray = name.split("");
   console.log("This is the array",  myArray);
   //This sorts the array.
   var arraySorted = myArray.sort();
   console.log("This is the sorted array.",  arraySorted);
   //This Variable converts the array into a string.
   var nameSorted = myArray.join("");
   console.log("This is when the array is joined and turned into a string", nameSorted);
   document.getElementById("output").innerHTML = "Your actual name is " + nameSorted;
   //Returns the output.
   return nameSorted;
 }
