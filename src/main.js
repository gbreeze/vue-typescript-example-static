//// No module system is used - import is not supported.
//// import Vue from 'vue'
document.addEventListener('DOMContentLoaded', function (event) {
    new App.Index().init();
});
var App;
(function (App) {
    var Index = (function () {
        function Index() {
            this.message = 'hello vue from TS';
            this.counter = 0;
        }
        Index.prototype.greet = function () {
            alert("Hello!");
        };
        Index.prototype.init = function () {
            var xx = new Vue({
                el: '#app',
                data: this,
                methods: this
            });
        };
        return Index;
    }());
    App.Index = Index;
})(App || (App = {}));
