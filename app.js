const scraper = require('./scraper/scraper')

// Valeurs à modifier
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
const URLS = [
  'https://www.orange-marine.com/201-gilets-de-sauvetage/'
]
const identifier = 'o10e-prd-list-current-price'
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

const result = []

for(const url of URLS) {
  const prices = scraper(url, identifier) // Récupération du tableau des prix
  // calcul de la somme des prix
  const sub = prices.reduce((prevVal, currVal) => prevVal + currVal)
  const average = sub / prices.length
  result.push({
    url: url,
    results: prices,
    average: average
  })
}

console.log(result)