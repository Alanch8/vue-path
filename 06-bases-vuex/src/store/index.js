import { createStore } from "vuex";


export default createStore({
    state: { //similar a data()
        count: 1,
        lastMutation: 'none'
    },

    mutations: { //similar a methods(). Tienen que ser sincronas y son las que se encargan de cambiar el State. Prohibido hacer async await.
        increment( state ) {
            state.count++
            state.lastMutation = 'increment'
        },
        incrementBy( state, val ) {
            state.count += val
            state.lastMutation = 'incrementBy'
        }
    }
})