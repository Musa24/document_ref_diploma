const DocumentLevel = require('../../models/classifications/documentLevel');

const createDocumentLevelFormController = (req, res, next) => {
  res.render('classifications/documentLevelForm.ejs', {
    edit: false,
  });
};

const createDocumentLevelController = async (req, res, next) => {
  // const documentLevel = new DocumentLevel(req.body);
  const { shortName, longName } = req.body;
  const documentLevel = new DocumentLevel({
    shortName,
    longName,
  });
  await documentLevel.save();
  res.redirect('/admin/documentLevel');
};

const getAllDocumentsLevelController = async (req, res, next) => {
  const documentsLevel = await DocumentLevel.find({});
  // const docs = await documentLevel.save();
  let counter = 1;
  res.render('classifications/documentLevel.ejs', {
    documentsLevel,
    counter,
  });
};

const deleteDocumentLevelController = async (req, res, next) => {
  const { id } = req.params;
  await DocumentLevel.findByIdAndDelete(id);
  res.redirect('/admin/documentLevel');
};

const updateDocumentLevelFormController = async (req, res, next) => {
  const { id } = req.params;
  const documentLevel = await DocumentLevel.findById(id);
  console.log(documentLevel);
  res.render('classifications/documentLevelForm.ejs', {
    documentLevel,
    edit: true,
  });
};

const updateDocumentLevelController = async (req, res, next) => {
  const { id } = req.params;
  const { shortName, longName } = req.body;
  await DocumentLevel.findByIdAndUpdate(id, {
    shortName,
    longName,
  });
  res.redirect('/admin/documentLevel');
};

module.exports = {
  createDocumentLevelController,
  getAllDocumentsLevelController,
  createDocumentLevelFormController,
  deleteDocumentLevelController,
  updateDocumentLevelController,
  updateDocumentLevelFormController,
};
