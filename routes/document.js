const express = require('express');
const router = express.Router();

const {
  createDocumentFormController,
  createDocumentController,
  getAllDocumentsController,
  deleteDocumentController,
} = require('../controllers/documentController');

const { isLoggedIn } = require('../middleware');

router.get('/create', createDocumentFormController);
router.post('/', isLoggedIn, createDocumentController);
router.get('/', isLoggedIn, getAllDocumentsController);
router.delete('/:id', isLoggedIn, deleteDocumentController);

module.exports = router;
