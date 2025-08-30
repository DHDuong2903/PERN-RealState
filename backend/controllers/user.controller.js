import asyncHandler from "express-async-handler";
import db from "../models/index.js";

export const getMe = asyncHandler(async (req, res) => {
  const {userId} = req.user
});