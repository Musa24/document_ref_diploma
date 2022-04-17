const DocumentStatus = require('../../models/bibliographic/documentStatus');

const createDocumentStatusFormController = (req, res, next) => {
  res.render('bibliographic/status/documentStatusForm.ejs', {
    edit: false,
  });
};

const createDocumentStatusController = async (req, res, next) => {
  const { shortName, longName } = req.body;
  const documentStatus = new DocumentStatus({
    shortName,
    longName,
  });
  await documentStatus.save();
  res.redirect('/admin/documentStatus');
};

const getAllDocumentsStatusController = async (req, res, next) => {
  const documentsStatus = await DocumentStatus.find({});
  // const docs = await documentLevel.save();
  let counter = 1;
  res.render('bibliographic/status/documentStatus.ejs', {
    documentsStatus,
    counter,
  });
};

const deleteDocumentStatusController = async (req, res, next) => {
  const { id } = req.params;
  await DocumentStatus.findByIdAndDelete(id);
  res.redirect('/admin/documentStatus');
};

const updateDocumentStatusFormController = async (req, res, next) => {
  const { id } = req.params;
  const documentStatus = await DocumentStatus.findById(id);

  res.render('bibliographic/status/documentStatusForm.ejs', {
    documentStatus,
    edit: true,
  });
};

const updateDocumentStatusController = async (req, res, next) => {
  const { id } = req.params;
  const { shortName, longName } = req.body;
  await DocumentStatus.findByIdAndUpdate(id, {
    shortName,
    longName,
  });
  res.redirect('/admin/documentStatus');
};

module.exports = {
  createDocumentStatusFormController,
  createDocumentStatusController,
  getAllDocumentsStatusController,
  deleteDocumentStatusController,
  updateDocumentStatusFormController,
  updateDocumentStatusController,
};
