const express = require('express');
const router = express.Router();

const {
  createDocumentTCFormController,
  createDocumentTCController,
  getAllDocumentsTCController,
  deleteDocumentTCController,
  updateDocumentTCFormController,
  updateDocumentTCController,
} = require('../../controllers/classifications/documentTCController');

router.get('/create', createDocumentTCFormController);
router.post('/', createDocumentTCController);
router.get('/', getAllDocumentsTCController);
router.delete('/:id', deleteDocumentTCController);
router.get('/:id', updateDocumentTCFormController);
router.put('/:id', updateDocumentTCController);

module.exports = router;
