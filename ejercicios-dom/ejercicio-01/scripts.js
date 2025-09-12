// 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme
const botonClase = document.querySelector(".showme")
console.log(botonClase.textContent)

// 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado
const title = document.querySelector("#pillado")
console.log(title.textContent)

// 1.3 Usa querySelector para mostrar por consola todos los p
const parrafos = document.querySelectorAll("p")

for (const parrafo of parrafos) {
    console.log(parrafo.textContent)
}

// 1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon
const elementos = document.querySelectorAll(".pokemon")

for (const elemento of elementos) {
    console.log(elemento.textContent)
}

// 1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo data-function="testMe".
const allTestMe = document.querySelectorAll('[data-function="testMe"]')
for (const elemento of allTestMe) {
    console.log(elemento.textContent)
}

// 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo data-function="testMe".
const personaje3 = document.querySelectorAll('[data-function="testMe"]')

console.log(personaje3[3].textContent)