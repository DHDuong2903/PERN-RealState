import asyncHandler from "express-async-handler";
import db from "../models/index.js";

export const getMe = asyncHandler(async (req, res) => {
  const { userId } = req.user;

  const response = await db.User.findByPk(userId, {
    attributes: {
      // Cac truong thong tin cua user khong muon tra ve
      exclude: ["password", "resetPwdToken", "resetPwdExpiry"],
    },
  });
  return res.json({
    success: true,
    user: response,
  });
});
