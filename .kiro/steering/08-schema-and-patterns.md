---
inclusion: always
---

# Schema Rules + Code Patterns + Common Pitfalls

> Memory-set file 9 of 10. Always included. The technical reference card.

## SCHEMA SETTING TYPES

| Type | Use For | Example |
|---|---|---|
| `text` | Single line text | Heading text |
| `textarea` | Multi-line text | Description |
| `richtext` | Formatted text | Body content |
| `html` | Custom HTML | Embed code |
| `image_picker` | Image upload | Hero image |
| `video` | Shopify video | Hero video |
| `video_url` | YouTube/Vimeo | External video |
| `url` | Any link | Button URL |
| `color` | Color picker | Text color (BUT: never blank, see pitfalls) |
| `color_scheme` | Pre-defined scheme | Section color scheme |
| `color_background` | Background gradient | Hero background |
| `font_picker` | Shopify fonts | Heading font |
| `checkbox` | Boolean toggle | Show/hide feature |
| `select` | Dropdown options | Layout style |
| `radio` | Radio buttons | Alignment |
| `range` | Number slider | Padding (with min/max/step) |
| `link_list` | Navigation menu | Mega menu source |
| `collection` | Single collection | Featured collection |
| `collection_list` | Multiple collections | Collection slider |
| `product` | Single product | Featured product |
| `product_list` | Multiple products | Product showcase |
| `blog` | Single blog | Featured blog |
| `article` | Single article | Featured article |
| `page` | Single page | Embed page content |

## RANGE RULE — CRITICAL

```
FORMULA:  (max - min) / step  MUST BE  ≤ 100
DEFAULT:  must be a valid step from min

✅ VALID:
   min: 0,   max: 100, step: 4              → 25 steps
   min: 30,  max: 60,  step: 5,  default: 35 → (35 = 30 + 1*5)
   min: 12,  max: 100, step: 2,  default: 40 → (40 = 12 + 14*2)

❌ INVALID:
   min: 0,   max: 500, step: 1              → 500 steps (CRASH)
   min: 30,  max: 60,  step: 5,  default: 33 → not on grid (CRASH)
   min: 0,   max: 100, step: 3,  default: 50 → 50 not on grid (50/3 ≠ int)
```


## COLOR PICKER RULE — CRITICAL

Shopify color picker **kabhi blank return nahi karta** — hamesha value (e.g., `#000000`).

```liquid
{# ❌ GALAT — yeh hamesha true hoga #}
{% if section.settings.text_color != blank %}
  color: {{ section.settings.text_color }};
{% endif %}

{# ✅ SAHI — checkbox toggle for "use custom color" #}
{% if section.settings.use_custom_color %}
  color: {{ section.settings.text_color }};
{% endif %}

{# ✅ Alternative — empty string check #}
{% if section.settings.text_color != "" and section.settings.text_color != "#000000" %}
  color: {{ section.settings.text_color }};
{% endif %}
```

Schema mein paired:
```json
[
  { "type": "checkbox", "id": "use_custom_color", "label": "Use custom color", "default": false },
  { "type": "color", "id": "text_color", "label": "Text color", "default": "#000000" }
]
```

## SECTION TEMPLATE PATTERN

