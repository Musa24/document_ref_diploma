const express = require('express');
const router = express.Router();

const {
  createDocumentPhaseLCPASFormController,
  createDocumentPhaseLCPASController,
  getAllDocumentsPhaseLCPASController,
  deleteDocumentPhaseLCPASController,
  updateDocumentPhaseLCPASFormController,
  updateDocumentPhaseLCPASController,
} = require('../../controllers/bibliographic/documentPhaseLCPAS');

router.get('/create', createDocumentPhaseLCPASFormController);
router.post('/', createDocumentPhaseLCPASController);
router.get('/', getAllDocumentsPhaseLCPASController);
router.delete('/:id', deleteDocumentPhaseLCPASController);
router.get('/:id', updateDocumentPhaseLCPASFormController);
router.put('/:id', updateDocumentPhaseLCPASController);

module.exports = router;
