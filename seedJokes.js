const { Joke } = require('./models');
const jokes = require('./jokes.json');

async function seed() {
  for (const { question, answer } of jokes) {
    await Joke.create({ question, answer });
  }
  console.log('Blagues insérées !');
  process.exit();
}

seed().catch(console.error);