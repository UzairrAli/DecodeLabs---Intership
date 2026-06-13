// ============================================================
// data/recipes.js  —  In-Memory Data Store
// Simulates a database. Project 3 will replace this with a
// real MongoDB / PostgreSQL connection.
// ============================================================

let recipes = [
    {
        id: 1,
        title: "Karahi Murgh (Chicken Karahi)",
        origin: "Pakistani",
        region: "Punjab",
        category: "mains",
        difficulty: "Medium",
        prepTime: "20 min",
        cookTime: "30 min",
        baseServings: 4,
        imgSrc: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=700&q=80",
        ingredients: [
            { name: "Chicken, bone-in pieces",   quantity: 800, unit: "g" },
            { name: "Tomatoes, roughly chopped", quantity: 4,   unit: "large" },
            { name: "Onions, thinly sliced",     quantity: 3,   unit: "medium" },
            { name: "Ginger-garlic paste",       quantity: 3,   unit: "tbsp" },
            { name: "Green chillies",            quantity: 4,   unit: "whole" },
            { name: "Coriander powder",          quantity: 1.5, unit: "tsp" },
            { name: "Cumin powder",              quantity: 1,   unit: "tsp" },
            { name: "Ghee",                      quantity: 4,   unit: "tbsp" },
            { name: "Fresh coriander, chopped",  quantity: 0.5, unit: "cup" },
            { name: "Salt",                      quantity: 1,   unit: "tsp" }
        ],
        instructions: [
            "Heat ghee in a large karahi (wok) over high heat until shimmering.",
            "Add sliced onions and fry until deep golden brown, about 6-8 minutes.",
            "Add ginger-garlic paste and stir for 2 minutes until the raw smell disappears.",
            "Add chicken pieces and fry on high heat for 6-7 minutes, turning until lightly seared.",
            "Add chopped tomatoes, coriander powder, cumin, and salt. Mix everything well.",
            "Toss in whole green chillies. Cook uncovered for 12-15 minutes until oil separates.",
            "Garnish with fresh coriander and sliced ginger. Serve hot with naan."
        ],
        createdAt: "2025-01-01T00:00:00.000Z",
        updatedAt: "2025-01-01T00:00:00.000Z"
    },
    {
        id: 2,
        title: "Chicken Biryani",
        origin: "Pakistani",
        region: "Hyderabad / Sindh",
        category: "mains",
        difficulty: "Hard",
        prepTime: "40 min",
        cookTime: "60 min",
        baseServings: 6,
        imgSrc: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=700&q=80",
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
            "Parboil rice with whole spices and salt until 70% cooked. Drain and set aside.",
            "Marinate chicken in yogurt, ginger-garlic paste, and biryani masala for 30 minutes.",
            "Fry sliced onions in ghee until deep golden and crispy. Reserve half for topping.",
            "Cook marinated chicken in remaining ghee and onions on high heat for 10-12 minutes.",
            "Layer rice, chicken, mint, and fried onions in a heavy-bottomed pot.",
            "Seal the pot tightly. Cook on high for 3 minutes, then lowest heat for 40 minutes (dum).",
            "Open at the table for the full aroma effect! Serve with raita and salad."
        ],
        createdAt: "2025-01-01T00:00:00.000Z",
        updatedAt: "2025-01-01T00:00:00.000Z"
    },
    {
        id: 3,
        title: "Nihari (Slow-Cooked Beef Stew)",
        origin: "Pakistani",
        region: "Lahore / Old Delhi",
        category: "mains",
        difficulty: "Medium",
        prepTime: "20 min",
        cookTime: "150 min",
        baseServings: 6,
        imgSrc: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=700&q=80",
        ingredients: [
            { name: "Beef shank (nalli)",     quantity: 1,   unit: "kg" },
            { name: "Onions, thinly sliced",  quantity: 4,   unit: "large" },
            { name: "Ginger-garlic paste",    quantity: 4,   unit: "tbsp" },
            { name: "Green chillies, sliced", quantity: 6,   unit: "whole" },
            { name: "Nihari masala",          quantity: 3,   unit: "tbsp" },
            { name: "Wheat flour (atta)",     quantity: 3,   unit: "tbsp" },
            { name: "Ghee",                   quantity: 0.5, unit: "cup" },
            { name: "Yogurt",                 quantity: 0.5, unit: "cup" },
            { name: "Water",                  quantity: 6,   unit: "cups" },
            { name: "Salt",                   quantity: 1.5, unit: "tsp" }
        ],
        instructions: [
            "Heat ghee in a large heavy pot. Fry onions until golden brown. Remove half for garnish.",
            "Add ginger-garlic paste to the pot and fry for 2 minutes.",
            "Add beef and sear on high heat for 5-7 minutes until browned on all sides.",
            "Add yogurt and nihari masala. Stir well on medium heat for 5 minutes.",
            "Pour in water, bring to a boil, then cover and simmer on very low heat for 2-2.5 hours.",
            "Mix wheat flour with a little water and stir slowly into the stew.",
            "Simmer uncovered 15 more minutes until thickened. Serve with naan and lemon."
        ],
        createdAt: "2025-01-01T00:00:00.000Z",
        updatedAt: "2025-01-01T00:00:00.000Z"
    },
    {
        id: 4,
        title: "Samosas (Crispy Pastries)",
        origin: "Pakistani",
        region: "Nationwide Street Food",
        category: "appetizers",
        difficulty: "Medium",
        prepTime: "45 min",
        cookTime: "20 min",
        baseServings: 12,
        imgSrc: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=700&q=80",
        ingredients: [
            { name: "All-purpose flour",         quantity: 2,    unit: "cups" },
            { name: "Ghee (for dough)",          quantity: 4,    unit: "tbsp" },
            { name: "Salt",                      quantity: 1,    unit: "tsp" },
            { name: "Cold water",                quantity: 0.5,  unit: "cup" },
            { name: "Potatoes, boiled & mashed", quantity: 4,    unit: "large" },
            { name: "Onion, finely chopped",     quantity: 1,    unit: "medium" },
            { name: "Green chillies, minced",    quantity: 3,    unit: "whole" },
            { name: "Cumin seeds",               quantity: 1,    unit: "tsp" },
            { name: "Garam masala",              quantity: 0.5,  unit: "tsp" },
            { name: "Fresh coriander, chopped",  quantity: 0.25, unit: "cup" },
            { name: "Oil for deep frying",       quantity: 3,    unit: "cups" }
        ],
        instructions: [
            "Rub ghee into flour and salt until it resembles breadcrumbs. Add cold water and knead into a firm dough. Rest 30 minutes.",
            "Mix mashed potatoes, onion, chillies, cumin, garam masala, and coriander for filling.",
            "Divide dough into balls, roll into ovals, cut in half to form semicircles.",
            "Fold each semicircle into a cone, seal the seam with water, fill with potato mixture.",
            "Press the open top firmly to seal. Ensure no air pockets.",
            "Heat oil to 160C. Fry 3-4 samosas at a time for 6-8 minutes until golden and crisp.",
            "Drain and serve hot with mint chutney and tamarind sauce."
        ],
        createdAt: "2025-01-01T00:00:00.000Z",
        updatedAt: "2025-01-01T00:00:00.000Z"
    },
    {
        id: 5,
        title: "Haleem",
        origin: "Pakistani",
        region: "Karachi / Lahore",
        category: "mains",
        difficulty: "Hard",
        prepTime: "30 min",
        cookTime: "180 min",
        baseServings: 8,
        imgSrc: "https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?w=700&q=80",
        ingredients: [
            { name: "Beef or mutton, cubed",        quantity: 800,  unit: "g" },
            { name: "Chana dal (chickpea lentils)", quantity: 1,    unit: "cup" },
            { name: "Moong dal",                    quantity: 0.5,  unit: "cup" },
            { name: "Masoor dal (red lentils)",     quantity: 0.5,  unit: "cup" },
            { name: "Broken wheat (dalia)",         quantity: 0.75, unit: "cup" },
            { name: "Onions, sliced",               quantity: 4,    unit: "large" },
            { name: "Ginger-garlic paste",          quantity: 4,    unit: "tbsp" },
            { name: "Ghee",                         quantity: 0.75, unit: "cup" },
            { name: "Haleem masala",                quantity: 2,    unit: "tbsp" },
            { name: "Water",                        quantity: 10,   unit: "cups" }
        ],
        instructions: [
            "Soak all dals and broken wheat together for 2 hours. Drain.",
            "Fry sliced onions in ghee until deep golden. Remove half for garnish.",
            "Add ginger-garlic paste and fry for 2 minutes. Add meat and brown well.",
            "Add all soaked grains, dals, haleem masala, and water.",
            "Simmer on very low heat for 2.5-3 hours, stirring every 20 minutes.",
            "Use a wooden spoon or hand blender to break the mixture into a thick porridge.",
            "Serve hot topped with fried onions, coriander, and a squeeze of lemon."
        ],
        createdAt: "2025-01-01T00:00:00.000Z",
        updatedAt: "2025-01-01T00:00:00.000Z"
    },
    {
        id: 6,
        title: "Gulab Jamun",
        origin: "Pakistani",
        region: "Nationwide Dessert",
        category: "desserts",
        difficulty: "Medium",
        prepTime: "25 min",
        cookTime: "30 min",
        baseServings: 6,
        imgSrc: "https://images.unsplash.com/photo-1666195786856-44ca1a14c17b?w=700&q=80",
        ingredients: [
            { name: "Full-fat milk powder",    quantity: 1,    unit: "cup" },
            { name: "All-purpose flour",       quantity: 3,    unit: "tbsp" },
            { name: "Baking powder",           quantity: 0.25, unit: "tsp" },
            { name: "Ghee, melted",            quantity: 2,    unit: "tbsp" },
            { name: "Milk (warm)",             quantity: 3,    unit: "tbsp" },
            { name: "Sugar",                   quantity: 2,    unit: "cups" },
            { name: "Water",                   quantity: 2.5,  unit: "cups" },
            { name: "Green cardamom, crushed", quantity: 5,    unit: "pods" },
            { name: "Rose water",              quantity: 2,    unit: "tbsp" },
            { name: "Oil for frying",          quantity: 3,    unit: "cups" },
            { name: "Pistachios, slivered",    quantity: 0.25, unit: "cup" }
        ],
        instructions: [
            "Make sugar syrup: combine sugar, water, and cardamom. Simmer 5 minutes. Add rose water.",
            "Mix milk powder, flour, and baking powder. Rub in melted ghee.",
            "Add warm milk gradually and mix until a soft, pliable dough forms.",
            "Divide into small equal balls. Roll between palms until very smooth.",
            "Heat oil to 130-140C (very low). Fry balls for 8-10 minutes until deep mahogany brown.",
            "Remove and drop into warm sugar syrup. Let soak for at least 1 hour.",
            "Serve warm, garnished with slivered pistachios."
        ],
        createdAt: "2025-01-01T00:00:00.000Z",
        updatedAt: "2025-01-01T00:00:00.000Z"
    }
];

// Auto-incrementing ID counter
let nextId = recipes.length + 1;

module.exports = {
    getAll:   ()       => recipes,
    getById:  (id)     => recipes.find(r => r.id === parseInt(id)),
    getByCategory: (cat) => recipes.filter(r => r.category === cat),
    create:   (data)   => {
        const recipe = {
            ...data,
            id: nextId++,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };
        recipes.push(recipe);
        return recipe;
    },
    update:   (id, data) => {
        const index = recipes.findIndex(r => r.id === parseInt(id));
        if (index === -1) return null;
        recipes[index] = { ...recipes[index], ...data, updatedAt: new Date().toISOString() };
        return recipes[index];
    },
    remove:   (id)     => {
        const index = recipes.findIndex(r => r.id === parseInt(id));
        if (index === -1) return false;
        recipes.splice(index, 1);
        return true;
    }
};
