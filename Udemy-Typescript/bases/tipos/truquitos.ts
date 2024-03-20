(() => {
    //varios tipos
    let isSuperman: boolean | string = true;
    isSuperman = true;
    isSuperman = 'hola';
    //Para aceptar el tipo undefined o null se puede desactivar strictNullChecks



    //castear:
    let casted: any = '123';
    console.log(casted.charAt(0) );
    <string>casted.charAt(0);

})()