$(document).ready(
    function (e) {
        $("#search").click(
            function (e) {
                e.preventDefault();
                console.log($("#query").val());
                yummly.search($("#query").val(), populatSearchResult)
            }
            );
        function populateResult(recipeId) {
            yummly.Recipe(recipeId, function (data) {
                alert(recipe.id);
                console.log(data);
            });
        }

        

        function populatSearchResult(data) {
                var $body = $(".container .body");
                $body.empty();
                console.log(data);
                for (var i = 0; i < data.matches.length; i++) {
                    (function (recipe) {
                        var $division = $("<div class='item'></div>").appendTo($body);
                        var $element = $("<div><a href='#'></div>").appendTo($division);
                        $element.find('a').text(recipe.recipeName).click(
                            function (e) {
                                console.log(data);
                                
                                e.preventDefault();
                                populateResult(recipe.id);
                            });
                        $division = $('<div></div>').appendTo($division);
                        var $img = $('<img></img>').attr("src", recipe.smallImageUrls[0])
                        .appendTo($element);
                        $element = $('<div></div>').appendTo($division);
                        var $ol = $("<ol></ol>").appendTo($element);
                        for (var i = 0; i < recipe.ingredients.length; i++) {
                            $('<li></li>').appendTo($ol).text(recipe.ingredients[i]);

                            //To add timestamp
                            //$("<td></td>").appendTo($division).text(recipe.totalTimeInSeconds)
                        }
                        $("<div></div>").appendTo($division).text(
                            new Date(2000, 1, 1, 0, 0, recipe.totalTimeInSeconds).toTimeString().split(" ", 2)[0])

                    })(data.matches[i]);
                }
            }
        }
    
);