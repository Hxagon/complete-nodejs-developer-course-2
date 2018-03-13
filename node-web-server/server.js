const express = require('express')
const hbs = require('hbs')
const path = require('path')
const fs = require('fs')
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

// Logger-Middleware
app.use((request, response, next) => {
  const now = new Date().toString()
  const log = `${now}: ${request.method} ${request.url}`
  console.log(log)
  fs.appendFile('server.log', log + '\n', (error) => {
    if (error) console.log('Unable to append to server.log')
  })

  next()
})

// Maintenance-Middleware
/*app.use((request, response, next) => {
  response.render('maintenance.hbs', {
    pageTitle: 'Maintenance',
    welcomeMessage: 'Sorry, this site is currently under construction'
  })
})*/

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

app.get('/projects', (request, response) => {
  response.render('about.hbs', {
    pageTitle: 'Projects page',
    welcomeMessage: 'List of projects'
  })
})

// Starting the server
app.listen(3000, () => {
  console.log('Server is up & running on port 3000')
})
