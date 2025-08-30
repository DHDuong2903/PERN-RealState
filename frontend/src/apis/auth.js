import axios, { endPoints } from "./axios";

export const apiCheckNewUser = (email) =>
  axios({
    method: "get",
    url: endPoints.auth.checkNewUser + email,
  });

export const apiSignInWithGoogle = (data) =>
  axios({
    method: "post",
    url: endPoints.auth.signInWithGoogle,
    data,
  });
