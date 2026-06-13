/* ============================================================================
   KINFOLK EATS — VANILLA JAVASCRIPT
   Pakistani Heritage Recipes | Serving Calculator | Cooking Mode
   ============================================================================ */

/* ============================================================
   API CONFIGURATION
   When your backend (Project 2) is running locally, the app
   fetches live data from it. If the server is offline, it
   automatically falls back to the static data below.
   ============================================================ */
const API_URL = 'http://localhost:5000/api';
const USE_API = true;   // <- Set false to always use static data

/* ========== STATIC FALLBACK DATA (used when API is offline) ========== */
const recipes = [
    {
        id: 1,
        title: "Karahi Murgh (Chicken Karahi)",
        origin: "🇵🇰 Pakistani",
        category: "mains",
        emoji: "🍲",
        imgSrc: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=700&q=80",
        prepTime: "20 min",
        cookTime: "30 min",
        difficulty: "Medium",
        baseServings: 4,
        ingredients: [
            { name: "Chicken, bone-in pieces",    quantity: 800, unit: "g" },
            { name: "Tomatoes, roughly chopped",  quantity: 4,   unit: "large" },
            { name: "Onions, thinly sliced",      quantity: 3,   unit: "medium" },
            { name: "Ginger-garlic paste",        quantity: 3,   unit: "tbsp" },
            { name: "Green chillies",             quantity: 4,   unit: "whole" },
            { name: "Coriander powder",           quantity: 1.5, unit: "tsp" },
            { name: "Cumin powder",               quantity: 1,   unit: "tsp" },
            { name: "Ghee",                       quantity: 4,   unit: "tbsp" },
            { name: "Fresh coriander, chopped",   quantity: 0.5, unit: "cup" },
            { name: "Salt",                       quantity: 1,   unit: "tsp" }
        ],
        instructions: [
            "Heat ghee in a large karahi (wok) over high heat until shimmering.",
            "Add sliced onions and fry until deep golden brown, about 6–8 minutes. Stir frequently.",
            "Add ginger-garlic paste and stir for 2 minutes until the raw smell disappears.",
            "Add chicken pieces and fry on high heat for 6–7 minutes, turning until lightly seared.",
            "Add chopped tomatoes, coriander powder, cumin, and salt. Mix everything well.",
            "Toss in whole green chillies. Cook uncovered for 12–15 minutes, stirring, until tomatoes break down and oil separates.",
            "Garnish generously with fresh coriander leaves and sliced ginger.",
            "Serve hot straight from the wok with fresh naan or tandoori roti."
        ]
    },
    {
        id: 2,
        title: "Chicken Biryani",
        origin: "🇵🇰 Pakistani",
        category: "mains",
        emoji: "🍛",
        imgSrc: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=700&q=80",
        prepTime: "40 min",
        cookTime: "60 min",
        difficulty: "Hard",
        baseServings: 6,
        ingredients: [
            { name: "Basmati rice, soaked 30 min", quantity: 3,    unit: "cups" },
            { name: "Chicken, curry cut",           quantity: 1,    unit: "kg" },
            { name: "Yogurt",                       quantity: 1,    unit: "cup" },
            { name: "Onions, thinly sliced",        quantity: 5,    unit: "medium" },
            { name: "Ginger-garlic paste",          quantity: 4,    unit: "tbsp" },
            { name: "Ghee",                         quantity: 0.75, unit: "cup" },
            { name: "Green cardamom pods",          quantity: 4,    unit: "pods" },
            { name: "Bay leaves",                   quantity: 3,    unit: "leaves" },
            { name: "Cinnamon stick",               quantity: 1,    unit: "piece" },
            { name: "Cloves",                       quantity: 5,    unit: "whole" },
            { name: "Fresh mint leaves",            quantity: 0.5,  unit: "cup" },
            { name: "Biryani masala",               quantity: 2,    unit: "tbsp" }
        ],
        instructions: [
            "Boil rice with whole spices (cardamom, bay leaves, cinnamon, cloves) and salt until 70% cooked. Drain and set aside.",
            "Marinate chicken in yogurt, ginger-garlic paste, biryani masala, and salt for at least 30 minutes.",
            "Fry sliced onions in ghee until deep golden and crispy. Remove half and set aside for topping.",
            "In the remaining ghee and onions, add marinated chicken. Cook on high heat for 10–12 minutes.",
            "In a heavy-bottomed pot, spread a layer of rice, then all the chicken, then mint and fried onions.",
            "Cover with the remaining rice. Top with reserved fried onions and a drizzle of ghee.",
            "Seal the pot tightly with foil and a heavy lid. Cook on high for 3 minutes, then lowest heat for 40 minutes (dum).",
            "Open at the table for the full aroma effect! Serve with raita and salad."
        ]
    },
    {
        id: 3,
        title: "Nihari (Slow-Cooked Beef Stew)",
        origin: "🇵🇰 Pakistani",
        category: "mains",
        emoji: "🥘",
        imgSrc: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=700&q=80",
        prepTime: "20 min",
        cookTime: "150 min",
        difficulty: "Medium",
        baseServings: 6,
        ingredients: [
            { name: "Beef shank (nalli)",      quantity: 1,   unit: "kg" },
            { name: "Onions, thinly sliced",   quantity: 4,   unit: "large" },
            { name: "Ginger-garlic paste",     quantity: 4,   unit: "tbsp" },
            { name: "Green chillies, sliced",  quantity: 6,   unit: "whole" },
            { name: "Nihari masala",           quantity: 3,   unit: "tbsp" },
            { name: "Wheat flour (atta)",      quantity: 3,   unit: "tbsp" },
            { name: "Ghee",                    quantity: 0.5, unit: "cup" },
            { name: "Yogurt",                  quantity: 0.5, unit: "cup" },
            { name: "Water",                   quantity: 6,   unit: "cups" },
            { name: "Salt",                    quantity: 1.5, unit: "tsp" }
        ],
        instructions: [
            "Heat ghee in a large heavy pot. Fry onions until golden brown. Remove half for garnish.",
            "Add ginger-garlic paste to the pot and fry for 2 minutes.",
            "Add beef pieces and sear on high heat for 5–7 minutes until browned on all sides.",
            "Add yogurt and nihari masala. Stir well on medium heat for 5 minutes.",
            "Pour in water, bring to a boil, then cover and simmer on very low heat for 2 to 2.5 hours.",
            "Mix wheat flour with a little water to make a smooth paste. Stir into the stew slowly.",
            "Simmer uncovered for 15 more minutes until the stew thickens to a silky consistency.",
            "Serve in deep bowls topped with fried onions, fresh coriander, ginger julienne, and lemon."
        ]
    },
    {
        id: 4,
        title: "Samosas (Crispy Pastries)",
        origin: "🇵🇰 Pakistani",
        category: "appetizers",
        emoji: "🥟",
        imgSrc: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=700&q=80",
        prepTime: "45 min",
        cookTime: "20 min",
        difficulty: "Medium",
        baseServings: 12,
        ingredients: [
            { name: "All-purpose flour",           quantity: 2,   unit: "cups" },
            { name: "Ghee (for dough)",            quantity: 4,   unit: "tbsp" },
            { name: "Salt",                        quantity: 1,   unit: "tsp" },
            { name: "Cold water",                  quantity: 0.5, unit: "cup" },
            { name: "Potatoes, boiled & mashed",   quantity: 4,   unit: "large" },
            { name: "Onion, finely chopped",       quantity: 1,   unit: "medium" },
            { name: "Green chillies, minced",      quantity: 3,   unit: "whole" },
            { name: "Cumin seeds",                 quantity: 1,   unit: "tsp" },
            { name: "Garam masala",                quantity: 0.5, unit: "tsp" },
            { name: "Fresh coriander, chopped",    quantity: 0.25, unit: "cup" },
            { name: "Oil for deep frying",         quantity: 3,   unit: "cups" }
        ],
        instructions: [
            "Rub ghee into flour and salt until it resembles coarse breadcrumbs. Add cold water gradually and knead into a firm dough. Rest 30 minutes.",
            "Mix mashed potatoes, onion, chillies, cumin, garam masala, and coriander for the filling. Season with salt.",
            "Divide dough into balls and roll each into a thin oval. Cut in half to form two semicircles.",
            "Fold each semicircle into a cone, seal the straight seam with water, and fill with potato mixture.",
            "Press the open top firmly to seal. Ensure there are no air pockets to prevent bursting.",
            "Heat oil to 160°C (325°F) — lower than usual to ensure the pastry cooks through evenly.",
            "Fry 3–4 samosas at a time for 6–8 minutes, turning occasionally, until golden and crisp.",
            "Drain and serve hot with green mint chutney and imli (tamarind) sauce."
        ]
    },
    {
        id: 5,
        title: "Haleem",
        origin: "🇵🇰 Pakistani",
        category: "mains",
        emoji: "🍲",
        imgSrc: "https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?w=700&q=80",
        prepTime: "30 min",
        cookTime: "180 min",
        difficulty: "Hard",
        baseServings: 8,
        ingredients: [
            { name: "Beef or mutton, cubed",       quantity: 800,  unit: "g" },
            { name: "Chana dal (chickpea lentils)", quantity: 1,    unit: "cup" },
            { name: "Moong dal",                   quantity: 0.5,  unit: "cup" },
            { name: "Masoor dal (red lentils)",    quantity: 0.5,  unit: "cup" },
            { name: "Broken wheat (dalia)",        quantity: 0.75, unit: "cup" },
            { name: "Onions, sliced",              quantity: 4,    unit: "large" },
            { name: "Ginger-garlic paste",         quantity: 4,    unit: "tbsp" },
            { name: "Ghee",                        quantity: 0.75, unit: "cup" },
            { name: "Haleem masala",               quantity: 2,    unit: "tbsp" },
            { name: "Green chillies",              quantity: 4,    unit: "whole" },
            { name: "Water",                       quantity: 10,   unit: "cups" },
            { name: "Salt",                        quantity: 2,    unit: "tsp" }
        ],
        instructions: [
            "Soak all dals and broken wheat together for 2 hours. Drain.",
            "Heat ghee in a large heavy pot. Fry sliced onions until deep golden. Remove half for garnish.",
            "Add ginger-garlic paste and fry for 2 minutes. Add meat and brown well on all sides.",
            "Add all soaked grains, dals, haleem masala, green chillies, salt, and water.",
            "Bring to a boil, then cover and simmer on very low heat for 2.5–3 hours, stirring every 20 minutes.",
            "When meat is completely tender, use a wooden spoon or hand blender to break it down into a thick, porridge-like consistency.",
            "Adjust consistency: add warm water if too thick, cook open if too thin.",
            "Serve hot, topped with fried onions, fresh coriander, ginger julienne, and a squeeze of lemon."
        ]
    },
    {
        id: 6,
        title: "Gulab Jamun",
        origin: "🇵🇰 Pakistani",
        category: "desserts",
        emoji: "🍮",
        imgSrc: "https://images.unsplash.com/photo-1666195786856-44ca1a14c17b?w=700&q=80",
        prepTime: "25 min",
        cookTime: "30 min",
        difficulty: "Medium",
        baseServings: 6,
        ingredients: [
            { name: "Full-fat milk powder",        quantity: 1,    unit: "cup" },
            { name: "All-purpose flour",           quantity: 3,    unit: "tbsp" },
            { name: "Baking powder",               quantity: 0.25, unit: "tsp" },
            { name: "Ghee, melted",                quantity: 2,    unit: "tbsp" },
            { name: "Milk (warm)",                 quantity: 3,    unit: "tbsp" },
            { name: "Sugar",                       quantity: 2,    unit: "cups" },
            { name: "Water",                       quantity: 2.5,  unit: "cups" },
            { name: "Green cardamom, crushed",     quantity: 5,    unit: "pods" },
            { name: "Rose water",                  quantity: 2,    unit: "tbsp" },
            { name: "Oil for frying",              quantity: 3,    unit: "cups" },
            { name: "Pistachios, slivered",        quantity: 0.25, unit: "cup" }
        ],
        instructions: [
            "Make sugar syrup: combine sugar, water, and crushed cardamom in a pan. Bring to boil, simmer 5 minutes until slightly sticky. Add rose water, keep warm.",
            "Mix milk powder, flour, and baking powder. Add melted ghee and rub in gently.",
            "Add warm milk a little at a time and mix until a soft, pliable dough forms — don't over-knead.",
            "Divide into small equal balls (about 18–20). Roll between palms until very smooth with no cracks.",
            "Heat oil to 130–140°C (very low). Drop in the balls — they should sizzle gently, not furiously.",
            "Fry on low-medium heat for 8–10 minutes, turning constantly, until deep mahogany brown.",
            "Remove immediately and drop into warm (not boiling) sugar syrup. Let soak for at least 1 hour.",
            "Serve warm, garnished with slivered pistachios. Also delicious with a scoop of vanilla ice cream."
        ]
    }
];

