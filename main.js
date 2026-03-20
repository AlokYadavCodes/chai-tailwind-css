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

const spacingScale = {
    0: "0px",
    1: "4px",
    2: "8px",
    3: "12px",
    4: "16px",
    5: "20px",
};

const colorMap = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
}

const fontSizeScale = {
    xs: "12px",
    sm: "14px",
    base: "16px",
    lg: "18px",
    xl: "20px",
    "2xl": "24px",
    "3xl": "30px",
    "4xl": "36px",
    "5xl": "48px",
    "6xl": "60px",
};

const textAlignMap = {
    left: "left",
    center: "center",
    right: "right",
    justify: "justify",
}

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

function bgHandler (value) {
    return {
        "background-color": colorMap[value],
    }
}

function textHandler (value) {
    const resolvers = [
        {source: fontSizeScale, property: "font-size"},
        {source: textAlignMap, property: "text-align"}
    ]

    for (const r of resolvers){
        console.log(r.property);
        
        if(r.source[value]) return {
            [r.property] : r.source[value]
        }
    }

    // if(fontSizeScale[value]){
    //     return { "font-size": fontSizeScale[value] }
    // }

    // if(textAlignMap[value]){
    //     return { "text-align" : textAlignMap[value]}
    // }


}


function parseClass(className) {
    const parts = className.split("-");
    const prefix = parts[1];
    if(!utilities[prefix]) return null;

    const handler = utilities[prefix];
    const style = handler(parts[2])
    return style;
}
