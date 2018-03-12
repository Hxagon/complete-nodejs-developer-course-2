const request = require('request')
const geocodeAddress = (address) => {
  const encodedAddress = encodeURIComponent(address)

  return new Promise((resolve, reject) => {
    request({
      url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyBfztEfUODSSsxWSmAfBMcRfpxghpiEZy8`,
      json: true
    }, (error, response, body) => {
      console.log(body)
      if (error) {
        reject(new Error(error))
      } else if (body.code === 400 && body.error) {
        reject(new Error(body.error))
      }

      resolve({
        address: body.results[0].formatted_address,
        lat: body.results[0].geometry.location.lat,
        lng: body.results[0].geometry.location.lng
      })
    })
  })
}

geocodeAddress('affgsdfsdf').then((location) => {
  console.log(JSON.stringify(location, undefined, 2))
}, (errorMessage) => {
  console.log(JSON.stringify(errorMessage, undefined, 2))
})
