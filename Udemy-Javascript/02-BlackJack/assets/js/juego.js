
const MiModulo = (() => {
    'use strict'



    let palos = ['C', 'D', 'H', 'S'],
        especiales = ['A', 'J', 'Q', 'K'],
        deck = [],
        puntosJugadores = [];

    const marcadores = document.querySelectorAll('small'),
        botones = document.querySelectorAll('.btn'),
        btnPedir = document.querySelector('#btnPedir'),
        btnNuevo = document.querySelector('#btnNuevo'),
        btnDetener = document.querySelector('#btnDetener'),
        divCartasJugadores = document.querySelectorAll('.divCartas');

    //Esta función inicia el juego
    const iniciarJuego = (numJugadores = 1) => {
        crearDeck();
        puntosJugadores = [];
        for (let i = 0; i < numJugadores + 1; i++) {
            puntosJugadores.push(0);
        }

        botones.forEach(elem => elem.disabled = false)

        marcadores.forEach( elem => elem.innerText = 0);

        divCartasJugadores.forEach(elem => elem.innerText = '');


    }

    //Esta función crea un deck desordenado
    const crearDeck = () => {
        deck = [];
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

    //Esta función retira una carta del deck
    const pedirCarta = () => {
        if (deck.length === 0) {
            throw 'No hay cartas en el deck'
        }
        else {
            return deck.pop();
        }
    }

    //Esta función devuelve el valor de una carta
    const valorCarta = (carta) => {
        const valor = carta.substring(0, carta.length - 1); //Para tener en cuenta el 10
        return (!isNaN(valor)) ? valor * 1 :
            (valor === 'A') ? 11 : 10;
    }

    //jugador: 0 = primer jugador y último será la computadora
    const acumularPuntos = (jugador, c) => {
        puntosJugadores[jugador] += valorCarta(c);
        return marcadores[jugador].innerText = puntosJugadores[jugador];

    }

    //Función para añadir una carta al div correspondiente del jugador: 0 = primer jugador y último será la computadora
    const anyadirImagen = (jugador, carta) => {
        const imgCarta = document.createElement('img'); //se crea en memoria pero no es visible
        //imgCarta.src = 'assets/img/cartas/' + carta + '.png';
        //equivale a 
        imgCarta.src = `assets/img/cartas/${carta}.png`;
        imgCarta.classList.add('carta');
        divCartasJugadores[jugador].append(imgCarta);
    }

    //Turno de la computadora
    const turnoComputadora = (puntosMinimos) => {
        let puntosComputadora = puntosJugadores[puntosJugadores.length - 1]
        do {
            const carta = pedirCarta()
            puntosComputadora = acumularPuntos(puntosJugadores.length - 1, carta)
            marcadores[1].innerText = puntosComputadora;
            anyadirImagen(divCartasJugadores.length - 1, carta);

        } while ((puntosJugadores[puntosJugadores.length - 1] < puntosMinimos) && (puntosMinimos < 22));
    }

    //Acabar juego
    const finJuego = () => {
        turnoComputadora(puntosJugadores[0]);
        btnPedir.disabled = true;
        btnDetener.disabled = true;

        setTimeout(() => {
            (puntosJugadores[0] > 21) ? alert('Gana la computadora') :
                (puntosJugadores[puntosJugadores.length - 1] === puntosJugadores[0]) ? alert('Empate!') :
                    (puntosJugadores[puntosJugadores.length - 1] <= 21) ? alert('Gana la computadora') :
                        alert('Ganaste!');
        }, 100)


    }

    //Eventos
    btnPedir.addEventListener('click', () => {
        const carta = pedirCarta();
        const puntosJugador = acumularPuntos(0, carta);

        anyadirImagen(0, carta);

        if (puntosJugador >= 21) finJuego();
    });

    btnDetener.addEventListener('click', () => {
        finJuego();
    });

    btnNuevo.addEventListener('click', () => {
        console.clear();
        iniciarJuego();



    })

    //este return sirve para hacer accesible la función iniciarJuego (PD:imporante no incluir los paréntesis)
    return {
        nuevoJuego: iniciarJuego
    };

})()
