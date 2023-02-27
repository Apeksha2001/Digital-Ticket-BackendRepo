const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const TicketSchema=new Schema({
    origin:{type: String , required : true},
    destination:{ type: String , required : true},
    price:{type:String,required:true},
    date: {type: Date, default: Date.now},
    distance:{type:String,required:true},
 })
 module.exports = mongoose.model("ticket", TicketSchema);