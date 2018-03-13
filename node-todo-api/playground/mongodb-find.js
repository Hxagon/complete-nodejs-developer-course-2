// const MongoClient = require('mongodb').MongoClient
const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, client) => {
  if (error) return console.log(new Error('Not able to connect to db'))
  console.log('Connected to db')

  const db = client.db('TodoApp')

/*  db.collection('Todos').find().count().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2))
  }, (error) => {
    console.log(new Error(error))
  })*/

  db.collection('Users').find({name: 'Mopedfahre'}).count().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2))
  }, (error) => {
    console.log(new Error(error))
  })

  client.close()
})
