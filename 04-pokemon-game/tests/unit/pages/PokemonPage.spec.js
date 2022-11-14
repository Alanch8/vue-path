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
                  pokemon: null,
                  showPokemon: false,
                  showAnswer: false,
                  message: "",
                };
            }
        })
        
    })
    
});