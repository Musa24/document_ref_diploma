const DocumentContentComponent = require('../../models/informative/documentContentComponent');

const createDocumentContentComponentFormController = (req, res, next) => {
  res.render('informative/component/documentContentComponentForm.ejs', {
    edit: false,
  });
};

const createDocumentContentComponentController = async (req, res, next) => {
  const { shortName, longName } = req.body;
  const documentContentComponent = new DocumentContentComponent({
    shortName,
    longName,
  });
  await documentContentComponent.save();
  res.redirect('/admin/documentContentComponent');
};

const getAllDocumentsContentComponentController = async (req, res, next) => {
  const documentsContentComponent = await DocumentContentComponent.find({});
  let counter = 1;
  res.render('informative/component/documentContentComponent', {
    documentsContentComponent,
    counter,
    showSideMenu: true,
  });
};

const deleteDocumentContentComponentController = async (req, res, next) => {
  const { id } = req.params;
  await DocumentContentComponent.findByIdAndDelete(id);
  res.redirect('/admin/documentContentComponent');
};

const updateDocumentContentComponentFormController = async (req, res, next) => {
  const { id } = req.params;
  const documentContentComponent = await DocumentContentComponent.findById(id);
  res.render('informative/component/documentContentComponentForm', {
    documentContentComponent,
    edit: true,
  });
};

const updateDocumentContentComponentController = async (req, res, next) => {
  const { id } = req.params;
  const { shortName, longName } = req.body;
  await DocumentContentComponent.findByIdAndUpdate(id, {
    shortName,
    longName,
  });
  res.redirect('/admin/documentContentComponent');
};

module.exports = {
  createDocumentContentComponentFormController,
  createDocumentContentComponentController,
  getAllDocumentsContentComponentController,
  deleteDocumentContentComponentController,
  updateDocumentContentComponentFormController,
  updateDocumentContentComponentController,
};