```liquid
{%- liquid
  assign section_id = section.id
  assign color_scheme = section.settings.color_scheme
-%}

<div id="section-{{ section_id }}"
     class="section section-[name] color-{{ color_scheme }}"
     {{ section.shopify_attributes }}>

  {%- for block in section.blocks -%}
    {%- case block.type -%}
      {%- when 'text_block' -%}
        <div class="block block-text" {{ block.shopify_attributes }}>
          {{ block.settings.content }}
        </div>
      {%- when 'image_block' -%}
        <div class="block block-image" {{ block.shopify_attributes }}>
          {% render 'image', image: block.settings.image %}
        </div>
      {%- when '@app' -%}
        {% render block %}
    {%- endcase -%}
  {%- endfor -%}
</div>

{% stylesheet %}
  /* Section CSS — automatically scoped */
  .section-[name] { padding: 2rem; }
{% endstylesheet %}

{% schema %}
{
  "name": "Section Name",
  "tag": "section",
  "class": "section-[name]",
  "settings": [
    { "type": "color_scheme", "id": "color_scheme", "default": "scheme-1" }
  ],
  "blocks": [
    { "type": "text_block", "name": "Text", "limit": 5,
      "settings": [
        { "type": "richtext", "id": "content", "label": "Content" }
      ]
    },
    { "type": "@app" }
  ],
  "max_blocks": 10,
  "presets": [
    {
      "name": "Section Name",
      "blocks": [{ "type": "text_block" }]
    }
  ]
}
{% endschema %}
```

## CSS SCOPING PATTERN

```css
/* ❌ Galat — global pollution */
.product-title { font-size: 24px; }

/* ✅ Sahi — scoped to section instance */
#shopify-section-{{ section.id }} .product-title { font-size: 24px; }

/* ✅ Better — using {% stylesheet %} (auto-scoped + minified) */
{% stylesheet %}
  .product-title { font-size: 24px; }
{% endstylesheet %}
```


## JAVASCRIPT MODULE PATTERN (Horizon Web Components)

```javascript
import { Component } from '@theme/component';
import { onScroll } from '@theme/scrolling';
import { debounce } from '@theme/utilities';

class MyFeature extends Component {
  static observedAttributes = ['data-state'];

  connectedCallback() {
    super.connectedCallback();
    this.boundHandler = this.handleClick.bind(this);
    this.querySelector('button')?.addEventListener('click', this.boundHandler);
    this.init();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.querySelector('button')?.removeEventListener('click', this.boundHandler);
  }

  init() {
    // initialization logic
  }

  handleClick(event) {
    // event handler
  }
}

customElements.define('my-feature', MyFeature);
```

Use in Liquid:
```html
<my-feature data-state="default">
  <button>Click me</button>
</my-feature>
```

## SAFE IMAGE PATTERN

```liquid
{%- if image != blank -%}
  {{ image | image_url: width: 800
        | image_tag:
            loading: 'lazy',
            alt: image.alt | default: product.title | escape,
            width: image.width,
            height: image.height,
            sizes: '(min-width: 990px) 50vw, 100vw',
            widths: '300, 600, 900, 1200, 1500',
            class: 'img-responsive' }}
{%- else -%}
  {{ 'image' | placeholder_svg_tag: 'placeholder-svg' }}
{%- endif -%}
```

For above-the-fold (hero):
```liquid
loading: 'eager',
fetchpriority: 'high'
```

## TRANSLATION PATTERN

```liquid
{# Use translation key — never hardcode text #}
<button>{{ 'actions.add_to_cart' | t }}</button>
<a>{{ 'general.search.placeholder' | t }}</a>

{# With variable interpolation #}
{{ 'sections.cart.items_count' | t: count: cart.item_count }}

{# Pluralization #}
{{ 'sections.cart.items' | t: count: cart.item_count }}
```

In `locales/en.default.json`:
```json
{
  "actions": {
    "add_to_cart": "Add to cart"
  },
  "general": {
    "search": {
      "placeholder": "Search our store"
    }
  },
  "sections": {
    "cart": {
      "items_count": "{{ count }} items in your cart",
      "items": {
        "one": "1 item",
        "other": "{{ count }} items"
      }
    }
  }
}
```

## BLOCK SCHEMA PATTERN

```json
{
  "name": "Section Name",
  "settings": [...],
  "blocks": [
    {
      "type": "text_block",
      "name": "Text",
      "limit": 5,
      "settings": [
        { "type": "richtext", "id": "content", "label": "Content" }
      ]
    },
    {
      "type": "image_block",
      "name": "Image",
      "settings": [
        { "type": "image_picker", "id": "image", "label": "Image" }
      ]
    },
    { "type": "@app" }
  ],
  "max_blocks": 10,
  "presets": [
    {
      "name": "Section Name",
      "blocks": [
        { "type": "text_block" },
        { "type": "image_block" }
      ]
    }
  ]
}
```


