const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const TicketSchema=new Schema({
    source:{type: String , required : true},
    destination:{ type: String , required : true},
    //busId:{type:String,required:true},
    price:{type:String,required:true},
    createdAt: {
        type: Date,
        default: new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }),
      },
    distance:{type:String,required:true},
 })
 module.exports = mongoose.model("ticket", TicketSchema);