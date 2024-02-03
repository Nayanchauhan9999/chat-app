import express from "express";
import { healthController } from "../Controllers/health.controller";

const router = express.Router();

router.get("/", healthController);


export default router