let quotes = [];
let shownQuotes = [];

fetch('quotes.json')
  .then(response => response.json())
  .then(data => {
    quotes = data;
    displayQuote();
  })
  .catch(error => {
    console.error('Error loading quotes:', error);
  });

function displayQuote() {
  if (shownQuotes.length === quotes.length) {
    // If all quotes have been shown, reset the shownQuotes array
    shownQuotes = [];
  }

  const remainingQuotes = quotes.filter(quote => !shownQuotes.includes(quote));
  const randomIndex = Math.floor(Math.random() * remainingQuotes.length);
  const quote = remainingQuotes[randomIndex];

  // Add the quote to the shownQuotes array and display it
  shownQuotes.push(quote);
  document.getElementById('quote').innerText = quote;
}
