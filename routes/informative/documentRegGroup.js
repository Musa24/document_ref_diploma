const express = require('express');
const router = express.Router();

const {
  createDocumentRegGroupFormController,
  createDocumentRegGroupController,
  getAlldocumentsRegGrouptageController,
  deleteDocumentRegGroupController,
  updateDocumentRegGroupFormController,
  updateDocumentRegGroupController,
} = require('../../controllers/informative/documentRegGroup');

router.get('/create', createDocumentRegGroupFormController);
router.post('/', createDocumentRegGroupController);
router.get('/', getAlldocumentsRegGrouptageController);
router.delete('/:id', deleteDocumentRegGroupController);
router.get('/:id/edit', updateDocumentRegGroupFormController);
router.put('/:id', updateDocumentRegGroupController);

module.exports = router;
