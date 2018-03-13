// const MongoClient = require('mongodb').MongoClient
const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, client) => {
  if (error) return console.log(new Error('Not able to connect to db'))
  console.log('Connected to db')

  const db = client.db('TodoApp')

  // deleteMany
  /*db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    console.log(result)
  })*/

  // findAndDeleteOne
  db.collection('Todos').findOneAndDelete({text: 'Eat lunch'}).then((result) => {
    console.log(result)
  })

  client.close()
})
