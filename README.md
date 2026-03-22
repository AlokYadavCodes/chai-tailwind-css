# chai-tailwindcss ☕

A lightweight utility-first CSS engine for plain HTML. Write `chai-*` classes and get inline styles applied automatically — no build step, no config, just drop in a script tag.

## Quick Start

```html
<script src="https://unpkg.com/chai-tailwindcss/dist/chai.js"></script>
```

```html
<div class="chai-bg-indigo chai-text-white chai-p-4 chai-rounded-xl chai-text-2xl chai-font-bold">
    Hello, ChaiCSS!
</div>
```

That's it. No configuration needed.

## How it works

On page load, the script scans the DOM for elements with `chai-*` classes, parses the class names, and applies the corresponding CSS as inline styles. It also watches for dynamically added elements and class changes via `MutationObserver`.

## Utilities

### Spacing
| Class | CSS |
|---|---|
| `chai-p-{0–5}` | `padding` |
| `chai-px-{0–5}` | `padding-left` + `padding-right` |
| `chai-py-{0–5}` | `padding-top` + `padding-bottom` |
| `chai-pt/pb/pl/pr-{0–5}` | directional padding |
| `chai-m-{0–5}` | `margin` |
| `chai-mx/my/mt/mb/ml/mr-{0–5}` | directional margin |
| `chai-gap-{0–5}` | `gap` |
| `chai-gap-x-{0–5}` | `column-gap` |
| `chai-gap-y-{0–5}` | `row-gap` |

Scale: `0=0px` `1=4px` `2=8px` `3=12px` `4=16px` `5=20px`

### Colors
Available colors: `red` `green` `blue` `black` `white` `gray` `slate` `neutral` `zinc` `indigo` `violet` `sky` `emerald` `rose` `amber` `orange`

| Class | CSS |
|---|---|
| `chai-bg-{color}` | `background-color` |
| `chai-text-{color}` | `color` |
| `chai-border-{color}` | `border-color` |

### Typography
| Class | CSS |
|---|---|
| `chai-text-{xs\|sm\|base\|lg\|xl\|2xl\|3xl\|4xl\|5xl\|6xl}` | `font-size` |
| `chai-text-{left\|center\|right\|justify}` | `text-align` |
| `chai-font-{thin\|light\|normal\|medium\|semibold\|bold\|extrabold\|black}` | `font-weight` |
| `chai-font-{sans\|serif\|mono}` | `font-family` |

### Borders & Radius
| Class | CSS |
|---|---|
| `chai-border` | 1px solid border |
| `chai-border-{0\|2\|4\|8}` | border width |
| `chai-border-{t\|b\|l\|r\|x\|y}-{width}` | directional border |
| `chai-rounded` | `border-radius: 4px` |
| `chai-rounded-{sm\|md\|lg\|xl\|2xl\|3xl\|full}` | border radius |

### Layout
| Class | CSS |
|---|---|
| `chai-flex` | `display: flex` |
| `chai-grid` | `display: grid` |
| `chai-hidden` | `display: none` |
| `chai-block` | `display: block` |
| `chai-flex-col` / `chai-flex-row` | flex direction |
| `chai-justify-{start\|end\|center\|between\|around\|evenly}` | `justify-content` |
| `chai-items-{start\|end\|center\|stretch\|baseline}` | `align-items` |
| `chai-grid-cols-{1–12}` | `grid-template-columns` |
| `chai-col-span-{1–12}` | `grid-column` span |
| `chai-w-{size}` / `chai-h-{size}` | width / height |
| `chai-max-w-{size}` / `chai-min-h-{size}` | min/max sizing |

### Transform
| Class | CSS |
|---|---|
| `chai-scale-{50\|75\|90\|95\|100\|105\|110\|125\|150}` | `transform: scale()` |
| `chai-scale-x-{value}` | `transform: scaleX()` |
| `chai-scale-y-{value}` | `transform: scaleY()` |

### Position & Z-index
| Class | CSS |
|---|---|
| `chai-relative` / `chai-absolute` / `chai-fixed` / `chai-sticky` | `position` |
| `chai-z-{n}` | `z-index` |

## Responsive Breakpoints

Prefix any class with `chai-sm-`, `chai-md-`, or `chai-lg-` for mobile-first responsive styles:

```html
<!-- 1 col on mobile → 2 on tablet → 3 on desktop -->
<div class="chai-grid chai-grid-cols-1 chai-sm-grid-cols-2 chai-lg-grid-cols-3">
    ...
</div>
```

| Prefix | Min-width |
|---|---|
| `chai-sm-` | 640px |
| `chai-md-` | 768px |
| `chai-lg-` | 1024px |

## License

ISC
