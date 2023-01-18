import { create } from "zustand";
import { persist } from "zustand/middleware";

type AuthStore = {
  email: string;
  token: string;
  setEmail: (inputEmail: string) => void;
  setToken: (tokenResponse: string) => void;
  clear: () => void;
};

const initialState = {
  email: "",
  token: "",
};

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      email: "",
      token: "",
      setEmail: (inputEmail) => set({ email: inputEmail }),
      setToken: (tokenResponse) => set({ token: tokenResponse }),
      clear: () => set({ ...initialState }),
    }),
    {
      name: "blog-auth",
    }
  )
);
