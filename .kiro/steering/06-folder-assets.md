---
inclusion: manual
---

# Folder 6: assets/ (113 Files) — Complete File-by-File

> Memory-set file 7 of 10. Manual inclusion.

## BREAKDOWN

| Type | Count | Purpose |
|---|---|---|
| JavaScript (.js) | 75 | Behavior + logic |
| CSS (.css) | 3 | Styling (base.css is main) |
| SVG icons | 33 | Visual icons |
| JSON (.json) | 1 | jsconfig (dev) |
| TypeScript (.d.ts) | 1 | Type definitions (dev) |

## CORE JAVASCRIPT (13)

| # | File | Role | Connections |
|---|---|---|---|
| 1 | `component.js` | Base web component class — ALL custom elements extend | ALL JS components |
| 2 | `utilities.js` | Utility functions — header height, scroll, helpers | ALL JS files |
| 3 | `events.js` | Custom event system — component communication | ALL interactive |
| 4 | `performance.js` | Intersection observer, lazy loading | Lazy sections |
| 5 | `focus.js` | Focus management — keyboard nav, modal trap | Modals, drawers |
| 6 | `morph.js` | DOM morphing — smooth HTML updates without reload | Cart, facets |
| 7 | `scrolling.js` | Scroll utilities — direction detect, smooth scroll | Sticky header, animations |
| 8 | `section-renderer.js` | Section AJAX re-render | Facets, cart, predictive |
| 9 | `section-hydration.js` | Lazy section initialization | Below-fold sections |
| 10 | `money-formatting.js` | Price formatting — $19.99 vs €19,99 | Price components |
| 11 | `view-transitions.js` | Page transition animations | layout/theme.liquid |
| 12 | `popover-polyfill.js` | Popover API polyfill (older browsers) | Popovers, tooltips |
| 13 | `theme-editor.js` | Customizer support — section/block select | Design mode only |

## HEADER JS (5)

| # | File | Role |
|---|---|---|
| 14 | `header.js` | Main header — sticky, transparent, height calc |
| 15 | `header-menu.js` | Desktop menu — hover open, mega menu |
| 16 | `header-drawer.js` | Mobile drawer slide in/out |
| 17 | `header-actions.js` | Cart/account/search button behavior |
| 18 | `announcement-bar.js` | Auto-rotate, arrows, dismiss |

## PRODUCT JS (15)

| # | File | Role |
|---|---|---|
| 19 | `product-form.js` | **CRITICAL** — variant select, ATC, AJAX |
| 20 | `product-card.js` | Hover image swap, quick add trigger |
| 21 | `product-price.js` | Price update on variant change |
| 22 | `product-inventory.js` | Inventory level update on variant change |
| 23 | `product-sku.js` | SKU update on variant change |
| 24 | `product-title-truncation.js` | Long titles truncate "..." |
| 25 | `product-custom-property.js` | Personalization (engraving) |
| 26 | `product-recommendations.js` | AJAX recommendations load |
| 27 | `product-hotspot.js` | Hotspot click → product popup |
| 28 | `variant-picker.js` | **CRITICAL** — variant picker availability + linking |
| 29 | `sticky-add-to-cart.js` | Scroll → sticky bottom ATC bar |
| 30 | `fly-to-cart.js` | ATC animation — image flies to cart icon |
| 31 | `price-per-item.js` | Quantity × price calculation |
| 32 | `volume-pricing.js` | Bulk pricing tiers display |
| 33 | `volume-pricing-info.js` | Volume pricing tooltip |


## CART JS (6)

| # | File | Role |
|---|---|---|
| 34 | `cart-drawer.js` | Side slide-in cart panel |
| 35 | `cart-icon.js` | Cart icon badge update |
| 36 | `cart-note.js` | Order notes field |
| 37 | `cart-discount.js` | Discount code apply in cart |
| 38 | `component-cart-items.js` | **CRITICAL** — qty change, remove items |
| 39 | `component-cart-quantity-selector.js` | Cart-specific qty +/- |

## MEDIA JS (5)

| # | File | Role |
|---|---|---|
| 40 | `media.js` | Video play/pause, model3d viewer |
| 41 | `media-gallery.js` | Product gallery — thumbnails, zoom trigger |
| 42 | `video-background.js` | Background video autoplay (muted, loop) |
| 43 | `drag-zoom-wrapper.js` | Image zoom drag-to-pan |
| 44 | `zoom-dialog.js` | Full-screen image zoom modal |

## UI COMPONENT JS (14)

| # | File | Role |
|---|---|---|
| 45 | `dialog.js` | Modal/dialog open/close + focus trap |
| 46 | `floating-panel.js` | Tooltip/dropdown positioning |
| 47 | `anchored-popover.js` | Element-anchored popups |
| 48 | `slideshow.js` | **SHARED** — slideshow + carousel engine |
| 49 | `layered-slideshow.js` | Parallax/depth slideshow |
| 50 | `marquee.js` | Continuous scroll animation |
| 51 | `jumbo-text.js` | Scroll-triggered jumbo text |
| 52 | `comparison-slider.js` | Before/After drag handle |
| 53 | `show-more.js` | "Show More" expand truncated content |
| 54 | `overflow-list.js` | Items overflow → "More +" |
| 55 | `accordion-custom.js` | Accordion expand/collapse |
| 56 | `auto-close-details.js` | Auto-close other accordions |
| 57 | `copy-to-clipboard.js` | Copy text to clipboard |
| 58 | `rte-formatter.js` | Rich Text Editor content formatting |

