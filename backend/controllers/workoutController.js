const workoutModels = require('../models/workoutModels');
const workout = require('../models/workoutModels');


const createWorkout = async (req, res) => {
    
        const {title, reps,  load } = req.body ;
        try{
         const exercise = await workout.create({title, reps, load})
         res.status(200).json(exercise)
        } catch(error){
             res.status(500).json({msg : error.message})
        }
         
}

const getWorkouts = async (req, res) => {
    const workouts  = workout.find({}).sort({createdAt : -1}
    
    
    );
}

module.exports = {
    createWorkout
}