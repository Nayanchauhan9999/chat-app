import winston from "winston";

export const logger = winston.createLogger({
  transports: [
    new winston.transports.File({
      level: "error",
      filename: "logs/filelog-error.log",
      format: winston.format.combine(
        winston.format.timestamp({ format: "YYYY-MM-DD hh:mm:ss" }),
        winston.format.json()
      ),
    }),
    new winston.transports.File({
      level: "info",
      filename: "logs/filelog-info.log",
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
      ),
    }),
    new winston.transports.File({
      level: "warn",
      filename: "logs/filelog-warn.log",
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
      ),
    }),
  ],
});
