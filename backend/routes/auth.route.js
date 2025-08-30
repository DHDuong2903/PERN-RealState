import express from "express";
import { checkNewUserFromEmail, loginWithGoogle } from "../controllers/auth.controller.js";
const router = express.Router();

router.post("/google", loginWithGoogle);
router.get("/has-user/:email", checkNewUserFromEmail);

export default router;
