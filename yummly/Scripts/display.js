//This strategy is uded everywhere,
//Seperation between local and global variables
(function (global, $) {
    function yummlyRequest(data) {
        if (typeof (data) == "object" && data != null) {
            for (var i in data) {
                this[i] = data;
            }
        }
    }

    yummlyRequest.URL = "http://api.yummly.com/v1/api/";
    yummlyRequest.prototype._app_id = "0fd5d39d";
    yummlyRequest.prototype._app_key = "c80aa038f437173fdf436a5f4ca5cbeb";

    function getUrl(method, data, path) {
        //Jquery uses this method a lot
        if (typeof data == "String") {
            path = data;
            data = undefined;
        }
        var query = new yummlyRequest(data);
        var queryString = $.param(query);
        var url = yummlyRequest.URL + method;
        url += "?" + queryString; return url;
    }

    global.getUrl = getUrl;



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

})(window, jQuery);