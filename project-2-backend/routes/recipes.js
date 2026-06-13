// ============================================================
// routes/recipes.js
// RESTful Resource: /api/recipes
// Following DecodeLabs Rule: Resources are NOUNS. Methods are VERBS.
//
// GET    /api/recipes           → 200 All recipes (filterable)
// GET    /api/recipes/:id       → 200 Single recipe / 404 Not Found
// POST   /api/recipes           → 201 Created / 400 Bad Request
// PUT    /api/recipes/:id       → 200 Updated / 404 Not Found
// DELETE /api/recipes/:id       → 204 No Content / 404 Not Found
// ============================================================

const express         = require('express');
const router          = express.Router();
const db              = require('../data/recipes');
const { validateRecipe } = require('../middleware/validate');

// ── Helper: build a standard JSON response envelope ────────
const respond = (res, status, data, message = '') => {
    res.status(status).json({
        success: status < 400,
        status,
        message,
        ...(Array.isArray(data)
            ? { count: data.length, data }
            : { data })
    });
};

// ────────────────────────────────────────────────────────────
// GET /api/recipes
// Query params: ?category=mains  ?difficulty=Easy
// ────────────────────────────────────────────────────────────
router.get('/', (req, res) => {
    const { category, difficulty, region } = req.query;
    let results = db.getAll();

    // Filtering
    if (category)   results = results.filter(r => r.category   === category);
    if (difficulty) results = results.filter(r => r.difficulty === difficulty);
    if (region)     results = results.filter(r =>
        r.region && r.region.toLowerCase().includes(region.toLowerCase())
    );

    respond(res, 200, results, 'Recipes retrieved successfully.');
});

// ────────────────────────────────────────────────────────────
// GET /api/recipes/:id
// ────────────────────────────────────────────────────────────
router.get('/:id', (req, res) => {
    const { id } = req.params;

    // Syntactic guard — id must be a positive integer
    if (!Number.isInteger(Number(id)) || Number(id) < 1) {
        return res.status(400).json({
            success: false,
            status: 400,
            message: 'Recipe ID must be a positive integer.'
        });
    }

    const recipe = db.getById(id);
    if (!recipe) {
        return res.status(404).json({
            success: false,
            status: 404,
            message: `Recipe with ID ${id} was not found.`
        });
    }

    respond(res, 200, recipe, 'Recipe retrieved successfully.');
});

// ────────────────────────────────────────────────────────────
// POST /api/recipes
// Body: { title, origin, category, difficulty, prepTime,
//         cookTime, baseServings, ingredients[], instructions[] }
// ────────────────────────────────────────────────────────────
router.post('/', validateRecipe, (req, res) => {
    const {
        title, origin, region, category, difficulty,
        prepTime, cookTime, baseServings, imgSrc,
        ingredients, instructions
    } = req.body;

    const newRecipe = db.create({
        title:        title.trim(),
        origin:       origin.trim(),
        region:       region || 'Pakistan',
        category,
        difficulty,
        prepTime:     prepTime  || 'N/A',
        cookTime:     cookTime  || 'N/A',
        baseServings: Number(baseServings),
        imgSrc:       imgSrc    || '',
        ingredients,
        instructions
    });

    // 201 Created — a new resource was successfully created
    respond(res, 201, newRecipe, 'Recipe created successfully.');
});

// ────────────────────────────────────────────────────────────
// PUT /api/recipes/:id  — Full or partial update
// ────────────────────────────────────────────────────────────
router.put('/:id', (req, res) => {
    const { id } = req.params;

    if (!Number.isInteger(Number(id)) || Number(id) < 1) {
        return res.status(400).json({
            success: false, status: 400,
            message: 'Recipe ID must be a positive integer.'
        });
    }

    // Does the recipe exist?
    const existing = db.getById(id);
    if (!existing) {
        return res.status(404).json({
            success: false, status: 404,
            message: `Recipe with ID ${id} was not found.`
        });
    }

    // Reject empty body
    if (!req.body || Object.keys(req.body).length === 0) {
        return res.status(400).json({
            success: false, status: 400,
            message: 'Request body cannot be empty for an update.'
        });
    }

    const updated = db.update(id, req.body);
    respond(res, 200, updated, 'Recipe updated successfully.');
});

// ────────────────────────────────────────────────────────────
// DELETE /api/recipes/:id
// ────────────────────────────────────────────────────────────
router.delete('/:id', (req, res) => {
    const { id } = req.params;

    if (!Number.isInteger(Number(id)) || Number(id) < 1) {
        return res.status(400).json({
            success: false, status: 400,
            message: 'Recipe ID must be a positive integer.'
        });
    }

    const exists = db.getById(id);
    if (!exists) {
        return res.status(404).json({
            success: false, status: 404,
            message: `Recipe with ID ${id} was not found.`
        });
    }

    db.remove(id);

    // 204 No Content — success, no body returned
    res.status(204).send();
});

module.exports = router;
