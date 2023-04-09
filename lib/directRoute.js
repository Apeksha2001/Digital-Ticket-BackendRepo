import vehicles from "../static/vehicles.json" assert { type: "json" };
import stops from "../static/stops.json" assert { type: "json" };

const isValidVehicle = (vehicle, source, destination) => {
  const vehicleData = vehicles[vehicle];
  for (let { id } of vehicleData.stops) {
    if (id === destination) {
      return false;
    }
    if (id === source) {
      return true;
    }
  }
  return false;
};

const findDirectRoute = (source, destination) => {
  const sStop = stops[source];
  const dStop = stops[destination];
  if (!sStop || !dStop) return [];
  const sVehicles = sStop.vehicleMapping;
  const dVehicles = dStop.vehicleMapping;

  //finding commen vehicles
  const commonVehicles = sVehicles.reduce((prev, curr) => {
    if (dVehicles.includes(curr)) {
      return [...prev, curr];
    }
    return prev;
  }, []);

  //finding valid vehicles
  const validVehicles = commonVehicles.filter((vehicle) =>
    isValidVehicle(vehicle, source, destination)
  );

  // resolving relationship
  return validVehicles.map((vehicle) => {
    const vehicleData = vehicles[vehicle];
    vehicleData.stops = vehicleData.stops.map((stop) => {
      const stopData = stops[stop.id];
      delete stopData.vehicleMapping;
      return { ...stop, ...stopData };
    });
    return { id: vehicle, ...vehicleData };
  });
};

export default findDirectRoute;
