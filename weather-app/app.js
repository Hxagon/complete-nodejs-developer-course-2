const request = require('request')

console.log('Starting weather app')

request({
  url: 'https://maps.googleapis.com/maps/api/geocode/json?address=39108%20Olvenstedter%20Strasse%20Magdeburg&key=AIzaSyBfztEfUODSSsxWSmAfBMcRfpxghpiEZy8',
  json: true
}, (error, response, body) => {
  if (error) {
    console.debug(error)
  }

  const address = body.results[0].formatted_address
  const location = body.results[0].geometry.location

  // console.log(JSON.stringify(response, undefined, 2))
  console.log(`Address: ${address}`)
  console.log(`Lat: ${location.lat}`)
  console.log(`Lng: ${location.lng}`)
})

console.log('Finishing weather app')
