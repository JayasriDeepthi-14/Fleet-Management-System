import express from "express";
import { getAnalytics } from "../controllers/analytics.controller.js";

const router = express.Router();

// Get System Analytics
router.get("/", getAnalytics);

export default router;
