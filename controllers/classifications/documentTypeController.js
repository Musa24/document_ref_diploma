const DocumentType = require('../../models/classifications/documentType');

const createDocumentTypeFormController = (req, res, next) => {
  res.render('classifications/type/documentTypeForm.ejs', {
    edit: false,
  });
};

const createDocumentTypeController = async (req, res, next) => {
  // const documentLevel = new DocumentLevel(req.body);
  const { shortName, longName } = req.body;
  const documentType = new DocumentType({
    shortName,
    longName,
  });
  await documentType.save();
  res.redirect('/admin/documentType');
};

const getAllDocumentsTypeController = async (req, res, next) => {
  const documentsType = await DocumentType.find({});
  // const docs = await documentLevel.save();
  let counter = 1;
  res.render('classifications/type/documentType.ejs', {
    documentsType,
    counter,
  });
};

const deleteDocumentTypeController = async (req, res, next) => {
  const { id } = req.params;
  await DocumentType.findByIdAndDelete(id);
  res.redirect('/admin/documentType');
};

const updateDocumentTypeFormController = async (req, res, next) => {
  const { id } = req.params;
  const documentType = await DocumentType.findById(id);
  res.render('classifications/type/documentTypeForm.ejs', {
    documentType,
    edit: true,
  });
};

const updateDocumentTypeController = async (req, res, next) => {
  const { id } = req.params;
  const { shortName, longName } = req.body;
  await DocumentType.findByIdAndUpdate(id, {
    shortName,
    longName,
  });
  res.redirect('/admin/documentType');
};

module.exports = {
  createDocumentTypeFormController,
  createDocumentTypeController,
  getAllDocumentsTypeController,
  deleteDocumentTypeController,
  updateDocumentTypeFormController,
  updateDocumentTypeController,
};
