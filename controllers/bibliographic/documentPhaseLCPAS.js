const DocumentPhaseLCPAS = require('../../models/bibliographic/documentPhaseLCPAS');

const createDocumentPhaseLCPASFormController = (req, res, next) => {
  res.render('bibliographic/phase/documentPhaseLCPASForm', {
    edit: false,
    showSideMenu: true,
  });
};

const createDocumentPhaseLCPASController = async (req, res, next) => {
  const { shortName, longName } = req.body;
  const documentPhaseLCPAS = new DocumentPhaseLCPAS({
    shortName,
    longName,
  });
  await documentPhaseLCPAS.save();
  res.redirect('/admin/documentPhaseLCPAS');
};

const getAllDocumentsPhaseLCPASController = async (req, res, next) => {
  const documentsPhaseLCPAS = await DocumentPhaseLCPAS.find({});
  let counter = 1;
  res.render('bibliographic/phase/documentPhaseLCPAS', {
    documentsPhaseLCPAS,
    counter,
    showSideMenu: true,
  });
};

const deleteDocumentPhaseLCPASController = async (req, res, next) => {
  const { id } = req.params;

  await DocumentPhaseLCPAS.findByIdAndDelete(id);
  res.redirect('/admin/documentPhaseLCPAS');
};

const updateDocumentPhaseLCPASFormController = async (req, res, next) => {
  const { id } = req.params;
  const documentPhaseLCPAS = await DocumentPhaseLCPAS.findById(id);

  res.render('bibliographic/phase/documentPhaseLCPASForm', {
    documentPhaseLCPAS,
    edit: true,
    showSideMenu: true,
  });
};

const updateDocumentPhaseLCPASController = async (req, res, next) => {
  const { id } = req.params;
  const { shortName, longName } = req.body;
  await DocumentPhaseLCPAS.findByIdAndUpdate(id, {
    shortName,
    longName,
  });
  res.redirect('/admin/documentPhaseLCPAS');
};

module.exports = {
  createDocumentPhaseLCPASFormController,
  createDocumentPhaseLCPASController,
  getAllDocumentsPhaseLCPASController,
  deleteDocumentPhaseLCPASController,
  updateDocumentPhaseLCPASFormController,
  updateDocumentPhaseLCPASController,
};
