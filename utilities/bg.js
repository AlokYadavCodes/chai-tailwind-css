import { colorMap } from "../config/colorMap.js"

export function bgHandler (value) {
    return {
        "background-color": colorMap[value],
    }
}