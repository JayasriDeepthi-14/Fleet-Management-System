import { supabase } from "../config/db.js";

export const createTrip = async (req, res) => {
  const { customer_id, vehicle_id, distance_km, passengers, location } = req.body;

  const { data: vehicle } = await supabase
    .from("vehicles")
    .select("*")
    .eq("id", vehicle_id)
    .single();

  if (!vehicle.isAvailable)
    return res.status(400).json({ message: "Vehicle Not Available" });

  if (passengers > vehicle.allowed_passengers)
    return res.status(400).json({ message: "Too Many Passengers" });

  await supabase
    .from("vehicles")
    .update({ isAvailable: false })
    .eq("id", vehicle_id);

  const { data, error } = await supabase.from("trips").insert([
    {
      customer_id,
      vehicle_id,
      distance_km,
      passengers,
      location
    }
  ]);

  if (error) return res.status(400).json({ error: error.message });

  res.json({ message: "Trip Created", data });
};

export const endTrip = async (req, res) => {
  const { tripId } = req.params;

  const { data: trip } = await supabase
    .from("trips")
    .select("*")
    .eq("id", tripId)
    .single();

  const { data: vehicle } = await supabase
    .from("vehicles")
    .select("*")
    .eq("id", trip.vehicle_id)
    .single();

  const cost = trip.distance_km * vehicle.rate_per_km;

  await supabase
    .from("trips")
    .update({ isCompleted: true, tripCost: cost })
    .eq("id", tripId);

  await supabase
    .from("vehicles")
    .update({ isAvailable: true })
    .eq("id", trip.vehicle_id);

  res.json({ message: "Trip Ended", cost });
};
