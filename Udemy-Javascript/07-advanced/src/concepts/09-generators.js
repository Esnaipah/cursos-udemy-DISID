
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const generatorFunctionsComponent = (element) =>{
    // console.log('demo component');
    // const myGenerator = generatorFunction();
    // console.log(myGenerator.next());
    // console.log(myGenerator.next());
    // console.log(myGenerator.next());
    // console.log(myGenerator.next());
    // console.log(myGenerator.next());

    const genId = idGenerator();
    console.log(genId.next());

    const button = document.createElement('button');
    button.innerText = 'Click me';
    element.append(button);

    const renderButton = () => {
        const {value} = genId.next();
        button.innerText = `Click ${value}`;
    }

    button.addEventListener('click', renderButton)

}

function* idGenerator(){
    let currentId = 0;
    while(true){
        yield ++currentId;
    }
}

function* generatorFunction () {
    yield 'Mi primer valor';
    yield 'Mi segundo valor';
    yield 'Mi tercer valor';
    yield 'Mi cuarto valor';
    return 'Ya no hay valores';
}