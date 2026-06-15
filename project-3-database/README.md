# 🗄️ Kinfolk Eats — Project 3: Database Integration
### DecodeLabs Internship — Batch 2026 | Full Stack Track

---

## 📌 What This Is

A Node.js + Express REST API connected to **Supabase (PostgreSQL)** — a real cloud database.
Data is no longer stored in temporary memory arrays. Every recipe and contact message is permanently saved.

**Stack:** Node.js · Express · Supabase · PostgreSQL

---

## 📁 Folder Structure

```
project-3-database/
├── server.js                 ← Entry point
├── package.json              ← Dependencies
├── .env.example              ← Template for your credentials
├── config/
│   ├── db.js                 ← Supabase client
│   └── schema.sql            ← Database schema + seed data (run in Supabase)
├── routes/
│   ├── recipes.js            ← Full CRUD endpoints
│   └── contact.js            ← Contact form endpoints
└── middleware/
    ├── validate.js           ← Input validation
    └── errorHandler.js       ← Global error handler
```

---

## 🚀 Step-by-Step Setup

### STEP 1 — Create a Free Supabase Account

1. Go to **supabase.com** → click "Start your project" → Sign up (use GitHub or email)
2. Click **"New Project"**
3. Fill in:
   - **Name:** `kinfolk-eats`
   - **Database Password:** choose something simple (e.g. `kinfolk2026`) — write it down
   - **Region:** pick the closest one to you
4. Click **"Create new project"** → wait ~2 minutes for it to set up

---

### STEP 2 — Run the Database Schema

This creates your tables and fills them with 6 Pakistani recipes.

1. In your Supabase project, click **"SQL Editor"** in the left sidebar
2. Click **"New query"**
3. Open the file `config/schema.sql` from your downloaded project
4. Copy **ALL** the content and paste it into the Supabase SQL editor
5. Click the green **"Run"** button
6. You should see at the bottom: `6 rows` returned — your recipes are in the database ✅

---

### STEP 3 — Get Your Credentials

1. In Supabase, click **"Project Settings"** (gear icon, bottom left)
2. Click **"API"**
3. You will see two things — copy both:
   - **Project URL** → looks like `https://abcdefgh.supabase.co`
   - **anon / public key** → a long string starting with `eyJ...`

---

### STEP 4 — Create Your .env File

1. In your `project-3-database` folder, find the file `.env.example`
2. Copy it and rename the copy to `.env`
3. Open `.env` in Notepad and fill in your values:

```
SUPABASE_URL=https://YOUR_PROJECT_ID.supabase.co
SUPABASE_ANON_KEY=eyJ...your_key_here...
PORT=5000
```

Save and close. **Never upload this file to GitHub.**

---

### STEP 5 — Install and Run

Open the `project-3-database` folder → click the address bar → type `cmd` → press Enter.

```bash
npm install
npm start
```

You should see:
```
============================================
  🍽️   KINFOLK EATS API  —  PROJECT 3
============================================
  URL:      http://localhost:5000
  Database: Supabase (PostgreSQL)
============================================
```

---

### STEP 6 — Test It Works

Open your browser and visit these URLs:

| URL | What you should see |
|-----|-------------------|
| `http://localhost:5000/api/health` | `"database": "connected"` ✅ |
| `http://localhost:5000/api/recipes` | All 6 Pakistani recipes as JSON ✅ |
| `http://localhost:5000/api/recipes/1` | Single recipe ✅ |
| `http://localhost:5000/api/docs` | Full endpoint list ✅ |

---

## 🔌 API Endpoints

| Method | Endpoint | Description | HTTP Status |
|--------|----------|-------------|-------------|
| GET | `/api/health` | Health check + DB ping | 200 |
| GET | `/api/docs` | Endpoint reference | 200 |
| GET | `/api/recipes` | Get all recipes | 200 |
| GET | `/api/recipes?category=mains` | Filter by category | 200 |
| GET | `/api/recipes/:id` | Get one recipe | 200 / 404 |
| POST | `/api/recipes` | Create recipe | 201 |
| PUT | `/api/recipes/:id` | Update recipe | 200 / 404 |
| DELETE | `/api/recipes/:id` | Delete recipe | 204 / 404 |
| POST | `/api/contact` | Submit message | 201 |
| GET | `/api/contact` | Get all messages | 200 |

---

## 🧱 Database Schema (Pillar 1: Blueprint)

### recipes table
| Column | Type | Constraint |
|--------|------|------------|
| id | BIGSERIAL | PRIMARY KEY |
| title | TEXT | NOT NULL |
| origin | TEXT | NOT NULL, DEFAULT 'Pakistani' |
| category | TEXT | NOT NULL, CHECK IN ('starters','mains','desserts','soups') |
| difficulty | TEXT | NOT NULL, CHECK IN ('Easy','Medium','Hard') |
| prep_time | TEXT | NOT NULL |
| cook_time | TEXT | NOT NULL |
| base_servings | INTEGER | NOT NULL, CHECK > 0 |
| ingredients | JSONB | NOT NULL |
| instructions | JSONB | NOT NULL |
| image_url | TEXT | nullable |
| created_at | TIMESTAMPTZ | DEFAULT NOW() |

### contacts table
| Column | Type | Constraint |
|--------|------|------------|
| id | BIGSERIAL | PRIMARY KEY |
| name | TEXT | NOT NULL |
| email | TEXT | NOT NULL, CHECK contains '@' |
| message | TEXT | NOT NULL |
| created_at | TIMESTAMPTZ | DEFAULT NOW() |

---

## 🔗 Connect All 3 Projects

With the backend running, open `project-1-frontend/index.html`.
You'll see **🟢 Live — data loaded from API** — the frontend now reads from your real Supabase database.

---

## 📤 Upload to GitHub

Same as before — but **never upload `.env`**:

1. Go to your `kinfolk-eats` repo on GitHub
2. Click "Add file" → "Upload files"  
3. Type in path: `project-3-database/`
4. Drag in ALL files **except `.env`** (it has your password)
5. Commit message: `"Add Project 3 Database Integration"`

> Upload `.env.example` (the template with fake values) — that's safe to share.

---

## ✅ DecodeLabs Compliance Checklist

| Requirement | Implementation |
|------------|---------------|
| Design a database schema | ✅ `schema.sql` — two tables with PRIMARY KEY, NOT NULL, CHECK constraints |
| Perform CRUD operations | ✅ GET, POST, PUT, DELETE on `/api/recipes` |
| Ensure proper data handling | ✅ Parameterized queries via Supabase client (SQL injection safe) |
| Use a real database | ✅ Supabase (PostgreSQL) — permanent cloud storage |
| Data integrity constraints | ✅ UNIQUE, NOT NULL, CHECK at schema level |
| Injection protection | ✅ Supabase SDK never concatenates raw SQL strings |

---

*© 2026 Kinfolk Eats — DecodeLabs Internship Program, Batch 2026*
