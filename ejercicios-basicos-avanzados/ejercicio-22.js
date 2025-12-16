/*Usa un for para remplazar todas las comidas que no sean veganas con las frutas del array de frutas.
Recuerda no usar frutas duplicadas.
Finalmente, imprime el array resultante.*/

const fruits = ["Strawberry", "Banana", "Orange", "Apple"];

const foodSchedule = [
    { name: "Heura", isVegan: true },
    { name: "Salmon", isVegan: false },
    { name: "Tofu", isVegan: true },
    { name: "Burger", isVegan: false },
    { name: "Rice", isVegan: true },
    { name: "Pasta", isVegan: true },
];

let contador = 0;

for (let i = 0; i < foodSchedule.length; i++) {
    if (foodSchedule[i].isVegan === false) {
        foodSchedule[i].name = fruits[contador]; // reemplazo el nombre por la fruta
        foodSchedule[i].isVegan = true; //cambio el estado a true porque la fruta es vegana
        contador++;
    }
}
console.log(foodSchedule);