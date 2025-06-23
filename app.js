const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { sequelize } = require('./models');
const jokeRoutes = require('./routes/jokeRoutes');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger-output.json');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/api', jokeRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

sequelize.sync().then(() => {
  console.log('Database synced');
  app.listen(3000, () => console.log('Server on http://localhost:3000'));
});

app.use((req, res, next) => {
  res.status(404).json({ error: 'Not Found' });
});