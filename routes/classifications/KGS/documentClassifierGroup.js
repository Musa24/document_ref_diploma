const express = require('express');
const router = express.Router();

const {
  createDocumentClassifierGroupFormController,
  createDocumentClassifierGroupController,
  getAllDocumentClassifierGroupController,
  deleteDocumentClassifierGroupController,
  updateDocumentClassifierGroupFormController,
  updateDocumentClassifierGroupController,
} = require('../../../controllers/classifications/KGS/documentClassifierGroup');

router.get('/create', createDocumentClassifierGroupFormController);
router.post('/', createDocumentClassifierGroupController);
router.get('/', getAllDocumentClassifierGroupController);
router.delete('/:id', deleteDocumentClassifierGroupController);
router.get('/:id', updateDocumentClassifierGroupFormController);
router.put('/:id', updateDocumentClassifierGroupController);

module.exports = router;
