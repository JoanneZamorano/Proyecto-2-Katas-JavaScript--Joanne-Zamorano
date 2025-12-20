/*Crea una función llamada swap que reciba un array y dos parametros que sean indices del array.
La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Es decir, 
intercambiar el lugar de un elemento por otro dentro del array.
Retorna el array resultante.*/

const fantasticFour = [
    "La antorcha humana",
    "Mr. Fantástico",
    "La mujer invisible",
    "La cosa",
];

const swap = (array, parametro1, parametro2) => {
    let guardadoParamInicial = array[parametro1]
    array[parametro1] = array[parametro2]
    array[parametro2] = guardadoParamInicial
    return array
}
console.log(swap(fantasticFour, 0, 2))