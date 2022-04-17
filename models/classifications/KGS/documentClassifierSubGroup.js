const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const documentClassifierSubGroupSchema = new Schema({
  subGroup: {
    type: 'String',
    required: true,
  },
  subGroupName: {
    type: 'String',
    required: true,
  },
  group: {
    type: Schema.Types.ObjectId,
    ref: 'DocumentClassifierGroup_KGS',
  },
});

module.exports = mongoose.model(
  'DocumentClassifierSubGroup_KGS',
  documentClassifierSubGroupSchema
);
