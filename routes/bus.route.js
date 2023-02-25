const express=require('express');
const router = require("express").Router();
const mongoose = require('mongoose');
const Bus=require('../models/bus');
const BusController=require('../controller/bus.controller');


//Displaying all the details of bus
router.post('/addBus',BusController.postBusDetails);

//Getting details about bus
router.get('/getBus',BusController.getBusDetails);

//
router.get('/getOneBusDetail/:id',BusController.getOneBusInfo);

//Updating Bus Details
router.patch('/updateBus/:id',BusController.updateBusdetails);

//Deleting Bus Details

router.delete('/deleteBus/:id',BusController.deleteBusDetails)


module.exports = router;