const express = require('express');
const router = express.Router();
const fleetController = require('../Controller/fleetController');

// Fleet Routes
router.post('/', fleetController.createFleet);
router.get('/', fleetController.getAllFleets);
router.get('/:id', fleetController.getFleetById);
router.put('/:id', fleetController.updateFleet);
router.delete('/:id', fleetController.deleteFleet);
router.post('/deleteMultiple', fleetController.deleteMultipleFleets);

// Document Routes
router.post('/:id/documents', fleetController.addDocument);
router.put('/:id/documents/:docId', fleetController.updateDocument);
router.delete('/:id/documents/:docId', fleetController.deleteDocument);

// Oil Change Routes
router.post('/:id/oilChanges', fleetController.addOilChange);
router.put('/:id/oilChanges/:oilId', fleetController.updateOilChange);
router.delete('/:id/oilChanges/:oilId', fleetController.deleteOilChange);

module.exports = router;
