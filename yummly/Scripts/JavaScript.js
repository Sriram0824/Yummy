function searchDish() {

    displayDish();

   
}

function displayDish() {


    var dishname = $("#search").val();

    //reques



    $.getJSON("http://api.yummly.com/v1/api/recipes?_app_id=a3130b59&_app_key=58740b655dcf0fc80c60c4a37607bd64&q=" + dishname + "&requirePictures=true")




        //success

        .done(function (data) {
            
            var $body = $(".container .body");
            $body.empty();

            

            for (var i = 0; i < data.matches.length; i++) {

                var $division = $("<div class='item'></div>").appendTo($body);

                var $table = $("<table></table>").appendTo($division);

                
                
                var name = data.matches[i].recipeName;
                var id = data.matches[i].id;
                $table.append("<tr><td align='center'>" + data.matches[i].recipeName + "</td></tr>");

                

               $table.append("<tr><td align='center'><img src='" + data.matches[i].smallImageUrls[0] + "'></img></td></tr>").click(function (e) {
                  
                   $(".hidediv").show();

                  
               });

               var $division1 = $("<div class='hidediv' style='display:none; color:black'></div>").appendTo($table);

               var $table1 = $("<table></table>").appendTo($division1);


               $table1.append("<tr><td align='center'><strong>INGREDIENTS</strong></td></tr><tr><td align='center'>" + data.matches[i].ingredients + "</td></tr>");

               $table1.append("<tr><td align='center'><strong>RATING</strong></td></tr><tr><td align='center'>" + data.matches[i].rating + "</td></tr>");

        

            }

        })


      

    .fail(function (e) {
        alert("No search results");
      



    })

}

function populateResult(recipeId) {
    alert(recipeId);
    yummly.Recipe(recipeId, function (data) {
        alert("2");
        console.log(data);
    });


    $.getJSON("http://api.yummly.com/v1/api/recipe/recipe-id?_app_id=a3130b59&_app_key=58740b655dcf0fc80c60c4a37607bd64&q=" + dishname + "&requirePictures=true")





}
    