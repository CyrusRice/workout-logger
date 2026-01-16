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

/* Mongoose routes
app.get('/add-workout', (req, res) => {
  const workout = new Workout({
    date: '11-01-2025',
    time: '1 h 5 m',
    notes: 'buycep curlzz'
  });

  Workout.save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    })
})

app.get('/all-blogs', (req, res) => {
  Blog.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    })
})
    */

// Home page
app.get('/', (req, res) => {
  /*const workouts = [
    {date: '11-1-2025', time: '1:05', notes: 'bicep curls 3x10, 30 min treadmill'},
    {date: '11/5/2025', time: '1 h 12 m', notes: ''},
    {date: '11/10/25', time: '57 min', notes: ''}
  ];
  res.render('index', { title: 'Home', workouts });*/
  res.redirect('/workouts');
});

/* Add a workout
app.get('/workouts/add', (req, res) => {
  res.render('add', { title: 'Add a new workout' });
});*/

// Workout routes
app.use('/workouts', workoutRoutes);

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});