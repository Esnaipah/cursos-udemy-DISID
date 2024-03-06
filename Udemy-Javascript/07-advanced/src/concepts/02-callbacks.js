import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const callbacksComponent = (element) => {
    console.log('callbacks component');
    const id1 = '5d86371f2343e37870b91ef1';
    const id2 = '5d86371f25a058e5b1c8a65e';
    findHero(id1, (error, hero1) => {
        // element.innerHTML = arg?.name || 'No se encuentra al heroe'
        if (error) {
            element.innerHTML = error;
            return;
        }

        findHero(id2, (error, hero2) =>{
            if (error) {
                element.innerHTML = error;
                return;
            }
            element.innerHTML = `${hero1.name} vs ${hero2.name}`;
        });

    });
}

/**
 * 
 * @param {String} id 
 * @param {(error?: String, hero: Object) => void} callback 
 */
const findHero = (id, callback) => {
    const hero = heroes.find(hero => hero.id === id);

    if ( !hero ) {
        callback(`Hero with id ${id} not found.`);
        return;
    }

    callback(null, hero);
}