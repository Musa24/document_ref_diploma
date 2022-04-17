const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const documentContentComponentSchema = new Schema({
  // Обозначение  П
  shortName: {
    type: 'String',
    required: true,
  },
  //   Компонент  - процесс
  longName: {
    type: 'String',
    required: true,
  },
});

module.exports = mongoose.model(
  'DocumentContentComponent',
  documentContentComponentSchema
);
