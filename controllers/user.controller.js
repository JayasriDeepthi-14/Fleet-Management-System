import { supabase } from "../config/db.js";

export const registerUser = async (req, res) => {
  const { name, email, password, role } = req.body;

  if (!["customer", "owner", "driver"].includes(role)) {
    return res.status(400).json({ message: "Invalid Role" });
  }

  const { data, error } = await supabase
    .from("users")
    .insert([{ name, email, password, role }]);

  if (error) return res.status(400).json({ error: error.message });

  res.json({ message: "User Registered", data });
};
