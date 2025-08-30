import asyncHandler from "express-async-handler";
import db from "../models/index.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
};

export const loginWithGoogle = asyncHandler(async (req, res) => {
  const { email, fullname, avatar, password } = req.body;

  const alreadyUser = await db.User.findOne({ where: { email } });
  let userId;

  if (!alreadyUser) {
    const newUser = await db.User.create({
      email,
      fullname,
      avatar,
      password: await hashPassword(password),
    });
    userId = newUser.id;

    if (!newUser) throw new Error("Tạo mới user thất bại");

    return res.status(201).json({ message: "User created", user: newUser, success: true });
  } else {
    userId = alreadyUser.id;
  }

  const token = jwt.sign({ userId }, process.env.SECRET_JWT_KEY, {
    expiresIn: "7d",
  });

  return res.json({
    success: !!token, // Chuyển đổi token thành boolean
    accessToken: token,
    msg: token ? "Đăng nhập thành công" : "Đăng nhập thất bại",
  });
});

export const checkNewUserFromEmail = asyncHandler(async (req, res) => {
  const { email } = req.params;
  const user = await db.User.findOne({ where: { email } });

  let token = null;
  if (user)
    token = jwt.sign({ userId: user.id }, process.env.SECRET_JWT_KEY, {
      expiresIn: "7d",
    });
  return res.json({
    success: true,
    hasUser: !!user,
    accessToken: token,
    msg: token ? "Đăng nhập thành công" : "",
  });
});
