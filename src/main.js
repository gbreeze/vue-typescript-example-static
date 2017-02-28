"use strict";
var vue_1 = require("vue");
var App;
(function (App) {
    var index = (function () {
        function index() {
            var xx = new vue_1["default"]({
                el: '#app',
                data: {
                    message: 'Hello Vue.js!'
                }
            });
        }
        return index;
    }());
    App.index = index;
})(App || (App = {}));
