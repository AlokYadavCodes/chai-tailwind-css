const flexPropertyMap = {
    justify: "justifyContent",
    items: "alignItems",
    // "self": "alignSelf",
    // "content": "alignContent",
};

const alignmentMap = {
    start: "flex-start",
    end: "flex-end",
    center: "center",
    between: "space-between",
    around: "space-around",
    evenly: "space-evenly",
    stretch: "stretch",
    baseline: "baseline",
    normal: "normal",
};

export function flexHandler(parts) {
    const property = parts[0];
    const value = parts[1];

    if (!flexPropertyMap[property]) return null;

    return {
        [flexPropertyMap[property]]: alignmentMap[value],
    };
}
