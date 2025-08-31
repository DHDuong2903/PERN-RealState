import { apiGetMe } from "@/apis/user.js";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useMeStore = create(
  persist(
    (set) => ({
      token: null,
      me: null,
      googleData: null,
      setToken: (token) => set({ token }),
      setMe: (me) => set({ me }),
      setGoogleData: (data) => set({ googleData: data }),
      getMe: async () => {
        const response = await apiGetMe();
        if (response?.data?.success) {
          return set({ me: response.data.user });
        } else {
          return set({ me: null, token: null });
        }
      },
      logout: () => set({ me: null, token: null }),
    }),
    {
      name: "realstate/me", // key trong localStorage
      storage: createJSONStorage(() => localStorage),
      partialize: (state) =>
        Object.fromEntries(Object.entries(state).filter(([key]) => key === "token" || key === "me")),
    }
  )
);

export default useMeStore;
