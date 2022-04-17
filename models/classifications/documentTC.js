const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const documentTCSchema = new Schema({
  // Сокр_Тематика :ЕСКД
  shortName: {
    type: 'String',
    required: true,
  },
  //   Категория_Тематики :Единая система конструкторской документации
  longName: {
    type: 'String',
    required: true,
  },
});

module.exports = mongoose.model('DocumentTC', documentTCSchema);
