---
inclusion: manual
---

# Folder 7: config/ (2 Files) + Folder 8: locales/ (51 Files)

> Memory-set file 8 of 10. Manual inclusion.

## 📁 FOLDER 7: config/ (2 Files)

| # | File | Category | Role | Connections |
|---|---|---|---|---|
| 1 | `settings_schema.json` | Theme Settings | **Customizer ka blueprint** — kya options available, kya types, defaults | snippets/theme-styles-variables.liquid, snippets/color-schemes.liquid, EVERY file using `settings.*` |
| 2 | `settings_data.json` | Saved Settings | **Merchant ki saved choices** — actual values | settings_schema.json (structure), EVERY file reading settings.* |

### settings_schema.json Structure (Horizon)

```json
[
  {
    "name": "theme_info",
    "theme_name": "Horizon",
    "theme_version": "3.5.1",
    "theme_author": "Shopify"
  },
  {
    "name": "Logo and Favicon",
    "settings": [
      { "type": "image_picker", "id": "logo", "label": "Logo image" },
      { "type": "range", "id": "logo_height", "min": 12, "max": 100, "step": 2, "default": 40 },
      { "type": "image_picker", "id": "favicon" }
    ]
  },
  {
    "name": "Colors",
    "settings": [
      { "type": "color_scheme_group", "id": "color_schemes" }
    ]
  }
  // Typography, Layout, Cart, Social, Animations groups
]
```

### Setting Groups in Horizon

| Group | Controls | Examples |
|---|---|---|
| Logo & Favicon | Logo image, inverse logo, favicon, logo height | settings.logo, settings.logo_height |
| Colors | 6 color schemes (background, text, heading, primary, hover, secondary) | settings.color_schemes (scheme-1 to scheme-6) |
| Typography | 4 font families (body, heading, subheading, accent) + sizes, weights | settings.type_body_font, settings.type_heading_font |
| Layout | Page width, section spacing, card hover effects | settings.page_width, settings.card_hover_effect |
| Cart | Cart type (drawer/page), quick add toggles | settings.quick_add, settings.mobile_quick_add |
| Social Media | All social URLs | settings.social_facebook_link |
| Animations | Page transitions, product transitions, card effects | settings.page_transition_enabled |


### Config IF-THEN

| IF | THEN |
|---|---|
| settings_schema.json mein naya setting add | Customizer mein naya option aata |
| Range step galat (`(max-min)/step > 100`) | Schema crash, Customizer error |
| settings_data.json delete | Merchant ki saved settings reset → defaults |
| settings_schema.json invalid JSON | Customizer completely broken |
| Setting `id` rename | EVERYWHERE that ID was used → undefined |

## 📁 FOLDER 8: locales/ (51 Files)

### Pattern

```
en.default.json          ← English storefront translations (DEFAULT fallback)
en.default.schema.json   ← English Customizer labels
fr.json + fr.schema.json
de.json + de.schema.json
... (25+ languages × 2 files each)
```

### Storefront Translations (.json files)

| # | File | Language |
|---|---|---|
| 1 | `en.default.json` | English (DEFAULT — fallback for missing keys) |
| 3 | `fr.json` | French |
| 5 | `de.json` | German |
| 7 | `es.json` | Spanish |
| 9 | `it.json` | Italian |
| 11 | `ja.json` | Japanese |
| 13 | `ko.json` | Korean |
| 15 | `zh-CN.json` | Chinese Simplified |
| 17 | `zh-TW.json` | Chinese Traditional |
| 19 | `pt-BR.json` | Portuguese Brazil |
| 21 | `pt-PT.json` | Portuguese Portugal |
| 23 | `nl.json` | Dutch |
| 25 | `da.json` | Danish |
| 27 | `sv.json` | Swedish |
| 29 | `nb.json` | Norwegian |
| 31 | `fi.json` | Finnish |
| 33 | `pl.json` | Polish |
| 35 | `cs.json` | Czech |
| 37 | `tr.json` | Turkish |
| 39 | `th.json` | Thai |
| 41 | `bg.json` | Bulgarian |
| 42 | `el.json` | Greek |
| 43 | `hr.json` | Croatian |
| 44 | `hu.json` | Hungarian |
| 45 | `id.json` | Indonesian |
| 46 | `lt.json` | Lithuanian |
| 47 | `ro.json` | Romanian |
| 48 | `ru.json` | Russian |
| 49 | `sk.json` | Slovak |
| 50 | `sl.json` | Slovenian |
| 51 | `vi.json` | Vietnamese |

### Schema Translations (.schema.json files)

Same languages, but for **Customizer admin labels** (merchant sees in admin).
- `en.default.schema.json`, `fr.schema.json`, `de.schema.json`, etc.

### Translation Usage

```liquid
{# In code: #}
{{ 'actions.add_to_cart' | t }}

{# In en.default.json: #}
{
  "actions": {
    "add_to_cart": "Add to cart"
  }
}

{# In fr.json: #}
{
  "actions": {
    "add_to_cart": "Ajouter au panier"
  }
}

{# In de.json: #}
{
  "actions": {
    "add_to_cart": "In den Warenkorb"
  }
}
```

### .json vs .schema.json

| Type | Translates | Audience |
|---|---|---|
| `fr.json` | Storefront text — "Add to cart", "Sold out" | Customer (storefront) |
| `fr.schema.json` | Customizer labels — "Background color", "Section width" | Merchant (admin) |

### Translation IF-THEN

| IF | THEN |
|---|---|
| Hardcoded text (no `\| t` filter) | Untranslatable for international stores |
| Translation key missing in `en.default.json` | Raw key shows on storefront ("translation missing: actions.foo") |
| Custom translation only in `en.default.json` | Other languages fall back to English (still works) |
| `.schema.json` missing keys | Customizer label shows raw key (admin confusing) |
