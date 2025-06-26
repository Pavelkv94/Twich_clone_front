import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { SidebarStore } from "./sidebar.types";

export const sidebarStore = create(persist<SidebarStore>(
    (set) => ({
        isCollapsed: false,
        setIsCollapsed: (isCollapsed) => set({ isCollapsed }),
    }),
    {
        name: "sidebar-store",
        storage: createJSONStorage(() => localStorage),
    }));