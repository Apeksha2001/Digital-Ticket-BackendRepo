const mongoose = require('mongoose');
const TicketController=require('../controller/ticket.controller')
const router = require("express").Router();


//Add ticket 
router.post('/addTicket',TicketController.postTicketDetails)

//Getting details about ticket
router.get('/getTicket',TicketController.getTicketDetails);

//Getting details about particular ticket
router.get('/getOneTicketDetail/:id',TicketController.getOneTicketInfo);

//Deleting Ticket Details
+
router.delete('/deleteTicket/:id',TicketController.deleteTicketDetails)

module.exports = router;