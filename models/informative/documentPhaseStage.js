const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const documentPhaseStageSchema = new Schema({
  // Обозначение  ПрОс
  shortName: {
    type: 'String',
    required: true,
  },
  //   Этап фазы  предпроектное обследование
  longName: {
    type: 'String',
    required: true,
  },
});

module.exports = mongoose.model('DocumentPhaseStage', documentPhaseStageSchema);
