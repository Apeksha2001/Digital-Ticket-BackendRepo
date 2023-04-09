import { Router } from "express";
import routeRouter from "./route.route.js";
import locations from "../static/locations.json" assert { type: "json" };

const router = Router();

router.get("/location/:id", (req, res) => {
  if(!locations[req.params.id]){
    throw new Error("Location not found!");
  }
  res.json({
    stops: locations[req.params.id],
  });
});

router.use("/route", routeRouter);

export default router;
