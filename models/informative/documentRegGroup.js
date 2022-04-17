const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const documentRegGroupSchema = new Schema({
  longName: {
    type: 'String',
    required: true,
  },
  phase: {
    type: Schema.Types.ObjectId,
    ref: 'DocumentPhaseLCPAS',
  },
  stagePhase: {
    type: Schema.Types.ObjectId,
    ref: 'DocumentPhaseStage',
  },
  contentComponent: {
    type: Schema.Types.ObjectId,
    ref: 'DocumentContentComponent',
  },
});

module.exports = mongoose.model('DocumentRegGroup', documentRegGroupSchema);
