---
inclusion: manual
---

# Folder 3: sections/ (42 Files) — Complete File-by-File

> Memory-set file 4 of 10. Manual inclusion. Load when working on any section.

## CATEGORY OVERVIEW

| Category | Files | Purpose |
|---|---|---|
| Header | 3 | Top of website |
| Footer | 3 | Bottom of website |
| Hero/Banner | 3 | First impression |
| Product | 8 | Selling area |
| Collection | 4 | Browsing/categories |
| Content | 8 | Brand storytelling |
| Blog | 3 | Blog system |
| Search | 4 | Search functionality |
| Cart | 1 | Shopping cart |
| Page | 4 | Static pages + errors |
| Utility | 1 | Internal renderer |

## HEADER SECTIONS (3)

| # | File | Category | Kya Karta Hai | Kab Use | Connections |
|---|---|---|---|---|---|
| 1 | `header-group.json` | Section Group | Header sections ka group definition — order + settings | Har page pe (theme.liquid se) | sections/custom.liquid, sections/header-announcements.liquid, sections/header.liquid |
| 2 | `header.liquid` | Main Header | Logo, navigation menu, search, cart icon, account icon — poora header | Har page pe | blocks/_header-logo.liquid, blocks/_header-menu.liquid, snippets/header-actions.liquid, snippets/header-drawer.liquid, snippets/header-row.liquid, snippets/mega-menu-list.liquid, snippets/search.liquid, snippets/localization-form.liquid, assets/header.js, assets/header-menu.js, assets/header-drawer.js, assets/header-actions.js |
| 3 | `header-announcements.liquid` | Announcement Bar | Default announcement bar — marquee messages | Har page ke top | blocks/_announcement.liquid, assets/announcement-bar.js |

## FOOTER SECTIONS (3)

| # | File | Category | Kya Karta Hai | Connections |
|---|---|---|---|---|
| 4 | `footer-group.json` | Section Group | Footer sections ka group definition | sections/footer.liquid, sections/footer-utilities.liquid |
| 5 | `footer.liquid` | Main Footer | Email signup, links, menus, text columns | blocks/group.liquid, blocks/text.liquid, blocks/email-signup.liquid, blocks/menu.liquid, blocks/social-links.liquid |
| 6 | `footer-utilities.liquid` | Footer Utilities | Copyright, policy links, social icons, payment icons | blocks/footer-copyright.liquid, blocks/footer-policy-list.liquid, blocks/social-links.liquid, blocks/payment-icons.liquid |


## HERO/BANNER SECTIONS (3)

| # | File | Category | Kya Karta Hai | Connections |
|---|---|---|---|---|
| 7 | `hero.liquid` | Hero Banner | Bada banner — full-width image/video + text overlay + button | blocks/text.liquid, blocks/button.liquid, blocks/_image.liquid, blocks/video.liquid, snippets/background-media.liquid, snippets/overlay.liquid |
| 8 | `slideshow.liquid` | Slideshow | Multiple slides carousel — auto-rotate + arrows + dots | blocks/_slide.liquid, snippets/slideshow.liquid, snippets/slideshow-controls.liquid, snippets/slideshow-arrows.liquid, assets/slideshow.js |
| 9 | `layered-slideshow.liquid` | Layered Slideshow | Parallax/depth effect slideshow | blocks/_layered-slide.liquid, assets/layered-slideshow.js |

## PRODUCT SECTIONS (8)

| # | File | Category | Kya Karta Hai | Connections |
|---|---|---|---|---|
| 10 | `product-information.liquid` | Main Product | Product page ka HEART — gallery, title, price, variants, ATC, description | blocks/_product-media-gallery.liquid, blocks/_product-details.liquid, blocks/product-title.liquid, blocks/price.liquid, blocks/variant-picker.liquid, blocks/buy-buttons.liquid, blocks/add-to-cart.liquid, blocks/product-description.liquid, blocks/quantity.liquid, snippets/product-information-content.liquid, snippets/product-media-gallery-content.liquid, assets/product-form.js, assets/variant-picker.js, assets/media-gallery.js |
| 11 | `product-list.liquid` | Product Grid | Featured collection grid view | blocks/_product-card.liquid, blocks/_product-list-content.liquid, blocks/_product-list-text.liquid, blocks/_product-list-button.liquid, snippets/product-grid.liquid, snippets/product-card.liquid, assets/product-card.js |
| 12 | `product-recommendations.liquid` | Recommendations | "You may also like" — Shopify AI | blocks/product-recommendations.liquid, snippets/product-card.liquid, assets/product-recommendations.js |
| 13 | `product-hotspots.liquid` | Product Hotspots | Image pe clickable dots → product info popup | blocks/_hotspot-product.liquid, assets/product-hotspot.js |
| 14 | `featured-product.liquid` | Featured Product | Single product highlight (no product page navigation) | blocks/_featured-product.liquid, blocks/_featured-product-gallery.liquid, blocks/_featured-product-price.liquid |
| 15 | `featured-product-information.liquid` | Featured Product Info | Featured product detailed carousel panel | blocks/_featured-product-information-carousel.liquid |
| 16 | `quick-order-list.liquid` | Quick Order | Bulk ordering list — B2B/wholesale | assets/quick-order-list.js, assets/component-cart-quantity-selector.js |
| 17 | `section-rendering-product-card.liquid` | Card Renderer | Internal AJAX product card renderer | snippets/product-card.liquid |

