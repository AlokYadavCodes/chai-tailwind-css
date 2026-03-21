import { spacingScale } from "../config/spacingScale.js";

const positionMap = {
    "top": "top",
    "bottom": "bottom",
    "left": "left",
    "right": "right",
}

export function positionHandler(parts){
    if(!positionMap[parts[0]]) return null;

    const property = positionMap[parts[0]];
    const value = parts[1];
    return {
        [property]: spacingScale[value]
    }

}