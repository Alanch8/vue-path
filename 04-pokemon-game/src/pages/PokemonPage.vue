<template>
  <h1>Who's that Pokémon?</h1>
  <PokemonPicture :pokemonId="133" :showPokemon="true"/>
  <PokemonOptions />
</template>

<script>
import PokemonPicture from "@/components/PokemonPicture.vue";
import PokemonOptions from "@/components/PokemonOptions.vue";

export default {
  components: {
    PokemonPicture,
    PokemonOptions,
  },
};
</script>

<style></style>
