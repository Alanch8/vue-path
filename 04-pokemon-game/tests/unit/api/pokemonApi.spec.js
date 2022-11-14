import pokemonApi from "@/api/pokemonApi";

describe('pokemonApi', () => {

    test('axios debe de estar configurado con el api de pokémon', () => {

        // console.log(pokemonApi);

        expect(pokemonApi.defaults.baseURL).toBe(
          "https://pokeapi.co/api/v2/pokemon"
        );

    })

})