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
/* app.use((request, response, next) => {
  response.render('maintenance.hbs', {
    pageTitle: 'Maintenance',
    welcomeMessage: 'Sorry, this site is currently under construction'
  })
}) */

hbs.registerHelper('screamIt', (text) => {
  return text.toUpperCase()
})

// Route-Handlers
app.get('/categories', (request, response) => {
  setTimeout(() => {
    response.setHeader('Content-Type', 'application/json')
    const categories = {
      '10': {
        'entity_id': '10',
        'img_thumb_url': 'http://url.com/media/catalog/category/pants10.jpeg',
        'min_price': '100.0000'
      },
      '11': {
        'entity_id': '11',
        'img_thumb_url': 'http://url.com/media/catalog/category/pants11.jpeg',
        'min_price': '110.0000'
      },
      '12': {
        'entity_id': '12',
        'img_thumb_url': 'http://url.com/media/catalog/category/pants12.jpeg',
        'min_price': '120.0000'
      },
      '13': {
        'entity_id': '13',
        'img_thumb_url': 'http://url.com/media/catalog/category/pants13.jpeg',
        'min_price': '130.0000'
      }
    }
    response.send(JSON.stringify(categories, null, 3))
  }, 3500)
})

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
