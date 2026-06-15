// middleware/validate.js — Input validation (Pillar 4: Integrity)
// Checks all required fields before hitting the database.

const validate = {

  recipe: (req, res, next) => {
    const errors = [];
    const { title, category, difficulty, prep_time, cook_time, base_servings, ingredients, instructions } = req.body;

    if (!title || typeof title !== 'string' || title.trim() === '')
      errors.push('title is required (string)');

    const validCategories = ['starters', 'mains', 'desserts', 'soups'];
    if (!category || !validCategories.includes(category))
      errors.push(`category must be one of: ${validCategories.join(', ')}`);

    const validDifficulties = ['Easy', 'Medium', 'Hard'];
    if (!difficulty || !validDifficulties.includes(difficulty))
      errors.push(`difficulty must be one of: ${validDifficulties.join(', ')}`);

    if (!prep_time || typeof prep_time !== 'string')
      errors.push('prep_time is required (e.g. "15 min")');

    if (!cook_time || typeof cook_time !== 'string')
      errors.push('cook_time is required (e.g. "30 min")');

    if (!base_servings || typeof base_servings !== 'number' || base_servings < 1)
      errors.push('base_servings must be a positive number');

    if (!Array.isArray(ingredients) || ingredients.length === 0)
      errors.push('ingredients must be a non-empty array');

    if (!Array.isArray(instructions) || instructions.length === 0)
      errors.push('instructions must be a non-empty array');

    if (errors.length > 0) {
      return res.status(400).json({ success: false, message: 'Validation failed', errors });
    }

    next();
  },

  contact: (req, res, next) => {
    const errors = [];
    const { name, email, message } = req.body;

    if (!name || typeof name !== 'string' || name.trim() === '')
      errors.push('name is required');

    if (!email || !email.includes('@'))
      errors.push('a valid email is required');

    if (!message || typeof message !== 'string' || message.trim().length < 5)
      errors.push('message must be at least 5 characters');

    if (errors.length > 0) {
      return res.status(400).json({ success: false, message: 'Validation failed', errors });
    }

    next();
  }
};

module.exports = validate;
