(() => {

    let flash: {name: string, age?: number, powers: string[], getName?: ()=> string} = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super velocidad', 'Viaje en el tiempo']
    }

    flash = {
        name: 'Barry Allen',
        // age: 24,
        powers: ['Super velocidad', 'Viaje en el tiempo'],
        getName(){
            return this.name;
        },
    }


})()