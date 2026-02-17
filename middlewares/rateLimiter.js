import rateLimit from "express-rate-limit";

export const createVehicleLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 3,
  message: "Too many requests. Try again later."
});
