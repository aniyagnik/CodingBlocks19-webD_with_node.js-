const todos=[]
const express = require('express')
const app = express()

app.get('/', (req, res) =>{
  //console.log("todo list is here")
  res.send(users)
})

app.listen(3000,function(){
    console.log("running on 3000")
})



app.post('/', function (req, res) {
   // console.log("todo list is here")
    const{title,strike=false}=req.body
    const newTodo={
        id:todos.lenght+1,
        title,
        striked
    }
    users.push(newTodo)
    res.send(newTodo)
  })
  