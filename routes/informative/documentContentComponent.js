const express = require('express');
const router = express.Router();

const {
  createDocumentContentComponentFormController,
  createDocumentContentComponentController,
  getAllDocumentsContentComponentController,
  deleteDocumentContentComponentController,
  updateDocumentContentComponentFormController,
  updateDocumentContentComponentController,
} = require('../../controllers/informative/documentContentComponent');

router.get('/create', createDocumentContentComponentFormController);
router.post('/', createDocumentContentComponentController);
router.get('/', getAllDocumentsContentComponentController);
router.delete('/:id', deleteDocumentContentComponentController);
router.get('/:id', updateDocumentContentComponentFormController);
router.put('/:id', updateDocumentContentComponentController);

module.exports = router;
