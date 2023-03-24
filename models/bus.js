
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BusSchema = new Schema({

  busType: {
    type: String,
  },
  stops: [{
    type: Schema.Types.ObjectId,
    ref: 'Stop'
  }]
});

module.exports= mongoose.model('Bus', BusSchema);
