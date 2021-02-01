require('dotenv').config()
const express = require('express')
const jwt = require('jsonwebtoken')
const cors = require('cors')
const methodOverride = require('method-override')

const app = express();
const port = process.env.PORT || 5000;

// Controllers
const userControllers = require('./controllers/UserController')
const locationControllers = require('./controllers/LocationController')
// const ratingControllers = require('./controllers/RatingController')

// Method-Override
app.use(methodOverride('_method'))

app.use(express.urlencoded({
    extended: true
}))

app.use(cors({
    origin: '*'
}))

app.options('*', cors())

// Routes

app.get('/api/v1/', (req, res) => {
    res.json({
        message: "Welcome to HelloMaMa app"
    })
})

// Users Route
app.post('/api/v1/users/register', userControllers.register)
app.post('/api/v1/users/login', userControllers.login)
app.get('/api/v1/users/profile', verifyJWT, userControllers.getUserProfile)

// Locations Route
app.get('/api/v1/locations', locationControllers.getAllLocation) //get all locations
// app.get('/api/v1/locations/new', locationControllers.newLocationForm) //get location form
app.post('/api/v1/locations', locationControllers.createLocation) //create location
// app.get('/api/v1/locations/:slug', locationControllers.getLocation) //get single location
// app.get('/api/v1/locations/:slug/edit', locationControllers.showEditForm) //get update location form
// app.patch('/api/v1/locations/:slug', locationControllers.updateLocation) //update location
// app.delete('/api/v1/locations/:slug', locationControllers.deleteLocation) //delete location
// app.get('/api/v1/users/locations', locationControllers.getUserLocation) //get user locations

//  Ratings Route
// app.get('/api/v1/locations/:slug/ratings/new', ratingControllers.newRatingForm')
// app.post('/api/v1/locations/:slug/ratings', ratingControllers.createRating')


// Listeners Route

app.listen(process.env.PORT || port, () => {
    console.log(`HelloMama listening on port: ${port}`)
})

function verifyJWT(req, res, next) {
    // get the jwt token from the request header
    const authToken = req.headers.auth_token
    console.log(authToken)
    // check if authToken header value is empty, return err if empty
    if (!authToken) {
        res.json({
            success: false,
            message: "Auth header value is missing"
        })
        return
    }

    // verify that JWT is valid and not expired
    try {
        // if verify success, proceed
        const userData = jwt.verify(authToken, process.env.JWT_SECRET, {
            algorithms: ['HS384']
        })
        // store jwt token into res.locals.jwtData
        res.locals.jwtData = userData;
        next()
    } catch (err) {
        // if fail, return error msg

        res.json({
            success: false,
            message: "Auth token is invalid"
        })
        return
    }
}