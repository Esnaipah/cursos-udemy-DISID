

let juan = { nombre: 'Juan'};
let ana = juan;
ana.nombre = 'Ana';

console.log({juan, ana});


let paco = { nombre: 'Paco'};
let maria = {...paco};  //operador "Spread" -> se deconstruye el objeto en propiedades. En este caso se engloba entre llaves lo que produce un nuevo objeto y no se llama por referencia.
maria.nombre = 'María';

console.log({paco, maria});

//Lo mismo explicado en la línea 11 sirve para arrays

let frutas = ['manzana', 'pera', 'piña'];

let otrasFrutas = [...frutas];
//equivale a
let otrasFrutas2 = frutas.splice();

otrasFrutas.push('Mango');
console.table({frutas, otrasFrutas});
