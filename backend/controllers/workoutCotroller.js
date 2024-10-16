const Workout = require('../models/workoutModel')

// get all workouts
const getWorkouts = async (req, res) => {
    const workouts = await Workout.find({})
    res.status(200).json(workouts)
}

// get a single workout 
const getWorkout = async (req, res) => {
    const {id} = req.params

    const workout = await Workout.findById(id)

    if(!workout) {
        return res.status(404).json({error: 'No such workout'})
    } else {
        res.status(200).json(workout)
    }
}

// post a new workout
const createWorkout = async (req, res) => {
    const {title, reps, load} = req.body

    // add doc to db
    try {
        const workout = await Workout.create({title, reps, load})
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// delete a workout

// update a workout



module.exports = {
    createWorkout,
    getWorkouts,
    getWorkout
}