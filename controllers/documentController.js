const moment = require('moment');

const DocumentLevel = require('../models/classifications/documentLevel');
const DocumentType = require('../models/classifications/documentType');
const DocumentClassifierGroup = require('../models/classifications/OKS/documentClassifierGroup');
const DocumentClassifierSubGroup = require('../models/classifications/OKS/documentClassifierSubGroup');
const DocumentClassifierSubGroupGroup = require('../models/classifications/OKS/documentClassifierSubGroupGroup');
const DocumentTC = require('../models/classifications/documentTC');
const DocumentRegAppAuth = require('../models/bibliographic/documentRegAppAuth');
const DocumentStatus = require('../models/bibliographic/documentStatus');
const DocumentPhaseLCPAS = require('../models/bibliographic/documentPhaseLCPAS');
const DocumentPhaseStage = require('../models/informative/documentPhaseStage');
const DocumentContentComponent = require('../models/informative/documentContentComponent');
const Document = require('../models/document');

const createDocumentFormController = async (req, res, next) => {
  const documentsLevel = await DocumentLevel.find({});
  const documentsType = await DocumentType.find({});
  const documentsTC = await DocumentTC.find({});
  const documentsRegAppAuth = await DocumentRegAppAuth.find({});
  const documentsStatus = await DocumentStatus.find({});
  const documentsPhaseLCPAS = await DocumentPhaseLCPAS.find({});
  const documentsPhaseStage = await DocumentPhaseStage.find({});
  const documentsContentComponent = await DocumentContentComponent.find({});
  // OKS
  const groupOKS = await DocumentClassifierGroup.find({});
  const subGroupOKS = await DocumentClassifierSubGroup.find({});
  const subGroupGroupOKS = await DocumentClassifierSubGroupGroup.find({});

  const documentClassifierOKS = {
    groupOKS,
    subGroupOKS,
    subGroupGroupOKS,
  };
  res.render('main/documentForm', {
    edit: false,
    documentsLevel,
    documentsType,
    documentClassifierOKS,
    documentsTC,
    documentsRegAppAuth,
    documentsStatus,
    documentsPhaseLCPAS,
    documentsPhaseStage,
    documentsContentComponent,
  });
};

const createDocumentController = async (req, res, next) => {
  const {
    documentNumber,
    documentType,
    documentLevel,
    documentTC,
    documentRegAppAuth,
    documentName,
    documentStatus,
    publicationDate,
    introductionDate,
    documentReissue,
    lastModifiedDate,
  } = req.body;
  const document = new Document({
    documentNumber,
    documentType,
    documentLevel,
    documentTC,
    documentRegAppAuth,
    documentName,
    documentStatus,
    publicationDate,
    introductionDate,
    documentReissue,
    lastModifiedDate,
  });

  await document.save();
  res.redirect('/admin/document');
};

const getAllDocumentsController = async (req, res, next) => {
  const documents = await Document.find({})
    .populate('documentType')
    .populate('documentLevel')
    .populate('documentTC')
    .populate('documentRegAppAuth')
    .populate('documentStatus');
  let counter = 0;
  res.render('main/document.ejs', {
    documents,
    counter,
  });
};

const deleteDocumentController = async (req, res, next) => {
  const { id } = req.params;
  await Document.findByIdAndDelete(id);
  res.redirect('/admin/document');
};

module.exports = {
  createDocumentFormController,
  createDocumentController,
  getAllDocumentsController,
  deleteDocumentController,
};
