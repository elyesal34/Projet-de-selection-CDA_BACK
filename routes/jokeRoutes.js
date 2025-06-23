const express = require('express');
const router = express.Router();
const jokeController = require('../controllers/jokeController');

router.post('/blagues', jokeController.addJoke);
router.get('/blagues', jokeController.getAllJokes);
router.get('/blagues/random', jokeController.getRandomJoke);
router.get('/blagues/:id', jokeController.getJokeById);


router.put('/blagues/:id', jokeController.updateJoke);
router.delete('/blagues/:id', jokeController.deleteJoke);

module.exports = router;