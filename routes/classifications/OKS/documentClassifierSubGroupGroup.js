const express = require('express');
const router = express.Router();

const {
  createDocumentClassifierSubGroupGroupFormController,
  createDocumentClassifierSubGroupGroupController,
  getAllDocumentsClassifierSubGroupGroupController,
  deleteDocumentClassifierGroupGroupController,
  updateDocumentClassifierSubGroupGroupFormController,
  updateDocumentClassifierSubGroupGroupController,
} = require('../../../controllers/classifications/OKS/documentClassifierSubGroupGroup');

router.get('/create', createDocumentClassifierSubGroupGroupFormController);
router.post('/', createDocumentClassifierSubGroupGroupController);
router.get('/', getAllDocumentsClassifierSubGroupGroupController);
router.delete('/:id', deleteDocumentClassifierGroupGroupController);
router.get('/:id', updateDocumentClassifierSubGroupGroupFormController);
router.put('/:id', updateDocumentClassifierSubGroupGroupController);

module.exports = router;