/* ========== DOM ELEMENT CACHE ========== */
const DOM = {
    navToggle:           document.getElementById('navToggle'),
    siteHeader:          document.getElementById('siteHeader'),
    categoryFilter:      document.getElementById('categoryFilter'),
    recipeGrid:          document.getElementById('recipeGrid'),
    recipeDetailSection: document.getElementById('recipeDetailSection'),
    closeButton:         document.getElementById('closeButton'),
    servingsInput:       document.getElementById('servingsInput'),
    servingsPlus:        document.getElementById('servingsPlus'),
    servingsMinus:       document.getElementById('servingsMinus'),
    ingredientsList:     document.getElementById('ingredientsList'),
    instructionsList:    document.getElementById('instructionsList'),
    cookingModeToggle:   document.getElementById('cookingModeToggle'),
    recipeDetailImg:     document.getElementById('recipeDetailImg'),
    recipeTitle:         document.getElementById('recipeTitle'),
    recipeOrigin:        document.getElementById('recipeOrigin'),
    recipeCategory:      document.getElementById('recipeCategory'),
    recipePrepTime:      document.getElementById('recipePrepTime'),
    recipeCookTime:      document.getElementById('recipeCookTime'),
    recipeDifficulty:    document.getElementById('recipeDifficulty'),
    recipeBaseServings:  document.getElementById('recipeBaseServings'),
};

