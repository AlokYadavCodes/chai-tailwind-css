import { breakpoints } from "./config/breakpoints.js";
import { staticUtilities } from "./config/static.js";
import { utilities } from "./utilities/registry.js";

const allElements = () => document.body.querySelectorAll("[class^='chai-'], [class*=' chai-']");

document.addEventListener("DOMContentLoaded", init);

function init() {
    allElements().forEach(processElement);
    document.body.style.opacity = 1;

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

function getPrefix(parts) {
    // return longest match first (e.g. "max-w" and not "max" for something like "max-w-96")
    for (let i = parts.length; i > 0; i--) {
        const candidate = parts.slice(0, i).join("-");
        if (utilities[candidate]) return candidate;
    }
    return null;
}
