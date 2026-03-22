export const colors = {
    red: "#ef4444",
    green: "#22c55e",
    blue: "#3b82f6",
    black: "#000000",
    white: "#ffffff",

    gray: "#9ca3af",
    slate: "#64748b",
    neutral: "#404040",
    zinc: "#18181b",

    indigo: "#6366f1",
    violet: "#8b5cf6",
    sky: "#0ea5e9",
    emerald: "#10b981",
    rose: "#f43f5e",
    amber: "#f59e0b",
    orange: "#f97316",

    fuchsia: "#d946ef",
    cyan: "#06b6d4",
    teal: "#14b8a6",
    pink: "#ec4899",
    yellow: "#eab308",
    lime: "#84cc16",
    purple: "#a855f8",
};

export const colorMap = {
    ...colors,
    get random() {
        const allColors = Object.values(colors);
        const randomColor = allColors[Math.floor(Math.random() * allColors.length)];
        return randomColor;
    },
};