/* ========== APP STATE ========== */
let currentRecipe  = null;
let cookingModeOn  = false;

/* ============================================================
   INIT — Fetch from API first, fall back to static data
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
    bindEvents();
    loadRecipes();
});

/* ── loadRecipes: try API, fall back to static array ────── */
async function loadRecipes() {
    if (!USE_API) {
        renderGrid(recipes);
        return;
    }

    // Show a loading indicator while we wait for the server
    DOM.recipeGrid.innerHTML = `
        <div style="grid-column:1/-1; text-align:center; padding:3rem;">
            <p style="font-size:1.5rem;">⏳</p>
            <p style="margin-top:1rem; color:var(--color-mid);">Loading recipes from API…</p>
        </div>`;

    try {
        const res = await fetch(`${API_URL}/recipes`, {
            signal: AbortSignal.timeout(4000)
        });

        if (!res.ok) throw new Error(`Server returned ${res.status}`);

        const json = await res.json();

        // Normalise API shape to match what the frontend expects
        const apiRecipes = json.data.map(r => ({
            ...r,
            origin: r.origin.includes('🇵🇰') ? r.origin : `🇵🇰 ${r.origin}`,
            emoji:  r.emoji  || '🍽️',
            imgSrc: r.imgSrc || ''
        }));

        renderGrid(apiRecipes);
        showAPIBadge('🟢 Live — data loaded from API');

    } catch (err) {
        console.warn('[API] Cannot reach backend — using static fallback.', err.message);
        renderGrid(recipes);
        showAPIBadge('🟡 Offline — using local data');
    }
}