## SEARCH JS (3)

| # | File | Role |
|---|---|---|
| 59 | `predictive-search.js` | Live search, debounced API calls |
| 60 | `search-page-input.js` | Search page input field |
| 61 | `results-list.js` | Search results render + paginate |

## COLLECTION JS (5)

| # | File | Role |
|---|---|---|
| 62 | `facets.js` | **CRITICAL** — AJAX filtering without reload |
| 63 | `paginated-list.js` | Infinite scroll / Load More / Pagination |
| 64 | `paginated-list-aspect-ratio.js` | Image aspect ratio consistency |
| 65 | `collection-links.js` | Horizontal scroll, active state |
| 66 | `blog-posts-list.js` | Blog pagination |

## QUICK ADD JS (2)

| # | File | Role |
|---|---|---|
| 67 | `quick-add.js` | Quick Add system (modal + AJAX) |
| 68 | `quick-order-list.js` | B2B bulk order list |

## UTILITY JS (6)

| # | File | Role |
|---|---|---|
| 69 | `localization.js` | Country/Language selector |
| 70 | `local-pickup.js` | Store pickup availability |
| 71 | `gift-card-recipient-form.js` | Gift form validation |
| 72 | `qr-code-generator.js` | QR code generation (gift card) |
| 73 | `qr-code-image.js` | QR canvas rendering |
| 74 | `recently-viewed-products.js` | Track viewed products (localStorage) |
| 75 | (Reserved) | Additional utility scripts |


## CSS FILES (3)

| # | File | Role |
|---|---|---|
| 76 | `base.css` | **MAIN STYLESHEET** — reset, grid, typography, buttons, forms, components, responsive — POORI THEME ka soul |
| 77 | `overflow-list.css` | Overflow list component CSS |
| 78 | `template-giftcard.css` | Gift card page special CSS |

## SVG ICONS (33)

| # | File | Where Used |
|---|---|---|
| 79 | `icon-account.svg` | Header account button |
| 80 | `icon-add-to-cart.svg` | Quick add buttons |
| 81 | `icon-arrow.svg` | Buttons, links |
| 82 | `icon-available.svg` | "In stock" green tick |
| 83 | `icon-caret.svg` | Dropdowns, accordions |
| 84 | `icon-cart.svg` | Header cart button |
| 85 | `icon-checkmark.svg` | Success states, selected items |
| 86 | `icon-checkmark-burst.svg` | ATC success celebration |
| 87 | `icon-chevron-left.svg` | Slideshow prev button |
| 88 | `icon-chevron-right.svg` | Slideshow next button |
| 89 | `icon-close.svg` | Modals, drawers close |
| 90 | `icon-delete.svg` | Cart item remove |
| 91 | `icon-discount.svg` | Cart discount section |
| 92 | `icon-double-chevron.svg` | Pagination last page |
| 93 | `icon-error.svg` | Form errors, alerts |
| 94 | `icon-external.svg` | External links indicator |
| 95 | `icon-filter.svg` | Filter button |
| 96 | `icon-filters-close.svg` | Filter remove |
| 97 | `icon-grid-default.svg` | Grid view toggle |
| 98 | `icon-grid-dense.svg` | Dense grid view toggle |
| 99 | `icon-info.svg` | Tooltips, help text |
| 100 | `icon-inventory.svg` | Stock indicator |
| 101 | `icon-menu.svg` | Mobile hamburger |
| 102 | `icon-minus.svg` | Quantity decrease |
| 103 | `icon-one-col-mobile.svg` | Mobile single column toggle |
| 104 | `icon-orders.svg` | Customer orders |
| 105 | `icon-pause.svg` | Video/slideshow pause |
| 106 | `icon-play.svg` | Video/slideshow play |
| 107 | `icon-plus.svg` | Quantity increase, accordion expand |
| 108 | `icon-reset.svg` | Filter reset |
| 109 | `icon-search.svg` | Header search button |
| 110 | `icon-shopify.svg` | "Powered by Shopify" |
| 111 | `icon-unavailable.svg` | Sold out indicator |

## DEV CONFIG FILES (2)

| # | File | Role |
|---|---|---|
| 112 | `jsconfig.json` | TS path aliases (@theme/*) for IDE autocomplete |
| 113 | `global.d.ts` | TypeScript types — Shopify/Theme globals |

## IMPORT MAP (in scripts.liquid)

```javascript
{
  "imports": {
    "@theme/component":   "{{ 'component.js' | asset_url }}",
    "@theme/utilities":   "{{ 'utilities.js' | asset_url }}",
    "@theme/events":      "{{ 'events.js' | asset_url }}",
    "@theme/morph":       "{{ 'morph.js' | asset_url }}",
    "@theme/scrolling":   "{{ 'scrolling.js' | asset_url }}",
    "@theme/dialog":      "{{ 'dialog.js' | asset_url }}",
    // ... etc.
  }
}
```

Files import each other by name, not full URL.
