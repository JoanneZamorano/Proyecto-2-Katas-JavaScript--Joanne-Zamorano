/*Desarrolla una función que busque en un array de objetos representando mutantes si existe alguno con un poder específico y
retorne un mensaje indicando si fue encontrado o no.
Considera el caso de múltiples mutantes con el mismo poder.*/

const mutants = [
    { name: 'Wolverine', power: 'regeneration' },
    { name: 'Magneto', power: 'magnetism' },
    { name: 'Professor X', power: 'telepathy' },
    { name: 'Jean Grey', power: 'telekinesis' },
    { name: 'Rogue', power: 'power absorption' },
    { name: 'Storm', power: 'weather manipulation' },
    { name: 'Mystique', power: 'shape-shifting' },
    { name: 'Beast', power: 'superhuman strength' },
    { name: 'Colossus', power: 'steel skin' },
    { name: 'Nightcrawler', power: 'teleportation' }
];

function findMutantByPower(mutants, power) {
let coincidencias = [];

  for (const mutante of mutants) {
    if (mutante.power === power) {
      coincidencias.push(mutante.name);
    }
  }

  if (coincidencias.length > 0) {
    return `Encontrados: ${coincidencias.join(' y ')}`;
  } else {
    return "No hay mutantes con ese poder";
  }
}

console.log(findMutantByPower(mutants, 'magnetism'));
console.log(findMutantByPower(mutants, 'magnetismo'));
