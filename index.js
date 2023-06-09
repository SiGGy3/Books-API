    // Modules and Globals
require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const methodOverride = require('method-override')
  

// Express Settings
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

// Books
const bookController = require('./controllers/books-controllers')
app.use('/books', bookController)

app.get('/', (req, res) => {
    res.render('home')
})

app.get('*', (req, res) => {
    res.render('error404')
})

//MONGOOSE CONNECTION
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => { console.log('connected to mongo: ', process.env.MONGO_URI) })

app.listen(process.env.PORT)

