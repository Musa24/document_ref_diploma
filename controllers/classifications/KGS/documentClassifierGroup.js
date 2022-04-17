const DocumentClassifierGroup = require('../../../models/classifications/KGS/documentClassifierGroup');

const createDocumentClassifierGroupFormController = (req, res, next) => {
  res.render('classifications/KGS/documentClassifierGroupForm', {
    edit: false,
  });
};

const createDocumentClassifierGroupController = async (req, res, next) => {
  const { group, groupName } = req.body;
  const documentClassifierGroup = new DocumentClassifierGroup({
    group,
    groupName,
  });
  await documentClassifierGroup.save();
  res.redirect('/admin/KGS/documentClassifierGroup');
};

const getAllDocumentClassifierGroupController = async (req, res, next) => {
  const documentsClassifierGroup = await DocumentClassifierGroup.find({});
  let counter = 1;
  res.render('classifications/KGS/documentClassifierGroup', {
    documentsClassifierGroup,
    counter,
  });
};

const deleteDocumentClassifierGroupController = async (req, res, next) => {
  const { id } = req.params;
  await DocumentClassifierGroup.findByIdAndDelete(id);
  res.redirect('/admin/KGS/documentClassifierGroup');
};

const updateDocumentClassifierGroupFormController = async (req, res, next) => {
  const { id } = req.params;
  const documentClassifierGroup = await DocumentClassifierGroup.findById(id);

  res.render('classifications/KGS/documentClassifierGroupForm', {
    documentClassifierGroup,
    edit: true,
  });
};

const updateDocumentClassifierGroupController = async (req, res, next) => {
  const { id } = req.params;
  const { group, groupName } = req.body;
  await DocumentClassifierGroup.findByIdAndUpdate(id, {
    group,
    groupName,
  });
  res.redirect('/admin/KGS/documentClassifierGroup');
};

module.exports = {
  createDocumentClassifierGroupFormController,
  createDocumentClassifierGroupController,
  getAllDocumentClassifierGroupController,
  deleteDocumentClassifierGroupController,
  updateDocumentClassifierGroupFormController,
  updateDocumentClassifierGroupController,
};
