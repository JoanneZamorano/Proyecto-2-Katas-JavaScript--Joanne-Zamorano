/*Calcular promedio mezclado: Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario 
cuente la longitud del string y lo sume.
Es un poco locura, pero podremos ejercitar nuestra lógica con este ejercicio.
Puedes usar este array para probar tu función:
*/
const mixedElements = [
    6, // 6
    1, // 1
    "Marvel", // 6
    1,  // 1
    "hamburguesa", // 11
    "10", // 2
    "Prometeo", //8
    8, //8
    "Hola mundo",  //10
];

function averageWord(list) {
    let counter = 0;
    for (const item of list){
        if(typeof item === "string"){
            counter += item.length;
        }else{
            counter += item;
        }
    }
    const promedio = counter / list.length
    console.log("El promedio es: " + promedio)
}

averageWord(mixedElements);