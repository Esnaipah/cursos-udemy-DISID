
  /**
   * Esta función retira una carta del deck
   * @param {Array<String>} deck Array de cartas
   * @returns {String} Retorna la última carta o un error en caso de no haber cartas en el deck
   */

  export const pedirCarta = (deck) => {
    if (deck.length === 0) {
        throw 'No hay cartas en el deck'
    }
    else {
        return deck.pop();
    }
}