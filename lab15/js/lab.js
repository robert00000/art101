/**
 * Author:    Robert Williams
 * Created:   11.20.2021
 *
 *
 **/
 // Using the core $.ajax() method
 //var myUrl = "http://numbersapi.com/42/math";
//var myUrl = "https://api.kanye.rest/";
//var myUrl = "https://cataas.com/cat?json=true";
 var myUrl = "http://numbersapi.com/11/29/date";
 $("#content").toggleClass("padding");
 $("#activate").click(function(){
   $.ajax({
       // The URL for the request (from the api docs)
       url: myUrl,
       // The data to send (will be converted to a query string)
       // data: {
       //         // here is where any data required by the api
       //         //   goes (check the api docs)
       //         id: 123,
       //         api_key: "42",
       //       },
       // Whether this is a POST or GET request
       type: "GET",
       // The type of data we expect back
       //dataType : "json",
       // What do we do when the api call is successful
       //   all the action goes in here
       success: function(data) {
           // do stuff
           console.log(data);
           $("#output").text(data);
       },
       // What we do if the api call fails
       error: function (jqXHR, textStatus, errorThrown) {
           // do stuff
           console.log("Error:", textStatus, errorThrown);
       }
   })
 })
