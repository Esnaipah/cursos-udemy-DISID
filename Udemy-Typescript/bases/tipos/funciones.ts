(()=>{

    function callBatman():void {
        return;
    }

    const callSuperman = (): string => {
        // return false; No deja porque no es de tipo string
        return 'hola';
    }

    //TODO: IMPORTANTE!!!!
    /**
     * El tipo never se declara para que nunca devuelva nada que no sea un error
     */
    const abc = (msg: string):never => {
        throw new Error (msg);
    }
    
})()