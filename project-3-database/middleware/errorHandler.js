// middleware/errorHandler.js — Global error handler

const errorHandler = (err, _req, res, _next) => {
  console.error('🔴 Error:', err.message);

  // Supabase / PostgreSQL specific errors
  if (err.code === '23505') {
    return res.status(409).json({ success: false, message: 'Duplicate entry — this record already exists' });
  }
  if (err.code === '23502') {
    return res.status(400).json({ success: false, message: 'A required field is missing' });
  }
  if (err.code === '23514') {
    return res.status(400).json({ success: false, message: 'A value failed a database constraint check' });
  }

  res.status(500).json({ success: false, message: 'Internal server error', detail: err.message });
};

module.exports = errorHandler;
