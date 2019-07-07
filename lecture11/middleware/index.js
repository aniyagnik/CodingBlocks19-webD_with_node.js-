const express = require('express')
const app = express()

app.get('/', function (req, res) {
  console.log("I'm here")
  res.statu
})

app.get('/blah', function (req, res) {
  console.log("Said Blah")
  //   res.send('Hello World')
})

app.listen(3000)
//solid-npm i separation of functions