// ============================================================
// routes/contact.js
// Resource: /api/contact
//
// POST /api/contact  → 201 Message received / 400 Invalid data
// ============================================================

const express = require('express');
const router  = express.Router();
const { validateContact } = require('../middleware/validate');

// In-memory contact messages store (simulates a DB table)
const messages = [];

// ────────────────────────────────────────────────────────────
// POST /api/contact  — Submit a contact / recipe-share form
// Body: { name, email, message, recipeTitle? }
// ────────────────────────────────────────────────────────────
router.post('/', validateContact, (req, res) => {
    const { name, email, message, recipeTitle } = req.body;

    const entry = {
        id:          messages.length + 1,
        name:        name.trim(),
        email:       email.trim().toLowerCase(),
        message:     message.trim(),
        recipeTitle: recipeTitle ? recipeTitle.trim() : null,
        receivedAt:  new Date().toISOString()
    };

    messages.push(entry);

    // Log to server console (in production this would go to DB / email service)
    console.log(`[CONTACT] New message from ${entry.name} <${entry.email}>`);

    res.status(201).json({
        success: true,
        status:  201,
        message: `Thank you, ${entry.name}! Your message has been received. We'll get back to you soon.`,
        data: {
            id:         entry.id,
            receivedAt: entry.receivedAt
        }
    });
});

// ────────────────────────────────────────────────────────────
// GET /api/contact  — List received messages (admin use)
// ────────────────────────────────────────────────────────────
router.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        status:  200,
        count:   messages.length,
        data:    messages
    });
});

module.exports = router;
