---
inclusion: manual
---

# Folder 4: blocks/ (91 Files) — Complete File-by-File

> Memory-set file 5 of 10. Manual inclusion.

## NAMING CONVENTION

```
_block-name.liquid  →  PRIVATE block (specific section internal use)
                       Customizer mein NAHI dikhta as standalone option
                       Parent section ke andar hi appears

block-name.liquid   →  PUBLIC block (any section can use)
                       Merchant Customizer mein "Add Block" karke add kar sakta
```

## CATEGORIES

| Category | Count | Examples |
|---|---|---|
| Header | 2 | _header-logo, _header-menu |
| Text/Content | 5 | text, _heading, _inline-text, _content, _content-without-appearance |
| Button/Link | 2 | button, popup-link |
| Image/Media | 4 | image, _image, video, _media-without-appearance |
| Product | 23 | product-title, price, variant-picker, etc. |
| Collection | 10 | collection-card, _collection-card, filters, etc. |
| Blog | 9 | _blog-post-card, _featured-blog-posts-card, etc. |
| Cart | 3 | _cart-title, _cart-products, _cart-summary |
| Layout | 3 | group, spacer, _divider |
| Footer | 4 | footer-copyright, footer-policy-list, _footer-social-icons, payment-icons |
| Social | 2 | social-links, _social-link |
| Form | 3 | contact-form, contact-form-submit-button, email-signup |
| Feature | 9 | accordion, _accordion-row, comparison-slider, jumbo-text, _marquee, _slide, _layered-slide, _carousel-content, _card |
| Utility/Misc | 12 | icon, logo, custom-liquid, page, page-content, menu, follow-on-shop, _announcement, _search-input, _hotspot-product, _featured-product, _featured-product-gallery |

## HEADER BLOCKS (2)

| # | File | Category | Role | Connections |
|---|---|---|---|---|
| 1 | `_header-logo.liquid` | Header | Logo display — image ya store name | sections/header.liquid, config/settings_data.json |
| 2 | `_header-menu.liquid` | Header | Navigation menu — desktop mega + mobile drawer | sections/header.liquid, snippets/mega-menu-list.liquid, assets/header-menu.js |

## TEXT/CONTENT BLOCKS (5)

| # | File | Type | Role |
|---|---|---|---|
| 3 | `text.liquid` | PUBLIC | Universal text block — paragraph/heading with styling |
| 4 | `_heading.liquid` | PRIVATE | Heading H1-H6 with font/size/color |
| 5 | `_inline-text.liquid` | PRIVATE | Inline text — small captions/labels |
| 6 | `_content.liquid` | PRIVATE | Content wrapper WITH appearance settings |
| 7 | `_content-without-appearance.liquid` | PRIVATE | Content wrapper without styling |

## BUTTON/LINK BLOCKS (2)

| # | File | Role |
|---|---|---|
| 8 | `button.liquid` | Universal button — primary/secondary/outline/text |
| 9 | `popup-link.liquid` | Click → modal popup (size guide, policies) |

## IMAGE/MEDIA BLOCKS (4)

| # | File | Type | Role |
|---|---|---|---|
| 10 | `image.liquid` | PUBLIC | Image block (merchant adds) |
| 11 | `_image.liquid` | PRIVATE | Image block (internal section use) |
| 12 | `video.liquid` | PUBLIC | YouTube/Vimeo/uploaded video |
| 13 | `_media-without-appearance.liquid` | PRIVATE | Raw media output |


## PRODUCT BLOCKS (23)

| # | File | Role | Key Connections |
|---|---|---|---|
| 14 | `product-title.liquid` | Product title display | sections/product-information.liquid |
| 15 | `price.liquid` | Price display (sale, compare, installments) | snippets/price.liquid, snippets/format-price.liquid, assets/product-price.js |
| 16 | `variant-picker.liquid` | Size/Color selector | snippets/variant-main-picker.liquid, snippets/variant-swatches.liquid, assets/variant-picker.js |
| 17 | `add-to-cart.liquid` | Single Add to Cart button | snippets/add-to-cart-button.liquid, assets/product-form.js |
| 18 | `buy-buttons.liquid` | Buy buttons group (ATC + Buy Now + Dynamic) | snippets/buy-buttons-styles.liquid, assets/product-form.js |
| 19 | `accelerated-checkout.liquid` | Shop Pay / Apple Pay / Google Pay | Shopify payment system |
| 20 | `quantity.liquid` | +/- quantity selector | snippets/quantity-selector.liquid, assets/component-quantity-selector.js |
| 21 | `product-description.liquid` | Description text from admin | Standalone |
| 22 | `product-custom-property.liquid` | Personalization field (engraving, monogram) | assets/product-custom-property.js |
| 23 | `product-inventory.liquid` | "Only 3 left!" stock indicator | assets/product-inventory.js |
| 24 | `product-recommendations.liquid` | Related products in block form | assets/product-recommendations.js, snippets/product-card.liquid |
| 25 | `sku.liquid` | SKU number display | assets/product-sku.js |
| 26 | `review.liquid` | Star rating from metafields | Product metafields (reviews.rating) |
| 27 | `swatches.liquid` | Color swatches on product CARDS | snippets/swatch.liquid |
| 28 | `product-card.liquid` | PUBLIC product card (merchant places) | snippets/product-card.liquid |
| 29 | `_product-card.liquid` | PRIVATE product card (system grid) | blocks/_product-card-gallery.liquid, blocks/product-title.liquid, blocks/price.liquid |
| 30 | `_product-card-gallery.liquid` | Card image + hover swap | snippets/card-gallery.liquid, assets/product-card.js |
| 31 | `_product-card-group.liquid` | Card text elements wrapper | Parent product card block |
| 32 | `_product-details.liquid` | Product page right side panel | sections/product-information.liquid |
| 33 | `_product-media-gallery.liquid` | Product images gallery | snippets/product-media-gallery-content.liquid, assets/media-gallery.js, assets/zoom-dialog.js |
| 34 | `_product-list-content.liquid` | List header (title + view all) | sections/product-list.liquid |
| 35 | `_product-list-text.liquid` | List section text/title | blocks/_product-list-content.liquid |
| 36 | `_product-list-button.liquid` | List "View All" button | blocks/_product-list-content.liquid |

