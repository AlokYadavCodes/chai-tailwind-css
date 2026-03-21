const transformScale = {
    "0":   "0",
    "50":  "0.5",
    "75":  "0.75",
    "90":  "0.9",
    "95":  "0.95",
    "100": "1",
    "105": "1.05",
    "110": "1.1",
    "125": "1.25",
    "150": "1.5",
}

const transformPropertyMap = {
    "scale": (v)=> ({transform: `scale(${v})`}),
    "scale-x": (v)=> ({transform: `scaleX(${v})`}),
    "scale-y": (v)=> ({transform: `scaleY(${v})`}),
}

export function transformHandler(parts) {
    let property, value;

    if (parts.length === 3) {
        property = parts.slice(0, 2).join("-");
        value = transformScale[parts[2]];
    } else {
        property = parts[0];
        value = transformScale[parts[1]];
    }

    if(!transformPropertyMap[property] || value === undefined) return null;
    
    return transformPropertyMap[property](value);
}
