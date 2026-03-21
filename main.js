import { marginHandler, paddingHandler } from "./utilities/spacing.js";
import { positionHandler } from "./utilities/position.js";
import { flexHandler } from "./utilities/flex.js";
import { bgHandler } from "./utilities/bg.js";
import { textHandler } from "./utilities/text.js";

document.addEventListener("DOMContentLoaded", init);

function init() {
    document.body.querySelectorAll("[class^='chai-'], [class*=' chai-']").forEach(processElement)
}

function processElement(el) {
    const styles = {
        "backgroundColor": "pink",
        "border": "1px solid blackk"
    };

    for (let className of el.classList) {
        if (!className.startsWith("chai-")) continue;

        // remove "chai-" prefix
        className = className.replace("chai-", "");
        const style = parseClass(className);
        Object.assign(styles, style);
    }

    Object.assign(el.style, styles);
}

const staticUtilities = {
    // Display
    block: { display: "block" },
    "inline-block": { display: "inline-block" },
    inline: { display: "inline" },
    flex: { display: "flex" },
    "inline-flex": { display: "inline-flex" },
    grid: { display: "grid" },
    "inline-grid": { display: "inline-grid" },
    hidden: { display: "none" },
    contents: { display: "contents" },
    "list-item": { display: "list-item" },

    // Position
    static: { position: "static" },
    fixed: { position: "fixed" },
    absolute: { position: "absolute" },
    relative: { position: "relative" },
    sticky: { position: "sticky" },

    // Flex Direction
    "flex-row": { flexDirection: "row" },
    "flex-row-reverse": { flexDirection: "row-reverse" },
    "flex-col": { flexDirection: "column" },
    "flex-col-reverse": { flexDirection: "column-reverse" },

    // Flex Wrap
    "flex-wrap": { flexWrap: "wrap" },
    "flex-wrap-reverse": { flexWrap: "wrap-reverse" },
    "flex-nowrap": { flexWrap: "nowrap" },
};

const utilities = {
    m: marginHandler,
    p: paddingHandler,
    bg: bgHandler,
    text: textHandler,
    z: (parts)=> ({"z-index" : parts[1]}),
    // w: sizeHandler,
    // h: sizeHandler,
    // "max-w": sizeHandler,
    // "max-h": sizeHandler,

    top: positionHandler,
    bottom: positionHandler,
    left: positionHandler,
    right: positionHandler,
    justify: flexHandler,
    item: flexHandler,

}

function parseClass(className) {
    if (staticUtilities[className]) return staticUtilities[className];

    const parts = className.split("-");
    const prefix = parts[0];
    if (!utilities[prefix]) return null;

    const handler = utilities[prefix];
    const style = handler(parts)
    return style;
}
