
// const arr = new Array(10);
// const arr1 = [];

let arr = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(arr[arr.length - 1]); // No funciona el puntero -1 para sacar la última posición :(

arr.forEach((elem, index, arrParam) => { arrParam[index] = elem * 2 });
console.log(arr);

let nuevaLongitud = arr.push(9); //Push añade al final y devuelve la nueva longitud del array

console.log(nuevaLongitud);

nuevaLongitud = arr.unshift(0); //Unshift añade al principio y devuelve la nueva longitud del array

console.log(nuevaLongitud);

let numBorrado = arr.pop() //Pop borra el último ítem y lo devuelve

console.log(numBorrado);

let arrNumBorrados = arr.splice(0, 2); // Elimina 2 números a partir de la posición 0 y devuelve array con los eliminados

let indexOf6 = arr.indexOf(6); //Devuelve el índice del num 6. En caso de no encontrar devuelve -1