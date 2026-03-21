import { colorMap } from "../config/colorMap.js"

export function bgHandler (parts) {
    const value = parts[1];
    return {
        "background-color": colorMap[value],
    }
}