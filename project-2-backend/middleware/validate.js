// ============================================================
// middleware/validate.js
// The Gatekeeper Rule: "Never Trust the Client."
// Syntactic Validation  → Is the format correct?
// Semantic Validation   → Is the logic valid?
// ============================================================

const VALID_CATEGORIES   = ['appetizers', 'mains', 'desserts', 'soups', 'sides'];
const VALID_DIFFICULTIES = ['Easy', 'Medium', 'Hard'];

// ── Validate a new or updated Recipe body ──────────────────
function validateRecipe(req, res, next) {
    const errors = [];
    const {
        title, origin, category, difficulty,
        prepTime, cookTime, baseServings,
        ingredients, instructions
    } = req.body;

    // ── SYNTACTIC VALIDATION (type & presence checks) ─────
    if (!title || typeof title !== 'string' || title.trim().length < 3) {
        errors.push({ field: 'title', message: 'Title is required and must be at least 3 characters.' });
    }
    if (!origin || typeof origin !== 'string') {
        errors.push({ field: 'origin', message: 'Origin is required (e.g. "Pakistani").' });
    }
    if (!category) {
        errors.push({ field: 'category', message: `Category is required. Valid: ${VALID_CATEGORIES.join(', ')}.` });
    }
    if (!difficulty) {
        errors.push({ field: 'difficulty', message: `Difficulty is required. Valid: ${VALID_DIFFICULTIES.join(', ')}.` });
    }
    if (!baseServings || isNaN(Number(baseServings))) {
        errors.push({ field: 'baseServings', message: 'baseServings must be a number.' });
    }
    if (!Array.isArray(ingredients) || ingredients.length === 0) {
        errors.push({ field: 'ingredients', message: 'Ingredients must be a non-empty array.' });
    }
    if (!Array.isArray(instructions) || instructions.length === 0) {
        errors.push({ field: 'instructions', message: 'Instructions must be a non-empty array.' });
    }

    // ── SEMANTIC VALIDATION (logical & business rules) ────
    if (category && !VALID_CATEGORIES.includes(category)) {
        errors.push({ field: 'category', message: `"${category}" is not a valid category. Use: ${VALID_CATEGORIES.join(', ')}.` });
    }
    if (difficulty && !VALID_DIFFICULTIES.includes(difficulty)) {
        errors.push({ field: 'difficulty', message: `"${difficulty}" is not a valid difficulty. Use: ${VALID_DIFFICULTIES.join(', ')}.` });
    }
    if (baseServings && (Number(baseServings) < 1 || Number(baseServings) > 100)) {
        errors.push({ field: 'baseServings', message: 'baseServings must be between 1 and 100.' });
    }
    if (Array.isArray(ingredients)) {
        ingredients.forEach((ing, i) => {
            if (!ing.name || !ing.quantity || !ing.unit) {
                errors.push({
                    field: `ingredients[${i}]`,
                    message: `Each ingredient must have "name", "quantity", and "unit".`
                });
            }
        });
    }
    if (Array.isArray(instructions)) {
        instructions.forEach((step, i) => {
            if (typeof step !== 'string' || step.trim().length < 5) {
                errors.push({
                    field: `instructions[${i}]`,
                    message: `Instruction step ${i + 1} must be a string with at least 5 characters.`
                });
            }
        });
    }

    if (errors.length > 0) {
        return res.status(400).json({
            success: false,
            status: 400,
            message: 'Validation failed. Please fix the errors below.',
            errors
        });
    }

    next();
}

// ── Validate the Contact / Feedback form body ──────────────
function validateContact(req, res, next) {
    const errors = [];
    const { name, email, message } = req.body;

    // Syntactic
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
        errors.push({ field: 'name', message: 'Name is required and must be at least 2 characters.' });
    }
    if (!email || typeof email !== 'string') {
        errors.push({ field: 'email', message: 'Email is required.' });
    }
    if (!message || typeof message !== 'string' || message.trim().length < 10) {
        errors.push({ field: 'message', message: 'Message is required and must be at least 10 characters.' });
    }

    // Semantic
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && !emailRegex.test(email)) {
        errors.push({ field: 'email', message: 'Invalid email format.' });
    }

    if (errors.length > 0) {
        return res.status(400).json({
            success: false,
            status: 400,
            message: 'Validation failed.',
            errors
        });
    }

    next();
}

module.exports = { validateRecipe, validateContact };
