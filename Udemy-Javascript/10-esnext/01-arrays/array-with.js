

const state = [
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

const index = 1;
const newName = 'Green Lantern';

/**
 * La función Array<any>.with() sirve para hacer una modificación (cambiando el valor del objeto con el index indicado en el primer parámetro) 
 * y retornar una copia del array con los objetos por referencia
 */

const newState = state.with(index, {
    ...state.at(index), //Para no sobreescribir las demás propiedades. at() puede utilizar negativos para las últimas posiciones
    name: newName
});

console.table(state);
console.table(newState);



