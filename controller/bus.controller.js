const Bus= require("../models/bus");


//Add details about bus
exports.postBusDetails=(req,res,next) => {
    const bus=new Bus({
        Bus_id:req.body.Bus_id,
        Bus_Type:req.body.Bus_Type,
        Source : req.body.Source,
        Destination:req.body.Destination,
        
    });
    bus.save()
    .then( (success,result) =>{
        if(success){
            res.send('Bus Details added successfully!!');
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

//Get All Bus Details
exports.getBusDetails=(req,res) => {

    Bus.find()
    .then( data => {
        res.status(200).json({
            allBus : data
        });
    })
    .catch( err => {
        console.log('Error occurred');
        res.status(500).json({
            error : err
        });
    });
}

//Get One Bus Details
exports.getOneBusInfo = (req, res) => {
    Bus.findById(req.params.id)
    .then(data => {
        res.status(200).json({
            course: data,
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


//updating details
exports.updateBusdetails= (req, res) => {
    Bus.findByIdAndUpdate(req.params.id,req.body,{
              new:true
    })      
        .then(data => {
            res.status(200).json({
                course: data,
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



//Deleting students info
exports.deleteBusDetails = (req, res) => {
        Bus.findByIdAndDelete(req.params.id)
        .then(data => {
            res.status(200).json({
                course: data,
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

