/**
 * Author:    Robert Williams
 * Created:   10.27.2021
 *
 *
 **/
 //This returns the input with an output that is squared.
 function powerOf2(x){
     return (x **2); //Returns the equation to be outputted.
 }
 //This declares the array.
 var array = [3,5,8,20,4,10];
 //These show the output in the consoles.
 console.log("The output of the function when 2 is inputted.", powerOf2(2));
 //Another example to show that the function works.
 console.log("The output of the function when 2 is inputted.", powerOf2(11));
 //Makes sure to show the result of the function in an array.
 console.log("The result from running array.map", array.map(powerOf2));
 var outputEl = document.getElementById("output"); //This allows the html document to access the output and place it into the div.
 var output = ("This is the original array: " + array +"This is my output: " + array.map(powerOf2)); //This variable puts a string for the output.
 outputEl.innerHTML = output; // puts your results here
