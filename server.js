require('dotenv').config()

const express = require("express")
const mongoose = require('mongoose')
const app = express()

mongoose.connect(process.env.DB_URL, {useNewUrlParser: true})
const db = mongoose.connection

db.on('error', (error) => console.log(error))
db.once('open', ()=> console.log('connected to database'))

app.use(express.json())
const subRouter = require('./routes/sub')
app.use('/sub', subRouter)

app.listen(3000, () => console.log('server started'))