
/**
 * @returns {Object} quote information
 */
const fetchQuote = async () => {
    const res = await fetch('https://api.breakingbadquotes.xyz/v1/quotes/');
    const data = await res.json(); // para interpretar el body

    console.log(data[0]);
}

/**
 * 
 * @param {HTMLDivElement} element 
 */

export const BreakingbadApp = (element) => {
    document.querySelector('#app-title').innerHTML = 'Breaking Bad app';
    element.innerHTML = 'Loading...';
    fetchQuote();
    element.innerHTML = 'Tenemos data';

    
}