## COLLECTION BLOCKS (10)

| # | File | Type | Role |
|---|---|---|---|
| 37 | `collection-card.liquid` | PUBLIC | Collection card (merchant places anywhere) |
| 38 | `_collection-card.liquid` | PRIVATE | Collection list grid card |
| 39 | `_collection-card-image.liquid` | PRIVATE | Card image variant |
| 40 | `_collection-image.liquid` | PRIVATE | Collection page hero image (banner) |
| 41 | `_collection-info.liquid` | PRIVATE | Card info (title, count) |
| 42 | `_collection-link.liquid` | PRIVATE | Quick nav link |
| 43 | `collection-title.liquid` | PUBLIC | Collection page H1 |
| 44 | `_inline-collection-title.liquid` | PRIVATE | Inline compact title |
| 45 | `featured-collection.liquid` | PUBLIC | Collection picker for product list section |
| 46 | `filters.liquid` | PUBLIC | Filter sidebar — price, color, size |


## BLOG BLOCKS (9)

| # | File | Role |
|---|---|---|
| 47 | `_blog-post-card.liquid` | Listing post card |
| 48 | `_blog-post-content.liquid` | Article body content |
| 49 | `_blog-post-description.liquid` | Post excerpt |
| 50 | `_blog-post-featured-image.liquid` | Hero image on post |
| 51 | `_blog-post-image.liquid` | Listing thumbnail |
| 52 | `_blog-post-info-text.liquid` | Date, author, tags meta |
| 53 | `_featured-blog-posts-card.liquid` | Featured section card |
| 54 | `_featured-blog-posts-image.liquid` | Featured card image |
| 55 | `_featured-blog-posts-title.liquid` | Featured card title |

## CART BLOCKS (3)

| # | File | Role |
|---|---|---|
| 56 | `_cart-title.liquid` | "Your Cart" heading + count |
| 57 | `_cart-products.liquid` | Items list with qty/remove |
| 58 | `_cart-summary.liquid` | Totals + checkout button |

## LAYOUT BLOCKS (3)

| # | File | Role |
|---|---|---|
| 59 | `group.liquid` | Container — group blocks in row/column |
| 60 | `spacer.liquid` | Empty space (visual gap) |
| 61 | `_divider.liquid` | Horizontal line within section |

## FOOTER BLOCKS (4)

| # | File | Role |
|---|---|---|
| 62 | `footer-copyright.liquid` | © 2025 Store Name |
| 63 | `footer-policy-list.liquid` | Privacy/Terms/Refund links |
| 64 | `_footer-social-icons.liquid` | Social icons in footer |
| 65 | `payment-icons.liquid` | Visa/MC/PayPal/etc. icons |

## SOCIAL BLOCKS (2)

| # | File | Role |
|---|---|---|
| 66 | `social-links.liquid` | Social media links group |
| 67 | `_social-link.liquid` | Individual platform link |

## FORM BLOCKS (3)

| # | File | Role |
|---|---|---|
| 68 | `contact-form.liquid` | Contact form (name, email, message) |
| 69 | `contact-form-submit-button.liquid` | Form submit button |
| 70 | `email-signup.liquid` | Newsletter email signup |

## SPECIAL FEATURE BLOCKS (9)

| # | File | Role | Connections |
|---|---|---|---|
| 71 | `accordion.liquid` | Collapsible FAQ panels | snippets/accordion-custom-component.liquid, assets/accordion-custom.js |
| 72 | `_accordion-row.liquid` | Single Q&A row | blocks/accordion.liquid |
| 73 | `comparison-slider.liquid` | Before/After image slider | assets/comparison-slider.js |
| 74 | `jumbo-text.liquid` | Oversized animated text | snippets/jumbo-text.liquid, assets/jumbo-text.js |
| 75 | `_marquee.liquid` | Scrolling ticker block | assets/marquee.js |
| 76 | `_slide.liquid` | Slideshow individual slide | sections/slideshow.liquid |
| 77 | `_layered-slide.liquid` | Layered slideshow slide (depth) | sections/layered-slideshow.liquid |
| 78 | `_carousel-content.liquid` | Carousel content block | sections/carousel.liquid |
| 79 | `_card.liquid` | Generic card (testimonial/feature) | Various sections |

## UTILITY/MISC BLOCKS (12)

| # | File | Role |
|---|---|---|
| 80 | `icon.liquid` | Icon display (SVG ya custom image) |
| 81 | `logo.liquid` | Logo image standalone block |
| 82 | `custom-liquid.liquid` | Raw Liquid code block |
| 83 | `page.liquid` | Embed another page's content |
| 84 | `page-content.liquid` | Current page content render |
| 85 | `menu.liquid` | Navigation menu (footer/sidebar) |
| 86 | `follow-on-shop.liquid` | "Follow on Shop" Shopify app button |
| 87 | `_announcement.liquid` | Individual announcement message |
| 88 | `_search-input.liquid` | Search input field |
| 89 | `_hotspot-product.liquid` | Image hotspot dot |
| 90 | `_featured-product.liquid` | Featured product wrapper |
| 91 | `_featured-product-gallery.liquid` | Featured product gallery |
