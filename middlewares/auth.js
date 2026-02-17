export const roleCheck = (role) => {
  return (req, res, next) => {
    if (req.headers.role !== role) {
      return res.status(403).json({ message: "Access Denied" });
    }

    next();
  };
};
