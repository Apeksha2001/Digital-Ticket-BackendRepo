//const express = require('express');
//const router = express.Router();
const Stop = require('../models/stops');

exports.postStopDetails=(req,res)=>{
    const stop=new Stop({
        id:req.body.id,
        location:req.body.location,
        bus:req.body.bus

    })
    stop.save()
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




