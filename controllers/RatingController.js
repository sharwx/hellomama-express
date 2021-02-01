'use strict'
const sequelize = require('../models/index')
const Rating = require('../models/rating')
const RatingModel = Rating(sequelize.sequelize, sequelize.Sequelize.DataTypes)

const ratingControllers = {


}


module.exports = ratingControllers