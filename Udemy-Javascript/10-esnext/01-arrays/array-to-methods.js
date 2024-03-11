

const heroes = [
    'Bambam',
    'Spider',
    'Ironman',
    'Hulk',
]

// const heroesCopy = heroes.sort(); //se ordena y se pasa como referencia 
// const heroesCopy = heroes.toSorted(); //se devuelve un array nuevo ordenado

// const heroesCopy = heroes.reverse();
const heroesCopy = heroes.toReversed();

//Lo mismo ocurre con el método splice








console.table(heroes);
console.table(heroesCopy);