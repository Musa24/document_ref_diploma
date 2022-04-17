const DocumentRegAppAuth = require('../../models/bibliographic/documentRegAppAuth');

const createDocumentRegAppAuthFormController = (req, res, next) => {
  res.render('bibliographic/regAppAuth/documentRegAppAuthForm', {
    edit: false,
  });
};

const createDocumentRegAppAuthController = async (req, res, next) => {
  const { shortName, longName } = req.body;
  const documentRegAppAuth = new DocumentRegAppAuth({
    shortName,
    longName,
  });
  await documentRegAppAuth.save();
  res.redirect('/admin/documentRegAppAuth');
};

const getAllDocumentRegAppAuthController = async (req, res, next) => {
  const documentsReqAppAuth = await DocumentRegAppAuth.find({});
  // const docs = await documentLevel.save();
  let counter = 1;
  res.render('bibliographic/regAppAuth/documentRegAppAuth', {
    documentsReqAppAuth,
    counter,
  });
};

const deleteDocumentRegAppAuthController = async (req, res, next) => {
  const { id } = req.params;
  await DocumentRegAppAuth.findByIdAndDelete(id);
  res.redirect('/admin/documentRegAppAuth');
};

const updateDocumentRegAppAuthFormController = async (req, res, next) => {
  const { id } = req.params;
  const documentRegAppAuth = await DocumentRegAppAuth.findById(id);

  res.render('bibliographic/regAppAuth/documentRegAppAuthForm.ejs', {
    documentRegAppAuth,
    edit: true,
  });
};

const updateDocumentRegAppAuthController = async (req, res, next) => {
  const { id } = req.params;
  const { shortName, longName } = req.body;
  await DocumentRegAppAuth.findByIdAndUpdate(id, {
    shortName,
    longName,
  });
  res.redirect('/admin/documentRegAppAuth');
};

module.exports = {
  createDocumentRegAppAuthFormController,
  createDocumentRegAppAuthController,
  getAllDocumentRegAppAuthController,
  deleteDocumentRegAppAuthController,
  updateDocumentRegAppAuthFormController,
  updateDocumentRegAppAuthController,
};
