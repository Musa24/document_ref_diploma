const DocumentRegGroup = require('../../models/informative/documentRegGroup');
const DocumentPhaseLCPAS = require('../../models/bibliographic/documentPhaseLCPAS');
const DocumentPhaseStage = require('../../models/informative/documentPhaseStage');
const DocumentContentComponent = require('../../models/informative/documentContentComponent');

const createDocumentRegGroupFormController = async (req, res, next) => {
  const documentsPhaseLCPAS = await DocumentPhaseLCPAS.find({});

  const documentsPhaseStage = await DocumentPhaseStage.find({});

  const documentsContentComponent = await DocumentContentComponent.find({});

  res.render('informative/regGroup/documentRegGroupForm.ejs', {
    edit: false,
    documentsPhaseLCPAS,
    documentsPhaseStage,
    documentsContentComponent,
  });
};

const createDocumentRegGroupController = async (req, res, next) => {
  const { longName, phase, stagePhase, contentComponent } = req.body;
  const documentRegGroup = new DocumentRegGroup({
    longName,
    phase,
    stagePhase,
    contentComponent,
  });
  await documentRegGroup.save();
  res.redirect('/admin/documentRegGroup');
};

const getAlldocumentsRegGrouptageController = async (req, res, next) => {
  const documentsRegGroup = await DocumentRegGroup.find({})
    .populate('phase')
    .populate('stagePhase')
    .populate('contentComponent');

  let counter = 0;
  res.render('informative/regGroup/documentRegGroup', {
    documentsRegGroup,
    counter,
  });
};

const deleteDocumentRegGroupController = async (req, res, next) => {
  const { id } = req.params;
  await DocumentRegGroup.findByIdAndDelete(id);
  res.redirect('/admin/documentRegGroup');
};

const updateDocumentRegGroupFormController = async (req, res, next) => {
  const documentsPhaseLCPAS = await DocumentPhaseLCPAS.find({});

  const documentsPhaseStage = await DocumentPhaseStage.find({});

  const documentsContentComponent = await DocumentContentComponent.find({});

  const { id } = req.params;
  const documentRegGroup = await DocumentRegGroup.findById(id)
    .populate('phase')
    .populate('stagePhase')
    .populate('contentComponent');

  res.render('informative/regGroup/documentRegGroupForm.ejs', {
    edit: true,
    documentsPhaseLCPAS,
    documentsPhaseStage,
    documentsContentComponent,
    documentRegGroup,
  });
};

const updateDocumentRegGroupController = async (req, res, next) => {
  const { id } = req.params;
  const { longName, phase, stagePhase, contentComponent } = req.body;
  await DocumentRegGroup.findByIdAndUpdate(id, {
    longName,
    phase,
    stagePhase,
    contentComponent,
  });
  res.redirect('/admin/documentRegGroup');
};

module.exports = {
  createDocumentRegGroupFormController,
  createDocumentRegGroupController,
  getAlldocumentsRegGrouptageController,
  deleteDocumentRegGroupController,
  updateDocumentRegGroupFormController,
  updateDocumentRegGroupController,
};
