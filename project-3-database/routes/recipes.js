// routes/recipes.js — Full CRUD for recipes via Supabase
// Pillar 3: CRUD mapped to RESTful HTTP (GET/POST/PUT/DELETE)
// Pillar 4: Parameterized queries via Supabase client (SQL injection safe)

const express  = require('express');
const router   = express.Router();
const supabase = require('../config/db');
const validate = require('../middleware/validate');

// ── GET /api/recipes ──────────────────────────────────────────
// Returns all recipes. Optional query: ?category=mains
router.get('/', async (req, res, next) => {
  try {
    let query = supabase
      .from('recipes')
      .select('*')
      .order('created_at', { ascending: false });

    // Filter by category (parameterized — safe from injection)
    if (req.query.category && req.query.category !== 'all') {
      query = query.eq('category', req.query.category);
    }

    const { data, error } = await query;
    if (error) throw error;

    res.json({ success: true, count: data.length, data });
  } catch (err) {
    next(err);
  }
});

// ── GET /api/recipes/:id ──────────────────────────────────────
router.get('/:id', async (req, res, next) => {
  try {
    const { data, error } = await supabase
      .from('recipes')
      .select('*')
      .eq('id', req.params.id)  // parameterized — never string-concatenated
      .single();

    if (error || !data) {
      return res.status(404).json({ success: false, message: `Recipe with id ${req.params.id} not found` });
    }

    res.json({ success: true, data });
  } catch (err) {
    next(err);
  }
});

// ── POST /api/recipes ─────────────────────────────────────────
router.post('/', validate.recipe, async (req, res, next) => {
  try {
    const { title, origin, category, difficulty, prep_time, cook_time, base_servings, ingredients, instructions, image_url } = req.body;

    const { data, error } = await supabase
      .from('recipes')
      .insert([{ title, origin: origin || 'Pakistani', category, difficulty, prep_time, cook_time, base_servings, ingredients, instructions, image_url }])
      .select()
      .single();

    if (error) throw error;

    res.status(201).json({ success: true, message: 'Recipe created', data });
  } catch (err) {
    next(err);
  }
});

// ── PUT /api/recipes/:id ──────────────────────────────────────
router.put('/:id', validate.recipe, async (req, res, next) => {
  try {
    const { title, origin, category, difficulty, prep_time, cook_time, base_servings, ingredients, instructions, image_url } = req.body;

    const { data, error } = await supabase
      .from('recipes')
      .update({ title, origin, category, difficulty, prep_time, cook_time, base_servings, ingredients, instructions, image_url })
      .eq('id', req.params.id)
      .select()
      .single();

    if (error || !data) {
      return res.status(404).json({ success: false, message: `Recipe with id ${req.params.id} not found` });
    }

    res.json({ success: true, message: 'Recipe updated', data });
  } catch (err) {
    next(err);
  }
});

// ── DELETE /api/recipes/:id ───────────────────────────────────
router.delete('/:id', async (req, res, next) => {
  try {
    const { data, error } = await supabase
      .from('recipes')
      .delete()
      .eq('id', req.params.id)
      .select()
      .single();

    if (error || !data) {
      return res.status(404).json({ success: false, message: `Recipe with id ${req.params.id} not found` });
    }

    res.status(204).send(); // 204 No Content — standard DELETE response
  } catch (err) {
    next(err);
  }
});

module.exports = router;
