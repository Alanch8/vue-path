
const app = Vue.createApp({
    // template: `
    // <h1>Hello World</h1>
    // <p>Desde app.js</p>
    // `

    data(){
        return{
            quote: "I'm Batman",
            author: "Bruce Wayne"
        }
    }

})

app.mount('#myApp')