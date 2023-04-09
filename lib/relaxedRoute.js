import { getTicketsByDate } from "../controller/ticket.controller.js";
import findDirectRoute from "./directRoute.js";

const findRelaxedRoute = async (source, destination) => {
  const directVehicles = findDirectRoute(source, destination);
  const mappedVehiles = [];
  for (let vehicle of directVehicles) {
    const tickets = await getTicketsByDate(vehicle.id);
    const availabilty = vehicle.seats - tickets.length;
    mappedVehiles.push({ ...vehicle, availabilty });
  }
  return mappedVehiles.sort((a, b) => {
    return b.availabilty - a.availabilty;
  });
};

export default findRelaxedRoute;
