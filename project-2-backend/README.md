# 🍽️ Kinfolk Eats — Backend API
### DecodeLabs Internship — Project 2: Backend API Development
**Batch 2026 | Full Stack Development Track**

---

## 📋 Overview

This is the **REST API backend** for Kinfolk Eats — a Pakistani Heritage Recipe Compendium. It powers the frontend (Project 1) by serving recipe data and handling contact form submissions through a clean, validated HTTP interface.

> *"Project 1 was the skin. Project 2 is the life."* — DecodeLabs

---

## 🚀 Quick Start

### 1. Install dependencies
```bash
npm install
```

### 2. Start the server
```bash
# Production
npm start

# Development (auto-restart on file changes)
npm run dev
```

### 3. Verify it's running
```bash
curl http://localhost:5000/api/health
```

Expected response:
```json
{
  "success": true,
  "status": 200,
  "message": "✅ Kinfolk Eats API is healthy and running.",
  "uptime": "5s"
}
```

---

## 📁 Project Structure

```
kinfolk-eats-api/
├── server.js               ← Entry point: Express app setup
├── package.json            ← Dependencies & scripts
├── data/
│   └── recipes.js          ← In-memory data store (simulates DB)
├── routes/
│   ├── recipes.js          ← Recipe CRUD endpoints
│   └── contact.js          ← Contact form endpoint
└── middleware/
    ├── validate.js          ← Input validation (Gatekeeper Rule)
    └── errorHandler.js      ← Global error handling
```

---

## 🔌 API Endpoints

Base URL: `http://localhost:5000`

### Health & Docs

| Method | Path | Description | Status |
|--------|------|-------------|--------|
| GET | `/api/health` | Server health check | 200 |
| GET | `/api/docs` | Full endpoint reference | 200 |

---

### Recipes — `/api/recipes`

#### GET /api/recipes
Retrieve all recipes. Supports query string filtering.

**Query Parameters:**
| Param | Type | Example |
|-------|------|---------|
| `category` | string | `?category=mains` |
| `difficulty` | string | `?difficulty=Easy` |
| `region` | string | `?region=Lahore` |

**Example Request:**
```bash
curl http://localhost:5000/api/recipes?category=mains
```

**Example Response (200 OK):**
```json
{
  "success": true,
  "status": 200,
  "message": "Recipes retrieved successfully.",
  "count": 4,
  "data": [
    {
      "id": 1,
      "title": "Karahi Murgh (Chicken Karahi)",
      "origin": "Pakistani",
      "category": "mains",
      "difficulty": "Medium",
      "prepTime": "20 min",
      "cookTime": "30 min",
      "baseServings": 4
    }
  ]
}
```

---

#### GET /api/recipes/:id
Retrieve a single recipe by its ID.

**Example Request:**
```bash
curl http://localhost:5000/api/recipes/1
```

**Response (200 OK):** Full recipe object including ingredients and instructions.

**Response (404 Not Found):**
```json
{
  "success": false,
  "status": 404,
  "message": "Recipe with ID 99 was not found."
}
```

---

#### POST /api/recipes
Create a new recipe.

**Example Request:**
```bash
curl -X POST http://localhost:5000/api/recipes \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Chicken Tikka",
    "origin": "Pakistani",
    "region": "Punjab",
    "category": "mains",
    "difficulty": "Medium",
    "prepTime": "15 min",
    "cookTime": "25 min",
    "baseServings": 4,
    "ingredients": [
      { "name": "Chicken breast", "quantity": 500, "unit": "g" },
      { "name": "Tikka masala",   "quantity": 2,   "unit": "tbsp" }
    ],
    "instructions": [
      "Marinate chicken in spices for 1 hour.",
      "Grill on high heat until charred at edges.",
      "Serve with mint chutney and naan."
    ]
  }'
```

