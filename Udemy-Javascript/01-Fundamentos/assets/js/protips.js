

function crearPersonas(nombre, apellido) {
    return {
        nombre: nombre,
        apellido: apellido
    }
}
//Equivale a 
function crearPersonas1(nombre, apellido) {
    return {
        nombre,
        apellido
    }
}
//Equivale a 
const crearPersona = (nombre, apellido) => ({ nombre, apellido }); //MUY IMPORTANTES los paréntesis: indican que no es el cuerpo de la función, sino que es el return


//---------------------------------------------------------//

function imprimeArgs() {
    console.log(arguments);
}
//Equivale a 
const imprimeArgs2 = (...args) => {  //...args incluye todos los argumentos. Si hay algun argumento antes se excluye de "args"
    console.log(args);
}


//-------------Protip-Operación-Ternaria

let nota = 61;

let calificacion = undefined;

if (nota >= 95) calificacion = 'A+'
else if (nota >= 90) calificacion = 'A'
else if (nota >= 85) calificacion = 'B+'
else if (nota >= 80) calificacion = 'B'
else if (nota >= 75) calificacion = 'C+'
else if (nota >= 70) calificacion = 'C'
else calificacion = 'F'

console.log(calificacion);
//equivale a 

let calificacion2 = (nota >= 95) ? 'A+' :
                    (nota >= 90) ? 'A' :
                    (nota >= 85) ? 'B+' :
                    (nota >= 80) ? 'B' :
                    (nota >= 75) ? 'C+' :
                    (nota >= 70) ? 'C' : 'F'

