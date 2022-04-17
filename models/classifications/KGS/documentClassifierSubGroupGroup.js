const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const documentClassifierSubGroupGroupSchema = new Schema({
  subGroupGroupNumber: {
    type: 'String',
    required: true,
  },
  subGroupGroupName: {
    type: 'String',
    required: true,
  },
  subGroup: {
    type: Schema.Types.ObjectId,
    ref: 'DocumentClassifierSubGroup',
  },
});

module.exports = mongoose.model(
  'DocumentClassifierSubGroupGroup_KGS',
  documentClassifierSubGroupGroupSchema
);
