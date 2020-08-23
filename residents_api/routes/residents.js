const express = require('express');
const { residentsMock } = require('../utils/mocks/residents');

function residentApi(app) {
  const router = express.Router();
  app.use('/api/residents', router);

  router.get('/', async function (req, res, next) {
    try {
      const residents = await Promise.resolve(residentsMock);
      res.status(200).json({
        Author: 'Jaime Figueroa',
        message: 'residents listed',
        data: residents,
      });
    } catch (error) {
      next(error);
    }
  });
}

module.exports = residentApi;
