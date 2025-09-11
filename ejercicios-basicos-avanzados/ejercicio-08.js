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
    let longestWord = "";

    for (const name of stringList){
        if (name.length > longestWord.length){
            longestWord = name;
        }
    }
    console.log(longestWord);
}

findLongestWord(avengers);
