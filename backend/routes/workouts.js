const express = require('express');
const router = express.Router();
const {
    createWorkout
} = require('../controllers/workoutController')
const workout = require('../models/workoutModels')
//call to get all workouts
router.get('/', (req, res) => {
   res.json({message: "Get all workouts"})
})  
//get a single workout
router.get('/:id', (req, res) => {
    console.log(req.params.id)  
    if(req.params.id === '1'){
        res.json({mesg : "this is the first workout"})
    }
    
})
//add workouts
router.post('/', createWorkout);
//update workouts
router.put('/:id', (req, res) => {
    res.json({mesg : "put request"})
})
//delete workouts
router.delete('/:id', (req, res) => {
    res.json({mesg : "delete request"})
})  



module.exports = router