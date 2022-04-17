const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const documentPhaseLCPASSchema = new Schema({
  // Обозначение  С
  shortName: {
    type: 'String',
    required: true,
  },
  //   Фаза_ЖЦ  Создание
  longName: {
    type: 'String',
    required: true,
  },
});

module.exports = mongoose.model('DocumentPhaseLCPAS', documentPhaseLCPASSchema);
