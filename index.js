require('dotenv').config()
const express = require('express')
const app = express();
const port = process.env.PORT || 5000;
const sequelize = require('./models/index')
// const User = require('./models/user')
// const Facility = require('./models/facility')
// const Booking = require('./models/booking')
// const UserModel = User(sequelize.sequelize, sequelize.Sequelize.DataTypes)
// const FacilityModel = Facility(sequelize.sequelize, sequelize.Sequelize.DataTypes)
// const BookingModel = Booking(sequelize.sequelize, sequelize.Sequelize.DataTypes)

app.use(express.urlencoded({
    extended: true
}))

// app.post('/api/v1/bookings', (req, res) => {
//     console.log(req.body)
    
//     BookingModel.create({
//         user_id: req.body.user_id,
//         facility_id: req.body.facility_id
//     })
//         .then(response => {
//             return res.status(201).json({
//                 success: true,
//             })
//         })
//         .catch(err => {
//             console.log(err)
//             return res.status(400).json({
//                 success: false,
//                 message: 'create booking failed'
//             })
//         })
// })


// app.get('/api/v1/users/:user_id/bookings', (req, res) => {
//     BookingModel.findAll({
//         where: {
//             id: req.params.user_id
//         }
//     })
//         .then(response => {
//             return res.status(200).json({
//                 success: true,
//                 bookings: response
//             })
//         })
//         .catch(err => {
//             console.log(err)
//             return res.status(404).json({
//                 success: false,
//                 message: 'user id not found'
//             })
//         })
// })

app.listen(process.env.PORT || port, () => {
    console.log(`HelloMama listening on port: ${port}`)
})