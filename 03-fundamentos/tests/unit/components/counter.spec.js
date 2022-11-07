
import { shallowMount, mount } from '@vue/test-utils'
import Counter from '@/components/Counter'

describe('Counter Component', () => {

    // test('Debe de hacer match con el snapshot', () => {

    //     const wrapper = shallowMount( Counter )

    //     expect( wrapper.html() ).toMatchSnapshot()

    // })

    test('h2 debe de tener el valor por defecto "Counter"', () => {

        const wrapper = shallowMount( Counter )

        expect( wrapper.find('h2').exists() ).toBeTruthy()
        
        const h2Value = wrapper.find('h2').text()

        expect( h2Value ).toBe('Counter') 

    })

    test('el valor por defecto debe de ser 10 en el p', () => {

        // wrapper
        const wrapper = shallowMount( Counter )

        // pTags
        // const pTags = wrapper.findAll('p')

        const value = wrapper.find('[data-testid="counter"]').text();

        // expect segundo p tenga valor 10 (p=10)
        // expect( pTags[1].text() ).toBe('10')

        expect(value).toBe("10");


    })

})