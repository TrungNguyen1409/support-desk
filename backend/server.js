const express = require('express')
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 8000;

const app = express()


app.get('/', (req,res) => {
    res.status(200).json({message: "Welcome to the support desk API"})
})

app.get('/users', (req,res) => {
    res.status(200).json({user: "User1"})
})

app.listen(PORT, () => console.log(`Server starts on port ${PORT}`))