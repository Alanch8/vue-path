<template>
  <h1>Counter - Vuex</h1>
  <h2>Direct access: {{ $store.state.counter.count }}</h2>
  <h2>Computed: {{ countComputed }}</h2>

  <button @click="increment">+1</button>
  <button @click="incrementBy">+5</button>
  <button @click="randomInt" :disabled="isLoading">Random</button>

  <h1>mapState</h1>
  <h2>mapState: {{ count }}</h2>
  <h2>lastMutation: {{ lastMutation }}</h2>

  <h2>Direct getter: {{ $store.getters['counter/squareCount'] }}</h2>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {

  // computed: mapState(['count'])
  computed: {
    countComputed() {
      return this.$store.state.counter.count;
    },
    ...mapState( 'counter', ['count', 'lastMutation', 'isLoading'])
    // ...mapState({
    //   count: state => state.count,
    //   lastMutation: state => state.lastMutation
    // })
  },

  methods: {
    increment() {
      this.$store.commit('counter/increment') // fijate que increment() es un method en este component y 'increment' es la mutation del store. No tienen "nada"que ver. Los estamos relacionando entre ellos y usamos el mismo nombre.
    },
    incrementBy() {
      this.$store.commit('counter/incrementBy', 5)
      // this.randomInt() //Podemos llamar una action con un method
    },
    // incrementRandomInt() {
    //   this.$store.dispatch( 'incrementRandomInt')
    // }
    // ...mapActions( 'counter', ['incrementRandomInt']) //Puede crear confusión por usar el mismo nombre
    ...mapActions( 'counter', {
      randomInt: 'incrementRandomInt'
    })
  }
};
</script>
