const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const documentClassifierGroupSchema = new Schema({
  group: {
    type: 'String',
    required: true,
  },
  groupName: {
    type: 'String',
    required: true,
  },
});

module.exports = mongoose.model(
  'DocumentClassifierGroup_KGS',
  documentClassifierGroupSchema
);
