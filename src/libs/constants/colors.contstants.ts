export const BASE_COLORS = [
    {
        name: "violet",
        color: "#800080"
    },
    {
        name: "blue",
        color: "#0000FF"
    },
    {
        name: "turquoise",
        color: "#40E0D0"
    },
    {
        name: "yellow",
        color: "#FFFF00"
    },
    {
        name: "peach",
        color: "#FFDAB9"
    },
    {
        name: "pink",
        color: "#FFC0CB"
    },
    {
        name: "rose",
        color: "#FF007F"
    },
    {
        name: "red",
        color: "#FF0000"
    }
] as const;

export type BaseColor = (typeof BASE_COLORS)[number]['name'];