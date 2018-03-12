const request = require('request')

const getWeather = (lat, lng, callback) => {
  const url = `https://api.darksky.net/forecast/fee04a7f4ddfdfae9224e4bfc3ffa896/${lat},${lng}`

  request({
    url: url,
    json: true
  }, (error, response, body) => {
    if (error) {
      callback(error)
    } else if (body.code === 400 && body.error) {
      callback(body.error)
    } else {
      callback(null, {
        temperature: body.currently.temperature
      })
    }
  })
}

module.exports = {
  getWeather
}
