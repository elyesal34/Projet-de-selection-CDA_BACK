const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./models');
const jokeRoutes = require('./routes/jokeRoutes');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger/swagger');

const app = express();

app.use(bodyParser.json());
app.use('/api', jokeRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

sequelize.sync().then(() => {
  console.log('Database synced');
  app.listen(3000, () => console.log('Server on http://localhost:3000'));
});

app.use((req, res, next) => {
  res.status(404).json({ error: 'Not Found' });
});