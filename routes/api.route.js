import { Router } from "express";
import routeRouter from "./route.route.js";
import locations from "../static/locations.json" assert { type: "json" };
import stops from "../static/stops.json" assert { type: "json" };
import { addTicket } from "../controller/ticket.controller.js";
import getFareCalculation from "../lib/fare.js";

const router = Router();

router.get("/location/:id", (req, res) => {
  if (!locations[req.params.id]) {
    throw new Error("Location not found!");
  }
  res.json({
    stops: locations[req.params.id],
  });
});

router.get("/stop", (req, res) => {
  const allStops = [];
  for (let [key, value] of Object.entries(stops)) {
    allStops.push({ id: key, ...value });
  }
  res.json({
    stops: allStops,
  });
});

router.post("/ticket", addTicket);

router.get("/fare", (req, res) => {
  const { vehicleId, source, destination } = req.query;
  if ((!vehicleId, !source, !destination)) {
    throw new Error("Missing query parameter!");
  }
  res.json({
    price: getFareCalculation(vehicleId, source, destination),
  });
});

router.use("/route", routeRouter);

export default router;
