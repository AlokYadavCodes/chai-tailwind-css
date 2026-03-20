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
}

const spacingScale = {
    0: "0px",
    1: "4px",
    2: "8px",
    3: "12px",
    4: "16px",
    5: "20px",
};

function marginHandler (value){
    return {
        "margin": spacingScale[value],
    }
}

function paddingHandler (value){
    return {
        "padding": spacingScale[value],
    }
}



function parseClass(className) {
    const parts = className.split("-");
    const prefix = parts[1];

    const handler = utilities[prefix];
    const style = handler(parts[2])
    return style;
}
