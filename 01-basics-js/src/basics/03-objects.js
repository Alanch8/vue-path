

const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 535345,
        lat: 325234,
        lng: 2435243
    }
}

const persona2 = { ...persona }

persona2.nombre = 'Peter'

console.log(persona);
console.log(persona2);