import { Schema as _Schema, model } from "mongoose";
const Schema = _Schema;

const TicketSchema = new Schema({
  origin: { type: String, required: true },
  destination: { type: String, required: true },
  price: { type: String, required: true },
  date: { type: Date, default: Date.now },
  user: { type: String, required: true },
});

export default model("ticket", TicketSchema);
