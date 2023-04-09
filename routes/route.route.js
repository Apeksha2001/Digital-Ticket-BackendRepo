import { Router } from "express";
import stops from "../static/stops.json" assert { type: "json" };

import findDirectRoute from "../lib/directRoute.js";
import findSmartRoute from "../lib/smartRoute.js";
import findRelaxedRoute from "../lib/relaxedRoute.js";

const router = Router();

router.get("/direct", (req, res) => {
  const { source, destination } = req.query;
  console.log(source, destination, req.query);
  if (!source || !destination) {
    throw new Error(
      "Please provide valid query to the api Eg. /api/route/direct?source=stop_a&destination=stop_b"
    );
  }
  if (!stops[source] || !stops[destination]) {
    throw new Error(
      "Please provide valid source or destination. Please check your form."
    );
  }
  res.json({
    vehicles: findDirectRoute(source, destination),
  });
});

router.get("/relaxed", async(req, res) => {
  const { source, destination } = req.query;
  console.log(source, destination, req.query);
  if (!source || !destination) {
    throw new Error(
      "Please provide valid query to the api Eg. /api/route/direct?source=stop_a&destination=stop_b"
    );
  }
  if (!stops[source] || !stops[destination]) {
    throw new Error(
      "Please provide valid source or destination. Please check your form."
    );
  }
  res.json({
    vehicles: await findRelaxedRoute(source, destination),
  });
});

router.get("/smart", (req, res) => {
  const { source, destination } = req.query;
  console.log(source, destination, req.query);
  if (!source || !destination) {
    throw new Error(
      "Please provide valid query to the api Eg. /api/route/direct?source=stop_a&destination=stop_b"
    );
  }
  if (!stops[source] || !stops[destination]) {
    throw new Error(
      "Please provide valid source or destination. Please check your form."
    );
  }
  res.json({
    vehicles: findSmartRoute(source, destination),
  });
});

export default router;
