import express from "express";

import {
  addVehicle,
  assignDriver,
  getVehicle
} from "../controllers/vehicle.controller.js";

import { roleCheck } from "../middlewares/auth.js";
import { createVehicleLimiter } from "../middlewares/rateLimiter.js";

const router = express.Router();

// Add Vehicle (Owner Only + Rate Limit)
router.post(
  "/add",
  roleCheck("owner"),
  createVehicleLimiter,
  addVehicle
);

// Assign Driver (Owner Only)
router.patch(
  "/assign-driver/:vehicleId",
  roleCheck("owner"),
  assignDriver
);

// Get Vehicle by ID
router.get("/:vehicleId", getVehicle);

export default router;
