import getFareCalculation from "../lib/fare.js";
import Ticket from "../models/ticket.js";
import datefns from "date-fns";

export const addTicket = (req, res, next) => {
  const { source, destination, vehicleId, user } = req.body;
  if (!source || !destination || !user || !vehicleId) {
    throw new Error("Missing form value!");
  }
  const price = getFareCalculation(vehicleId, source, destination);
  const ticket = new Ticket({
    origin: source,
    destination: destination,
    user: user,
    price: price,
    vehicleId: vehicleId,
  });
  ticket
    .save()
    .then((success, result) => {
      if (success) {
        res.send("Ticket successfully generated");
      } else {
        res.send("Some error occured");
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
};

export const getTicketsByDate = async(vehicleId) => {
  const tickets = await Ticket.find({
    date: {
      $gte: datefns.startOfDay(new Date()),
      $lte: datefns.endOfDay(new Date()),
    },
    vehicleId
  });
  return tickets;
};
