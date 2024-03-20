(() => {

    const hero: string = 'Flash';
    
    function returnName():string {
        return hero;
    }

    //Los argumenos ocpionales van siempre al final (tiene lógica)
    const activateBatSignal = (argRequerido: string, argOpcional?: string, argOpcionalConDefault: boolean = false):string => {
        return 'Batsignal activated';
    }

    //Obtener el resto de argumentos
    const restArgs = (arg1: string, ...restArgs: string[]):string => {
        return `${arg1} ${restArgs.join(' ')}`
    }

})()