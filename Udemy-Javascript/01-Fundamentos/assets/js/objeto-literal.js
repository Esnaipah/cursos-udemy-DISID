let personaje = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 36
};

let ap = 'apellido';

console.log('Nombre', personaje.nombre);
console.log('Nombre', personaje['nombre']);
console.log('Apellido', personaje[ap]);

delete personaje.edad;
personaje.nuevaPropiedad = 'Nueva propiedad';
//No importa que esté declarado como constante



const entriesPares = Object.entries(personaje);
console.log(entriesPares);


Object.freeze(personaje);
personaje.dinero = 1000000000000; //No funciona porque se ha hecho el freeze. (PD: Si que se pueden modificar propiedades que sean objetos)


let propiedades = Object.getOwnPropertyNames(personaje); //Devuelve array con nombres de propiedades
let valores = Object.values(personaje); //Devuelve array con valores de propiedades
console.log(propiedades);
console.log(valores);