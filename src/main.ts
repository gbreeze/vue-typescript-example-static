
document.addEventListener('DOMContentLoaded', function (event) {
    // your code goes here

    new App.Index().init()

})



namespace App {

    export class Index {

        message = 'hello vue from TS'
        counter = 0

        constructor() {

        }

        greet(){
            alert("Hello!")
        }

        init() {
            let xx = new Vue({
                el: '#app',
                data: this,
                methods: this
            })
        }

    }
}