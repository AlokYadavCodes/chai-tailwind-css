# ☕ Chai-TailwindCSS

A lightweight utility-first CSS engine for plain HTML. Write `chai-*` classes → get inline styles automatically. No build step, no config, just one script tag.

## Quick Start

```html
<script src="https://unpkg.com/chai-tailwindcss/dist/chai.js"></script>
```

```html
<div class="chai-bg-indigo chai-text-white chai-p-6 chai-rounded-xl chai-text-2xl chai-font-bold">
    Hello, ChaiCSS!
</div>
```

That's it. No configuration needed.

## How It Works

1. On page load, scans the DOM for elements with `chai-*` classes
2. Parses each class name and applies the corresponding CSS as **inline styles**
3. Watches for dynamically added elements and class changes via **MutationObserver**
4. Listens for viewport changes via **matchMedia** to apply responsive breakpoints

## Utilities

### Spacing

| Class                                                         | CSS                           |
| ------------------------------------------------------------- | ----------------------------- |
| `chai-p-{n}`                                                  | `padding`                     |
| `chai-px-{n}` / `chai-py-{n}`                                 | horizontal / vertical padding |
| `chai-pt-{n}` / `chai-pb-{n}` / `chai-pl-{n}` / `chai-pr-{n}` | directional padding           |
| `chai-m-{n}`                                                  | `margin`                      |
| `chai-mx-{n}` / `chai-my-{n}`                                 | horizontal / vertical margin  |
| `chai-mt-{n}` / `chai-mb-{n}` / `chai-ml-{n}` / `chai-mr-{n}` | directional margin            |
| `chai-gap-{n}`                                                | `gap`                         |
| `chai-gap-x-{n}` / `chai-gap-y-{n}`                           | `column-gap` / `row-gap`      |

**Scale:** `0=0px` `1=4px` `2=8px` `3=12px` `4=16px` `5=20px` `6=24px` `8=32px` `10=40px` `12=48px` `16=64px` `20=80px`

### Colors

23 colors available:

`red` `orange` `amber` `yellow` `lime` `green` `emerald` `teal` `cyan` `sky` `blue` `indigo` `violet` `purple` `fuchsia` `pink` `rose` `gray` `slate` `neutral` `zinc` `black` `white`

| Class                 | CSS                |
| --------------------- | ------------------ |
| `chai-bg-{color}`     | `background-color` |
| `chai-text-{color}`   | `color`            |
| `chai-border-{color}` | `border-color`     |

### Typography

| Class                                                                                   | CSS           |
| --------------------------------------------------------------------------------------- | ------------- |
| `chai-text-{xs\|sm\|base\|lg\|xl\|2xl\|3xl\|4xl\|5xl\|6xl}`                             | `font-size`   |
| `chai-text-{left\|center\|right\|justify}`                                              | `text-align`  |
| `chai-font-{thin\|extralight\|light\|normal\|medium\|semibold\|bold\|extrabold\|black}` | `font-weight` |
| `chai-font-{sans\|serif\|mono}`                                                         | `font-family` |

### Borders & Radius

| Class                                                 | CSS                                |
| ----------------------------------------------------- | ---------------------------------- |
| `chai-border`                                         | `border-width: 1px`                |
| `chai-border-{0\|2\|4\|8}`                            | border width                       |
| `chai-border-{t\|b\|l\|r}-{width}`                    | directional border width           |
| `chai-border-{x\|y}-{width}`                          | horizontal / vertical border width |
| `chai-border-{color}`                                 | `border-color`                     |
| `chai-border-{solid\|dashed\|dotted\|double\|none}`   | `border-style`                     |
| `chai-rounded`                                        | `border-radius: 4px`               |
| `chai-rounded-{none\|sm\|md\|lg\|xl\|2xl\|3xl\|full}` | border radius                      |

### Display

| Class               | CSS                     |
| ------------------- | ----------------------- |
| `chai-block`        | `display: block`        |
| `chai-inline-block` | `display: inline-block` |
| `chai-inline`       | `display: inline`       |
| `chai-flex`         | `display: flex`         |
| `chai-inline-flex`  | `display: inline-flex`  |
| `chai-grid`         | `display: grid`         |
| `chai-inline-grid`  | `display: inline-grid`  |
| `chai-hidden`       | `display: none`         |
| `chai-contents`     | `display: contents`     |
| `chai-list-item`    | `display: list-item`    |

