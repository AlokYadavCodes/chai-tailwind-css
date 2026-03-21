const fontWeightScale = {
    "thin": "100",
    "extralight": "200",
    "light": "300",
    "normal": "400",
    "medium": "500",
    "semibold": "600",
    "bold": "700",
    "extrabold": "800",
    "black": "900"
}

const fontFamilyMap = {
    "sans": "system-ui, -apple-system, sans-serif",
    "serif": "ui-serif, Georgia, serif",
    "mono": "ui-monospace, SFMono-Regular, monospace"
}

export function fontHandler (parts) {
    const resolvers = [
        {source: fontWeightScale, property: "font-weight"},
        {source: fontFamilyMap, property: "font-family"},
    ]
    
    const value = parts[1];
    for (const r of resolvers){
        if(r.source[value]) return {
            [r.property] : r.source[value]
        }
    }
}