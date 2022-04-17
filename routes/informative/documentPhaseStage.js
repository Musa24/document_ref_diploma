const express = require('express');
const router = express.Router();

const {
  createDocumentPhaseStageFormController,
  createDocumentPhaseStageController,
  getAllDocumentsPhaseStageController,
  deleteDocumentPhaseStageController,
  updateDocumentPhaseStageFormController,
  updateDocumentPhaseStageController,
} = require('../../controllers/informative/documentPhaseStage');

router.get('/create', createDocumentPhaseStageFormController);
router.post('/', createDocumentPhaseStageController);
router.get('/', getAllDocumentsPhaseStageController);
router.delete('/:id', deleteDocumentPhaseStageController);
router.get('/:id', updateDocumentPhaseStageFormController);
router.put('/:id', updateDocumentPhaseStageController);

module.exports = router;
