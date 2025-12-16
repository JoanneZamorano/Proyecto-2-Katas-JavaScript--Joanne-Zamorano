//2.1 Inserta dinamicamente en un html un div vacio con javascript.
const nuevoDiv = document.createElement("div");
console.log(nuevoDiv)

//2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
const nuevoDivP = document.createElement("div")
const nuevoP = document.createElement("p");
nuevoDivP.appendChild(nuevoP);

console.log(nuevoDivP)

// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
const nuevoDivLoop = document.createElement("div")

for (let index = 0; index < 6; index++) {
    const nuevoPLoop = document.createElement("p");
    nuevoDivLoop.appendChild(nuevoPLoop);
}
console.log(nuevoDivLoop)

// 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
const pConTexto = document.createElement("p")
pConTexto.textContent = "Soy dinámico!";
document.body.appendChild(pConTexto);
console.log(pConTexto)

// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
const titleH2 = document.querySelector(".fn-insert-here")
titleH2.textContent = "Wubba Lubba dub dub"

// 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
let listaApp = document.createElement('ul')

for(app of apps){
    let listElement = document.createElement('li')
    listElement.innerText = app
    listaApp.appendChild(listElement)
}
document.querySelector('body').appendChild(listaApp)

// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
const eliminarNodos = document.querySelectorAll(".fn-remove-me")
for (const nodo of eliminarNodos) {
    nodo.remove();
}

// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.
	//Recuerda que no solo puedes insertar elementos con .appendChild.
const pMedio = document.createElement('p');
pMedio.textContent = 'Voy en medio!';
const primerDiv = document.querySelector('div');

primerDiv.after(pMedio);

// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here
const insertarTexto = document.querySelectorAll(".fn-insert-here")

for (const divConTexto of insertarTexto){
    const pDentro = document.createElement("p")
    pDentro.textContent = "Voy Dentro!";
    divConTexto.appendChild(pDentro);
}

