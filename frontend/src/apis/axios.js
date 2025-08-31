import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:3000/api",
});

// Xử lý trước khi request
axiosInstance.interceptors.request.use((config) => {
  const store = window.localStorage.getItem("realstate/me");
  if (store) {
    const parsedStore = JSON.parse(store);
    const token = parsedStore?.state?.token;
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
  }
  return config;
});

// Xử lý trước khi response trả về
axiosInstance.interceptors.response.use((response) => {
  return response;
});

export default axiosInstance;

export const endPoints = {
  auth: {
    getCredentialFromAccessToken: "https://www.googleapis.com/oauth2/v1/userinfo?access_token=",
    checkNewUser: "/auth/has-user/",
    signInWithGoogle: "/auth/google",
  },
  user: {
    getMe: "/user/me",
  },
  external: {
    getProvinces: "https://vietnam-administrative-division-json-server-swart.vercel.app/province",
    getCommunesFromIdProvince: "https://vietnam-administrative-division-json-server-swart.vercel.app/commune",
  },
};
