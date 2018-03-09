const request = require('request')

console.log('Starting weather app')

request({
  url: 'https://maps.googleapis.com/maps/api/geocode/json?address=39108%20Olvenstedter%20Strasse%20Magdeburg&key=AIzaSyBfztEfUODSSsxWSmAfBMcRfpxghpiEZy8',
  json: true
}, (error, response, body) => {
  if (error) {
    console.debug(error)
  }

  console.log(body)
})

console.log('Finishing weather app')
