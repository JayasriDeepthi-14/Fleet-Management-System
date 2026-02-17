import fs from "fs";

export const logger = (req, res, next) => {
  const log = `${req.method} | ${req.url} | ${new Date().toISOString()}\n`;

  fs.appendFile("logs.txt", log, (err) => {
    if (err) console.log(err);
  });

  next();
};
