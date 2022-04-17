const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const documentClassifierGroupSchema = new Schema({
  groupNumber: {
    type: 'String',
    required: true,
  },
  groupName: {
    type: 'String',
    required: true,
  },
});

module.exports = mongoose.model(
  'DocumentClassifierGroup',
  documentClassifierGroupSchema
);
