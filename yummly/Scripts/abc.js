$(document).ready(function () {
    $('.slider1').bxSlider({
        slideWidth: 3000,
        minSlides: 2,
        maxSlides: 3,
        slideMargin: 0,
        easing: 'ease-in-out',
        auto: true
    });

    $("#LoginStatus1").click(function () {
        alert();
    });

    var href = $('div#Navigation nav a').click(function () {
        $(".bx-wrapper").hide();
        $("#image").show();
        var $link = $(this).attr('title');
        yummly.search($link, populateSearchResult)
    });

  

    function showSelected() {
        $('#r1').show();
        $('#r2').hide();
    }

    $('div.items').click(function () {
        var id = $(this).attr('id');
        //alert(id);
        showSelected();
    });

    $('.search_text').keypress(function (e) {
        if (e.keyCode == 13) {
            recSearch();
        }
        
    });

    function recSearch() {
        yummly.search($("#search").val(), populateSearchResult)
    }

    /********** Yummly Search *********/
    
        $("#search_image").click(function () {
            recSearch();
         
    });
    

    (function (global, $) {
        function yummlyRequest(data) {
            if (typeof (data) == "object" && data != null) {
                for (var i in data) {
                    this[i] = data[i];
                }
            }
        }

        yummlyRequest.prototype._app_id = "0fd5d39d";
        yummlyRequest.prototype._app_key = "c80aa038f437173fdf436a5f4ca5cbeb";
        yummlyRequest.URL = "http://api.yummly.com/v1/api/";


        function getUrl(method, data, path) {
            //Jquery uses this method a lot
            if (typeof (data) == "string") {
                path = data;
                data = undefined;
            }

            var query = new yummlyRequest(data);
            var queryString = $.param(query);
            var url = yummlyRequest.URL + method;
            if (path) {
                url += "/" + path;
            }
            url += "?" + queryString;
            return url;
        }

        // global.getUrl = getUrl;



        global.yummly = function yummly() {

        };

        yummly.search = function yummly_search(query, callback) {
            var url = getUrl("recipes", { q: query });
            var options = {
                type: "GET",
                dataType: "jsonp",
                jsonp: "callback",
                success: callback
            };
            $.ajax(url, options);
        }

        yummly.Recipe = function Yummly_Recipe(recipeId, callback) {
            var url = getUrl("recipe", recipeId);
            var options = {
                // data: new YummlyRequest({q: query})
                dataType: "jsonp",
                type: "GET",
                jsonp: "callback",
                success: callback,
                error: function () {
                    alert("in error");
                }
            };
            $.ajax(url, options);
        }


        global.yummly = yummly;

    })(window, jQuery);

    function populateResultCallback(data) {
        console.log(data.name);
        var $div = $("#image");
        var $recipeName = data.name;

        var $mainDiv = $("<div class='mainDiv'></div>").appendTo($div);
        var $img = $("<img class='image'></img>").attr("src", data.images[0].hostedLargeUrl)
                .appendTo($mainDiv);
        var $nameDiv = $("<div class='name'></div>").text($recipeName).appendTo($mainDiv);


        $img.click(function (e) {
            
            console.log(data);
            $div.empty();

           
            /********** Get recipe name **********/
                
            var $recipeName = $('<div></div>').text("Name: " + data.name).appendTo($div);

            /********** Get recipe name END**********/


            /********** Get Ingredients **********/

            for (var i = 0; i < data.ingredientLines.length; i++) {
                var $ul = $("<ul></ul>").text("Ingredients: ").appendTo($div);
                for (var i = 0; i < data.ingredientLines.length; i++) {
                    $('<li></li>').appendTo($ul).text(data.ingredientLines[i]);
                }
            }
            /********** Get Ingredients END **********/

            /********** GET images **************/
            var $images = $("<img></img>").appendTo($div);
            $images.attr("src", data.images[0].hostedMediumUrl);
            /********** GET images end *********/

            /********** Get prep time **********/
            var $recipePrepTime = $('<div></div>').text("Prep time: " + data.totalTime).appendTo($div);
            /********** Get prep time END**********/

            /********** Get rating **********/
            var $recipeRating = $('<div></div>').text("Rating: " + data.rating).appendTo($div);
            /********** Get rating END**********/

            /********** Get prep time **********/
            var $recipeCredits = $('<div></div>').text("Source: " + data.source.sourceDisplayName).appendTo($div);
            /********** Get prep time END**********/

            /*********** GET SOURCE ***************/
            var $serving = $("<div></div>").text("Serving Size: " + data.yield);
            /*********** GET SOURCE END ***************/

           
            
        });
        
    }   

    function populateResult(recipeId) {
        yummly.Recipe(recipeId, populateResultCallback)
    }
      

    function populateSearchResult(data) {
        var $body = $("#image");
        $body.empty();
        for (var i = 0; i < data.matches.length; i++) {
            (function (recipe) {
                 var $recipeName = recipe.recipeName;
                var recipeObj = populateResult(recipe.id);
            })(data.matches[i]);
        }
    }
     
});