/* ── filterRecipes: API-aware category filter ─────────── */
async function filterRecipes(category) {
    if (!USE_API) {
        renderGrid(category === 'all'
            ? recipes
            : recipes.filter(r => r.category === category));
        return;
    }
    try {
        const url  = category === 'all'
            ? `${API_URL}/recipes`
            : `${API_URL}/recipes?category=${category}`;
        const res  = await fetch(url, { signal: AbortSignal.timeout(4000) });
        const json = await res.json();
        const normalised = json.data.map(r => ({
            ...r,
            origin: r.origin.includes('🇵🇰') ? r.origin : `🇵🇰 ${r.origin}`,
            emoji:  r.emoji  || '🍽️',
            imgSrc: r.imgSrc || ''
        }));
        renderGrid(normalised);
    } catch {
        renderGrid(category === 'all'
            ? recipes
            : recipes.filter(r => r.category === category));
    }
}

/* ── showAPIBadge: status indicator in filter bar ──────── */
function showAPIBadge(text) {
    const existing = document.getElementById('apiBadge');
    if (existing) existing.remove();
    const badge = document.createElement('span');
    badge.id = 'apiBadge';
    badge.textContent = text;
    badge.style.cssText = [
        'font-size:0.75rem', 'font-weight:600', 'padding:0.25rem 0.75rem',
        'border-radius:9999px', 'background:rgba(160,212,224,0.15)',
        'color:var(--color-mid,#6b6b6b)', 'border:1px solid var(--color-border,#d9d5cc)',
        'white-space:nowrap'
    ].join(';');
    const filterBar = document.querySelector('.filter-controls');
    if (filterBar) filterBar.appendChild(badge);
}
/* ========== EVENT BINDING ========== */
function bindEvents() {
    // Mobile nav
    DOM.navToggle.addEventListener('click', toggleNav);
    document.querySelectorAll('.nav-link').forEach(l =>
        l.addEventListener('click', () => DOM.siteHeader.classList.remove('nav-active'))
    );
    // Filter — uses API when live, local array when offline
    DOM.categoryFilter.addEventListener('change', e => {
        filterRecipes(e.target.value);
    });
    // Serving controls
    DOM.servingsPlus.addEventListener('click',  () => changeServings(1));
    DOM.servingsMinus.addEventListener('click', () => changeServings(-1));
    DOM.servingsInput.addEventListener('change', e => {
        let v = parseInt(e.target.value);
        if (isNaN(v) || v < 1) v = 1;
        if (v > 12) v = 12;
        DOM.servingsInput.value = v;
        renderIngredients();
    });
    // Modal close
    DOM.closeButton.addEventListener('click', closeModal);
    DOM.recipeDetailSection.addEventListener('click', e => {
        if (e.target === DOM.recipeDetailSection) closeModal();
    });
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') closeModal();
    });
    // Cooking mode
    DOM.cookingModeToggle.addEventListener('click', toggleCookingMode);
}

