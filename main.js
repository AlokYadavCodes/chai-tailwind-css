import { spacingHandler } from "./utilities/spacing.js";
import { positionHandler } from "./utilities/position.js";
import { flexHandler } from "./utilities/flex.js";
import { sizeHandler } from "./utilities/size.js";
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

const marginUtilities = Object.fromEntries(["m", "mx", "my", "mt", "mb", "ml", "mr"].map((key) => [key, spacingHandler]));
const paddingUtilities = Object.fromEntries(["p", "px", "py", "pt", "pb", "pl", "pr"].map((key) => [key, spacingHandler]));

const utilities = {
    ...marginUtilities,
    ...paddingUtilities,
    // gap: spacingHandler,
    bg: bgHandler,
    text: textHandler,
    z: (parts)=> ({"z-index" : parts[1]}),
    w: sizeHandler,
    h: sizeHandler,
    "max-w": sizeHandler,
    "max-h": sizeHandler,

    top: positionHandler,
    bottom: positionHandler,
    left: positionHandler,
    right: positionHandler,
    justify: flexHandler,
    items: flexHandler,

}

function getPrefix(parts) {
  // return longest match first (e.g. "max-w" and not "max" for something like "max-w-96")
  for (let i = parts.length - 1; i > 0; i--) {
    const candidate = parts.slice(0, i).join("-");
    if (utilities[candidate]) return candidate;
  }
  return null;
}

function parseClass(className) {
    if (staticUtilities[className]) return staticUtilities[className];

    const parts = className.split("-");
    const prefix = getPrefix(parts);
    if (!prefix) return null;

    const handler = utilities[prefix];
    const style = handler(parts)
    return style;
}
