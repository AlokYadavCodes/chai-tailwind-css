const flexPropertyMap = {
    "justify": "justifyContent",
    "items": "alignItems",
    // "self": "alignSelf",
    // "content": "alignContent",
}

const alignmentMap = {
    "start" : "flex-start",
    "end" : "flex-end",
    "center": "center",
    "between": "space-between",
    "around" : "space-around",
    "evenly" : "space-evenly",
    "stretch" : "stretch",
    "baseline" : "baseline",
    "normal" : "normal",
}

export function flexHandler(parts) {
    if(!flexPropertyMap[parts[0]]) return null;

    const property = flexPropertyMap[parts[0]];
    const value = parts[1];

    return {
        [property] : alignmentMap[value],
    }
}