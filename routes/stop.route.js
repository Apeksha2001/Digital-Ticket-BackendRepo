const express=require('express');
const router = require("express").Router();
const stopController=require('../controller/stop.controller');

router.post('/addStop',stopController.postStopDetails);








module.exports = router;