**Response (201 Created):**
```json
{
  "success": true,
  "status": 201,
  "message": "Recipe created successfully.",
  "data": {
    "id": 7,
    "title": "Chicken Tikka",
    "createdAt": "2025-06-01T12:00:00.000Z"
  }
}
```

**Response (400 Bad Request — validation failed):**
```json
{
  "success": false,
  "status": 400,
  "message": "Validation failed. Please fix the errors below.",
  "errors": [
    { "field": "title",    "message": "Title is required and must be at least 3 characters." },
    { "field": "category", "message": "\"snacks\" is not a valid category. Use: appetizers, mains, desserts, soups, sides." }
  ]
}
```

---

#### PUT /api/recipes/:id
Update an existing recipe (full or partial).

**Example Request:**
```bash
curl -X PUT http://localhost:5000/api/recipes/1 \
  -H "Content-Type: application/json" \
  -d '{ "difficulty": "Easy", "prepTime": "10 min" }'
```

**Response (200 OK):** Returns the updated recipe object.

**Response (404 Not Found):** Recipe ID does not exist.

---

#### DELETE /api/recipes/:id
Delete a recipe permanently.

**Example Request:**
```bash
curl -X DELETE http://localhost:5000/api/recipes/1
```

**Response (204 No Content):** Empty body — success.

**Response (404 Not Found):** Recipe ID does not exist.

---

### Contact — `/api/contact`

#### POST /api/contact
Submit a contact or recipe-sharing message.

**Example Request:**
```bash
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Ahmed Khan",
    "email": "ahmed@example.com",
    "message": "I have a family Peshwari Chapli Kebab recipe I would love to share!",
    "recipeTitle": "Peshwari Chapli Kebab"
  }'
```

**Response (201 Created):**
```json
{
  "success": true,
  "status": 201,
  "message": "Thank you, Ahmed Khan! Your message has been received.",
  "data": {
    "id": 1,
    "receivedAt": "2025-06-01T12:00:00.000Z"
  }
}
```

---

## 📊 HTTP Status Codes Used

| Code | Meaning | When Used |
|------|---------|-----------|
| **200** | OK | Successful GET, PUT requests |
| **201** | Created | Successful POST (new resource made) |
| **204** | No Content | Successful DELETE (nothing to return) |
| **400** | Bad Request | Invalid input, failed validation |
| **404** | Not Found | Resource ID doesn't exist |
| **500** | Internal Server Error | Unexpected server crash |

---

## ✅ Validation Rules (The Gatekeeper)

### Syntactic Validation (Format Checks)
- `title`: string, min 3 characters
- `origin`: string, required
- `category`: must be one of `appetizers`, `mains`, `desserts`, `soups`, `sides`
- `difficulty`: must be one of `Easy`, `Medium`, `Hard`
- `baseServings`: number, required
- `ingredients`: non-empty array, each item needs `name`, `quantity`, `unit`
- `instructions`: non-empty array of strings, each min 5 characters

### Semantic Validation (Logic Checks)
- `baseServings` must be between 1 and 100
- `email` must match standard email format (regex)
- `message` must be at least 10 characters

---

## 🏗️ Architecture: IPO Model

```
INPUT            PROCESS                   OUTPUT
─────────────    ────────────────────────  ────────────────
HTTP Request  →  Express Middleware Stack → JSON Response
              →  Route Handler           →
              →  Validation              →
              →  Data Store              →
```

---

## 🔗 Connecting to the Frontend (Project 1)

Add this to your Project 1 `app.js` to fetch recipes from the API instead of the hardcoded array:

```javascript
const API_URL = 'http://localhost:5000/api';

async function fetchRecipes() {
    const res  = await fetch(`${API_URL}/recipes`);
    const json = await res.json();
    return json.data;
}

// Replace: renderGrid(recipes)
// With:
fetchRecipes().then(data => renderGrid(data));
```

---

## 📞 Contact
**DecodeLabs** | decodelabs.tech@gmail.com | www.decodelabs.tech
