import { colorMap } from "../config/colorMap.js";

const borderWidthScale = {
    0: "0px",
    DEFAULT: "1px",
    2: "2px",
    4: "4px",
    8: "8px",
};

const borderRadiusScale = {
    none: "0px",
    sm: "2px",
    DEFAULT: "4px",
    md: "6px",
    lg: "8px",
    xl: "12px",
    "2xl": "16px",
    "3xl": "24px",
    full: "9999px",
};

const borderWidthPropertyMap = {
    "border-t": ["border-top-width"],
    "border-b": ["border-bottom-width"],
    "border-l": ["border-left-width"],
    "border-r": ["border-right-width"],

    "border-x": ["border-left-width", "border-right-width"],
    "border-y": ["border-top-width", "border-bottom-width"],
};

const borderStylePropertyMap = {
    solid: "solid",
    dashed: "dashed",
    dotted: "dotted",
    double: "double",
    none: "none",
};

export function borderHandler(parts) {
    console.log("inside border handler", parts);
    
    let property, value;
    if (parts.length === 3) {
        property = parts.slice(0, 2).join("-");
        value = parts[2] || "DEFAULT";

        if (!borderWidthPropertyMap[property]) return null;
        const styles = {};
        borderWidthPropertyMap[property].forEach((prop) => {
            styles[prop] = borderWidthScale[value];
        });
        return styles;
    } else {
        // property = parts[0];
        value = parts[1] || "DEFAULT";
        console.log(property, value);

        const resolvers = [
            { source: borderWidthScale, property: "border-width" },
            { source: borderRadiusScale, property: "border-radius" },
            { source: borderStylePropertyMap, property: "border-style" },
            { source: colorMap, property: "border-color" },
        ];
        for (const r of resolvers) {
            console.log(r.property, r.source[value]);
            if (r.source[value])
                return {
                    [r.property]: r.source[value],
                };
        }
    }
}
