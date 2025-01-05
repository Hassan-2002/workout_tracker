require('dotenv').config();
const express = require('express');

const workoutsRoutes = require('./routes/workouts');

const  app =   express();
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
app.listen(process.env.PORT, () => {
    console.log('listening on port', process.env.PORT);
});


