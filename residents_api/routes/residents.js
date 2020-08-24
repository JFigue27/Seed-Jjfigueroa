const express = require('express');
// const { residentsMock } = require('../utils/mocks/residents'); // se reemplaza por el servicio creado...
const ResidentService = require('../services/residents');

function residentApi(app) {
  const router = express.Router();
  app.use('/api/residents', router);

  const residentService = new ResidentService();

  // Get list
  router.get('/', async function (req, res, next) {
    const { tags } = req.query;

    try {
      const residents = await residentService.getResidents({ tags });
      res.status(200).json({
        message: 'residents listed',
        data: residents,
      });
    } catch (error) {
      next(error);
    }
  });

  // Get by ID
  router.get('/:residentId', async function (req, res, next) {
    const { residentId } = req.params;

    try {
      const resident = await residentService.getResident({ residentId });
      res.status(200).json({
        message: 'resident retrived',
        data: resident,
      });
    } catch (error) {
      next(error);
    }
  });

  // Create
  router.post('/', async function (req, res, next) {
    const { body: resident } = req;

    try {
      const createResidentID = await residentService.createResident({
        resident,
      });
      res.status(201).json({
        message: 'resident created',
        data: createResidentID,
      });
    } catch (error) {
      next(error);
    }
  });

  // Update
  router.put('/:residentId', async function (req, res, next) {
    const { residentId } = req.params;
    const { body: resident } = req;

    try {
      const upadtedResidentId = await residentService.updateResident({
        residentId,
        resident,
      });
      res.status(200).json({
        message: 'resident updated',
        data: upadtedResidentId,
      });
    } catch (error) {
      next(error);
    }
  });

  // Delete
  router.delete('/:residentId', async function (req, res, next) {
    const { residentId } = req.params;

    try {
      const deleteResidentId = await residentService.deleteResident({
        residentId,
      });
      res.status(200).json({
        message: 'resident deleted',
        data: deleteResidentId,
      });
    } catch (error) {
      next(error);
    }
  });
}

module.exports = residentApi;
