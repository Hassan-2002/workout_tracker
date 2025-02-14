require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const workoutsRoutes = require('./routes/workouts');

const  app =   express();
app.use(express.json());    
app.use((req,res,next) => {
        console.log(req.path, req.method);
        next()
})
// app.get('/', (req, res) => {
//     console.log("this works")
//     res.send('hello world');
// })
// app.post('/', (req, res) => {
//     req.readOnly = true;
// })
app.use('/api/workouts',workoutsRoutes)
mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log('connected to database');
}).catch((error) => {
    console.log(error);
})
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log('listening on port', process.env.PORT);
    });
})
.catch((error) => {
    console.log("error", error, process.env.MONGO_URI);
})



