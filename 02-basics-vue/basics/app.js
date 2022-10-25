
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
    },
    methods: {
        changeQuote(){
            console.log('Hello world')
            this.author = 'Aito Lancharro'

            this.capitalize()
        },
        capitalize(){
            this.quote = this.quote.toUpperCase()
        }
    }

})

app.mount('#myApp')