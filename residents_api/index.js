const express = require('express');
const app = express();

const { config } = require('./config/index');
const residentApi = require('./routes/residents.js');

residentApi(app);

// -- // Ejemplos para crear un server express
// app.get('/', function (req, res) {
//   res.send('Hello Word! ');
// });

// app.get('/json', function (req, rep) {
//   res.json({ Hello: 'World' });
// });

app.listen(config.port, function () {
  console.log(`Listening http://localhost:${config.port}`);
});
