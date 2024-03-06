import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promiseComponent = (element) =>{
    console.log('promise component');

    const renderHero = (hero) => {
        element.innerHTML = hero.name;
    }

    const renderTwoHeroes = (h1, h2) => {
        element.innerHTML = h1.name +'<br/>'+ h2.name ;
    }

    const renderError = (error) => {
        element.innerHTML = error;
    }

    const id1 = '5d86371f9f80b591f499df32';
    const id2 = '5d86371fd55e2e2a30fe1ccb1';

    Promise.all([
        findHero(id1),
        findHero(id2),
    ])
    .then(([hero1,hero2]) => renderTwoHeroes(hero1,hero2)) //asignamos hero1 al primer valor del array que devuelve y hero2 al segundo
    .catch(renderError) //En caso de error en alguna de las promesas ejecutadas se realiza el catch


//FORMA 1
    // let hero1;

    // findHero(id1)
    //     .then (hero => {
    //         hero1 = hero;
    //         return findHero(id2);
    //     }).then (hero2 => {
    //         renderTwoHeroes(hero1, hero2);
    //     })
    //     .catch (renderError)

// FORMA 2

    // findHero(id1)
    //     //.then(superHero => renderHero(superHero));  //   Si el cuerpo del callback es una función que usa la misma cantidad de argumentos se pueden omitir:
    //     .then((hero) => {
    //         hero1 = hero;

    //         findHero(id2)
                // .then((hero2) => {
                //     renderTwoHeroes(hero1, hero2);
                // })
                // .catch(renderError)
    //     })
    //     .catch(renderError)

}

/**
 * 
 * @param {String} id 
 * @returns {Promise}
 */
const findHero = ( id ) => {

    return new Promise((resolve, reject)=>{
        
        const hero = heroes.find(hero => hero.id === id);

        if (hero) {
            resolve(hero);
            return;
        }

        reject(`Hero with id ${id} not found`);

    });

}