const express = require('express')
const app = express()
const todoRouter = require('./todo')

app.use(express.static(__dirname+ '/public')) 
 /* static will make this folder availbale as
 a static website is a were where you save  a
html file an dthat file ais server over your 
http request there is no d content .whatever 
response you are getting from the server doesn't
 depend on the request.you go to the page 
 public and you will get same result. 
 those website who has only frontend no 
 server.*/  
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


app.use('/api/todos', todoRouter)

app.listen(3000, function () {
    console.log("Running on 3000")
})