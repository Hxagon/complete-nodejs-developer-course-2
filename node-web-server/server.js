const express = require('express')
const hbs = require('hbs')
const path = require('path')
const app = express()

// Server-Configuration
console.log(path.resolve(`${__dirname}/views/partials`))
hbs.registerPartials(path.resolve(`${__dirname}/views/partials`))
app.set('view engine', 'hbs')

// Middleware
app.use(express.static(path.resolve(`${__dirname}/public`)))
hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear()
})

hbs.registerHelper('screamIt', (text) => {
  return text.toUpperCase()
})

// Route-Handlers
app.get('/', (request, response) => {
  response.render('home.hbs', {
    pageTitle: 'Home page',
    welcomeMessage: 'Moped'
  })
})

app.get('/about', (request, response) => {
  response.render('about.hbs', {
    pageTitle: 'About page'
  })
})

// Starting the server
app.listen(1234, () => {
  console.log('Server is up & running on port 3001')
})
