import express from "express";
import { homeController } from "../Controllers/home.controller";

const router = express.Router();

router.get("/", homeController);

export default router;
