// Helper function to calculate the price based on the distance traveled
// const mongoose = require('mongoose');;
// const Bus = require('../models/bus');


exports.calculatePrice=(distance)=> {
    const basePrice = 50; // base price for a ticket
    const distanceThreshold = 100; // distance threshold for applying additional charges
    const additionalCharge = 0.5; // additional charge per kilometer over the distance threshold
  
    let price = basePrice;
    if (distance > distanceThreshold) {
      const additionalDistance = distance - distanceThreshold;
      const additionalPrice = additionalDistance * additionalCharge;
      price += additionalPrice;
    }
    return price;
  }
 
  // exports.checkBusDetails=(busId)=>{
  //   const isValidBusId = mongoose.Types.ObjectId.isValid(busId);
  //   if (!isValidBusId) {
  //     return res.status(400).json({ message: 'Invalid bus ID' });
  //   }
  //   const bus = Bus.findById(busId);
  //   if (!bus) {
  //     return res.status(404).json({ message: 'Bus not found' });
  //   }
  // }