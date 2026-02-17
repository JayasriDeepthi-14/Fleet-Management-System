import { supabase } from "../config/db.js";

export const getAnalytics = async (req, res) => {
  const { count: customers } = await supabase
    .from("users")
    .select("*", { count: "exact" })
    .eq("role", "customer");

  const { count: owners } = await supabase
    .from("users")
    .select("*", { count: "exact" })
    .eq("role", "owner");

  const { count: drivers } = await supabase
    .from("users")
    .select("*", { count: "exact" })
    .eq("role", "driver");

  const { count: vehicles } = await supabase
    .from("vehicles")
    .select("*", { count: "exact" });

  const { count: trips } = await supabase
    .from("trips")
    .select("*", { count: "exact" });

  res.json({ customers, owners, drivers, vehicles, trips });
};
