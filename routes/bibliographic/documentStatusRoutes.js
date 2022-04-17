const express = require('express');
const router = express.Router();

const {
  createDocumentStatusFormController,
  createDocumentStatusController,
  getAllDocumentsStatusController,
  deleteDocumentStatusController,
  updateDocumentStatusFormController,
  updateDocumentStatusController,
} = require('../../controllers/bibliographic/documentStatusController');

router.get('/create', createDocumentStatusFormController);
router.post('/', createDocumentStatusController);
router.get('/', getAllDocumentsStatusController);
router.delete('/:id', deleteDocumentStatusController);
router.get('/:id', updateDocumentStatusFormController);
router.put('/:id', updateDocumentStatusController);

module.exports = router;
