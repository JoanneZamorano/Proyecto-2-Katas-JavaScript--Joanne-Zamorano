// 1.1 Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
let listaCountries = document.createElement('ul')

for (const countrie of countries){
    let listElement = document.createElement('li')
    listElement.innerText = countrie
    listaCountries.appendChild(listElement)
}
document.querySelector('body').appendChild(listaCountries)

// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.
const eliminarNodo = document.querySelectorAll(".fn-remove-me")
for (const nodo of eliminarNodo) {
    nodo.remove();
}

// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
let listaCars = document.createElement('ul')
for (car of cars){
    listElement = document.createElement('li')
    listElement.innerText = car
    listaCars.appendChild(listElement)
}
document.querySelector('[data-function="printHere"]').appendChild(listaCars)


// 1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento h4 para el titulo y otro elemento img para la imagen.
const countries2 = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

for (country of countries2){
    let countriesDiv = document.createElement('div')
    {
        let elementTitle = document.createElement('h4')
        elementTitle.innerText = country.title
        let elementImg = document.createElement('img')
        elementImg.src = country.imgUrl

        countriesDiv.appendChild(elementTitle)
        countriesDiv.appendChild(elementImg)
    }
    document.querySelector('body').appendChild(countriesDiv)
}

// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la serie de divs.

botonEliminar = document.createElement('button')
botonEliminar.addEventListener("click", deleteFunction=() => {
    let listaABorrar = document.querySelectorAll('div')
    index = listaABorrar.length-1
    listaABorrar[index].remove()
    console.log(index)
})
botonEliminar.innerText="Eliminar el último elemento"
document.querySelector('body').appendChild(botonEliminar)

// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los divs que elimine ese mismo elemento del html.
const todosLosDivs = document.querySelectorAll('div');

for (const div of todosLosDivs) {
    if (div.querySelector('h4')) {
        let btnEliminar = document.createElement('button');
        btnEliminar.innerText = 'Eliminar este';        
        btnEliminar.addEventListener('click', function() {
            div.remove();
        });        
        div.appendChild(btnEliminar);
    }
}