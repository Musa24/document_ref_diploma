const DocumentClassifierGroup = require('../../../models/classifications/OKS/documentClassifierGroup');

const createDocumentClassifierGroupFormController = (req, res, next) => {
  res.render('classifications/OKS/documentClassifierGroupForm', {
    edit: false,
  });
};

const createDocumentClassifierGroupController = async (req, res, next) => {
  const { groupNumber, groupName } = req.body;
  const documentClassifierGroup = new DocumentClassifierGroup({
    groupNumber,
    groupName,
  });
  await documentClassifierGroup.save();

  res.redirect('/admin/documentClassifierGroup');
};

const getAllDocumentClassifierGroupController = async (req, res, next) => {
  const documentsClassifierGroup = await DocumentClassifierGroup.find({});
  // const docs = await documentLevel.save();
  let counter = 1;
  res.render('classifications/OKS/documentClassifierGroup', {
    documentsClassifierGroup,
    counter,
  });
};

const deleteDocumentClassifierGroupController = async (req, res, next) => {
  const { id } = req.params;
  await DocumentClassifierGroup.findByIdAndDelete(id);
  res.redirect('/admin/documentClassifierGroup');
};

const updateDocumentClassifierGroupFormController = async (req, res, next) => {
  const { id } = req.params;
  const documentClassifierGroup = await DocumentClassifierGroup.findById(id);

  res.render('classifications/OKS/documentClassifierGroupForm', {
    documentClassifierGroup,
    edit: true,
  });
};

const updateDocumentClassifierGroupController = async (req, res, next) => {
  const { id } = req.params;
  const { groupNumber, groupName } = req.body;
  await DocumentClassifierGroup.findByIdAndUpdate(id, {
    groupNumber,
    groupName,
  });
  res.redirect('/admin/documentClassifierGroup');
};

module.exports = {
  createDocumentClassifierGroupFormController,
  createDocumentClassifierGroupController,
  getAllDocumentClassifierGroupController,
  deleteDocumentClassifierGroupController,
  updateDocumentClassifierGroupFormController,
  updateDocumentClassifierGroupController,
};
