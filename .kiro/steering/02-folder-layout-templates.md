---
inclusion: manual
---

# Folder 1: layout/ (2 Files) + Folder 2: templates/ (13 Files)

> Memory-set file 3 of 10. Manual inclusion (load when working on layouts/templates).

## 📁 FOLDER 1: layout/ (2 Files)

| # | File | Category | Kya Karta Hai | Kab Use Hota | Connections |
|---|---|---|---|---|---|
| 1 | `theme.liquid` | Main Layout | Poori website ka master wrapper — HTML `<head>` + `<body>`. CSS, JS, fonts load karta hai. Header-group, footer-group, main content sab yahi se call hote. | HAR page pe | snippets/stylesheets.liquid, snippets/fonts.liquid, snippets/scripts.liquid, snippets/theme-styles-variables.liquid, snippets/color-schemes.liquid, snippets/meta-tags.liquid, sections/header-group.json, sections/footer-group.json, snippets/search-modal.liquid, snippets/quick-add-modal.liquid, snippets/skip-to-content-link.liquid, snippets/theme-editor.liquid, ALL templates |
| 2 | `password.liquid` | Password Layout | Store password-protected hone pe yeh layout use hota | Sirf password-protected store pe | sections/password.liquid, sections/password-footer.liquid, basic CSS/JS |

### theme.liquid Internal Structure

```
<html>
<head>
  ├── Favicon (settings.favicon)
  ├── render 'meta-tags'              → SEO tags
  ├── render 'stylesheets'            → CSS load
  ├── render 'fonts'                  → Fonts
  ├── render 'scripts'                → JS import map
  ├── render 'theme-styles-variables' → CSS variables
  ├── render 'color-schemes'          → Color CSS
  └── {{ content_for_header }}        → Shopify system
</head>
<body>
  ├── {% sections 'header-group' %}
  │     ├── Announcement Bar (custom.liquid)
  │     ├── Header Announcements (header-announcements.liquid)
  │     └── Header (header.liquid — logo, menu, search, cart)
  │
  ├── <main>{{ content_for_layout }}</main>
  │     └── Template ka content yahan
  │
  ├── {% sections 'footer-group' %}
  │     ├── Footer
  │     └── Footer Utilities
  │
  ├── render 'search-modal'           → hidden until triggered
  └── render 'quick-add-modal'        → hidden until triggered
</body>
</html>
```


### theme.liquid IF-THEN

| IF | THEN |
|---|---|
| File mein change karo | Har page pe change dikhega |
| CSS link remove karo | Poori site ka style tutega |
| Header section hatao | Koi page pe header nahi |
| `{{ content_for_header }}` hatao | Shopify scripts (analytics, theme editor) toot jayenge |

## 📁 FOLDER 2: templates/ (13 Files)

| # | File | Page | URL | Calls Sections |
|---|---|---|---|---|
| 1 | `index.json` | Home | `/` | sections/hero.liquid, sections/product-list.liquid (+ merchant adds) |
| 2 | `product.json` | Single Product | `/products/[handle]` | sections/product-information.liquid, sections/product-recommendations.liquid |
| 3 | `collection.json` | Collection | `/collections/[handle]` | sections/main-collection.liquid |
| 4 | `cart.json` | Cart | `/cart` | sections/main-cart.liquid |
| 5 | `page.json` | Generic Pages | `/pages/[handle]` | sections/main-page.liquid |
| 6 | `page.contact.json` | Contact Page | `/pages/contact` | sections/main-page.liquid (with contact form blocks) |
| 7 | `blog.json` | Blog Listing | `/blogs/[handle]` | sections/main-blog.liquid |
| 8 | `article.json` | Single Blog Post | `/blogs/[blog]/[article]` | sections/main-blog-post.liquid |
| 9 | `search.json` | Search Results | `/search` | sections/search-header.liquid, sections/search-results.liquid |
| 10 | `404.json` | Error Page | (any invalid URL) | sections/main-404.liquid |
| 11 | `password.json` | Password Page | (when store closed) | sections/password.liquid |
| 12 | `list-collections.json` | All Collections | `/collections` | sections/main-collection-list.liquid |
| 13 | `gift_card.liquid` | Gift Card | (gift card URL) | assets/template-giftcard.css, assets/qr-code-generator.js |

### JSON Template Structure (example: index.json)

```json
{
  "sections": {
    "hero_jVaWmY": {
      "type": "hero",
      "blocks": { ... }
    },
    "product_list_fa6P9H": {
      "type": "product-list",
      "blocks": { ... }
    }
  },
  "order": [
    "hero_jVaWmY",
    "product_list_fa6P9H"
  ]
}
```

- `sections` → kaunse sections use ho rahe + unke blocks
- `order` → display order (top to bottom)
- Random suffix (`_jVaWmY`) → auto-generated unique IDs
- Merchant Customizer mein drag-drop = `order` array reorder

### Templates IF-THEN

| IF | THEN |
|---|---|
| `index.json` se hero hata diya | Home page pe hero nahi |
| `order` array reorder kiya | Sections sequence change |
| Naya section add kiya | Woh section page pe aa jayega |
| `gift_card.liquid` (legacy `.liquid` format) | Pure Liquid template — no JSON drag/drop |

### Why JSON > Liquid templates

```
JSON template:
  ├── Merchant drag & drop sections in Customizer
  ├── Multiple variants (product.special.json) possible
  └── Modern Shopify 2.0 way

Liquid template (.liquid):
  ├── Hardcoded sections — merchant code touch karna padta
  ├── Legacy approach (Dawn theme me bhi mostly JSON now)
  └── Sirf gift_card.liquid Horizon mein liquid format
```

### Template-to-Section connection map

```
templates/index.json          → sections/hero.liquid, sections/product-list.liquid, ...
templates/product.json        → sections/product-information.liquid, sections/product-recommendations.liquid
templates/collection.json     → sections/main-collection.liquid
templates/cart.json           → sections/main-cart.liquid
templates/page.json           → sections/main-page.liquid
templates/blog.json           → sections/main-blog.liquid
templates/article.json        → sections/main-blog-post.liquid
templates/search.json         → sections/search-header.liquid, sections/search-results.liquid
templates/404.json            → sections/main-404.liquid
templates/password.json       → sections/password.liquid
templates/list-collections.json → sections/main-collection-list.liquid
```
