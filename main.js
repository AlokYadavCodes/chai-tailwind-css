import { marginHandler, paddingHandler } from "./utilities/spacing.js";
import { bgHandler } from "./utilities/bg.js";
import { textHandler } from "./utilities/text.js";

document.addEventListener("DOMContentLoaded", init);

function init() {
    document.body.querySelectorAll("[class^='chai-'], [class*=' chai-']").forEach(processElement)
}

function processElement(el) {
    const styles = {
        "backgroundColor": "pink"
    };

    for(const className of el.classList){
        if(!className.startsWith("chai-")) continue;

        const style = parseClass(className);
        Object.assign(styles, style);
    }

    Object.assign(el.style, styles);
}

const utilities = {
    m: marginHandler,
    p: paddingHandler,
    bg: bgHandler,
    text: textHandler,
}

function parseClass(className) {
    const parts = className.split("-");
    const prefix = parts[1];
    if(!utilities[prefix]) return null;

    const handler = utilities[prefix];
    const style = handler(parts[2])
    return style;
}
