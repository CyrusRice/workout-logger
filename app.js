const express = require('express');
//const mongoose = require('mongoose');
const app = express();

// connect to mongodb
//const dbURI = 'mongodb+srv://myUser:123@workoutlogger.khqmuqh.mongodb.net/';
//mongoose.connect(dbURI)
  //.then((result) => app.listen(3000))
  //.catch((err) => console.log(err));

app.listen(3000);

// register view engine
app.set('view engine', 'ejs');

// middleware & staic files
app.use(express.static('public'));

// Home page
app.get('/', (req, res) => {
  const workouts = [
    {date: '11-1-2025', time: '1:05', notes: 'bicep curls 3x10, 30 min treadmill'},
    {date: '11/5/2025', time: '1 h 12 m', notes: ''},
    {date: '11/10/25', time: '57 min', notes: ''}
  ];
  res.render('index', { title: 'Home', workouts });
});

// Add a workout
app.get('/workouts/add', (req, res) => {
  res.render('add', { title: 'Add a new workout' });
});

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});