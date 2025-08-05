/*Ejercicio 10
Calcular un promedio es una tarea extremadamente común, así que prueba a implementar esa funcionalidad 
en la siguiente función. Puedes usar este array para probarla:*/

const numbers = [12, 21, 38, 5, 45, 37, 6];  // 164 / 7 = 23.42
function average(numberList) {
    let suma = 0;

    for(let index = 0; index < numberList.length; index++){
        suma += numberList[index];
        promedio = suma/numberList.length
    }
    return promedio
    
}

console.log(average(numbers))
