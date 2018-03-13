// const MongoClient = require('mongodb').MongoClient
const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, client) => {
  if (error) return console.log(new Error('Not able to connect to db'))
  console.log('Connected to db')

  const db = client.db('TodoApp')

  db.collection('Todos').findOneAndUpdate({
    text: 'Eat lunch'
  }, {
    $set: {
      text: 'Don\'t eat lunch'
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result)
  })

  client.close()
})
