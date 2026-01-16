const express = require('express');
const workoutController = require('../controllers/workoutController');
const router = express.Router();

router.get('/', workoutController.workout_index);
router.post('/', workoutController.workout_add_post);
router.get('/add', workoutController.workout_add_get);
router.get('/:id', workoutController.workout_details);
router.delete('/:id', workoutController.workout_delete);

module.exports = router;