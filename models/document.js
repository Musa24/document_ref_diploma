const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const documentSchema = new Schema({
  documentNumber: {
    type: 'String',
    required: true,
  },
  documentName: {
    type: 'String',
    required: true,
  },
  documentReissue: {
    type: 'String',
    required: true,
  },
  publicationDate: {
    type: 'Date',
    required: true,
  },
  introductionDate: {
    type: 'Date',
    required: true,
  },
  lastModifiedDate: {
    type: 'Date',
    required: true,
  },
  documentType: {
    type: 'String',
    ref: 'DocumentType',
  },
  documentLevel: {
    type: 'String',
    ref: 'DocumentLevel',
  },
  documentTC: {
    type: 'String',
    ref: 'DocumentTC',
  },
  documentRegAppAuth: {
    type: 'String',
    ref: 'DocumentRegAppAuth',
  },
  documentStatus: {
    type: 'String',
    ref: 'DocumentStatus',
  },
});

module.exports = mongoose.model('Document', documentSchema);
