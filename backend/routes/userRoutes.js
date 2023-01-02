// neccessary API Endpoints 

const express = require('express')
const router = express.Router()
const {registerUser,loginUser, getMe} = require('../controllers/userController')

const {protect} = require('../middleware/authMiddleware')

// hit this endpoint to create new users
router.post('/', registerUser)

// his this endpoint to login to existed user
router.post('/login', loginUser)


// after successful login, hit this endpoint  to get logged-in user data
// this route is being protected by a middleware "authMiddleware", which technically a function
router.get('/me', protect, getMe)



module.exports = router