/*Contador de repeticiones: Crea una función que nos devuelva el número de veces que se repite cada una 
de las palabras que lo conforma.
Por ejemplo, que devuelva: code:4, repeat: 1, eat: 1,...
Podéis conformar el formato que queráis para la devolución del resultado siempre y cuando sea claro.
Puedes usar este array para probar tu función: */

const words = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code'
];
// 'code' 4 'repeat' 1 'eat' 1 'sleep' 3 'enjoy' 2 
function repeatCounter(list) {
  const contadorPalabra = [];

  for (const palabra of list) {
    let palabraEncontrada = false;

      for (let i = 0; i < contadorPalabra.length; i++) {
        if (contadorPalabra[i][0] === palabra) {
          contadorPalabra[i][1]++;
          palabraEncontrada = true;
          break;
        }
      }

    if (!palabraEncontrada) {
      contadorPalabra.push([palabra, 1]);
      }
    }
      console.log(contadorPalabra);
    
}

repeatCounter(words);