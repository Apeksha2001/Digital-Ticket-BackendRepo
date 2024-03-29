const Ticket=require('../models/ticket');
const Helper=require('./helper')

exports.postTicketDetails=(req,res,next) => {
    const price=Helper.calculatePrice(req.body.distance)

    const ticket=new Ticket({

        origin : req.body.origin,
        destination:req.body.destination,
        price:price,
        distance:req.body.distance
  
   
    });

    ticket.save()
    .then( (success,result) =>{
        if(success){
            res.send('Details added successfully!!');
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

//Get all Ticket details
exports.getTicketDetails=(req,res) => {

    Ticket.find()
    .then( data => {
        res.status(200).json({
            allTicket : data
        });
    })
    .catch( err => {
        console.log('Error occurred');
        res.status(500).json({
            error : err
        });
    });
}

//Get One Ticket Details
exports.getOneTicketInfo = (req, res) => {
    Ticket.findById(req.params.id)
    .then(data => {
        res.status(200).json({
            Ticket: data,
            message: 'Data fetched successfully!!'
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

//Deleting Ticket info
//Delete Ticket Automattically After reaching Destination
exports.deleteTicketDetails = (req, res) => {
    Ticket.findByIdAndDelete(req.params.id)
    .then(data => {
        res.status(200).json({
            Ticket: data,
            message: 'Data deleted successfully!!'
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