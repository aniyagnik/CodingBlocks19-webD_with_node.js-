const Sequelize=require('sequelize')
const sequelize=new Sequelize({
    dialect:'sqlite',
    storage:'./db.sqlite'
});
const express=require('express')
const app=express()
let Bands=sequelize.define('Bands',{              //attribute
    id:{                             //column
        //allowNull:false,
        primaryKey:true,
        type:Sequelize. INTEGER,
        autoIncrement:true 
    },
    title:{
        type:Sequelize.STRING,
        allowNull:false
    },
    striked:{
        type:Sequelize.BOOLEAN,
        defaultValue:false,
        allowNull:false 
    }
})

Bands.sync().then(()=>{
    app.listen(300)
})          //create table if it not exist 
//bands.sync({force:true})  create table and if it exist dletr it with its data and then create 
Bands.findAll().then(bands=>{
    //bands.map(b=>(b.id)
//    console.log(bands)

})

app.get('/',(req,res)=>{
    Bands.findAll().then(bands=>{
        res.json(bands)
    })
})


app.post('/',(req,res)=>{
    Bands.create({
        title: req.body.title
    }).then(band=>{
        res.json(band)
    })
})

app.patch('/:id',(req,res)=>{
    Bands.update({
        title:req.body.title,
    },where(bands.id===req.params.id))
    .then(bands=>{
        res.json(bands)
    })

})


sequelize.authenticate().then(()=>{
    console.log('connected!')
}).catch(err=>{
    console.log('not connected!')
})