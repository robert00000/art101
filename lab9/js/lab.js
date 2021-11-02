/**
 * Author:    Robert Williams
 * Created:   11.1.2021
 *
 *
 **/


 var outputEl = document.getElementById("output"); //This allows the html document to access the output and place it into the div.
 //Creates text for the html file to show.
    outputEl.innerHTML = "The html will decide your fate.";
    outputEl.style.fontSize = "28px"; //Changes the style of the output and in this case the font size of the text.
//This creates the forst element
 var new1El = document.createElement("p");
 //Creates text for the html file to show.
    new1El.innerHTML = "I am the html";
    new1El.style.color = "red"; //This sets the style for the assigned element
//Makes a second element to add to the document.
 var new2El = document.createElement("d");
 //Creates text for the html file to show.
    new2El.innerHTML = "Not yet";
    new2El.style.fontSize = "60px";
    new2El.style.color = "purple"; //Sets color for the text above.
//These append the new elements to the element within the document.
outputEl.appendChild(new1El);
outputEl.appendChild(new2El);
