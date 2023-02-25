const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const BusSchema=new Schema({
    Bus_id    :  { type: String , required : true},
    Bus_Type :   { type: String , required : true},
    Source   :   { type: String , required : true},
    Destination:{ type: String , required : true},

})
module.exports = mongoose.model("Bus",BusSchema);