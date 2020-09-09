'use strict'

const express = require('express')
const CityCtrl = require('../controllers/city')
var path    = require("path");
const api = express.Router()

api.get('/cities', CityCtrl.getCities)
api.get('/city/:city', CityCtrl.getCityByName)
api.delete('/city/:city', CityCtrl.deleteCity)
api.post('/city', CityCtrl.saveCity)


module.exports = api
