const Sequelize = require('sequelize')
const express = require('express')
const app = express()

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './db.sqlite'
});

//Bands is class name and bands is table name
const Bands = sequelize.define('bands', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  striked: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false
  }
})

app.use(express.urlencoded({extended: true}))

const stringToBool = val => val == "true"

app.get('/', (req, res) => {
  const filter = req.query || {}
  if (typeof filter.striked != 'undefined') {
    filter.striked = stringToBool(filter.striked)
  }

  Bands.findAll({
    where: filter
  }).then(bands => {
    res.json(bands)
  })
})

app.post('/', (req, res) => {
  Bands.create({
    title: req.body.title
  }).then(band => {
    res.json(band)
  })
})

app.patch('/:id', (req, res) => {
  Bands.update(req.body, {
    where: {
      id: req.params.id
    }
  }).then(band => {
    res.sendStatus(204)
    //res.json(band)
  })
})

app.delete('/', (req, res) => {
  Bands.destroy({
    where: {
      striked: true
    }
    //restartIdentity:true	
  }).then(band=> {
      res.json(band)
    res.sendStatus(204)
  }).catch(err => {
    console.log(err)
    res.sendStatus(500)
  })
})

//create table if it not exist 
Bands.sync().then(() => { 
  app.listen(300,function () {
    console.log("Listening on 300")
})
})

// bands.sync({force:true})  create table and if it exist delete it with its data and then create 


// sequelize.authenticate().then(() => {
//   console.log("Connected!")
// }).catch(err => {
//   console.log("Not Connected", err)
// })






