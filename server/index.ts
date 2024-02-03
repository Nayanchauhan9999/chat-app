import express from "express";
import { healthRoute, homeRoutes } from "./src/Routes";

const app = express();
const PORT = process.env.PORT || 8080;

app.use("/", homeRoutes);
app.use("/health", healthRoute);

app.listen(PORT, () => {
  console.log("server started on http://localhost:" + PORT);
});
