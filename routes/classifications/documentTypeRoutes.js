const express = require('express');
const router = express.Router();

const {
  createDocumentTypeFormController,
  createDocumentTypeController,
  getAllDocumentsTypeController,
  deleteDocumentTypeController,
  updateDocumentTypeFormController,
  updateDocumentTypeController,
} = require('../../controllers/classifications/documentTypeController');

router.get('/create', createDocumentTypeFormController);
router.post('/', createDocumentTypeController);
router.get('/', getAllDocumentsTypeController);
router.delete('/:id', deleteDocumentTypeController);
router.get('/:id', updateDocumentTypeFormController);
router.put('/:id', updateDocumentTypeController);

module.exports = router;
