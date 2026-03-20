import { spacingScale } from "../config/spacingScale.js"

export function marginHandler (value){
    return {
        "margin": spacingScale[value],
    }
}

export function paddingHandler (value){
    return {
        "padding": spacingScale[value],
    }
}