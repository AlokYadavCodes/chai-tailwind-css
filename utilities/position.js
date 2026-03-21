import { spacingScale } from "../config/spacingScale.js";

const positionMap = {
    "top": "top",
    "bottom": "bottom",
    "left": "left",
    "right": "right",
}

export function positionHandler(parts){
    const property = [parts[0]];
    const value = parts[1];

    if(!positionMap[property]) return null;
    
    return {
        [positionMap[property]]: spacingScale[value]
    }

}