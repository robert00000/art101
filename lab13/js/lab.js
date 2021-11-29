/**
 * Author:    Robert Williams
 * Created:   11.20.2021
 *
 *
 **/
outputEl = document.getElementById("output");
$("#challenge").toggleClass("padding");
$("#problem").toggleClass("padding");
$("#results").toggleClass("padding");
$("#output").toggleClass("padding");
$("#button").toggleClass("center");
//This outputs the code to the page
function outputToPage(str) {
    newEl = document.createElement("p");
    newEl.innerHTML = str;
    outputEl.appendChild(newEl);
}
function mod(){

  for(i=1;i <= 200;i++){
    var outputStr = "";
    if(i % 3 == 0 && i%5 == 0){
      console.log("fizzbuzz");

    }
    else if(i%15 == 0){
      console.log("fizzbuzzboom");
      outputToPage("fizzbuzzboom" + outputStr);
    }
    else if(i%7 == 0){
      console.log("boom");
      outputToPage("boom" + outputStr);
    }
    else if(i%5 == 0){
      console.log("buzz");
      outputToPage("buzz" + outputStr);
    }
    else if(i%3 == 0){
      console.log("fizz");
      outputToPage("fizz" + outputStr);
    }
    else{
      console.log(i);
      outputToPage(i.toString() + outputStr);
    }

  }
  //$("#output").text("Number " + mod());
}

$("#button").click(function(){
  console.log("Button pushed")
  outputEl.innerHTML = "";
  $("#output").text(mod());

})
