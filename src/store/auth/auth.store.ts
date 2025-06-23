import { create } from "zustand";
import { AuthStore } from "./auth.types";
import { createJSONStorage, persist } from "zustand/middleware";

export const authStore = create(persist<AuthStore>(
    (set) => ({
        isAuthenticated: false,
        setIsAuthenticated: (isAuthenticated) => set({ isAuthenticated }),
    }),
    {
        name: "auth-store",
        storage: createJSONStorage(() => localStorage),
    }));