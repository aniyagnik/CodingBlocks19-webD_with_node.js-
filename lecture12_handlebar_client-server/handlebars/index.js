const express=require('express')
const app=express()
const hbs=require('hbs')
app.set('view engine','hbs')        //makes hbs extention default while searching
const path=require('path')                  //for os spefic path maker
hbs.registerPartials(path.join(__dirname+'/partials'))

app.get('/',(req,res)=>{
    res.render('index',{                 //not a location?
    name:'anirudh',
    showname:false
    })
})

app.get('/about',(req,res)=>{
    res.render('about',{
    name:'anirudh',
    discription:'my discription'
    })
})

app.listen(3000)