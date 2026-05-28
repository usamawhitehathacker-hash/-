---
inclusion: always
---

# Horizon Theme Architecture (8 Folders, 419 Files)

> Memory-set file 2 of 10. Always included. The complete file map and rendering flow that every Shopify decision depends on.

## VERSION INFO

- Theme: **Horizon** (by Shopify)
- Version: **3.5.1**
- Architecture: **Shopify 2.0** (JSON templates + section groups + blocks folder)

## FOLDER STRUCTURE (TOTAL: 419 files)

```
horizon_theme/
├── layout/        (2)     ← Page wrappers
├── templates/     (13)    ← Page definitions
├── sections/      (42)    ← Major visual components
├── blocks/        (91)    ← Component parts (drag & drop)
├── snippets/      (98)    ← Reusable code pieces
├── assets/        (113)   ← CSS (3) + JS (75) + SVG (33) + JSON (1) + TS (1)
├── config/        (2)     ← settings_schema.json + settings_data.json
└── locales/       (51)    ← Translations (25+ langs × 2 file types)
```

## FOLDER ROLE TABLE (Ghar ki analogy)

| Folder | Role | Misaal | Files |
|---|---|---|---|
| `layout/` | Ghar ka dhanca | Walls, roof, foundation | 2 |
| `templates/` | Kamre ka plan | Living room layout | 13 |
| `sections/` | Kamre ka saman | Sofa, TV, table | 42 |
| `blocks/` | Saman ke parts | Cushion, drawer handle | 91 |
| `snippets/` | Choti reusable cheezein | Cup, remote | 98 |
| `assets/` | Rang + bijli | Paint + switches | 113 |
| `config/` | Settings ka menu | Customizer options | 2 |
| `locales/` | Translation book | Language files | 51 |

## RENDERING FLOW (sacred order — never break)

```
Browser request
    ↓
layout/theme.liquid (HAR page yahan se guzarta)
    ↓
templates/[page].json (konsa page hai?)
    ↓
sections/[section].liquid (sections render)
    ↓
blocks/[block].liquid (block parts render)
    ↓
snippets/[helper].liquid (reusable pieces)
    ↓
assets/ (CSS + JS load)
    ↕ config/settings_data.json (everywhere — colors, fonts, settings)
    ↕ locales/en.default.json (everywhere — translations)
```


## HOME PAGE COMPLETE FLOW (example)

```
User: yourstore.com
   ↓
Shopify → layout/theme.liquid load
   ↓
<head>:
   ├── snippets/meta-tags.liquid → SEO tags
   ├── snippets/stylesheets.liquid → assets/base.css + overflow-list.css
   ├── snippets/fonts.liquid → Google/Shopify fonts
   ├── snippets/scripts.liquid → Import map + ALL assets/*.js
   ├── snippets/theme-styles-variables.liquid → CSS variables (config/settings_data.json)
   ├── snippets/color-schemes.liquid → 6 color schemes CSS
   └── {{ content_for_header }} → Shopify system scripts
   ↓
<body>:
   ├── {% sections 'header-group' %}
   │     └── sections/header-group.json
   │         ├── sections/custom.liquid (announcement bar)
   │         │   └── blocks/_announcement.liquid × N
   │         ├── sections/header-announcements.liquid
   │         └── sections/header.liquid
   │             ├── blocks/_header-logo.liquid
   │             ├── blocks/_header-menu.liquid
   │             ├── snippets/header-actions.liquid
   │             │   └── snippets/cart-bubble.liquid
   │             ├── snippets/header-drawer.liquid (mobile)
   │             ├── snippets/mega-menu-list.liquid
   │             └── assets/header.js + header-menu.js + header-drawer.js
   │
   ├── <main>{{ content_for_layout }}</main>
   │     └── templates/index.json
   │         ├── sections/hero.liquid
   │         │   ├── blocks/text.liquid
   │         │   ├── blocks/button.liquid
   │         │   └── snippets/background-media.liquid
   │         └── sections/product-list.liquid
   │             ├── blocks/_product-list-content.liquid
   │             └── blocks/_product-card.liquid × 8
   │                 └── snippets/product-card.liquid
   │
   ├── {% sections 'footer-group' %}
   │     ├── sections/footer.liquid
   │     └── sections/footer-utilities.liquid
   │
   ├── snippets/search-modal.liquid (hidden until triggered)
   └── snippets/quick-add-modal.liquid (hidden until triggered)
```

## HORIZON-SPECIFIC ARCHITECTURE FEATURES

### 1. JSON Templates (Shopify 2.0)
Old themes used `templates/index.liquid` with hardcoded sections.
Horizon uses `templates/index.json` — merchant drag/drop sections.

### 2. Section Groups
- `sections/header-group.json` — multiple header sections grouped
- `sections/footer-group.json` — multiple footer sections grouped
Header/footer changes apply to ALL pages automatically.

