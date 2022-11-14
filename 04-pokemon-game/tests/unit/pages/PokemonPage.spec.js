import { shallowMount, mount } from '@vue/test-utils'
import PokemonPage from "@/pages/PokemonPage";

import pokemons from '../mocks/pokemons.mock';

describe("PokemonPage component", () => {

    let wrapper

    beforeEach(() => {
        wrapper = shallowMount( PokemonPage )
    })

    test('debe de hacer match con el snapshot', () => {
        expect( wrapper.html() ).toMatchSnapshot()        
    })

    test('debe de llamar mixPokemonArray al montar', () => {

        const mixPokemonArraySpy = jest.spyOn(PokemonPage.methods, 'mixPokemonArray')
        wrapper = shallowMount(PokemonPage);

        expect(mixPokemonArraySpy).toHaveBeenCalled()
    })

    test('debe de hacer match con el snapshot cuando cargan los pokémons', () => {

        const wrapper = shallowMount(PokemonPage, {
            data() {
                return {
                  pokemonArr: pokemons,
                  pokemon: pokemons[0],
                  showPokemon: false,
                  showAnswer: false,
                  message: "",
                };
            }
        })

        expect( wrapper.html() ).toMatchSnapshot()
        
    })

    test('debe de mostrar los componentes de PokemonPicture y PokemonOptions', () => {

        const wrapper = shallowMount(PokemonPage, {
          data() {
            return {
              pokemonArr: pokemons,
              pokemon: pokemons[0],
              showPokemon: false,
              showAnswer: false,
              message: "",
            };
          },
        });

        const picture = wrapper.find("pokemon-picture-stub");
        const options = wrapper.find("pokemon-options-stub");

        expect(picture.exists()).toBeTruthy();
        expect(options.exists()).toBeTruthy();

        expect(picture.attributes('pokemonId')).toBe('5')
        expect(options.attributes('pokemonId')).toBeTruthy()

    })
    
});