### Flexbox

| Class                                                            | CSS                    |
| ---------------------------------------------------------------- | ---------------------- |
| `chai-flex-row` / `chai-flex-col`                                | `flex-direction`       |
| `chai-flex-row-reverse` / `chai-flex-col-reverse`                | reverse flex direction |
| `chai-flex-wrap` / `chai-flex-nowrap` / `chai-flex-wrap-reverse` | `flex-wrap`            |
| `chai-justify-{start\|end\|center\|between\|around\|evenly}`     | `justify-content`      |
| `chai-items-{start\|end\|center\|stretch\|baseline\|normal}`     | `align-items`          |

### Grid

| Class                   | CSS                     |
| ----------------------- | ----------------------- |
| `chai-grid-cols-{1–12}` | `grid-template-columns` |
| `chai-grid-rows-{1–12}` | `grid-template-rows`    |
| `chai-col-span-{1–12}`  | `grid-column` span      |
| `chai-row-span-{1–12}`  | `grid-row` span         |

### Sizing

| Class                                        | CSS            |
| -------------------------------------------- | -------------- |
| `chai-w-{size}` / `chai-h-{size}`            | width / height |
| `chai-w-{auto\|full\|screen\|min\|max\|fit}` | keyword widths |
| `chai-max-w-{size}` / `chai-min-w-{size}`    | max/min width  |
| `chai-max-h-{size}` / `chai-min-h-{size}`    | max/min height |
| `chai-z-{n}`                                 | `z-index`      |

### Position

| Class                                                                            | CSS              |
| -------------------------------------------------------------------------------- | ---------------- |
| `chai-static` / `chai-relative` / `chai-absolute` / `chai-fixed` / `chai-sticky` | `position`       |
| `chai-top-{n}` / `chai-bottom-{n}` / `chai-left-{n}` / `chai-right-{n}`          | position offsets |

### Transforms

| Class                                                  | CSS                                |
| ------------------------------------------------------ | ---------------------------------- |
| `chai-scale-{50\|75\|90\|95\|100\|105\|110\|125\|150}` | `transform: scale()`               |
| `chai-scale-x-{value}` / `chai-scale-y-{value}`        | `transform: scaleX()` / `scaleY()` |

## Responsive Breakpoints

Prefix any class with `chai-sm-`, `chai-md-`, or `chai-lg-` for mobile-first responsive styles:

```html
<!-- 1 col on mobile → 2 on tablet → 4 on desktop -->
<div class="chai-grid chai-grid-cols-1 chai-md-grid-cols-2 chai-lg-grid-cols-4">...</div>

<!-- Hidden on mobile, visible on md+ -->
<div class="chai-hidden chai-md-block">Only visible on tablets and above</div>
```

| Prefix     | Min-width |
| ---------- | --------- |
| `chai-sm-` | 640px     |
| `chai-md-` | 768px     |
| `chai-lg-` | 1024px    |

## Architecture

```
src/
├── main.js              # Core engine: DOM scanning, MutationObserver, matchMedia
├── config/
│   ├── breakpoints.js   # sm/md/lg breakpoint values
│   ├── colorMap.js      # 23 named colors
│   ├── spacingScale.js  # 0–20 spacing values
│   ├── fontSizeScale.js # xs–6xl font sizes
│   ├── sizeScale.js     # Numeric + keyword sizes
│   ├── textAlignMap.js  # left/center/right/justify
│   └── static.js        # Static utilities (display, position, flex direction)
└── utilities/
    ├── registry.js      # Maps class prefixes → handler functions
    ├── spacing.js       # p, m, gap handlers
    ├── text.js          # text-{color|size|align}
    ├── font.js          # font-{weight|family}
    ├── bg.js            # bg-{color}
    ├── border.js        # border-{width|color|style|radius}
    ├── size.js          # w, h, max-w, min-h, etc.
    ├── flex.js          # justify, items
    ├── grid.js          # grid-cols, grid-rows, col-span, row-span
    ├── position.js      # top, bottom, left, right
    └── transform.js     # scale, scale-x, scale-y
```

## Development

```bash
npm install
npm run build     # Bundle with esbuild → dist/chai.js
npm run format    # Format with Prettier
```

## License

ISC
