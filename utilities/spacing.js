import { spacingScale } from "../config/spacingScale.js"

export function marginHandler (parts){
    const value = parts[1];
    return {
        "margin": spacingScale[value],
    }
}

export function paddingHandler (parts){
    const value = parts[1];
    return {
        "padding": spacingScale[value],
    }
}