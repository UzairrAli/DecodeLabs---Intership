# 🍽️ Kinfolk Eats — Frontend
### Project 1: Responsive Frontend Interface
**DecodeLabs Internship Program | Full Stack Development | Batch 2026**

---

## 📌 Table of Contents

1. [Project Overview](#-project-overview)
2. [Live Preview](#-live-preview)
3. [File Structure](#-file-structure)
4. [How to Run](#-how-to-run)
5. [Design System](#-design-system)
6. [Page Sections](#-page-sections)
7. [JavaScript Features](#-javascript-features)
8. [API Integration](#-api-integration)
9. [Responsive Breakpoints](#-responsive-breakpoints)
10. [Accessibility](#-accessibility)
11. [Recipe Data Format](#-recipe-data-format)
12. [DecodeLabs Compliance](#-decodelabs-compliance)
13. [Known Limitations](#-known-limitations)

---

## 📖 Project Overview

**Kinfolk Eats** is an Interactive Digital Compendium for Pakistani Heritage Recipes. It is a fully responsive, accessible, single-page web application built entirely with **vanilla HTML5, CSS3, and JavaScript** — no frameworks, no libraries, no build tools required.

The application showcases 6 authentic Pakistani dishes and provides an interactive cooking experience with dynamic serving size scaling and a step-by-step cooking mode checklist.

> *"Project 1 is your interface phase: The Responsive Layout. Master the art of building flexible frontends."* — DecodeLabs

---

## 👀 Live Preview

To open the project, simply double-click `index.html` — no server needed.

```
kinfolk-eats/
├── index.html   ← Open this in any browser
├── styles.css
└── app.js
```

**Requires an internet connection** for:
- Google Fonts (Montserrat + Roboto)
- Unsplash recipe images (fallback emoji shown if offline)

---

## 📁 File Structure

```
kinfolk-eats/
│
├── index.html          (192 lines)
│   └── Complete semantic HTML5 structure
│
├── styles.css          (493 lines)
│   ├── CSS custom properties (:root design tokens)
│   ├── Mobile-first base styles
│   ├── Tablet breakpoint  (min-width: 768px)
│   ├── Desktop breakpoint (min-width: 1024px)
│   └── Animations & transitions
│
└── app.js              (560 lines)
    ├── API configuration & fetch logic
    ├── Static fallback recipe data (6 recipes)
    ├── DOM element cache
    ├── Event binding
    ├── Recipe grid rendering
    ├── Modal open/close logic
    ├── Serving size calculator
    ├── Cooking mode checklist
    └── Helper utilities
```

---

## 🚀 How to Run

### Option 1 — Direct open (simplest)
```
1. Download and extract kinfolk-eats.zip
2. Double-click index.html
3. Opens in your default browser — done!
```

### Option 2 — VS Code Live Server (recommended for development)
```
1. Open the folder in VS Code
2. Install the "Live Server" extension
3. Right-click index.html → "Open with Live Server"
4. Opens at http://127.0.0.1:5500
```

### Option 3 — With Backend API (Project 2 connected)
```
1. Start the backend first:
   cd kinfolk-eats-api
   npm install
   npm start          ← runs on http://localhost:5000

2. Then open index.html
3. You will see a 🟢 Live badge — frontend is talking to the API
```

---

## 🎨 Design System

All design decisions live as CSS Custom Properties in `:root` inside `styles.css`.

### Color Palette

| Token | Hex | Role |
|-------|-----|------|
| `--color-base` | `#F2F0EA` | **Moonlit Grey** — page background, represents refinement |
| `--color-accent` | `#A5856F` | **Mocha Mousse** — primary accent, represents stability & warmth |
| `--color-blue` | `#A0D4E0` | **Ethereal Blue** — active states, trust, badges |
| `--color-dark` | `#2C2C2C` | Near-black — primary body text |
| `--color-mid` | `#6B6B6B` | Mid-grey — secondary text, captions |
| `--color-border` | `#D9D5CC` | Subtle dividers and card borders |

### Typography

| Token | Font | Usage |
|-------|------|-------|
| `--font-head` | `Montserrat` | All headings, logo, step numbers |
| `--font-body` | `Roboto` | Body text, labels, metadata |

Only **2 font families** and **3 weights each** (400, 600, 700) are used — as per the DecodeLabs constraint.

### Fluid Type Scale (all sizes use `clamp()`)

| Token | Min | Max | Used For |
|-------|-----|-----|---------|
| `--t-xs` | 0.72rem | 0.85rem | Labels, copyright, badges |
| `--t-sm` | 0.85rem | 1rem | Meta text, filter labels |
| `--t-base` | 1rem | 1.125rem | Body paragraphs |
| `--t-lg` | 1.125rem | 1.4rem | Card titles, subtitles |
| `--t-xl` | 1.4rem | 1.8rem | Section headings |
| `--t-2xl` | 1.8rem | 2.4rem | Recipe title in modal |
| `--t-3xl` | 2.4rem | 3.2rem | Main section titles |
| `--t-4xl` | 3rem | 4.2rem | Hero headline |

### Fluid Spacing Scale

| Token | Min | Max |
|-------|-----|-----|
| `--sp-xs` | 0.4rem | 0.65rem |
| `--sp-sm` | 0.75rem | 1rem |
| `--sp-md` | 1rem | 1.5rem |
| `--sp-lg` | 1.5rem | 2.5rem |
| `--sp-xl` | 2rem | 3.5rem |
| `--sp-2xl` | 3rem | 5.5rem |
| `--sp-3xl` | 4rem | 7rem |

---

## 📐 Page Sections

The page is built with strict HTML5 semantic landmark elements:

```
<header>         ← Sticky navigation bar with logo and menu
  <nav>
<main>
  <section>      ← Hero: headline, subtitle, CTA buttons, stats
  <section>      ← Recipe grid: filter bar + responsive card grid
<section>        ← Recipe detail modal (shown/hidden via JS)
<section>        ← About: mission statement + feature cards
<footer>         ← Links, contact email, copyright
```

### Hero Section
- Animated headline with CSS gradient text
- Two CTA buttons: "Explore Recipes" + "Our Story"
- Stats bar: recipe count, authenticity badge, country flag
- Hero image from Picsum with graceful fallback

### Recipe Grid
- Cards dynamically generated by JavaScript
- Each card: Unsplash photo, title, prep/cook time, servings, category tags
- Cards animate in with staggered `fadeInUp` delays
- Category dropdown filter (All / Appetizers / Mains / Desserts / Soups)

### Recipe Detail Modal
- Slides up from bottom on mobile, centred overlay on desktop
- Full-bleed hero image with text overlay
- Two-column layout on tablet+: Ingredients (left) | Instructions (right)
- Summary footer: prep time, cook time, difficulty, base servings
- Closes via ✕ button, `Escape` key, or clicking the backdrop

### About Section
- Two-column layout on tablet+
- Three feature cards: Heritage First, Smart Scaling, Cooking Mode

### Footer
- Three-column on desktop, stacked on mobile
- Quick links, contact email, copyright notice

---

## ⚙️ JavaScript Features

### 1. Dynamic Recipe Grid — `renderGrid(list)` / `buildCard(recipe)`

Generates the entire recipe grid from data. Each card is created with `document.createElement()` and gets its own click handler.

```js
renderGrid(recipes);   // renders all 6 cards with staggered animation
```

### 2. Serving Size Calculator

Located inside the modal. The `+` and `−` buttons call `changeServings(delta)`, which updates the input and triggers `renderIngredients()` to recalculate every quantity.

```
Base recipe: 4 servings → user sets 8 → all quantities × 2
800g chicken → 1600g
3 tbsp ginger paste → 6 tbsp
```

**Functions involved:**
- `changeServings(delta)` — increments/decrements, clamps 1–12
- `renderIngredients()` — recalculates with `multiplier = servings / baseServings`
- `formatQty(n)` — converts decimals to fractions (½, ¼, ¾, ⅓, ⅔)

### 3. Cooking Mode — Interactive Checklist

Toggle the **🔥 Cooking Mode** button to activate. Then click any ingredient or instruction step to cross it off.

- State managed via `.classList.toggle('checked')`
- Checked ingredients get opacity + strikethrough
- Checked instructions get strikethrough + background color change
- Button shows **✅ Mode Active** when on

**Functions involved:**
- `toggleCookingMode()` — flips `cookingModeOn` boolean, updates button label
- Each `ingredient-item` and `instruction-item` has its own click listener

### 4. Modal Management — `openModal(recipe)` / `closeModal()`

Opens by setting `hidden` attribute to `false` and `body.overflow = hidden`. Closes via:
- ✕ close button
- `Escape` key (global `keydown` listener)
- Clicking the dark backdrop

### 5. API Integration — `loadRecipes()` / `filterRecipes(category)`

On page load, the app tries to fetch from the backend API. If it fails within 4 seconds, it silently falls back to the static data array. A status badge shows the connection state.

```js
const API_URL = 'http://localhost:5000/api';
const USE_API = true;   // ← set to false to always use static data
```

**Functions:**
- `loadRecipes()` — called on `DOMContentLoaded`, async fetch with timeout
- `filterRecipes(category)` — called by the dropdown, hits `GET /api/recipes?category=`
- `showAPIBadge(text)` — renders a small status pill in the filter bar

### 6. Mobile Navigation — `toggleNav()`

Hamburger menu toggles `.nav-active` class on the `<header>`. CSS handles the open/close animation including the X transformation of the hamburger icon.

---

## 🔌 API Integration

### Configuration (top of `app.js`)

```js
const API_URL = 'http://localhost:5000/api';
const USE_API = true;
```

| `USE_API` | Behaviour |
|-----------|-----------|
| `true` | Tries API first → falls back to static data on failure |
| `false` | Always uses the hardcoded static data array |

### What the Frontend Expects from the API

Each recipe object must have these fields:

```js
{
  id:           Number,    // unique identifier
  title:        String,    // recipe name
  origin:       String,    // e.g. "Pakistani" or "🇵🇰 Pakistani"
  category:     String,    // "mains" | "appetizers" | "desserts" | "soups"
  difficulty:   String,    // "Easy" | "Medium" | "Hard"
  prepTime:     String,    // e.g. "20 min"
  cookTime:     String,    // e.g. "30 min"
  baseServings: Number,    // default serving count
  imgSrc:       String,    // image URL (Unsplash or any valid URL)
  emoji:        String,    // fallback emoji if image fails
  ingredients:  Array,     // [{ name, quantity, unit }]
  instructions: Array      // ["Step one...", "Step two..."]
}
```

### API Status Badge

When connected to the backend, a badge appears in the filter bar:

| Badge | Meaning |
|-------|---------|
| 🟢 Live — data loaded from API | Backend is running, data is fresh |
| 🟡 Offline — using local data | Backend is unreachable, fallback is active |

---

## 📱 Responsive Breakpoints

The layout follows a strict **Mobile-First** strategy. All base styles are written for mobile, then expanded with `min-width` media queries.

| Breakpoint | Width | Changes |
|------------|-------|---------|
| **Mobile** (default) | 0px+ | Single column, stacked layout, hamburger nav |
| **Tablet** | 768px+ | 2-column recipe grid, side-by-side hero, horizontal nav |
| **Desktop** | 1024px+ | 3-column recipe grid, full layout presentation |

### Layout Engine

| Purpose | Technology |
|---------|-----------|
| Macro layout (page structure, hero, grids) | **CSS Grid** |
| Micro components (nav, cards, buttons, inputs) | **Flexbox** |

---

## ♿ Accessibility

The project is built to **WCAG 2.1 AA** standards throughout.

| Feature | Implementation |
|---------|---------------|
| Semantic HTML | `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>` |
| ARIA labels | All buttons, inputs, and sections have `aria-label` or `aria-pressed` |
| Keyboard navigation | Tab order follows visual order; modal closeable via `Escape` |
| Focus management | Modal sets focus to close button when opened |
| Colour contrast | All text meets 4.5:1 contrast ratio minimum |
| Image fallbacks | `onerror` handlers on all `<img>` tags show emoji fallback |
| Visible focus rings | All interactive elements have `outline` on `:focus` |
| Screen reader support | `role="button"`, `tabindex="0"`, `aria-pressed` on interactive non-button elements |

---

## 🗂️ Recipe Data Format

The static fallback array in `app.js` contains 6 Pakistani heritage recipes:

| # | Recipe | Category | Difficulty |
|---|--------|----------|-----------|
| 1 | Karahi Murgh (Chicken Karahi) | mains | Medium |
| 2 | Chicken Biryani | mains | Hard |
| 3 | Nihari (Slow-Cooked Beef Stew) | mains | Medium |
| 4 | Samosas (Crispy Pastries) | appetizers | Medium |
| 5 | Haleem | mains | Hard |
| 6 | Gulab Jamun | desserts | Medium |

To add a new recipe to the static array, follow this template:

```js
{
    id: 7,
    title: "Chapli Kebab",
    origin: "🇵🇰 Pakistani",
    category: "mains",          // appetizers | mains | desserts | soups
    emoji: "🍖",
    imgSrc: "https://images.unsplash.com/photo-XXXXXX?w=700&q=80",
    prepTime: "20 min",
    cookTime: "15 min",
    difficulty: "Easy",         // Easy | Medium | Hard
    baseServings: 4,
    ingredients: [
        { name: "Beef mince", quantity: 500, unit: "g" },
        { name: "Onion, grated", quantity: 1, unit: "medium" }
    ],
    instructions: [
        "Mix beef mince with all spices and grated onion.",
        "Form into flat, round patties.",
        "Fry on a hot tawa (griddle) for 4-5 minutes per side."
    ]
}
```

---

## ✅ DecodeLabs Compliance Checklist

| Requirement | Status | Details |
|-------------|--------|---------|
| Pure HTML / CSS / JS | ✅ | Zero frameworks, zero libraries |
| Mobile-First CSS | ✅ | Base styles → 768px → 1024px |
| CSS Grid (macro layout) | ✅ | Hero, recipe grid, about, footer use Grid |
| Flexbox (micro components) | ✅ | Nav, cards, ingredients, buttons use Flexbox |
| Semantic HTML5 landmarks | ✅ | `<header>` `<nav>` `<main>` `<article>` `<section>` `<footer>` |
| No `<div>` soup | ✅ | Every element is semantic and purposeful |
| `clamp()` fluid typography | ✅ | All 8 type tokens use `clamp()` |
| `clamp()` fluid spacing | ✅ | All 7 spacing tokens use `clamp()` |
| Max 2 font families | ✅ | Montserrat + Roboto only |
| Max 3 font weights | ✅ | 400, 600, 700 only |
| Mocha Mousse (#A5856F) | ✅ | Primary accent throughout |
| Ethereal Blue (#A0D4E0) | ✅ | Active states, badges, toggle button |
| Moonlit Grey (#F2F0EA) | ✅ | Page background |
| WCAG accessibility | ✅ | Contrast ratios, ARIA, focus states |
| Serving size calculator | ✅ | ± buttons auto-recalculate all ingredient quantities |
| Cooking mode checklist | ✅ | Click ingredients/steps to cross them off |

---

## ⚠️ Known Limitations

| Limitation | Reason | Workaround |
|------------|--------|------------|
| Images require internet | Unsplash URLs are external | Emoji fallback shown offline |
| Data resets on refresh | No persistent storage in Project 1 | Solved in Project 2 (backend API) |
| Max 12 servings | Input clamped for UX | Edit `changeServings()` in `app.js` to raise the limit |
| No search bar | Out of scope for Project 1 | Can be added with a `filter()` call on the recipes array |

---

## 📞 Contact

**DecodeLabs**
- 🌐 www.decodelabs.tech
- ✉️ decodelabs.tech@gmail.com
- 📍 Greater Lucknow, India

---

*© 2025 Kinfolk Eats Pakistan. Built with care for the DecodeLabs Internship Program — Batch 2026.*
