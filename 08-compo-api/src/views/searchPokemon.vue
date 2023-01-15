<template>
  <h1>Buscar pokémon: {{ pokemonId }}</h1>
  <form @submit.prevent="onSubmit">
    <input type="number" 
           placeholder="Número del pókemon"
           v-model="pokemonId"
           ref="txtSearchId"

    >
  </form>
  <br>
  <span>Presione enter para buscar</span>
</template>

<script>
import { ref, onActivated } from "vue";
import { useRouter } from "vue-router";

export default {
    setup() {

        const router = useRouter()

        const pokemonId = ref(1)
        const txtSearchId = ref() //Creamos la variable txtSearchId (puede ser cualquier nombre), para poder hacer un autofocus o un select como es el caso. Si usaramos la propiedad autofocus directamente en el input el comportamiento es un poco raro debdido al keep alive del router.

        onActivated(() => {
          // txtSearchId.value.focus()
          txtSearchId.value.select()
        })

        return {
            pokemonId,
            txtSearchId,

            onSubmit: () => {
                // console.log('Pókemon a buscar: ', pokemonId.value )
                router.push({ name: 'pokemon-id', params: { id: pokemonId.value } })                
            }
        }
    }
}
</script>