/* ========== NAV ========== */
function toggleNav() {
    DOM.siteHeader.classList.toggle('nav-active');
}

/* ========== RENDER GRID ========== */
function renderGrid(list) {
    DOM.recipeGrid.innerHTML = '';
    if (!list.length) {
        DOM.recipeGrid.innerHTML = '<p class="empty-state">No recipes found in this category.</p>';
        return;
    }
    list.forEach((recipe, i) => {
        const card = buildCard(recipe);
        card.style.animationDelay = `${i * 0.08}s`;
        card.style.animation = `fadeInUp 0.55s ease both`;
        DOM.recipeGrid.appendChild(card);
    });
}

/* ========== BUILD RECIPE CARD ========== */
function buildCard(recipe) {
    const article = document.createElement('article');
    article.className = 'recipe-card';
    article.setAttribute('role', 'button');
    article.setAttribute('tabindex', '0');
    article.setAttribute('aria-label', `View recipe: ${recipe.title}`);

    article.innerHTML = `
        <div class="recipe-card-image">
            <img
                src="${recipe.imgSrc}"
                alt="${recipe.title}"
                loading="lazy"
                onerror="this.style.display='none'; this.parentNode.querySelector('.recipe-card-image-fallback').style.display='flex';"
            >
            <div class="recipe-card-image-fallback" style="display:none;">${recipe.emoji}</div>
            <div class="recipe-card-image-overlay"></div>
            <span class="recipe-card-difficulty">${recipe.difficulty}</span>
        </div>
        <div class="recipe-card-content">
            <h3 class="recipe-card-title">${recipe.title}</h3>
            <div class="recipe-card-meta">
                <div class="recipe-card-meta-item">⏱️ <span>Prep: ${recipe.prepTime}</span></div>
                <div class="recipe-card-meta-item">🔥 <span>Cook: ${recipe.cookTime}</span></div>
                <div class="recipe-card-meta-item">👥 <span>Serves: ${recipe.baseServings}</span></div>
            </div>
            <div class="recipe-card-tags">
                <span class="recipe-tag">${recipe.origin}</span>
                <span class="recipe-tag">${capitalize(recipe.category)}</span>
            </div>
        </div>
    `;

    article.addEventListener('click', () => openModal(recipe));
    article.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') openModal(recipe);
    });
    return article;
}