### 3. Separate `blocks/` folder
Old themes: blocks defined inside section files (800+ line files).
Horizon: blocks in their own files — clean, modular, reusable.

### 4. Underscore (`_`) prefix convention
- `_heading.liquid` = **PRIVATE** block (only specific section uses)
- `heading.liquid` = **PUBLIC** block (any section can use, merchant can add)

### 5. Import Maps (modern JS)
```html
<script type="importmap">
{
  "imports": {
    "@theme/component": "{{ 'component.js' | asset_url }}",
    "@theme/utilities": "{{ 'utilities.js' | asset_url }}",
    "@theme/dialog":    "{{ 'dialog.js' | asset_url }}"
  }
}
</script>
```
Defined in `snippets/scripts.liquid`. Files import each other by name.

### 6. Web Components style
Horizon uses custom HTML elements:
- `<header-component>`, `<overflow-list>`, `<predictive-search>`
All extend base `Component` class from `assets/component.js`.

### 7. CSS Custom Properties System
`snippets/theme-styles-variables.liquid` generates:
- `--font-body--family`, `--font-heading--family`
- `--color-foreground`, `--color-background`
All powered by `config/settings_data.json`.

### 8. Deferred Loading
- Images: `loading="lazy"` (except above-fold)
- JS: `type="module"` + `section-hydration.js`
- Page speed optimized by default


## RIPPLE EFFECT RULES (changes ka impact)

```
Higher layer change → wider impact
─────────────────────────────────────
layout/theme.liquid change         → ENTIRE site affected
sections/header-group.json change  → header on ALL pages
section change                     → all pages using that section
block change                       → only that block's instances
snippet change                     → EVERYWHERE that snippet is rendered
asset change                       → wherever that asset is loaded
```

## CRITICAL FILES (NEVER delete or break)

```
SEVERITY 10/10 (entire store dies):
├── layout/theme.liquid           → No page renders
├── snippets/image.liquid          → ALL images gone
├── snippets/button.liquid         → ALL buttons broken
├── sections/_blocks.liquid        → ALL blocks fail
├── assets/component.js            → ALL JS components dead
└── assets/product-form.js         → Add to Cart dead = ZERO sales

SEVERITY 9/10 (major features break):
├── assets/variant-picker.js       → wrong variants in cart
├── assets/header.js               → navigation dead
├── assets/component-cart-items.js → cart management dead
├── assets/facets.js               → collection filters broken
├── snippets/product-card.liquid   → product grids broken
└── config/settings_schema.json    → Customizer crashes

SEVERITY 7/10 (sections break):
├── assets/predictive-search.js    → live search dead
├── assets/media-gallery.js        → product images broken
├── assets/header-drawer.js        → mobile menu dead
└── assets/slideshow.js            → all slideshows + carousels stop
```

## SHARED FILES (change once, affects many)

```
snippets/product-card.liquid (used by 6+ sections):
  ├── sections/product-list.liquid
  ├── sections/product-recommendations.liquid
  ├── sections/search-results.liquid
  ├── sections/main-collection.liquid
  ├── sections/section-rendering-product-card.liquid
  └── blocks/product-recommendations.liquid

snippets/button.liquid: 10+ sections
snippets/image.liquid: 15+ sections (and ALL product cards)
snippets/price.liquid: product page + every product card
assets/slideshow.js: slideshow + carousel sections (shared engine)
```

**Before modifying a shared file**: search ALL usages → test ALL contexts.

## CONNECTION QUICK MAP

| Want to change... | Touch these files |
|---|---|
| Logo | `blocks/_header-logo.liquid`, `config/settings_data.json` |
| Cart icon count | `snippets/cart-bubble.liquid`, `assets/cart-icon.js` |
| Add to Cart button | `blocks/buy-buttons.liquid`, `snippets/buy-buttons-styles.liquid`, `assets/product-form.js` |
| Variant picker | `blocks/variant-picker.liquid`, `snippets/variant-main-picker.liquid`, `assets/variant-picker.js` |
| Product price | `blocks/price.liquid`, `snippets/price.liquid`, `snippets/format-price.liquid`, `assets/product-price.js` |
| Collection filters | `blocks/filters.liquid`, `snippets/list-filter.liquid`, `snippets/price-filter.liquid`, `assets/facets.js` |
| Mega menu | `snippets/mega-menu-list.liquid`, `blocks/_header-menu.liquid`, `assets/header-menu.js` |
| Color schemes | `config/settings_schema.json`, `config/settings_data.json`, `snippets/color-schemes.liquid` |
| Fonts | `config/settings_schema.json`, `config/settings_data.json`, `snippets/fonts.liquid`, `snippets/theme-styles-variables.liquid` |
| Translations | `locales/en.default.json` (and other languages) |
