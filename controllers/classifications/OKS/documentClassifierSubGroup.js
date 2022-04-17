const DocumentClassifierGroup = require('../../../models/classifications/OKS/documentClassifierGroup');
const DocumentClassifierSubGroup = require('../../../models/classifications/OKS/documentClassifierSubGroup');

const createDocumentClassifierSubGroupFormController = async (
  req,
  res,
  next
) => {
  const documentsClassifierGroup = await DocumentClassifierGroup.find({});
  res.render('classifications/OKS/documentClassifierSubGroupForm', {
    edit: false,
    documentsClassifierGroup,
  });
};

const createDocumentClassifierSubGroupController = async (req, res, next) => {
  const { subGroupNumber, subGroupName, group } = req.body;
  const documentClassifierSubGroup = new DocumentClassifierSubGroup({
    subGroupNumber,
    subGroupName,
    group,
  });
  await documentClassifierSubGroup.save();
  res.redirect('/admin/documentClassifierSubGroup');
};

const getAllDocumentsClassifierSubGroupController = async (req, res, next) => {
  const documentsClassifierSubGroup = await DocumentClassifierSubGroup.find(
    {}
  ).populate('group');
  let counter = 0;

  res.render('classifications/OKS/documentClassifierSubGroup', {
    documentsClassifierSubGroup,
    counter,
  });
};

const deleteDocumentClassifierGroupController = async (req, res, next) => {
  const { id } = req.params;
  await DocumentClassifierSubGroup.findByIdAndDelete(id);
  res.redirect('/admin/documentClassifierSubGroup');
};

const updateDocumentClassifierSubGroupFormController = async (
  req,
  res,
  next
) => {
  const { id } = req.params;
  const documentsClassifierGroup = await DocumentClassifierGroup.find({});
  const documentClassifierSubGroup = await DocumentClassifierSubGroup.findById(
    id
  ).populate('group');

  res.render('classifications/OKS/documentClassifierSubGroupForm', {
    documentClassifierSubGroup,
    documentsClassifierGroup,
    edit: true,
  });
};

const updateDocumentClassifierSubGroupController = async (req, res, next) => {
  const { id } = req.params;
  const { subGroupNumber, subGroupName, group } = req.body;
  await DocumentClassifierSubGroup.findByIdAndUpdate(id, {
    subGroupNumber,
    subGroupName,
    group,
  });
  res.redirect('/admin/documentClassifierSubGroup');
};

module.exports = {
  createDocumentClassifierSubGroupFormController,
  createDocumentClassifierSubGroupController,
  getAllDocumentsClassifierSubGroupController,
  deleteDocumentClassifierGroupController,
  updateDocumentClassifierSubGroupFormController,
  updateDocumentClassifierSubGroupController,
};
