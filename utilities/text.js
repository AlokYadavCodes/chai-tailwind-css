import { fontSizeScale } from "../config/fontSizeScale.js";
import { textAlignMap } from "../config/textAlignMap.js";
import { colorMap } from "../config/colorMap.js";

export function textHandler (parts) {
    const resolvers = [
        {source: fontSizeScale, property: "font-size"},
        {source: textAlignMap, property: "text-align"},
        {source: colorMap, property: "color"}
    ]
    
    const value = parts[1];
    for (const r of resolvers){
        console.log(r.property);
        
        if(r.source[value]) return {
            [r.property] : r.source[value]
        }
    }
}
