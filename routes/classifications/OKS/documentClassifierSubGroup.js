const express = require('express');
const router = express.Router();

const {
  createDocumentClassifierSubGroupFormController,
  createDocumentClassifierSubGroupController,
  getAllDocumentsClassifierSubGroupController,
  deleteDocumentClassifierGroupController,
  updateDocumentClassifierSubGroupFormController,
  updateDocumentClassifierSubGroupController,
} = require('../../../controllers/classifications/OKS/documentClassifierSubGroup');

router.get('/create', createDocumentClassifierSubGroupFormController);
router.post('/', createDocumentClassifierSubGroupController);
router.get('/', getAllDocumentsClassifierSubGroupController);
router.delete('/:id', deleteDocumentClassifierGroupController);
router.get('/:id', updateDocumentClassifierSubGroupFormController);
router.put('/:id', updateDocumentClassifierSubGroupController);

module.exports = router;
