const express = require('express');
const router = express.Router();

const {
  createDocumentLevelController,
  getAllDocumentsLevelController,
  createDocumentLevelFormController,
  deleteDocumentLevelController,
  updateDocumentLevelController,
  updateDocumentLevelFormController,
} = require('../../controllers/classifications/documentLevelController');

router.get('/create', createDocumentLevelFormController);
router.post('/', createDocumentLevelController);
router.get('/', getAllDocumentsLevelController);
router.delete('/:id', deleteDocumentLevelController);
router.get('/:id', updateDocumentLevelFormController);
router.put('/:id', updateDocumentLevelController);

module.exports = router;
