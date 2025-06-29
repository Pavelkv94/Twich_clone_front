import { BaseColor } from "@/libs/constants/colors.contstants";

export interface ConfigStore {
    theme: BaseColor;
    setTheme: (theme: BaseColor) => void;
}