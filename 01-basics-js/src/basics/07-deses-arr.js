


const characters = ['Goku','Vegete', 'Trunks', 'Goten']

const [goku, vegeta, trunks, goten='No tiene valor'] = characters

const returnArray = ([letters, numbers]) => {
    return [letters, numbers]
}

const [letters, numbers] = returnArray(['XYZ', 987])

console.log(letters, numbers)