import express from "express";
import { signUp } from "../Controllers/user.controller";
import { signupValidator } from "../Validators/signup.validator";

const router = express.Router();

router.post("/signup", signupValidator, signUp);

export default router;
