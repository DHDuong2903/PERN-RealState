import jsonwebtoken from "jsonwebtoken";
import db from "../models/index.js";

export const verifyToken = async (req, res, next) => {
  if (req.headers.authorization?.startsWith("Bearer")) {
    const token = req.headers.authorization.split(" ")[1];

    jsonwebtoken.verify(token, process.env.SECRET_JWT_KEY, async (err, user) => {
      if (err) {
        return res.json({
          success: false,
          msg: "Đăng nhập hết hạn. Vui lòng đăng nhập lại",
        });
      }

      req.user = user;
      next();
    });
  } else {
    return res.json({
      success: false,
      msg: "Vui lòng đăng nhập",
    });
  }
};
