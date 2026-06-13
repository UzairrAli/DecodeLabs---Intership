// ============================================================
// server.js  —  Kinfolk Eats Backend API
// DecodeLabs Internship — Project 2: Backend API Development
// ============================================================
// Architecture:
//   IPO Model:  Input (HTTP Request)
//               → Process (Validation + Route Handler)
//               → Output (JSON Response)
//
// Bridging the Synaptic Gap:
//   Client (browser) ←→ Network ←→ This Express Server
// ============================================================

const express      = require('express');
const cors         = require('cors');
const recipesRoute = require('./routes/recipes');
const contactRoute = require('./routes/contact');
const { errorHandler, notFoundHandler } = require('./middleware/errorHandler');

const app  = express();
const PORT = process.env.PORT || 5000;

// ============================================================
// MIDDLEWARE PIPELINE
// Every request flows through this pipeline before hitting
// any route handler
// ============================================================

// Parse incoming JSON bodies
app.use(express.json());

// Parse URL-encoded form data
app.use(express.urlencoded({ extended: true }));

// CORS — allow requests from the frontend (Project 1)
app.use(cors({
    origin: [
        'http://localhost:3000',   // React dev
        'http://127.0.0.1:5500',   // Live Server (VS Code)
        'http://localhost:5500',   // Live Server alt
        '*'                        // Allows direct file:// open
    ],
    methods:            ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders:     ['Content-Type', 'Authorization'],
    optionsSuccessStatus: 200
}));

// Request logger — prints every incoming request to terminal
app.use((req, res, next) => {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}]  ${req.method.padEnd(7)} ${req.originalUrl}`);
    next();
});

// ============================================================
// ROUTES  (RESTful — Resources are Nouns, Methods are Verbs)
// ============================================================

// Health check — fast 200 ping to confirm server is alive
app.get('/api/health', (req, res) => {
    res.status(200).json({
        success: true,
        status:  200,
        message: '✅ Kinfolk Eats API is healthy and running.',
        server:  'Kinfolk Eats Backend',
        version: '1.0.0',
        uptime:  `${Math.floor(process.uptime())}s`,
        timestamp: new Date().toISOString()
    });
});

// API documentation endpoint — lists all routes
app.get('/api/docs', (req, res) => {
    res.status(200).json({
        success: true,
        status:  200,
        message: 'Kinfolk Eats API — Endpoint Reference',
        baseUrl: `http://localhost:${PORT}`,
        endpoints: [
            // Health
            { method: 'GET',    path: '/api/health',          description: 'Server health check' },
            { method: 'GET',    path: '/api/docs',            description: 'API documentation (this page)' },
            // Recipes
            { method: 'GET',    path: '/api/recipes',         description: 'Get all recipes. Query: ?category= ?difficulty= ?region=' },
            { method: 'GET',    path: '/api/recipes/:id',     description: 'Get a single recipe by ID' },
            { method: 'POST',   path: '/api/recipes',         description: 'Create a new recipe (requires JSON body)' },
            { method: 'PUT',    path: '/api/recipes/:id',     description: 'Update an existing recipe by ID' },
            { method: 'DELETE', path: '/api/recipes/:id',     description: 'Delete a recipe by ID → 204 No Content' },
            // Contact
            { method: 'POST',   path: '/api/contact',         description: 'Submit a contact / recipe-share message' },
            { method: 'GET',    path: '/api/contact',         description: 'List all received contact messages' },
        ],
        statusCodes: {
            200: 'OK — Request succeeded',
            201: 'Created — Resource created successfully',
            204: 'No Content — Resource deleted successfully',
            400: 'Bad Request — Validation failed or malformed data',
            404: 'Not Found — Resource does not exist',
            500: 'Internal Server Error — Unexpected server failure'
        },
        exampleBody: {
            POST_recipe: {
                title:        "Chicken Tikka",
                origin:       "Pakistani",
                region:       "Punjab",
                category:     "mains",
                difficulty:   "Medium",
                prepTime:     "15 min",
                cookTime:     "25 min",
                baseServings: 4,
                ingredients:  [{ name: "Chicken", quantity: 500, unit: "g" }],
                instructions: ["Marinate chicken", "Grill until charred"]
            }
        }
    });
});

// Mount route modules
app.use('/api/recipes', recipesRoute);
app.use('/api/contact', contactRoute);

// Root — friendly welcome message
app.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        message: '🍽️  Welcome to Kinfolk Eats API!',
        docs:    `http://localhost:${PORT}/api/docs`,
        health:  `http://localhost:${PORT}/api/health`
    });
});

// ============================================================
// ERROR HANDLING  (must come AFTER all routes)
// 404 for unmatched routes, then global error handler
// ============================================================
app.use(notFoundHandler);
app.use(errorHandler);

// ============================================================
// START SERVER
// ============================================================
app.listen(PORT, () => {
    console.log('');
    console.log('============================================');
    console.log('  🍽️   KINFOLK EATS API  —  RUNNING');
    console.log('============================================');
    console.log(`  URL:    http://localhost:${PORT}`);
    console.log(`  Docs:   http://localhost:${PORT}/api/docs`);
    console.log(`  Health: http://localhost:${PORT}/api/health`);
    console.log('  DecodeLabs Internship — Project 2');
    console.log('============================================');
    console.log('');
});

module.exports = app;
