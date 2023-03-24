const mongoose = require('mongoose');
const Schema=mongoose.Schema;

const stopSchema = new Schema({
  id: {
    type: Number,
    required: true,
    unique: true
  },
  location: {
    type: String,
    required: true
  },
  bus: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Bus'
  }]
});

const Stop = mongoose.model('Stop', stopSchema);

module.exports = Stop;
