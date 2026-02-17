import { supabase } from "../config/db.js";

export const addVehicle = async (req, res) => {
  const { name, registration_number, allowed_passengers, rate_per_km, owner_id } =
    req.body;

  const { data, error } = await supabase.from("vehicles").insert([
    {
      name,
      registration_number,
      allowed_passengers,
      rate_per_km,
      owner_id
    }
  ]);

  if (error) return res.status(400).json({ error: error.message });

  res.json({ message: "Vehicle Added", data });
};

export const assignDriver = async (req, res) => {
  const { vehicleId } = req.params;
  const { driver_id } = req.body;

  const { data, error } = await supabase
    .from("vehicles")
    .update({ driver_id })
    .eq("id", vehicleId);

  if (error) return res.status(400).json({ error: error.message });

  res.json({ message: "Driver Assigned", data });
};

export const getVehicle = async (req, res) => {
  const { vehicleId } = req.params;

  const { data, error } = await supabase
    .from("vehicles")
    .select("*")
    .eq("id", vehicleId)
    .single();

  if (error) return res.status(404).json({ error: error.message });

  res.json(data);
};
