const express = require('express')
const  colors = require('colors')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const { connect } = require('mongoose')
const PORT = process.env.PORT || 8000;

// Connect to database
connectDB()


const app = express()

// these middlewares allow the app to parse JSON , read , . . . 
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/', (req,res) => {
    res.status(200).json({message: "Welcome to the support desk API"})
})


// use the file userRoutes for /api/users
app.use('/api/users', require('./routes/userRoutes.js'))

app.use(errorHandler)

app.listen(PORT, () => console.log(`Server starts on port ${PORT}`))