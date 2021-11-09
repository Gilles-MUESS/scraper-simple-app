const request = require('request')
const cheerio = require('cheerio')

const scraper = (url, identifier) => {
  const arr = []
  request(url, (error, response, html) => {
    if(!error && response.statusCode == 200) {
      const $ = cheerio.load(html)
      $(identifier).each((index, element) => {
        arr[url].push($(element).text())
      })

      return arr
    }
  })
}

module.exports = scraper