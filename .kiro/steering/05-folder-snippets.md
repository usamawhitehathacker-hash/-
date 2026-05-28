---
inclusion: manual
---

# Folder 5: snippets/ (102 Files) — Complete File-by-File

> Memory-set file 6 of 10. Manual inclusion.

## SNIPPET CONCEPT

```
Snippet = reusable code piece (function jaisi)
Called by: {% render 'snippet-name', param1: value, param2: value %}
SANDBOXED: bahar ke variables snippet mein accessible nahi
EXPLICIT: jo data chahiye, woh pass karo
```

**WARNING**: Shared snippets ko modify karne se **multiple sections** affect hote hain. Pehle search karo kahan-kahan use ho raha.

## CATEGORIES

| Category | Count |
|---|---|
| Global Setup | 7 |
| Header | 6 |
| Product | 24 |
| Cart | 4 |
| Collection | 4 |
| Search | 6 |
| UI Components | 10 |
| Slideshow | 6 |
| Layout/Spacing | 12 |
| Filter/Sort | 5 |
| Resource/List | 6 |
| Utility | 8 |
| Image Utility | 4 |

## GLOBAL SETUP SNIPPETS (7) — Theme Foundation

| # | File | Role | Connections |
|---|---|---|---|
| 1 | `stylesheets.liquid` | CSS load (base.css, overflow-list.css) | assets/base.css, assets/overflow-list.css |
| 2 | `scripts.liquid` | JS import map + module loading | ALL assets/*.js |
| 3 | `fonts.liquid` | Google/Shopify fonts load | config/settings_data.json |
| 4 | `meta-tags.liquid` | SEO meta — title, description, og:image | Page/product/collection data |
| 5 | `theme-styles-variables.liquid` | CSS custom properties generator | config/settings_data.json |
| 6 | `color-schemes.liquid` | 6 color schemes CSS generator | config/settings_data.json |
| 7 | `theme-editor.liquid` | Theme editor support (design mode only) | Only in Customizer |

## HEADER SNIPPETS (6)

| # | File | Role |
|---|---|---|
| 8 | `header-actions.liquid` | Right-side actions — cart, account, search |
| 9 | `header-drawer.liquid` | Mobile slide-in menu |
| 10 | `header-row.liquid` | Header layout row (top/bottom row split) |
| 11 | `mega-menu-list.liquid` | Mega menu dropdown content |
| 12 | `menu-font-styles.liquid` | Menu items typography CSS |
| 13 | `submenu-font-styles.liquid` | Submenu typography CSS |


## PRODUCT SNIPPETS (24)

| # | File | Role |
|---|---|---|
| 14 | `product-card.liquid` | **MOST USED** — product card template (6+ sections) |
| 15 | `product-grid.liquid` | Grid layout — columns, gaps, responsive |
| 16 | `product-media.liquid` | Single media item (image/video/3D) |
| 17 | `product-media-gallery-content.liquid` | Full gallery layout |
| 18 | `product-media-gallery-content-styles.liquid` | Gallery responsive CSS |
| 19 | `product-information-content.liquid` | Info panel content layout |
| 20 | `product-badges-styles.liquid` | Sale/Sold Out badges CSS |
| 21 | `price.liquid` | Price display (regular, sale, compare) |
| 22 | `format-price.liquid` | Currency formatting (cents → $19.99) |
| 23 | `add-to-cart-button.liquid` | ATC button HTML |
| 24 | `buy-buttons-styles.liquid` | Buy buttons CSS |
| 25 | `quantity-selector.liquid` | +/- quantity component |
| 26 | `variant-main-picker.liquid` | Main variant picker |
| 27 | `variant-swatches.liquid` | Color swatches |
| 28 | `swatch.liquid` | Individual swatch circle |
| 29 | `strikethrough-variant.liquid` | Sold-out variant strikethrough |
| 30 | `quick-add.liquid` | Quick Add to Cart on hover |
| 31 | `quick-add-modal.liquid` | Quick Add modal popup |
| 32 | `quick-add-styles.liquid` | Quick Add CSS |
| 33 | `quick-add-modal-styles.liquid` | Modal CSS |
| 34 | `tax-info.liquid` | Tax/VAT info text |
| 35 | `unit-price.liquid` | Per-unit price ($5/kg) |
| 36 | `volume-pricing-info.liquid` | Bulk pricing tooltip |
| 37 | `sku.liquid` | SKU display component |

## CART SNIPPETS (4)

| # | File | Role |
|---|---|---|
| 38 | `cart-bubble.liquid` | Cart icon count badge |
| 39 | `cart-items-component.liquid` | Cart items list component |
| 40 | `cart-products.liquid` | Cart products list render |
| 41 | `cart-summary.liquid` | Subtotal, shipping, checkout |

## COLLECTION SNIPPETS (4)

| # | File | Role |
|---|---|---|
| 42 | `collection-card.liquid` | Collection card template |
| 43 | `editorial-collection-grid.liquid` | Bento layout for collections |
| 44 | `editorial-product-grid.liquid` | Bento layout for products |
| 45 | `editorial-blog-grid.liquid` | Bento layout for blog posts |

## SEARCH SNIPPETS (6)

| # | File | Role |
|---|---|---|
| 46 | `search.liquid` | Search button/icon in header |
| 47 | `search-modal.liquid` | Full-screen search overlay |
| 48 | `predictive-search-styles.liquid` | Live search dropdown CSS |
| 49 | `predictive-search-products-list.liquid` | Product results in dropdown |
| 50 | `predictive-search-resource-carousel.liquid` | Articles/pages carousel |
| 51 | `predictive-search-empty-state.liquid` | "No results" with suggestions |


## UI COMPONENT SNIPPETS (10)

| # | File | Role |
|---|---|---|
| 52 | `button.liquid` | **MOST USED UI** — universal button rendering |
| 53 | `checkbox.liquid` | Custom styled checkbox |
| 54 | `icon.liquid` | SVG icon by name (centralized icon system) |
| 55 | `icon-or-image.liquid` | Built-in icon OR custom image |
| 56 | `image.liquid` | **CRITICAL** — responsive image with srcset, lazy load |
| 57 | `media.liquid` | Image/video/3D auto-detect renderer |
| 58 | `video.liquid` | Video embed (YouTube/Vimeo/Shopify) |
| 59 | `background-media.liquid` | Background image/video for sections |
| 60 | `overlay.liquid` | Color overlay for text readability |
| 61 | `link-featured-image.liquid` | Hover preview image in mega menu |

## SLIDESHOW SNIPPETS (6)

| # | File | Role |
|---|---|---|
| 62 | `slideshow.liquid` | Slideshow wrapper component |
| 63 | `slideshow-slide.liquid` | Individual slide render |
| 64 | `slideshow-controls.liquid` | Dots/counter navigation |
| 65 | `slideshow-arrows.liquid` | Left/Right arrow buttons |
| 66 | `slideshow-arrow.liquid` | Single arrow SVG button |
| 67 | `slideshow-styles.liquid` | Slideshow responsive CSS |

## LAYOUT/SPACING SNIPPETS (12)

| # | File | Role |
|---|---|---|
| 68 | `section.liquid` | Section wrapper component |
| 69 | `group.liquid` | Group/container flexbox wrapper |
| 70 | `divider.liquid` | Horizontal line render |
| 71 | `spacing-style.liquid` | Spacing CSS inline generator |
| 72 | `spacing-padding.liquid` | Padding-specific CSS |
| 73 | `gap-style.liquid` | Flex/grid gap CSS |
| 74 | `size-style.liquid` | Width/height inline CSS |
| 75 | `typography-style.liquid` | Font CSS (family, size, weight) |
| 76 | `layout-panel-style.liquid` | Product page two-panel CSS |
| 77 | `border-override.liquid` | Border style override |
| 78 | `bento-grid.liquid` | Bento box 12-item grid |
| 79 | `grid-density-controls.liquid` | Grid view toggle (default/dense) |

## FILTER/SORT SNIPPETS (5)

| # | File | Role |
|---|---|---|
| 80 | `list-filter.liquid` | Single filter group (checkboxes) |
| 81 | `price-filter.liquid` | Price range slider |
| 82 | `filter-remove-buttons.liquid` | Active filter remove badges |
| 83 | `sorting.liquid` | Sort dropdown |
| 84 | `pagination-controls.liquid` | Page navigation (1, 2, 3) |

## RESOURCE/LIST SNIPPETS (6)

| # | File | Role |
|---|---|---|
| 85 | `resource-list.liquid` | Generic list (grid/carousel/bento) |
| 86 | `resource-list-carousel.liquid` | Horizontal scroll carousel mode |
| 87 | `resource-card.liquid` | Generic card (product/collection/article) |
| 88 | `resource-image.liquid` | Resource featured image |
| 89 | `overflow-list.liquid` | Items overflow → "More +" |
| 90 | `card-gallery.liquid` | Product card hover image |

## UTILITY SNIPPETS (8)

| # | File | Role |
|---|---|---|
| 91 | `skip-to-content-link.liquid` | Accessibility skip link |
| 92 | `text.liquid` | Text render with typography |
| 93 | `jumbo-text.liquid` | Oversized animated text component |
| 94 | `accordion-custom-component.liquid` | Custom accordion HTML |
| 95 | `localization-form.liquid` | Country/Language selector |
| 96 | `password-layout-styles.liquid` | Password page CSS |
| 97 | `gift-card-recipient-form.liquid` | Gift card recipient form |
| 98 | `gift-card-recipient-form-styles.liquid` | Gift form CSS |

## IMAGE UTILITY SNIPPETS (4)

| # | File | Role |
|---|---|---|
| 99 | `util-autofill-img-size-attr.liquid` | Image sizes attribute auto-calc |
| 100 | `util-mega-menu-img-sizes-attr.liquid` | Mega menu images sizes |
| 101 | `util-product-grid-card-size.liquid` | Product grid card image size |
| 102 | `util-product-media-sizes-attr.liquid` | Product gallery image sizes |
