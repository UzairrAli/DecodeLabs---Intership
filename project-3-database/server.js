// ============================================================
//  KINFOLK EATS — PROJECT 3: DATABASE INTEGRATION
//  Stack: Node.js + Express + Supabase (PostgreSQL)
// ============================================================
require('dotenv').config(); // Load .env FIRST before anything else

const express = require('express');
const cors    = require('cors');

const recipeRoutes  = require('./routes/recipes');
const contactRoutes = require('./routes/contact');
const errorHandler  = require('./middleware/errorHandler');
const supabase      = require('./config/db');

const app  = express();
const PORT = process.env.PORT || 5000;

// ── Middleware ────────────────────────────────────────────────
app.use(cors());
app.use(express.json());

// Request logger
app.use((req, _res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// ── Routes ────────────────────────────────────────────────────
app.use('/api/recipes', recipeRoutes);
app.use('/api/contact', contactRoutes);

// Health-check — also confirms DB connectivity
app.get('/api/health', async (_req, res) => {
  try {
    const { error } = await supabase.from('recipes').select('id').limit(1);
    if (error) throw error;
    res.json({ success: true, message: '✅ Kinfolk Eats API is healthy', database: 'connected' });
  } catch {
    res.status(500).json({ success: false, message: '❌ Database unreachable', database: 'disconnected' });
  }
});

// Docs
app.get('/api/docs', (_req, res) => {
  res.json({
    title   : 'Kinfolk Eats API — Project 3',
    version : '3.0.0',
    database: 'Supabase (PostgreSQL)',
    endpoints: [
      { method: 'GET',    path: '/api/health',        desc: 'Health check + DB ping' },
      { method: 'GET',    path: '/api/recipes',       desc: 'Get all recipes (optional ?category=)' },
      { method: 'GET',    path: '/api/recipes/:id',   desc: 'Get single recipe' },
      { method: 'POST',   path: '/api/recipes',       desc: 'Create a new recipe' },
      { method: 'PUT',    path: '/api/recipes/:id',   desc: 'Update a recipe' },
      { method: 'DELETE', path: '/api/recipes/:id',   desc: 'Delete a recipe' },
      { method: 'POST',   path: '/api/contact',       desc: 'Submit contact message' },
      { method: 'GET',    path: '/api/contact',       desc: 'Get all contact messages' },
    ]
  });
});

// 404
app.use((_req, res) => res.status(404).json({ success: false, message: 'Route not found' }));

// Global error handler
app.use(errorHandler);

// ── Start ─────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log('============================================');
  console.log('  🍽️   KINFOLK EATS API  —  PROJECT 3');
  console.log('============================================');
  console.log(`  URL:      http://localhost:${PORT}`);
  console.log(`  Docs:     http://localhost:${PORT}/api/docs`);
  console.log(`  Health:   http://localhost:${PORT}/api/health`);
  console.log(`  Database: Supabase (PostgreSQL)`);
  console.log('============================================');
});
