/*Buscador de nombres: Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array. 
Esta función comprueba si existe el elemento, y en caso de que exista nos devuelve un true y la posición de dicho elemento 
y por la contra un false.
Puedes usar este array para probar tu función: */

const names = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
];

function nameFinder(nameList, nameToFind) {
    let position = -1; 

    for (let i = 0; i < nameList.length; i++) {
        if (nameList[i] === nameToFind) {
        position = i; 
        break; 
        }
    }


    if (position !== -1) {
        console.log(true, " Posición en el listado: " + position);
    } else {
        console.log(false);
    }
}

nameFinder(names, 'Joanne');
nameFinder(names, 'Logan');


