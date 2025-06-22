const jokes = require('../jokes.json');
const { Joke } = require('../models');

exports.addJoke = async (req, res) => {
  const { question, answer } = req.body;
  const joke = await Joke.create({ question, answer });
  res.status(201).json(joke);
};

exports.getAllJokes = async (req, res) => {
  const jokes = await Joke.findAll();
  res.json(jokes);
};

exports.getJokeById = async (req, res) => {
  const joke = await Joke.findByPk(req.params.id);
  if (joke) res.json(joke);
  else res.status(404).json({ error: 'Joke not found' });
};

exports.getRandomJoke = async (req, res) => {
  const jokes = await Joke.findAll();
  const random = jokes[Math.floor(Math.random() * jokes.length)];
  res.json(random);
};
exports.updateJoke = async (req, res) => {
  const { id } = req.params;
  const { question, answer } = req.body;
  const joke = await Joke.findByPk(id);
  if (joke) {
    joke.question = question;
    joke.answer = answer;
    await joke.save();
    res.json(joke);
  } else {
    res.status(404).json({ error: 'Joke not found' });
  }
};

exports.deleteJoke = async (req, res) => {
  const { id } = req.params;
  const joke = await Joke.findByPk(id);
  if (joke) {
    await joke.destroy();
    res.status(204).send();
  } else {
    res.status(404).json({ error: 'Joke not found' });
  }
};