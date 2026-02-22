import express from "express";
import dotenv from "dotenv";

import userRoutes from "./routes/user.routes.js";
import vehicleRoutes from "./routes/vehicle.routes.js";
import tripRoutes from "./routes/trip.routes.js";
import analyticsRoutes from "./routes/analytics.routes.js";

import { logger } from "./middlewares/logger.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(logger);

app.use("/users", userRoutes);
app.use("/vehicles", vehicleRoutes);
app.use("/trips", tripRoutes);
app.use("/analytics", analyticsRoutes);

app.get("/", (req, res) => {
  res.send("Fleet Backend Running Successfully 🚀");
});

app.use((req, res) => {
  res.status(404).json({ message: "This Request Is Not Found" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
