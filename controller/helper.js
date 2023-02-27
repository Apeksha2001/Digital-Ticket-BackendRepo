// Helper function to calculate the price based on the distance traveled
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
 /* 
  exports.calculateDistance=async (origin,destination)=>{
    const apiKey = 'AIzaSyCAPRZELp_QveSM718g5dhf_X1QQfuuqY0';
    const Origin = origin;
    const Destination = destination;
    
  
      // Geocode the origin and destination addresses to get their coordinates
      const originResult = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?${qs.stringify({ address: Origin, key: apiKey })}`);
      const destinationResult = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?${qs.stringify({ address: Destination, key: apiKey })}`);
  
      // Extract the coordinates from the geocoding results
      const originLocation = originResult.data.results[0].geometry.location;
      const destinationLocation = destinationResult.data.results[0].geometry.location;
  
      // Calculate the distance between the two locations using the Haversine formula
      const distance = calculateDistance(originLocation, destinationLocation);
  
      // Send the distance as the response
      return distance;
  }*/