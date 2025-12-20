/*
1. Crea una función llamada findArrayIndex que reciba como parametros un array de textos y un texto y devuelve la posición 
del array cuando el valor del array sea igual al valor del texto que enviaste como parámetro.
Haz varios ejemplos y compruébalos.*/

const mainCharacters = [
    "Luke",
    "Leia",
    "Han Solo",
    "Chewbacca",
    "Rey",
    "Anakin",
    "Obi-Wan",
];

function findArrayIndex(array, text) {
    for(elemento of array) {
        if (elemento === text){
            return array.indexOf(text)
        }
    }
    if (elemento !== text){
        return `Personaje no encontrado`
    }
}

console.log(findArrayIndex(mainCharacters, 'Leia')) // Sale 1 - ok
console.log(findArrayIndex(mainCharacters, 'Joa')) // Personaje no encontrado

/*2. Usando la función anterior benefíciate de poder conocer el indice del array para crear una función llamada removeItem que,
pasándole un array y un texto como parámetros (los mismos parámetros que en el anterior ejercicio), llame a la función 
anteriormente creada findArrayIndex y obtén el indice para posteriormente usar la función de javascript .splice() para 
eliminar el elemento del array.*/
/*Es decir, tienes que crear una función que elimine elementos del array y retorne el nuevo array sin el elemento, apoyándote 
en findArrayIndex. Finalmente retorna el array.De nuevo haz varios ejemplos para practicar y comprueba que funcionan correctamente.*/

const removeTextItem = (array, text) => {
    let newmainCharacters = []
    
    for (element of array) {
        newmainCharacters.push(element) 
    }
    i = findArrayIndex(newmainCharacters, text)
    newmainCharacters.splice(i, 1)
    return newmainCharacters
}

console.log(removeTextItem (mainCharacters, "Obi-Wan"))
console.log(removeTextItem (mainCharacters, "Luke"))



