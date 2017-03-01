//// No module system is used - import is not supported.
//// import Vue from 'vue'

document.addEventListener('DOMContentLoaded', event => {
    new App.Index().init()
})

namespace App {

    export class Index {

        message = 'hello vue from TS'
        counter = 0

        constructor() {

        }

        greet() {
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