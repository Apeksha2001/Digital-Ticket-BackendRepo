const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookTicketSchema = new Schema({
  date: {
    type: Date,
    required: true,
    default:Date.now
  },
  stopAvailability: [{
    stopId: {
      type: Schema.Types.ObjectId,
      ref: 'Stop',
      required: true
    },
    availableSeats: {
      type: Number,
      required: true,
      default: 0
    }
  }],
  busId: {
    type: Schema.Types.ObjectId,
    ref: 'Bus',
    required: true
  }
});
module.exports = mongoose.model('BookTicket', bookTicketSchema);

