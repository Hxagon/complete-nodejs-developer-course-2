const yargs = require('yargs')
const axios = require('axios')

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv

const encodedAddress = encodeURIComponent(argv.address)
const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyBfztEfUODSSsxWSmAfBMcRfpxghpiEZy8`

axios.get(geocodeUrl).then((response) => {
  if (response.data.status === 'ZERO_RESULTS') {
    throw new Error('Unable to find that address.')
  }

  const lat = response.data.results[0].geometry.location.lat
  const lng = response.data.results[0].geometry.location.lng

  const weatherUrl = `https://api.darksky.net/forecast/fee04a7f4ddfdfae9224e4bfc3ffa896/${lat},${lng}`

  console.log(response.data.results[0].geometry)

  return axios.get(weatherUrl)
}).then((response) => {
  const temperature = response.data.currently.temperature
  const apparentTemperature = response.data.currently.apparentTemperature

  console.log(`It's currently ${temperature}. It feels like ${apparentTemperature}`)
}).catch((errorMessage) => {
  console.log(new Error(errorMessage))
})
