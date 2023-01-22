import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface User {
  id: number,
  email: string,
  password: string,
  username: string,
  avatarurl: string
}

export const exampleDB: Array<User> = [
  {
    id: 1,
    email: "default@gmail.com",
    password: "1234abcd",
    username: "first_user2020",
    avatarurl: "https://docs.readyplayer.me/ready-player-me/avatars/2d-avatars/examples",
  },
]

type AuthStore = {
  token: string;
  setUser: (foundUser: User) => void;
  setToken: (tokenResponse: string) => void;
  clear: () => void;
};

const initialState = {
  user: {
    id: "",
    email: "",
    password: "",
    username: "",
    avatarurl: "",
  },
  token: "",
};

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      user: "",
      token: "",
      setUser: (foundUser) => set({user}),
      setToken: (tokenResponse) => set({ token: tokenResponse }),
      clear: () => set({ ...initialState }),
    }),
    {
      name: "blog-auth",
    }
  )
);
