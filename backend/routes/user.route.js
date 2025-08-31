import express from "express";
import { getMe } from "../controllers/user.controller.js";
import { verifyToken } from "../middlewares/verify_token.js";

const router = express.Router();

router.get("/me", verifyToken, getMe);

export default router;
