let quotes = [];

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
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];
  document.getElementById('quote').innerText = quote;
}