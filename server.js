require('dotenv').config()

const express = require('express');
const app = express();
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected To Database'))

app.use(express.json())

const subscribersRouter = require('./routes/subscribers')

app.use('/subscribers', subscribersRouter)

app.set('port', process.env.PORT || 3000) 

app.get('/', (req, res, next) => {
     
})

app.listen(app.get('port'), () => {
    console.info(`Server listen on port ${app.get('port')}`);
})