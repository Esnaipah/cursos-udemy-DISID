(() => {

    const numbers: number[] = [1,2,3,4,5,6];
    numbers.push(3);
    //numbers.push('9'); //No se puede porque es string
    const numbersAndLetters = [1,3,'3',4]; //Así permite solamente number y string
    numbersAndLetters.push('5');
    //numbersAndLetters.push(false);//No se puede porque no es ni number ni string
})()