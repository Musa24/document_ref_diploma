const DocumentClassifierSubGroup = require('../../../models/classifications/KGS/documentClassifierSubGroup');
const DocumentClassifierSubGroupGroup = require('../../../models/classifications/KGS/documentClassifierSubGroupGroup');

const createDocumentClassifierSubGroupGroupFormController = async (
  req,
  res,
  next
) => {
  const documentsClassifierSubGroup = await DocumentClassifierSubGroup.find({});
  res.render('classifications/KGS/documentClassifierSubGroupGroupForm', {
    edit: false,
    documentsClassifierSubGroup,
  });
};

const createDocumentClassifierSubGroupGroupController = async (
  req,
  res,
  next
) => {
  const { subGroupGroupNumber, subGroupGroupName, subGroup } = req.body;
  const documentClassifierSubGroupGroup = new DocumentClassifierSubGroupGroup({
    subGroupGroupNumber,
    subGroupGroupName,
    subGroup,
  });
  await documentClassifierSubGroupGroup.save();
  res.redirect('/admin/KGS/documentClassifierSubGroupGroup');
};

const getAllDocumentsClassifierSubGroupGroupController = async (
  req,
  res,
  next
) => {
  const documentsClassifierSubGroupGroup =
    await DocumentClassifierSubGroupGroup.find({}).populate('subGroup');
  let counter = 0;

  res.render('classifications/KGS/documentClassifierSubGroupGroup', {
    documentsClassifierSubGroupGroup,
    counter,
  });
};

const deleteDocumentClassifierGroupGroupController = async (req, res, next) => {
  const { id } = req.params;
  await DocumentClassifierSubGroupGroup.findByIdAndDelete(id);
  res.redirect('/admin/KGS/documentClassifierSubGroupGroup');
};

const updateDocumentClassifierSubGroupGroupFormController = async (
  req,
  res,
  next
) => {
  const { id } = req.params;
  const documentsClassifierSubGroup = await DocumentClassifierSubGroup.find({});

  const documentClassifierSubGroupGroup =
    await DocumentClassifierSubGroupGroup.findById(id).populate('subGroup');

  console.log(documentClassifierSubGroupGroup);
  res.render('classifications/KGS/documentClassifierSubGroupGroupForm', {
    documentClassifierSubGroupGroup,
    documentsClassifierSubGroup,
    edit: true,
  });
};

const updateDocumentClassifierSubGroupGroupController = async (
  req,
  res,
  next
) => {
  const { id } = req.params;
  const { subGroupGroupNumber, subGroupGroupName, subGroup } = req.body;
  await DocumentClassifierSubGroupGroup.findByIdAndUpdate(id, {
    subGroupGroupNumber,
    subGroupGroupName,
    subGroup,
  });
  res.redirect('/admin/KGS/documentClassifierSubGroupGroup');
};

module.exports = {
  createDocumentClassifierSubGroupGroupFormController,
  createDocumentClassifierSubGroupGroupController,
  getAllDocumentsClassifierSubGroupGroupController,
  deleteDocumentClassifierGroupGroupController,
  updateDocumentClassifierSubGroupGroupFormController,
  updateDocumentClassifierSubGroupGroupController,
};
