const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const documentStatusSchema = new Schema({
  // Сокр_Статус Д
  shortName: {
    type: 'String',
    required: true,
  },
  //   Статус действующие
  longName: {
    type: 'String',
    required: true,
  },
});

module.exports = mongoose.model('DocumentStatus', documentStatusSchema);
