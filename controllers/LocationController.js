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
        console.log(res.locals.jwtData)

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
            username: res.locals.jwtData.username,
            email: res.locals.jwtData.email
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
    },

    getLocation: (req, res) => {

        let slug = req.params.slug

        LocationModel.findOne({
            where: {
                slug: slug,
            }
        })
        .then(response => {
            return res.status(201).json({
                success: true,
                locations: response
            })
        })
        .catch(err => {
            console.log(err)
            return res.status(400).json({
                success: false,
                message: 'get location failed'
            })
        })
    },

    updateLocation: (req, res) => {

        let slug = req.params.slug

        LocationModel.findOne({
            where: {
                slug: slug
            }
        })
            .then (result => {
                LocationModel.update({
                        location_description: req.body.location_description,
                        location_level: req.body.location_level,
                        address: req.body.address,
                        photo: req.body.photo,
                        changing_station: req.body.changing_station,
                        sink: req.body.sink,
                        hot_water_dispenser: req.body.hot_water_dispenser,
                        power_point: req.body.power_point,
                        lockable: req.body.lockable 
                    },{
                        where: { slug: result.slug }
                    }
                )
                    .then(response => {
                        return res.status(201).json({
                            success: true,
                        })
                    })
                    .catch(err => {
                        console.log(err)
                        return res.status(400).json({
                            success: false,
                            message: 'edit location failed'
                        })
                    })
            })
            .catch(err => {
                res.json(err)
            })
    },

    deleteLocation: (req,res) => {

        let slug = req.params.slug
        console.log(slug)

        LocationModel.findOne({
            where: {
                slug: slug
            }
        })
            .then(result => {
                LocationModel.destroy({
                    where: {
                        slug: result.slug
                    }
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
                        message: 'delete location failed'
                    })
                })
            })
            .catch(err => {
                res.json(err)
            })
    },

    getUserLocation: (req, res) => {
        console.log(res.locals.jwtData)

        LocationModel.findAll({
            username: res.locals.jwtData.username
        })
            .then(response => {
                return res.status(201).json({
                    success: true,
                    locations: response
                })
            })
            .catch(err => {
                console.log(err)
                return res.status(400).json({
                    success: false,
                    message: 'get user location failed'
                })
            })
    }
}


module.exports = locationControllers