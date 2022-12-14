import { shallowMount } from "@vue/test-utils";
import PokemonOptions from "@/components/PokemonOptions";

import { pokemons } from '../mocks/pokemons.mock'

describe('PkemonOptions component', () => {

    let wrapper

    beforeEach(() => {
        wrapper = shallowMount( PokemonOptions, {
            props: {
                pokemons
            }
        } )
    })

    test('debe de hacer match con el snapshot', () => {

        // console.log(wrapper.html());

        expect(wrapper.html()).toMatchSnapshot();

    })

    test("debe de mostrar las 4 opciones correctamente", () => {

        const liTags = wrapper.findAll('li')
        expect(liTags.length).toBe(4) 

        expect(liTags[0].text()).toBe('bulbasur')
        expect(liTags[1].text()).toBe("ivysaur");
        expect(liTags[2].text()).toBe("venusaur");
        expect(liTags[3].text()).toBe("charmander");
      
    });

    test("debe de emitir 'selection' con sus respectivos parámetros al hacer click", () => {
      
        const [li1, li2, li3, li4 ] = wrapper.findAll('li')

        li1.trigger('click')

        // console.log(expect(wrapper.emitted("selection")));
        expect(wrapper.emitted("selection").length).toBe(4);
        expect(wrapper.emitted("selection")[0]).toEqual([5]);
        expect(wrapper.emitted("selection")[1]).toEqual([10]);
        expect(wrapper.emitted("selection")[2]).toEqual([15]);
        expect(wrapper.emitted("selection")[3]).toEqual([20]);
    });

})