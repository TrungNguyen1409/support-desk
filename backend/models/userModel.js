/*
 Mongoose is a JavaScript object-oriented programming library 
 that creates a connection between MongoDB and the Node.js JavaScript runtime environment
*/ 

// models are required by mongoose in order to appropriately connect to MongoDB 

const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name']
    },
    email: {
        type: String,
        required: [true, 'Please add an email'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please add a password']
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    }
 },
 {
    timestamps: true,
 }
)

module.exports = mongoose.model('User', userSchema)