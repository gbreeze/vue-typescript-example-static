//// No module system is used - import is not supported.
//// import Vue from 'vue'

document.addEventListener('DOMContentLoaded', event => {
    App.initVue('#app', new App.Index())
})

namespace App {

    export function initVue(id: string, viewModel: Object) {
        let v = new Vue({
            el: id,
            data: viewModel,
            methods: viewModel
        })
    }

    export class Index {
        message = 'hello vue from TS'
        counter = 0

        constructor() {

        }

        greet() {
            alert("Hello!")
        }
    }
}