/*Dada una lista de canciones, clasifícalas en un objeto donde las claves sean los géneros y los valores sean arrays 
de canciones de ese género.
Utiliza bucles para estructurar este objeto e imprime el resultado por consola.*/

const tracks = [
    { title: 'Enter Sandman', genre: 'Metal' },
    { title: 'Back in Black', genre: 'Rock' },
    { title: 'Bohemian Rhapsody', genre: 'Rock' },
    { title: 'Blinding Lights', genre: 'Pop' },
    { title: 'Old Town Road', genre: 'Country' },
    { title: 'Smells Like Teen Spirit', genre: 'Grunge' },
    { title: 'Bad Guy', genre: 'Pop' },
    { title: 'Thunderstruck', genre: 'Rock' },
    { title: 'Hotel California', genre: 'Rock' },
    { title: 'Stairway to Heaven', genre: 'Rock' }
];

// Añade tu código de bucle aquí

/*const tracksPorGenero = [
    { Metal: ['Enter Sandman'},
    { Rock: ['Back in Black','Bohemian Rhapsody','Thunderstruck', 'Hotel California','Stairway to Heaven']},
    { Pop: ['Blinding Lights','Bad Guy']},
    { Country: ['Old Town Road']},
    { Grunge: ['Smells Like Teen Spirit']},
];*/ 

const tracksPorGenero = {};

for (const track of tracks) {
    const genre = track.genre;

    if (!tracksPorGenero[genre]) {
        tracksPorGenero[genre] = [];
    }
    tracksPorGenero[genre].push(track.title);
}

console.log(tracksPorGenero);