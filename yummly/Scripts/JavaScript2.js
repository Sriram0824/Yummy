function searchItem() {

    getJson();

    $("ul").append("<li>" + "test" + "</li>");



}



function getJson() {


    var queryrec = $("#search").val();

    //reques

   

    $.getJSON("http://api.yummly.com/v1/api/recipes?_app_id=a3130b59&_app_key=58740b655dcf0fc80c60c4a37607bd64&q="+queryrec+"&requirePictures=true")



        //success

        .done(function (data) {

            for (var i = 0; i < data.matches.length; i++) {

                $("ul").append("<li>" + data.matches.length + "</li>");

                $("ul").append("<li>" + data.matches[i].recipeName + "</li>");

                $("ul").append("<li><img src='" + data.matches[i].smallImageUrls[0] + "'></img></li>");



            }

        })

    .fail(function (e) {

        $("ul").append("<li>" + "fail" + "</li>");



    })

}