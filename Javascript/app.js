var topics = ["dogs", "cats", "pandas", "elephants", "rhinos", "iguanas"];
var gifs = $("#Gifs");


    for (var i=0; i<topics.length; i++){
        var btn = document.createElement("button");
        var t=document.createTextNode(topics[i]);
        btn.appendChild(t);
        document.body.appendChild(btn);
        $(btn).attr("value", topics[i]);

    };

$("button").on("click", function() {


    //this needs fixing to pull correct gifs
    var search = $(this).val();


    //making an api key variable just to have it saved on here. don't plan on actually using it in code anywhere
    // var APIKey = "wu03X6rnZ6zfygqbLEfVz3q5hJDvGRCj"
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + search + "&api_key=wu03X6rnZ6zfygqbLEfVz3q5hJDvGRCj&limit=10";

    $.ajax({
    url: queryURL,
    method: "GET"
    })
    .then(function(response) {
        var results = response.data;

        for (var i = 0; i < results.length; i++) {

          if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
            var gifDiv = $("<div>");
            var rating = results[i].rating;
            var p = $("<p>").text("Rating: " + rating);
            var animalImage = $("<img>");
            animalImage.attr("src", results[i].images.fixed_height.url);
            gifDiv.append(p);
            gifDiv.append(animalImage);

            $("#Gifs").prepend(gifDiv);
          }
        }
      });
// $("#Gifs").html(buttonList)
})


// function loadGifs() {

//     for (var i=0; i<topics.length; i++){
//       displayQuestion(topics[i])
//     }

// }