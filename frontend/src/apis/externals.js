import axios from "axios";
import { endPoints } from "./axios";

export const apiGetCredentialFromAccessToken = (accessToken) => {
  return axios({
    method: "get",
    url: endPoints.auth.getCredentialFromAccessToken + accessToken,
  });
};
