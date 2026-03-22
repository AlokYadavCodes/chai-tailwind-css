import { spacingHandler } from "./utilities/spacing.js";
import { positionHandler } from "./utilities/position.js";
import { flexHandler } from "./utilities/flex.js";
import { sizeHandler } from "./utilities/size.js";
import { bgHandler } from "./utilities/bg.js";
import { textHandler } from "./utilities/text.js";
import { borderHandler } from "./utilities/border.js";
import { fontHandler } from "./utilities/font.js";
import { gridHandler } from "./utilities/grid.js";
import { transformHandler } from "./utilities/transform.js";
import { breakpoints } from "./config/breakpoints.js";

const allElements = () => document.body.querySelectorAll("[class^='chai-'], [class*=' chai-']");

document.addEventListener("DOMContentLoaded", init);

function init() {
    allElements().forEach(processElement);

    // Register a matchMedia listener per breakpoint
    for (const minWidth of Object.values(breakpoints)) {
        window
            .matchMedia(`(min-width: ${minWidth}px)`)
            .addEventListener("change", () => allElements().forEach(processElement));
    }

    // Observe DOM changes for added elements and class changes
    const observer = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
            if (mutation.type === "childList") {
                mutation.addedNodes.forEach((node) => {
                    if (node.nodeType !== Node.ELEMENT_NODE) return;
                    if ([...node.classList].some((c) => c.startsWith("chai-")))
                        processElement(node);
                    node.querySelectorAll("[class^='chai-'], [class*=' chai-']").forEach(
                        processElement
                    );
                });
            }
            if (mutation.type === "attributes") {
                processElement(mutation.target);
            }
        }
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ["class"],
    });
}

function processElement(el) {
    const stylesByBreakpoint = { base: {} };
    for (const bp of Object.keys(breakpoints)) stylesByBreakpoint[bp] = {};

    for (let className of el.classList) {
        if (!className.startsWith("chai-")) continue;

        // remove "chai-" prefix
        className = className.replace("chai-", "");
        const { style, breakpoint } = parseClass(className);
        if (!style) continue;

        Object.assign(stylesByBreakpoint[breakpoint], style);
    }

    const styles = { ...stylesByBreakpoint.base };
    for (const [bp, minWidth] of Object.entries(breakpoints)) {
        if (window.innerWidth >= minWidth) {
            Object.assign(styles, stylesByBreakpoint[bp]);
        }
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

const marginUtilities = Object.fromEntries(
    ["m", "mx", "my", "mt", "mb", "ml", "mr"].map((key) => [key, spacingHandler])
);
const paddingUtilities = Object.fromEntries(
    ["p", "px", "py", "pt", "pb", "pl", "pr"].map((key) => [key, spacingHandler])
);
const gapUtilities = Object.fromEntries(
    ["gap", "gap-x", "gap-y"].map((key) => [key, spacingHandler])
);
const sizeUtilities = Object.fromEntries(
    ["w", "h", "max-w", "min-w", "max-h", "min-h"].map((key) => [key, sizeHandler])
);

const utilities = {
    ...marginUtilities,
    ...paddingUtilities,
    ...sizeUtilities,
    ...gapUtilities,
    bg: bgHandler,
    text: textHandler,
    z: (parts) => ({ "z-index": parts[1] }),
    w: sizeHandler,
    h: sizeHandler,

    top: positionHandler,
    bottom: positionHandler,
    left: positionHandler,
    right: positionHandler,
    justify: flexHandler,
    items: flexHandler,

    border: borderHandler,
    rounded: borderHandler,

    font: fontHandler,

    "grid-cols": gridHandler,
    "grid-rows": gridHandler,
    "col-span": gridHandler,
    "row-span": gridHandler,

    scale: transformHandler,
    "scale-x": transformHandler,
    "scale-y": transformHandler,
};

function getPrefix(parts) {
    // return longest match first (e.g. "max-w" and not "max" for something like "max-w-96")
    for (let i = parts.length; i > 0; i--) {
        const candidate = parts.slice(0, i).join("-");
        if (utilities[candidate]) return candidate;
    }
    return null;
}

function parseClass(className) {
    const parts = className.split("-");
    let breakpoint = "base";
    if (breakpoints[parts[0]]) {
        breakpoint = parts[0];
        parts.shift();
        className = parts.join("-");
    }

    if (staticUtilities[className]) return { style: staticUtilities[className], breakpoint };

    const prefix = getPrefix(parts);
    if (!prefix) return null;

    const style = utilities[prefix](parts);
    if (!style) return null;

    return { style, breakpoint };
}
