
/**
 * @returns {Object} quote information
 */
const fetchQuote = async () => {
    const res = await fetch('https://api.breakingbadquotes.xyz/v1/quotes/');
    const data = await res.json(); // para interpretar el body

    return data[0];
}
/**
 * 
 * @param {HTMLDivElement} element 
 */

export const BreakingbadApp = (element) => {
    document.querySelector('#app-title').innerHTML = 'Breaking Bad app';
    element.innerHTML = 'Loading...';
    fetchQuote();

    const quoteLabel = document.createElement('blockquote');
    const authorLabel = document.createElement('h3');
    const nextQuoteButton = document.createElement('button');
    nextQuoteButton.innerText = 'Next Quote';

    const renderQuote = (data) => {
        quoteLabel.innerHTML = data.quote;
        authorLabel.innerHTML = data.author;
        element.replaceChildren(quoteLabel, authorLabel, nextQuoteButton);
    }

    nextQuoteButton.addEventListener('click', () => {
        element.innerHTML = 'Loading...';
        fetchQuote()
            .then(renderQuote);
    })

    fetchQuote()
        .then(renderQuote);

}