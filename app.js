const express = require('express');
const mongoose = require('mongoose');
const workoutRoutes = require('./routes/workoutRoutes');
const app = express();

// connect to mongodb
const dbURI = 'mongodb+srv://myUser:123@workoutlogger.khqmuqh.mongodb.net/';
mongoose.connect(dbURI)
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

// register view engine
app.set('view engine', 'ejs');

// middleware & staic files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// Home page
app.get('/', (req, res) => {
  res.redirect('/workouts');
});

// Workout routes
app.use('/workouts', workoutRoutes);

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});