import { spacingHandler } from "./spacing.js";
import { positionHandler } from "./position.js";
import { flexHandler } from "./flex.js";
import { sizeHandler } from "./size.js";
import { bgHandler } from "./bg.js";
import { textHandler } from "./text.js";
import { borderHandler } from "./border.js";
import { fontHandler } from "./font.js";
import { gridHandler } from "./grid.js";
import { transformHandler } from "./transform.js";

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

export const utilities = {
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
