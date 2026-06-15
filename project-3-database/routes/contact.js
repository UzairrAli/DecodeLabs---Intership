// routes/contact.js — Contact form endpoints

const express  = require('express');
const router   = express.Router();
const supabase = require('../config/db');
const validate = require('../middleware/validate');

// ── POST /api/contact ─────────────────────────────────────────
router.post('/', validate.contact, async (req, res, next) => {
  try {
    const { name, email, message } = req.body;

    const { data, error } = await supabase
      .from('contacts')
      .insert([{ name, email, message }])
      .select()
      .single();

    if (error) throw error;

    res.status(201).json({ success: true, message: 'Message received! We will get back to you soon.', data });
  } catch (err) {
    next(err);
  }
});

// ── GET /api/contact ──────────────────────────────────────────
router.get('/', async (_req, res, next) => {
  try {
    const { data, error } = await supabase
      .from('contacts')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;

    res.json({ success: true, count: data.length, data });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
