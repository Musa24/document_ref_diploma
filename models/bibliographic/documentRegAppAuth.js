const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const documentRegAppAuthSchema = new Schema({
  // Обозначение   -  РТН
  shortName: {
    type: 'String',
    required: true,
  },
  //   Орг_Утвержд -   Ростехнадзор
  longName: {
    type: 'String',
    required: true,
  },
});

module.exports = mongoose.model('DocumentRegAppAuth', documentRegAppAuthSchema);
