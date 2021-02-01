'use strict'
const sequelize = require('../models/index')
const Location = require('../models/location')
const _ = require('lodash')
const { nanoid } = require('nanoid')
const LocationModel = Location(sequelize.sequelize, sequelize.Sequelize.DataTypes)

const locationControllers = {

    getAllLocation: (req,res) => {

        LocationModel.findAll()
            .then(response => {
                return res.status(200).json({
                    success: true,
                    locations: response
                })
            })
            .catch(err => {
                console.log(err)
                return res.status(400).json({
                    success: false,
                    message: 'find locations failed'
                })
            })
    },



    createLocation: (req, res) => {
        console.log(req.body)

        let slug = _.kebabCase(req.body.location_name)
        // console.log(slug)
        const id = nanoid()
        let slugID = slug + '-' + id

        LocationModel.create({
            location_name: req.body.location_name,
            slug: slugID,
            location_description: req.body.location_description,
            location_level: req.body.location_level,
            address: req.body.address,
            photo: req.body.photo,
            latitude: req.body.latitude,
            longitude: req.body.longitude,
            changing_station: req.body.changing_station,
            sink: req.body.sink,
            hot_water_dispenser: req.body.hot_water_dispenser,
            power_point: req.body.power_point,
            lockable: req.body.lockable,
            user_id: req.body.user_id
        })
            .then(response => {
                return res.status(201).json({
                    success: true,
                })
            })
            .catch(err => {
                console.log(err)
                return res.status(400).json({
                    success: false,
                    message: 'create booking failed'
                })
            })

    }

}


module.exports = locationControllers