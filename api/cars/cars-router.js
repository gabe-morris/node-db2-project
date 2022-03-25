// DO YOUR MAGIC
const express = require('express')
const Car = require('./cars-model')
const router = express.Router()
const mw = require('../cars/cars-middleware')


router.get('/', async (req,res, next) => {
 try{
     const cars = await Car.getAll()
     res.json(cars)
 }catch(err){
     next(err)
 }
})

router.get('/:id', mw.checkCarId, async (req,res) => {
res.json(req.car)
})

router.post('/',mw.checkCarPayload, mw.checkVinNumberUnique,mw.checkVinNumberValid, async (req,res, next) => {
        res.json('posting new car')
})


module.exports = router