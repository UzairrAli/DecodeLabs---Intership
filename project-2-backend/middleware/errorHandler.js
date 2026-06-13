// ============================================================
// middleware/errorHandler.js
// Global Error Handler — catches anything that falls through
// Returns semantic HTTP status codes as taught in the PDF
// ============================================================

function errorHandler(err, req, res, next) {
    console.error(`[ERROR] ${new Date().toISOString()} — ${req.method} ${req.path}`);
    console.error(err.stack);

    // Determine status code
    const status = err.status || err.statusCode || 500;

    res.status(status).json({
        success: false,
        status,
        message: status === 500
            ? 'Internal Server Error. The server encountered an unexpected condition.'
            : err.message || 'An error occurred.',
        ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
    });
}

// 404 handler — resource not found (for undefined routes)
function notFoundHandler(req, res) {
    res.status(404).json({
        success: false,
        status: 404,
        message: `Route not found: ${req.method} ${req.originalUrl}`,
        hint: 'Check the API documentation at GET /api/docs'
    });
}

module.exports = { errorHandler, notFoundHandler };
