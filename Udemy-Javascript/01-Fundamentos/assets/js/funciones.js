function saludar (nombre){
    console.log('Hola ' + nombre);
}

let saludar2 = (nombre) => {
    console.log('Hola ' + nombre);
}

const sumar2 = (a,b) => a + b;
//Equivale a 
const sumar2alternativo = (a,b)=> {
    return a + b;
}

saludar('Pau');
saludar2('Pau');