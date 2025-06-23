const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'API Blagues',
    description: 'Une API pour gérer des blagues.',
  },
  host: 'localhost:3000',
  schemes: ['http'],
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./app.js']; // Chemin vers ton fichier principal

swaggerAutogen(outputFile, endpointsFiles, doc);