/* ========== OPEN / CLOSE MODAL ========== */
function openModal(recipe) {
    currentRecipe = recipe;
    cookingModeOn = false;

    // Hero image
    DOM.recipeDetailImg.src  = recipe.imgSrc;
    DOM.recipeDetailImg.alt  = recipe.title;
    DOM.recipeDetailImg.style.display = 'block';

    // Meta
    DOM.recipeTitle.textContent        = recipe.title;
    DOM.recipeOrigin.textContent       = recipe.origin;
    DOM.recipeCategory.textContent     = capitalize(recipe.category);
    DOM.recipePrepTime.textContent     = recipe.prepTime;
    DOM.recipeCookTime.textContent     = recipe.cookTime;
    DOM.recipeDifficulty.textContent   = recipe.difficulty;
    DOM.recipeBaseServings.textContent = `${recipe.baseServings} people`;

    // Reset servings
    DOM.servingsInput.value = recipe.baseServings;

    // Render lists
    renderIngredients();
    renderInstructions();

    // Reset cooking mode button
    DOM.cookingModeToggle.setAttribute('aria-pressed', 'false');
    DOM.cookingModeToggle.innerHTML = '<span class="toggle-icon">🔥</span><span class="toggle-text">Cooking Mode</span>';

    // Show modal
    DOM.recipeDetailSection.hidden = false;
    document.body.style.overflow   = 'hidden';
    setTimeout(() => DOM.closeButton.focus(), 300);
}

function closeModal() {
    DOM.recipeDetailSection.hidden = true;
    document.body.style.overflow   = '';
    currentRecipe  = null;
    cookingModeOn  = false;
}

/* ========== INGREDIENTS — SERVING CALCULATOR ========== */
function renderIngredients() {
    if (!currentRecipe) return;
    const servings   = parseInt(DOM.servingsInput.value) || currentRecipe.baseServings;
    const multiplier = servings / currentRecipe.baseServings;

    DOM.ingredientsList.innerHTML = '';
    currentRecipe.ingredients.forEach(ing => {
        const scaled = ing.quantity * multiplier;
        const li     = document.createElement('li');
        li.className = 'ingredient-item';
        li.innerHTML = `
            <div class="ingredient-checkbox">✓</div>
            <div class="ingredient-content">
                <span class="ingredient-quantity">${formatQty(scaled)} ${ing.unit}</span>
                &nbsp;
                <span class="ingredient-name">${ing.name}</span>
            </div>
        `;
        li.addEventListener('click', () => li.classList.toggle('checked'));
        DOM.ingredientsList.appendChild(li);
    });
}

function changeServings(delta) {
    let v = parseInt(DOM.servingsInput.value) + delta;
    if (v < 1) v = 1;
    if (v > 12) v = 12;
    DOM.servingsInput.value = v;
    renderIngredients();
}

/* ========== INSTRUCTIONS ========== */
function renderInstructions() {
    if (!currentRecipe) return;
    DOM.instructionsList.innerHTML = '';
    currentRecipe.instructions.forEach((step, i) => {
        const li = document.createElement('li');
        li.className = 'instruction-item';
        li.innerHTML = `
            <div class="instruction-number">${i + 1}</div>
            <div class="instruction-content">
                <p class="instruction-text">${step}</p>
            </div>
        `;
        li.addEventListener('click', () => li.classList.toggle('checked'));
        DOM.instructionsList.appendChild(li);
    });
}

/* ========== COOKING MODE ========== */
function toggleCookingMode() {
    cookingModeOn = !cookingModeOn;
    DOM.cookingModeToggle.setAttribute('aria-pressed', String(cookingModeOn));
    if (cookingModeOn) {
        DOM.cookingModeToggle.innerHTML = '<span class="toggle-icon">✅</span><span class="toggle-text">Mode Active</span>';
    } else {
        DOM.cookingModeToggle.innerHTML = '<span class="toggle-icon">🔥</span><span class="toggle-text">Cooking Mode</span>';
    }
}

/* ========== HELPERS ========== */
function formatQty(n) {
    const map = { 0.25: '¼', 0.33: '⅓', 0.5: '½', 0.67: '⅔', 0.75: '¾' };
    const whole = Math.floor(n);
    const frac  = Math.round((n - whole) * 100) / 100;
    const sym   = map[frac] || '';
    if (sym) return whole > 0 ? `${whole} ${sym}` : sym;
    return n % 1 === 0 ? String(n) : n.toFixed(1);
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
