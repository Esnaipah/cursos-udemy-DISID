

/**
 * Esta función devuelve el valor de una carta
 * @param {String} carta Carta de la que se quiere sacar el valor
 * @returns {Number} Retorna el valor de la carta en un número
 */

export const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1); //Para tener en cuenta el 10
    return (!isNaN(valor)) ? valor * 1 :
        (valor === 'A') ? 11 : 10;
}
