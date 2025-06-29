import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { ConfigStore } from "./config.types";
import { BaseColor } from "@/libs/constants/colors.contstants";

export const configStore = create(persist<ConfigStore>(
    (set) => ({
        theme: "violet",
        setTheme: (theme: BaseColor) => set({ theme }),
    }),
    {
        name: "config-store",
        storage: createJSONStorage(() => localStorage),
    }));