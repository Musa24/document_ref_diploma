const DocumentTC = require('../../models/classifications/documentTC');

const createDocumentTCFormController = (req, res, next) => {
  res.render('classifications/tc/documentTCForm.ejs', {
    edit: false,
  });
};

const createDocumentTCController = async (req, res, next) => {
  // const documentLevel = new DocumentLevel(req.body);
  const { shortName, longName } = req.body;
  const documentTC = new DocumentTC({
    shortName,
    longName,
  });
  await documentTC.save();
  res.redirect('/admin/documentTC');
};

const getAllDocumentsTCController = async (req, res, next) => {
  const documentsTC = await DocumentTC.find({});
  // const docs = await documentLevel.save();
  let counter = 1;
  res.render('classifications/tc/documentTC.ejs', {
    documentsTC,
    counter,
  });
};

const deleteDocumentTCController = async (req, res, next) => {
  const { id } = req.params;
  await DocumentTC.findByIdAndDelete(id);
  res.redirect('/admin/documentTC');
};

const updateDocumentTCFormController = async (req, res, next) => {
  const { id } = req.params;
  const documentTC = await DocumentTC.findById(id);
  res.render('classifications/tc/documentTCForm.ejs', {
    documentTC,
    edit: true,
  });
};

const updateDocumentTCController = async (req, res, next) => {
  const { id } = req.params;
  const { shortName, longName } = req.body;
  await DocumentTC.findByIdAndUpdate(id, {
    shortName,
    longName,
  });
  res.redirect('/admin/documentTC');
};

module.exports = {
  createDocumentTCFormController,
  createDocumentTCController,
  getAllDocumentsTCController,
  deleteDocumentTCController,
  updateDocumentTCFormController,
  updateDocumentTCController,
};
