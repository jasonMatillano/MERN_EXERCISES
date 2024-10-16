const express = require('express')

const router = express.Router()

// get all workouts
router.get('/', (req, res) => {
    res.json({mssg:'Get all the workouts'})
})

// get a single workout
router.get('/:id', (req, res) => {
    res.json({mssg:'Get a single workout'})
})

// post a new workout
router.post('/', (req, res) => {
    res.json({mssg:'Post a new workout'})
})

// delete a workout
router.delete('/:id', (req, res) => {
    res.json({mssg:'Delete a workout'})
})

// update a workout
router.patch('/:id', (req, res) => {
    res.json({mssg:'Update a workout'})
})


module.exports = router