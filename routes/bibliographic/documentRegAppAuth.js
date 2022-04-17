const express = require('express');
const router = express.Router();

const {
  createDocumentRegAppAuthFormController,
  createDocumentRegAppAuthController,
  getAllDocumentRegAppAuthController,
  deleteDocumentRegAppAuthController,
  updateDocumentRegAppAuthFormController,
  updateDocumentRegAppAuthController,
} = require('../../controllers/bibliographic/documentRegAppAuth');

router.get('/create', createDocumentRegAppAuthFormController);
router.post('/', createDocumentRegAppAuthController);
router.get('/', getAllDocumentRegAppAuthController);
router.delete('/:id', deleteDocumentRegAppAuthController);
router.get('/:id', updateDocumentRegAppAuthFormController);
router.put('/:id', updateDocumentRegAppAuthController);

module.exports = router;
