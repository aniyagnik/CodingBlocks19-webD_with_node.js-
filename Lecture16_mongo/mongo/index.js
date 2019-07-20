const { MongoClient } = require('mongodb')    //requiring npm package.
/*same as-
const mongo=require('mongodb')
const MongoClient=mongo.MongoClient*/
client_url='mongodb://localhost:27017'
const client = new MongoClient(client_url)

const getDB = dbName =>
  client.connect()                //gives a client
    .then(() => client.db(dbName))   //send as response access to database caleed dbName if it doesn't exist it creates and then send the access as promise
    .catch(err => console.log(err))

/*
  Insert Documents
*/

getDB('testdb').then(db => {
  const users = db.collection('users')  //collection is like A TABLE IN MONGODB

  users.insertOne({  // print the response of promise and check result(no of obj entered) and ops:(object which is entered with id(automatic mongodb id(unique)))
    name: 'Sakshi',                  //insetOne takes json object
    bands: ['linken Park']
  }).then(result => {
    console.log("Inserted", result)
  })
})

/*
  Query
*/

// setPagination (cursor, page) {
//   cursor.skip((page-1)* 10).limit(10)
// }

getDB('testdb').then(db => {
  const users = db.collection('users')

  const cursor = users.find()  //finds everything . but it returns a cursor,cursor is file pointer, becaues mongodb database can be very large and (loading it on memmory is not a good idea)it might not get stored in memory so it gives a cursor to allow us to traverse throudh the database.
/*
  setPagination (cursor, req.query.page) // cursor.skip(page)

  cursor.skip(1).limit(1)
  */
  cursor.toArray().then(console.log) //load entire database in memmory and stores ir in array

})


getDB('testdb').then(db => {
  const users = db.collection('users')

  const cursor = users.find({
    bands: {
      $in: ['Nirvana']
    },
    age: {
      $gt: 25      //age greater than 25($gt means greater than)
    }
  })
// search mongodb query operators
  cursor.toArray().then(console.log)

})


