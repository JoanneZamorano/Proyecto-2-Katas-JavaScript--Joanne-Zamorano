/*Dado el siguiente javascript, utiliza .filter() para mostrar por consola
los streamers que incluyan la palabra introducida en el input. 
De esta forma, si introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. 
Si introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'.*/

const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];


//Pintar streamers
const renderStreamers = (streamersList) =>{
    const container = document.querySelector("main>ul");
    container.innerHTML = "";
    if(!streamersList.length){
        container.innerHTML = "<h2>No hay coincidencias</h2>"
    }else{
        for (const streamer of streamersList){
            const li = document.createElement("li")
            li.innerHTML= `
                <div>
                <h2>${streamer.name} - ${streamer.age} | ${streamer.gameMorePlayed}</h2>
                </div>
                `;
            container.appendChild(li)
        }
    }

}

//Evento a input
document.querySelector("#streamerInput").addEventListener("input", (ev) => {
    let filteredStreamers =[];
    for (const streamer of streamers) {
        if(streamer.name.toLowerCase().includes(ev.target.value.toLowerCase())){
            filteredStreamers.push(streamer)
        }
    }
    renderStreamers(filteredStreamers)
});


window.addEventListener("DOMContentLoaded", ()=>{
    renderStreamers(streamers);
})


