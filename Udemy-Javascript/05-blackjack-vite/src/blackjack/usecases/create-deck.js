import _ from "underscore";

  //Esta función crea un deck desordenado

  /**
   * 
   * @param {Array<String>} palos Ejemplo: ['C', 'D', 'H', 'S']
   * @param {Array<String>} especiales Ejemplo: ['A', 'J', 'Q', 'K']
   * @returns {Array<String>} retorna un nuevo deck de cartas desordenado
   */
  export const crearDeck = (palos, especiales) => {

    if(!palos) throw new Error('palos es obligatorio');
    if(!especiales) throw new Error('especiales es obligatorio');

    let deck = [];
    for (let i = 2; i <= 10; i++) {
        for (let palo of palos) {
            deck.push(i + palo);
        }
    }
    for (let especial of especiales) {
        for (let palo of palos) {
            deck.push(especial + palo);
        }
    }

    return deck = _.shuffle(deck);
}
