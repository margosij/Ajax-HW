var topics = ["dogs", "cats", "pandas", "elephants", "rhinos", "iguanas"];
var gifs = $("#Gifs");


$("#animal-addition").on("click", function(event){
    event.preventDefault();
    var newAnimal = $("#animals").val().trim();
    topics.push(newAnimal);
    var btn = document.createElement("button");
        var t=document.createTextNode(newAnimal);
        btn.appendChild(t);
        document.body.appendChild(btn);
        $(btn).attr("value", newAnimal);

        $("button").on("click", function() {
            event.preventDefault();
        

            var search = $(this).val();
        
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
                    animalImage.attr("src", results[i].images.fixed_height_still.url);
                    animalImage.attr("data-state", "still");
                    animalImage.attr("data-still", results[i].images.fixed_height_still.url);
                    animalImage.attr("data-animate", results[i].images.fixed_height.url);
                    animalImage.addClass("animalGifs");
                    gifDiv.append(p);
                    gifDiv.append(animalImage);

                    $("#Gifs").prepend(gifDiv);
                  }
                }
                
              });

        });

        $(document).on("click", ".animalGifs", function(){

            var state = $(this).attr("data-state");
        if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
            }
    
        else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
        }

});
});

function createButtons(){
    for (var i=0; i<topics.length; i++){
        var btn = document.createElement("button");
        var t=document.createTextNode(topics[i]);
        btn.appendChild(t);
        document.body.appendChild(btn);
        $(btn).attr("value", topics[i]);

    };
};
createButtons();
$("button").on("click", function() {
    event.preventDefault();

    var search = $(this).val();


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
            animalImage.attr("src", results[i].images.fixed_height_still.url);
            animalImage.attr("data-state", "still");
            animalImage.attr("data-still", results[i].images.fixed_height_still.url);
            animalImage.attr("data-animate", results[i].images.fixed_height.url);
            animalImage.addClass("animalGifs");
            gifDiv.append(p);
            gifDiv.append(animalImage);

            $("#Gifs").prepend(gifDiv);
          }
        }

        
      });

    $(document).on("click", ".animalGifs", function(){

        var state = $(this).attr("data-state");
    if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
        }

    else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
    }
  });
  

})