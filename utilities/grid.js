const gridValues = {
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    10: "10",
    11: "11",
    12: "12",
};

const gridPropertyMap = {
    "grid-cols": (v) => ({ "grid-template-columns": `repeat(${gridValues[v]}, minmax(0, 1fr))` }),
    "grid-rows": (v) => ({ "grid-template-rows": `repeat(${gridValues[v]}, minmax(0, 1fr))` }),
    "col-span": (v) => ({ "grid-column": `span ${gridValues[v]} / span ${gridValues[v]}` }),
    "row-span": (v) => ({ "grid-row": `span ${gridValues[v]} / span ${gridValues[v]}` }),
};

export function gridHandler(parts) {
    const property = parts.slice(0, 2).join("-");
    const value = parts[2];
    if (!gridPropertyMap[property] || !gridValues[value]) return null;
    console.log("inside grid handler", property, value);
    console.log(gridPropertyMap[property](value));
    return gridPropertyMap[property](value);
}
