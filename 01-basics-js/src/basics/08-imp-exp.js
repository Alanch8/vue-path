
// import { owners } from './data/heroes'

import superHeroes from '../data/heroes'

//getHeroeById (id)
// funciones de Flecha
// find
// const getHeroById = (id) => {
//     return superHeroes.find(hero => hero.id === id)}

export const getHeroById = (id) => superHeroes.find((hero) => hero.id === id);

// getHeroeByOwner 'DC', 'Marvel'
// []

export const getHeroByOwner = (owner) => superHeroes.filter((hero) => hero.owner == owner);


// import { getHeroById, getHeroByOwner } from './basics/08-imp-exp'

// console.log(getHeroById(2)); //Spiderman

// console.log(getHeroByOwner('DC')); // []