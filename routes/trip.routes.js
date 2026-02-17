import express from "express";

import {
  createTrip,
  endTrip
} from "../controllers/trip.controller.js";

import { roleCheck } from "../middlewares/auth.js";

const router = express.Router();

// Create Trip (Customer Only)
router.post(
  "/create",
  roleCheck("customer"),
  createTrip
);

// End Trip
router.patch(
  "/end/:tripId",
  endTrip
);

export default router;