## COMMON MISTAKES TABLE

| ❌ Mistake | 🔴 Error/Impact | ✅ Fix |
|---|---|---|
| `{% render 'missing-snippet' %}` | "Could not find asset" | File pehle create karo |
| Wrong asset URL spelling | 404 in console | Filename exact match |
| Global JS variable (`var x = ...`) | Conflicts with other sections | Custom element class encapsulation |
| Range step violation | Customizer crash on save | `(max-min)/step ≤ 100` |
| Range default not on step | Schema validation error | `default = min + n*step` |
| Missing `block.shopify_attributes` | Block not selectable in Customizer | Har block root pe add karo |
| Hardcoded text "Add to cart" | Untranslatable internationally | `{{ 'actions.add_to_cart' \| t }}` |
| `if color != blank` | Always true (color picker never blank) | Checkbox toggle |
| Autoplay video without `muted` | Browser blocks autoplay | Add `muted` attribute |
| Image without `alt` | SEO + accessibility fail | Always provide alt |
| Image without srcset | Mobile loads desktop-size image | Use `image_tag` filter |
| Hero image `loading="lazy"` | LCP score hurts | Hero `loading="eager"`, `fetchpriority="high"` |
| Delete shared snippet | Multiple sections break | Search ALL usages first |
| Mega menu CSS targeting in Horizon | Selectors don't match | Get real DOM `outerHTML` from user |
| External CSS file load | 404 or extra HTTP request | Use `{% stylesheet %}` inside section |
| Same section ID used twice | Shopify confused | Use `section.id` for unique scoping |

## SCHEMA QUICK REFERENCE

```json
{
  "name": "Section Display Name",
  "tag": "section",                    // <section> wrapper
  "class": "custom-class",             // CSS class
  "limit": 1,                          // Max instances per page (optional)
  "enabled_on": {                      // Where can be added (optional)
    "templates": ["index", "page"],
    "groups": ["header"]
  },
  "disabled_on": {                     // Where CAN'T be added (optional)
    "templates": ["product"]
  },
  "settings": [
    {
      "type": "header",                // Visual divider in Customizer
      "content": "Layout"
    },
    {
      "type": "select",
      "id": "layout",
      "label": "Layout",
      "options": [
        { "value": "1", "label": "Single column" },
        { "value": "2", "label": "Two columns" }
      ],
      "default": "2"
    },
    {
      "type": "range",
      "id": "padding_top",
      "label": "Top padding",
      "min": 0, "max": 100, "step": 4, "default": 32, "unit": "px"
    }
  ],
  "blocks": [...],
  "max_blocks": 10,
  "presets": [
    {
      "name": "Default Preset Name",
      "settings": { "layout": "2" },
      "blocks": [
        { "type": "text_block", "settings": { "content": "<p>Default text</p>" } }
      ]
    }
  ]
}
```

## DEBUGGING CHECKLIST

When section/feature not working:

1. **Console errors?** → Open DevTools, check Network tab for 404s
2. **Liquid error?** → Check `{% if/endif %}`, `{% for/endfor %}` balance
3. **Schema error?** → Check Customizer for error message
4. **JS not running?** → Check import map in `scripts.liquid`, verify module loaded
5. **CSS not applying?** → Check section ID scope, specificity, or `{% stylesheet %}` placement
6. **Block not appearing?** → Check `{{ block.shopify_attributes }}` and schema block type
7. **Translation missing?** → Check `locales/en.default.json` has the key
8. **Settings not saving?** → Check Customizer for range step validation error
9. **Mobile broken?** → Check responsive breakpoints, viewport meta tag
10. **Cart not updating?** → Check `assets/component-cart-items.js`, AJAX endpoints
