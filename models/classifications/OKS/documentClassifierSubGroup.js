const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const documentClassifierSubGroupSchema = new Schema({
  subGroupNumber: {
    type: 'String',
    required: true,
  },
  subGroupName: {
    type: 'String',
    required: true,
  },
  group: {
    type: Schema.Types.ObjectId,
    ref: 'DocumentClassifierGroup',
  },
});

module.exports = mongoose.model(
  'DocumentClassifierSubGroup',
  documentClassifierSubGroupSchema
);
