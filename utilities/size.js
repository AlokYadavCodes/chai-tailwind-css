const sizeScale = {
  // spacing scale
  "0": "0px",
  "px": "1px",

  "0.5": "2px",
  "1": "4px",
  "1.5": "6px",
  "2": "8px",
  "2.5": "10px",
  "3": "12px",
  "3.5": "14px",
  "4": "16px",

  "5": "20px",
  "6": "24px",
  "7": "28px",
  "8": "32px",
  "9": "36px",
  "10": "40px",
  "11": "44px",
  "12": "48px",

  "14": "56px",
  "16": "64px",
  "20": "80px",
  "24": "96px",
  "28": "112px",
  "32": "128px",
  "36": "144px",
  "40": "160px",

  "44": "176px",
  "48": "192px",
  "52": "208px",
  "56": "224px",
  "60": "240px",
  "64": "256px",
  "72": "288px",
  "80": "320px",
  "96": "384px",

  // keywords
  "auto": "auto",
  "full": "100%",
  "screen": "100vw",
  "min": "min-content",
  "max": "max-content",
  "fit": "fit-content"
};

const sizePropertyMap = {
    "w": "width",
    "h": "height",
    "max-w": "max-width",
    "min-w": "min-width",
    "max-h": "max-height",
    "min-h": "min-height",
}

export function sizeHandler(parts) {
    let property, value;
    if (parts.length === 3) {
        property = parts.slice(0, 2).join("-");
        value = parts[2];
    } else {
        property = parts[0];
        value = parts[1];
    }

    if (!sizePropertyMap[property]) return null;

    console.log("sizeHandler", { property, value });
    return {
        [sizePropertyMap[property]]: sizeScale[value]
    }
}