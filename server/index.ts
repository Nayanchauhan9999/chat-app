import express from "express";
import { healthRoute, homeRoutes, userRoutes } from "./src/Routes";
import mongoose from "mongoose";
import { logger } from "./src/Services/logger.service";
import DotEnv from "dotenv";
DotEnv.config({ path: "./.env" });

const app = express();
const PORT = process.env.PORT || 8080;
const DatabaseUrl = process.env.DB_URL || "";

/**
 *  Middlewares
 */
app.use(express.json());

app.use("/", homeRoutes);
app.use("/api/v1", homeRoutes);
app.use("/health", healthRoute);
app.use("/api/v1/user", userRoutes);

// database connection
mongoose
  .connect(DatabaseUrl)
  .then(() => {
    console.log("Database connection Successful!..............");
  })
  .catch((error) => {
    console.log("something went wrong while connecting database", error);
    logger.error(
      `error occoured while establish connection with database ::: ${error}`
    );
  });

app.listen(PORT, () => {
  console.log("server started on http://localhost:" + PORT);
});
