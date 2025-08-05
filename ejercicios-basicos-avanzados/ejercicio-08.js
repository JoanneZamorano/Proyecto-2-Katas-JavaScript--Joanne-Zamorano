/*Buscar la palabra más larga: Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.
Puedes usar este array para probar tu función:*/

const avengers = [
    "Hulk", //4
    "Thor", //4
    "Iron Man", //8
    "Captain A.", //Tiene que devolver Captain A. -> 10
    "Spiderman", //9
    "Captain M.", //10
];

function findLongestWord(stringList) {
    let primeraPalabra = stringList[0];

    for (let index = 1; index < stringList.length; index++) {
        if (stringList[index].length > primeraPalabra.length) {
            primeraPalabra = stringList[index];
        }
    }

    return primeraPalabra;
}

const longestAvenger = findLongestWord(avengers);
console.log(longestAvenger);

