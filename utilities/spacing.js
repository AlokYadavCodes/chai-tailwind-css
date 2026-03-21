import { spacingScale } from "../config/spacingScale.js"

const spacingPropertyMap = {
    "m": ["margin"],
    "mt": ["margin-top"],
    "mb": ["margin-bottom"],
    "ml": ["margin-left"],
    "mr": ["margin-right"],
    "mx": ["margin-left", "margin-right"],
    "my": ["margin-top", "margin-bottom"],

    "p": ["padding"],
    "pt": ["padding-top"],
    "pb": ["padding-bottom"],
    "pl": ["padding-left"],
    "pr": ["padding-right"],
    "px": ["padding-left", "padding-right"],
    "py": ["padding-top", "padding-bottom"],
    "gap":   ["gap"],
    "gap-x": ["column-gap"],
    "gap-y": ["row-gap"],
}

export function spacingHandler(parts) {
    let property, value;

    if (parts.length === 3) {
        property = `${parts[0]}-${parts[1]}`;
        value = parts[2];
    } else {
        property = parts[0];
        value = parts[1];
    }

    if(!spacingPropertyMap[property]) return null;
    const styles = {};
    for (const prop of spacingPropertyMap[property]) {
        styles[prop] = spacingScale[value];
    }
    return styles;
}
