import axios from "./axios.js";
import { endPoints } from "./axios.js";

export const apiGetMe = () =>
  axios({
    method: "get",
    url: endPoints.user.getMe,
  });
