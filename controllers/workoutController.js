const Workout = require('../models/workout');

const workout_index = (req, res) => {
  Workout.find().sort({ createdAt: -1 })
    .then((result) => {
      res.render('workouts/index', { title: 'All Workouts', workouts: result })
    })
    .catch((err) => {
      console.log(err);
    })
};

const workout_details = (req, res) => {
  const id = req.params.id;
  Workout.findById(id)
    .then(result => {
      res.render('workouts/details', {workout: result, title: 'Workout Details' });
    })
    .catch((err) => {
      res.status(404).render('404', { title: 'Workout not found'});
    })
};

const workout_add_get =   (req, res) => {
  res.render('workouts/add', { title : 'Add' });
};

const workout_add_post = (req, res) => {
  const workout = new Workout(req.body);

  workout.save()
    .then((result) => {
      res.redirect('/workouts');
    })
    .catch((err) => {
      console.log(err);
    })
};

const workout_delete = (req, res) => {
  const id = req.params.id;
  Workout.findByIdAndDelete(id)
    .then(result => {
      res.json({ redirect: '/workouts' });
    })
    .catch(err => {
      console.log(err);
    })
};

module.exports = {
  workout_index,
  workout_details,
  workout_add_get,
  workout_add_post,
  workout_delete
}