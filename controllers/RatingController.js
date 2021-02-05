'use strict'
const sequelize = require('../models/index')
const Rating = require('../models/rating')
const RatingModel = Rating(sequelize.sequelize, sequelize.Sequelize.DataTypes)

const ratingControllers = {

    newRatingForm: (req, res) => {

    },

    createRating: (req, res) => {
        
    }

}


module.exports = ratingControllers