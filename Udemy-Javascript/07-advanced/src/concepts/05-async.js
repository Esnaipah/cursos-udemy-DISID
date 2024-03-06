import { heroes } from "../data/heroes"

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncComponent = (element) => {

    const id1 = '5d86371f9f80b591f499df32';

    console.log('Inicio');
    findHero(id1)
        .then(console.log)
        .catch(error => element.innerHTML = error)
    console.log('Fin');
}

const findHero = async (id) => {// el async convierte el return de la función en una promesa
    const hero = heroes.find(hero => hero.id === id);
    if(!hero)
        throw new Error (`Hero with id ${id} not found`)
    return hero.name;
}