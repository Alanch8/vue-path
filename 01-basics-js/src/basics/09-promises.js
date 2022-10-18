import { getHeroById } from './basics/08-imp-exp'

// console.log('Inicio');

// new Promise((resolve, reject) => {
//     console.log('Cuerpo de la promesa')
//     resolve('Promesa resuelta')
// })
// .then(console.log)
// .catch(console.log)

// console.log('Fin');

const getHeroByIdAsync = (id) => {
    return new Promise(( resolve, reject )=>{
        setTimeout(()=>{
            const hero = getHeroById( id )
            if ( hero ) {
                resolve( hero )
            } else {
                reject( 'Heroe no existe' )
            }
        }, 1000)
    });
}

getHeroByIdAsync(1)
    .then( hero => console.log(`El heroe es: ${hero.name}`))
    .catch( console.log )