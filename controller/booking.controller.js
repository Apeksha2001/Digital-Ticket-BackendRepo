const Booking= require("../models/booking");


//Add details about bus
exports.postBookingDetails=(req,res) => {
    const booking=new Booking({
        date:req.body.date,
        stopAvailability:req.body.stopAvailability,
        availableSeats:req.body.availableSeats,
        busId:req.body.busId

        
    });
    booking.save()
    .then( (success,result) =>{
        if(success){
            res.send('Booking Details added successfully!!');
        }else{
            res.send('Some error occured');
        }
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });   
}

exports.getBookingDetails=(req,res) => {

    Booking.find()
    .then( data => {
        res.status(200).json({
            Details : data
        });
    })
    .catch( err => {
        console.log('Error occurred');
        res.status(500).json({
            error : err
        });
    });
}

//function for updating booking

// Assuming you have defined the BookTicket model and imported the required dependencies

// Update the seat availability of a BookTicket document by ID
exports.updateBookingDetails=(req, res)=>{
    Booking.findByIdAndUpdate(req.params.id,req.body,{
        new:true
    })
    .then(data => {
        res.status(200).json({
            BookingDetails: data,
            message: 'Data Updated Successfully!!'
        });
    })
    .catch(err => {
        res.status(500).json({
            error: err
        });
    });
    if(!req.params.id)
    {
        return res.status(400).json({
            error:err
        })
    }
       
}

