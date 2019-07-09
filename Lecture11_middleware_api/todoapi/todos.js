const express = require('express')
const route = express.Router()
var todos=[]


const fs=require('fs')

fs.readFile('./input.json','utf8',(err,contents)=>{
    if(err)
    {
        return console.log("some error occurred")
    }
    //else console.log(contents+'fun')
   if(todos!==null) todos=JSON.parse(contents)
 })

//console.log(todos)
route.get('/', (req, res) => {
    console.log('get')
    res.send(todos)
})

route.post('/', (req, res) => {
    console.log('add it ')
    const { title, striked = false } = req.body
    console.log(req.body)
    const newTodo = {
        id: todos.length + 1,
        title, 
        striked: striked == "true"
    }
    todos.push(newTodo)
    add_info()
     res.send(todos)
})
function add_info(){
    const ha=null
    fs.writeFile('./input.json',ha,err=>{
        if(err){
            console.log('error!!!')
            return
        }
        console.log('added to file')
    })
    fs.writeFile('./input.json',JSON.stringify(todos,null,4),err=>{
        if(err){
            console.log('error!!!')
            return
        }
        console.log('added to file')
    })
}
route.delete('/:id', (req, res) => {
    const todoToDelete = todos.find(todo => todo.id == req.params.id)
    if (!todoToDelete.striked) {
        return res.sendStatus(403)
    }

     todos = todos.filter(todo => todo.id != todoToDelete.id)
     let i=1
     todos = todos.map(function(item){
         item.id=i++
        return item})
     console.log(todos)
     add_info()
     res.send(todos)
})

route.patch('/:id', (req, res) => {
    let todo = todos.find(t => t.id == req.params.id)
    todo.striked = !req.body.striked
    todo.title = req.body.title
    add_info()
    res.send(todo)
})
module.exports = route