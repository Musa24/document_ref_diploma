const DocumentClassifierGroup = require('../../../models/classifications/KGS/documentClassifierGroup');
const DocumentClassifierSubGroup = require('../../../models/classifications/KGS/documentClassifierSubGroup');

const createDocumentClassifierSubGroupFormController = async (
  req,
  res,
  next
) => {
  const documentsClassifierGroup = await DocumentClassifierGroup.find({});
  res.render('classifications/KGS/documentClassifierSubGroupForm', {
    edit: false,
    documentsClassifierGroup,
  });
};

const createDocumentClassifierSubGroupController = async (req, res, next) => {
  const { subGroup, subGroupName, group } = req.body;
  const documentClassifierSubGroup = new DocumentClassifierSubGroup({
    subGroup,
    subGroupName,
    group,
  });
  await documentClassifierSubGroup.save();
  res.redirect('/admin/KGS/documentClassifierSubGroup');
};

const getAllDocumentsClassifierSubGroupController = async (req, res, next) => {
  const documentsClassifierSubGroup = await DocumentClassifierSubGroup.find(
    {}
  ).populate('group');
  let counter = 0;
  res.render('classifications/KGS/documentClassifierSubGroup', {
    documentsClassifierSubGroup,
    counter,
  });
};

const deleteDocumentClassifierGroupController = async (req, res, next) => {
  const { id } = req.params;
  await DocumentClassifierSubGroup.findByIdAndDelete(id);
  res.redirect('/admin/KGS/documentClassifierSubGroup');
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

  res.render('classifications/KGS/documentClassifierSubGroupForm', {
    documentClassifierSubGroup,
    documentsClassifierGroup,
    edit: true,
  });
};

const updateDocumentClassifierSubGroupController = async (req, res, next) => {
  const { id } = req.params;
  const { subGroup, subGroupName, group } = req.body;
  await DocumentClassifierSubGroup.findByIdAndUpdate(id, {
    subGroup,
    subGroupName,
    group,
  });
  res.redirect('/admin/KGS/documentClassifierSubGroup');
};

module.exports = {
  createDocumentClassifierSubGroupFormController,
  createDocumentClassifierSubGroupController,
  getAllDocumentsClassifierSubGroupController,
  deleteDocumentClassifierGroupController,
  updateDocumentClassifierSubGroupFormController,
  updateDocumentClassifierSubGroupController,
};
