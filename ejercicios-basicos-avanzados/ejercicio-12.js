/*Valores únicos: Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, 
en caso que existan los elimina para retornar un array sin los elementos duplicados.
Pista: puedes generar un nuevo array y devolverlo. Puedes usar este array para probar tu función:
*/
const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza', // eliminar
    'chicken',
    'onion rings',
    'pasta', // eliminar
    'soda'
];

function removeDuplicates(list) {
    const unico = [];
    for (const comida of list) {
        if(!unico.includes(comida)){
            unico.push(comida)
        }
    }
    console.log(unico)
}

removeDuplicates(duplicates);