const express=require('express');
const router = require("express").Router();
const mongoose = require('mongoose');
const BookingController=require('../controller/booking.controller');


router.post('/addBooking',BookingController.postBookingDetails);

router.get('/getBookingDetails',BookingController.getBookingDetails);

router.patch('/updateBookingDetails/:id',BookingController.updateBookingDetails);


module.exports = router;