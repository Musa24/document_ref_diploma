const DocumentPhaseStage = require('../../models/informative/documentPhaseStage');

const createDocumentPhaseStageFormController = (req, res, next) => {
  res.render('informative/phaseStage/documentPhaseStageForm.ejs', {
    edit: false,
  });
};

const createDocumentPhaseStageController = async (req, res, next) => {
  const { shortName, longName } = req.body;
  const documentPhaseStage = new DocumentPhaseStage({
    shortName,
    longName,
  });
  await documentPhaseStage.save();
  res.redirect('/admin/documentPhaseStage');
};

const getAllDocumentsPhaseStageController = async (req, res, next) => {
  const documentsPhaseStage = await DocumentPhaseStage.find({});
  let counter = 1;
  res.render('informative/phaseStage/documentPhaseStage', {
    documentsPhaseStage,
    counter,
  });
};

const deleteDocumentPhaseStageController = async (req, res, next) => {
  const { id } = req.params;

  await DocumentPhaseStage.findByIdAndDelete(id);
  res.redirect('/admin/documentPhaseStage');
};

const updateDocumentPhaseStageFormController = async (req, res, next) => {
  const { id } = req.params;
  const documentPhaseStage = await DocumentPhaseStage.findById(id);

  res.render('informative/phaseStage/documentPhaseStageForm', {
    documentPhaseStage,
    edit: true,
  });
};

const updateDocumentPhaseStageController = async (req, res, next) => {
  const { id } = req.params;
  const { shortName, longName } = req.body;
  await DocumentPhaseStage.findByIdAndUpdate(id, {
    shortName,
    longName,
  });
  res.redirect('/admin/documentPhaseStage');
};

module.exports = {
  createDocumentPhaseStageFormController,
  createDocumentPhaseStageController,
  getAllDocumentsPhaseStageController,
  deleteDocumentPhaseStageController,
  updateDocumentPhaseStageFormController,
  updateDocumentPhaseStageController,
};
