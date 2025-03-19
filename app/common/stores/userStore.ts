import { create } from "zustand";
import type { APIResponse } from "../api/user";

type userStoreType = {
  user: APIResponse | null;
  setUser: (user: APIResponse) => void;
  removeUser: () => void;
};

const userStore = create<userStoreType>((set) => ({
  user: null,
  setUser: (user: any) => set({ user }),
  removeUser: () => set({ user: null }),
}));

export default userStore;
