// const MongoClient = require('mongodb').MongoClient
const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, client) => {
  if (error) return console.log(new Error('Not able to connect to db'))
  console.log('Connected to db')

  const db = client.db('TodoApp')

  /*db.collection('Todos').insertOne({
    text: 'Do something',
    completed: false
  }, (error, result) => {
    if (error) return console.log(new Error('Not able to insert Todo'))

    console.log('Inserted new Todo')
  })

  db.collection('Users').insertOne({
    name: 'Mopedfahrer',
    age: 31,
    location: 'Germany'
  }, (error, result) => {
    if (error) return console.log(new Error('Not able to insert user'))

    console.log('Inserted new user')
    console.log(result.ops[0]._id.getTimestamp())
  })*/

  client.close()
})
