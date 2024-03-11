

const superHeroes = [
    {
        id: 1,
        name: 'Bambam'
    },
    {
        id: 2,
        name: 'Spider'
    },
    {
        id: 3,
        name: 'Ironman'
    },
    {
        id: 4,
        name: 'Hulk'
    },

]

const copy1 = [...superHeroes] //Aunque se realiza el spread, los objetos se pasan por referencia, por lo que sería un nuevo array con los MISMOS objetos, no copias de los sobjetos
const copy2 = structuredClone(superHeroes); //Se crea un clon por VALOR, no por REFERENCIA

copy1[0].name = 'Thor'; //Se cambiará también el nombre del primer objeto del array original
copy2[1].name = 'Flash'; // Solo se cambiará el objeto en el array deseado.

console.table(superHeroes);
console.table(copy1);
console.table(copy2);
