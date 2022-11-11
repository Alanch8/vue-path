<template>
  <h1>Who's that Pokémon?</h1>
  <PokemonPicture :pokemonId="133" :showPokemon="true"/>
  <PokemonOptions :pokemons="pokemonArr" />
</template>

<script>
import PokemonPicture from "@/components/PokemonPicture.vue";
import PokemonOptions from "@/components/PokemonOptions.vue";

import getPokemonOptions from '@/helpers/getPokemonOptions'

// console.log( getPokemonOptions() );

export default {
  components: {
    PokemonPicture,
    PokemonOptions,
  },
  data() {

    return {
      pokemonArr: []
    }
  },
  methods: {
    async mixPokemonArray() {
      this.pokemonArr = await getPokemonOptions()
    }
  },
  mounted() {
    this.mixPokemonArray()
  }
};
</script>

<style></style>
