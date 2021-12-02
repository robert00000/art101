/**
 * Author:    Robert Williams
 * Created:   11.30.2021
 *
 *
 **/
 var myUrl = "https://xkcd.com/2416/info.0.json";
 $("#content").toggleClass("padding");
$("#output").toggleClass("font");
$("#alt").toggleClass("font");
$("#activate").click(function(){
  //This gets the comic from the site as well as it's title.

  var comicObj = $.ajax({
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
        dataType : "json",
         // What do we do when the api call is successful
         //   all the action goes in here
        success: function(data) {
             // do stuff
            console.log(data);
            //Variables to get data from the image in simplified form.
            var imgUrl = data.img;
            var title = data.title;
            var alt = data.alt;

            //$("#output").text(title);
            $("#image").attr("title", title);
            $("#output").text(title);

            $("#image").attr("src", imgUrl, "alt", alt);

            $("#alt").text(alt);
          //  $("#alt").text(alt);
        },
         // What we do if the api call fails
        error: function (jqXHR, textStatus, errorThrown) {
            // do stuff
            console.log("Error:", textStatus, errorThrown);
           }
  })
})
//$("#output").prepend(comicObj.title);
