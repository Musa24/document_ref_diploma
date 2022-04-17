const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const documentLevelSchema = new Schema({
  shortName: {
    type: 'String',
    required: true,
  },
  longName: {
    type: 'String',
    required: true,
  },
});

module.exports = mongoose.model('DocumentLevel', documentLevelSchema);