## COLLECTION SECTIONS (4)

| # | File | Category | Kya Karta Hai | Connections |
|---|---|---|---|---|
| 18 | `main-collection.liquid` | Collection Main | Collection page — grid + filters + sorting + pagination | blocks/filters.liquid, snippets/product-grid.liquid, snippets/sorting.liquid, snippets/list-filter.liquid, snippets/price-filter.liquid, snippets/pagination-controls.liquid, assets/facets.js, assets/paginated-list.js |
| 19 | `main-collection-list.liquid` | Collections List | `/collections` page — saari collections grid | snippets/collection-card.liquid, snippets/editorial-collection-grid.liquid |
| 20 | `collection-list.liquid` | Collection List Section | Custom collection cards (any page) | blocks/_collection-card.liquid, blocks/_collection-card-image.liquid, snippets/collection-card.liquid |
| 21 | `collection-links.liquid` | Collection Links | Horizontal collection nav bar | assets/collection-links.js |


## CONTENT SECTIONS (8)

| # | File | Category | Kya Karta Hai | Connections |
|---|---|---|---|---|
| 22 | `media-with-content.liquid` | Media + Content | Image/video + text side-by-side | blocks/_content.liquid, blocks/_image.liquid, blocks/video.liquid, blocks/text.liquid, blocks/button.liquid |
| 23 | `carousel.liquid` | Content Carousel | Cards horizontal carousel (testimonials/features) | blocks/_carousel-content.liquid, blocks/_card.liquid, snippets/slideshow.liquid, assets/slideshow.js |
| 24 | `marquee.liquid` | Marquee | Continuous scrolling text ticker | blocks/_marquee.liquid, assets/marquee.js |
| 25 | `custom-liquid.liquid` | Custom Liquid | Raw Liquid code injection | None (raw code) |
| 26 | `custom.liquid` | Custom Section | Flexible custom — block-based (used as topbar in tumhare store) | Depends on blocks merchant adds |
| 27 | `divider.liquid` | Divider | Horizontal line separator | Standalone |
| 28 | `logo.liquid` | Logo Section | Brand logo standalone display | blocks/logo.liquid |
| 29 | `section.liquid` | Generic Section | Swiss army knife — any combination | blocks/group.liquid, blocks/text.liquid, blocks/image.liquid, blocks/button.liquid, blocks/video.liquid |

## BLOG SECTIONS (3)

| # | File | Category | Kya Karta Hai | Connections |
|---|---|---|---|---|
| 30 | `main-blog.liquid` | Blog Main | Blog posts listing grid + pagination | blocks/_blog-post-card.liquid, snippets/editorial-blog-grid.liquid, snippets/pagination-controls.liquid, assets/blog-posts-list.js |
| 31 | `main-blog-post.liquid` | Blog Post Main | Single blog post — title, image, content, comments | blocks/_blog-post-content.liquid, blocks/_blog-post-featured-image.liquid, blocks/_blog-post-info-text.liquid, snippets/blog-comment-form.liquid |
| 32 | `featured-blog-posts.liquid` | Featured Blog | Blog posts carousel/grid (home page promotion) | blocks/_featured-blog-posts-card.liquid, blocks/_featured-blog-posts-image.liquid, blocks/_featured-blog-posts-title.liquid |

## SEARCH SECTIONS (4)

| # | File | Category | Kya Karta Hai | Connections |
|---|---|---|---|---|
| 33 | `search-header.liquid` | Search Header | Search page top — search input + results count | blocks/_search-input.liquid, assets/search-page-input.js |
| 34 | `search-results.liquid` | Search Results | Results display — products, pages, articles | snippets/product-card.liquid, snippets/resource-list.liquid, snippets/pagination-controls.liquid |
| 35 | `predictive-search.liquid` | Predictive Search | Live suggestions while typing | snippets/predictive-search-products-list.liquid, snippets/predictive-search-resource-carousel.liquid, assets/predictive-search.js |
| 36 | `predictive-search-empty.liquid` | Search Empty | "No results" with helpful suggestions | snippets/predictive-search-empty-state.liquid |

## CART SECTION (1)

| # | File | Category | Kya Karta Hai | Connections |
|---|---|---|---|---|
| 37 | `main-cart.liquid` | Cart Main | Cart page — items list, totals, checkout | blocks/_cart-title.liquid, blocks/_cart-products.liquid, blocks/_cart-summary.liquid, snippets/cart-products.liquid, snippets/cart-summary.liquid, snippets/cart-items-component.liquid, assets/component-cart-items.js, assets/cart-note.js |

## PAGE SECTIONS (4) + UTILITY (1)

| # | File | Category | Kya Karta Hai | Connections |
|---|---|---|---|---|
| 38 | `main-page.liquid` | Page Main | Generic page content render | blocks/page-content.liquid, blocks/page.liquid |
| 39 | `main-404.liquid` | 404 Page | Page not found — friendly error | Standalone |
| 40 | `password.liquid` | Password Page | Store password form | Standalone |
| 41 | `password-footer.liquid` | Password Footer | Password page footer | Standalone |
| 42 | `_blocks.liquid` | Internal Renderer | Centralized block rendering utility | ALL sections that use blocks |
