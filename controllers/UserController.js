'use strict'
const jwt = require('jsonwebtoken')
const SHA256 = require("crypto-js/sha256")
const uuid = require('uuid')
const sequelize = require('../models/index')
const User = require('../models/user')
const UserModel = User(sequelize.sequelize, sequelize.Sequelize.DataTypes)


const userControllers = {

    register: (req, res) => {

        UserModel.findOne({
            where: {
                email: req.body.email
            }
        })
            .then(result => {
                // if found in DB, means email has already been taken
                if (result) {
                    res.statusCode = 400
                    res.json({
                        "success": false,
                        "message": "Email has already been taken"
                    })
                    return
                }

                // no document found in DB, can proceed with registration

                // generate uuid as salt
                const salt = uuid.v4()

                // hash combination using bcrypt
                const combination = salt + req.body.password

                // hash the combination using SHA256
                const hash = SHA256(combination).toString()

                // create user in DB
                UserModel.create({
                    username: req.body.username,
                    email: req.body.email,
                    pwsalt: salt,
                    hash: hash
                })
                    .then(createResult => {
                        if (createResult) {

                            // login successful, generate JWT
                            const token = jwt.sign({
                                username: createResult.username,
                                email: createResult.email,
                            }, process.env.JWT_SECRET, {
                                algorithm: "HS384",
                                expiresIn: "1h"
                            })

                            console.log(token, `jwt token`)
            
                            // decode JWT to get raw values
                            const rawJWT = jwt.decode(token)
                            res.statusCode = 201

                            // return token as json response
                            res.json({
                                success: true,
                                token: token,
                                expiresAt: rawJWT.exp
                            })
                            return
                        }

                            UserModel.findOne({
                                where: {
                                    email: req.body.email
                                }
                            })
                                .then(userResult => {
                    
                                    // login successful, generate JWT
                                    const token = jwt.sign({
                                        username: userResult.username,
                                        email: userResult.email,
                                    }, process.env.JWT_SECRET, {
                                        algorithm: "HS384",
                                        expiresIn: "1h"
                                    })
                    
                                    // decode JWT to get raw values
                                    const rawJWT = jwt.decode(token)
                    
                                    // return token as json response
                                    res.json({
                                        success: true,
                                        token: token,
                                        expiresAt: rawJWT.exp
                                    })
                                })

                                .catch(err => {
                                    res.statusCode = 500
                                    res.json({
                                        success: false,
                                        message: "Unable to login due to unexpected error"
                                    })
                                })
                    })
                .catch(err => {
                    res.statusCode = 400
                    res.json({
                        "success": false,
                        "message": "Unable to create user"
                    })
                })
            })
            .catch(err => {
                res.statusCode = 400
                res.json({
                    "success": false,
                    "message": "Unable to create user"
                })
            })
    },

    login: (req, res) => {
        // validate input here on your own
        console.log(req.body)

        // gets user with the given email
        UserModel.findOne({
            where: {
                email: req.body.email
            }
        })
            .then(result => {
                // check if result is empty, if it is, no user, so login fail, return err as json response
                if (!result) {
                    res.statusCode = 401
                    res.json({
                        "success": false,
                        "message": "Either username or password is wrong"
                    })
                    return
                }

                // combine DB user salt with given password, and apply hash algo
                const hash = SHA256(result.pwsalt + req.body.password).toString()

                // check if password is correct by comparing hashes
                if (hash !== result.hash) {
                    res.statusCode = 401
                    res.json({
                        "success": false,
                        "message": "Either username or password is wrong"
                    })
                    return
                }

                // login successful, generate JWT
                const token = jwt.sign({
                    username: result.username,
                    email: result.email,
                }, process.env.JWT_SECRET, {
                    algorithm: "HS384",
                    expiresIn: "1h"
                })

                // decode JWT to get raw values
                const rawJWT = jwt.decode(token)

                // return token as json response
                res.json({
                    success: true,
                    token: token,
                    expiresAt: rawJWT.exp
                })
            })
            .catch(err => {
                res.statusCode = 500
                res.json({
                    success: false,
                    message: "Unable to login due to unexpected error"
                })
            })
    },

    getUserProfile: (req, res) => {

        UserModel.findAll({
            where: {
                username: res.locals.jwtData.username
            }
        })
            .then(userResults => {
                res.json(userResults)
            })
            .catch(err => {
                res.json(err)
            })

    }

}

module.exports = userControllers