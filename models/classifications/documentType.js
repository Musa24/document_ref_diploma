const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const documentTypeSchema = new Schema({
  shortName: {
    type: 'String',
    required: true,
  },
  longName: {
    type: 'String',
    required: true,
  },
});

module.exports = mongoose.model('DocumentType', documentTypeSchema);
