-- ============================================================
--  KINFOLK EATS — SUPABASE SCHEMA + SEED
--  Run this ONCE in the Supabase SQL Editor
--  Project 3: Database Integration | DecodeLabs Batch 2026
-- ============================================================

-- ── 1. RECIPES TABLE ─────────────────────────────────────────
CREATE TABLE IF NOT EXISTS recipes (
  id            BIGSERIAL PRIMARY KEY,           -- Auto-increment PK (Pillar 1: Schema)
  title         TEXT        NOT NULL,            -- NOT NULL constraint
  origin        TEXT        NOT NULL DEFAULT 'Pakistani',
  category      TEXT        NOT NULL CHECK (category IN ('starters','mains','desserts','soups')),  -- CHECK constraint
  difficulty    TEXT        NOT NULL CHECK (difficulty IN ('Easy','Medium','Hard')),
  prep_time     TEXT        NOT NULL,
  cook_time     TEXT        NOT NULL,
  base_servings INTEGER     NOT NULL CHECK (base_servings > 0),  -- CHECK: must be positive
  ingredients   JSONB       NOT NULL,            -- JSON array stored in PostgreSQL
  instructions  JSONB       NOT NULL,
  image_url     TEXT,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ── 2. CONTACTS TABLE ────────────────────────────────────────
CREATE TABLE IF NOT EXISTS contacts (
  id         BIGSERIAL PRIMARY KEY,
  name       TEXT        NOT NULL,
  email      TEXT        NOT NULL CHECK (email LIKE '%@%'),  -- basic email check
  message    TEXT        NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ── 3. INDEXES (faster lookup) ────────────────────────────────
CREATE INDEX IF NOT EXISTS idx_recipes_category ON recipes(category);
CREATE INDEX IF NOT EXISTS idx_contacts_email   ON contacts(email);

-- ── 4. SEED DATA — 6 Pakistani Heritage Recipes ──────────────
INSERT INTO recipes (title, origin, category, difficulty, prep_time, cook_time, base_servings, ingredients, instructions, image_url)
VALUES

('Chicken Karahi', 'Pakistani', 'mains', 'Medium', '15 min', '35 min', 4,
 '[
   {"name":"Chicken pieces","quantity":1,"unit":"kg"},
   {"name":"Tomatoes","quantity":4,"unit":"medium"},
   {"name":"Green chilies","quantity":4,"unit":""},
   {"name":"Ginger garlic paste","quantity":2,"unit":"tbsp"},
   {"name":"Oil","quantity":4,"unit":"tbsp"},
   {"name":"Cumin seeds","quantity":1,"unit":"tsp"},
   {"name":"Coriander powder","quantity":1,"unit":"tsp"},
   {"name":"Red chili powder","quantity":1,"unit":"tsp"},
   {"name":"Salt","quantity":1,"unit":"tsp"},
   {"name":"Fresh coriander","quantity":1,"unit":"handful"}
 ]'::jsonb,
 '[
   "Heat oil in a karahi (wok) on high flame.",
   "Add cumin seeds and let them splutter.",
   "Add ginger garlic paste and sauté for 1 minute.",
   "Add chicken pieces and fry until sealed on all sides (8–10 min).",
   "Add chopped tomatoes, red chili powder, coriander powder and salt.",
   "Cook on high flame, stirring frequently, until tomatoes dissolve.",
   "Add green chilies and cook until oil separates (8–10 min).",
   "Garnish with fresh coriander. Serve with naan."
 ]'::jsonb,
 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800'),

('Chicken Biryani', 'Pakistani', 'mains', 'Hard', '30 min', '60 min', 6,
 '[
   {"name":"Basmati rice","quantity":3,"unit":"cups"},
   {"name":"Chicken","quantity":1.5,"unit":"kg"},
   {"name":"Onions (sliced)","quantity":3,"unit":"large"},
   {"name":"Yogurt","quantity":1,"unit":"cup"},
   {"name":"Ginger garlic paste","quantity":3,"unit":"tbsp"},
   {"name":"Biryani masala","quantity":3,"unit":"tbsp"},
   {"name":"Saffron","quantity":1,"unit":"pinch"},
   {"name":"Warm milk","quantity":4,"unit":"tbsp"},
   {"name":"Oil","quantity":6,"unit":"tbsp"},
   {"name":"Fresh mint leaves","quantity":1,"unit":"handful"}
 ]'::jsonb,
 '[
   "Wash and soak rice for 30 minutes, then parboil until 70% done.",
   "Fry sliced onions until golden brown (birista) — set aside.",
   "Marinate chicken in yogurt, ginger garlic paste, biryani masala for 20 min.",
   "Cook marinated chicken until oil separates and chicken is 80% done.",
   "Dissolve saffron in warm milk.",
   "Layer: half the rice, all the chicken, remaining rice.",
   "Pour saffron milk and fried onions on top.",
   "Cover tightly (dum) and cook on very low flame for 20 min.",
   "Rest for 5 min, then gently fold and serve."
 ]'::jsonb,
 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800'),

('Beef Nihari', 'Pakistani', 'mains', 'Hard', '20 min', '180 min', 6,
 '[
   {"name":"Beef shank (nalli)","quantity":1,"unit":"kg"},
   {"name":"Nihari masala","quantity":4,"unit":"tbsp"},
   {"name":"Ginger garlic paste","quantity":2,"unit":"tbsp"},
   {"name":"Flour (atta)","quantity":3,"unit":"tbsp"},
   {"name":"Oil or ghee","quantity":6,"unit":"tbsp"},
   {"name":"Onion","quantity":1,"unit":"large"},
   {"name":"Salt","quantity":1.5,"unit":"tsp"},
   {"name":"Lemon","quantity":2,"unit":""},
   {"name":"Fresh ginger (julienned)","quantity":1,"unit":"inch"},
   {"name":"Fresh coriander","quantity":1,"unit":"handful"}
 ]'::jsonb,
 '[
   "Heat ghee, fry onion until golden. Add ginger garlic paste.",
   "Add beef and nihari masala. Fry for 5 minutes.",
   "Add 4 cups water, cover and cook on low heat for 2–3 hours until meat is tender.",
   "Mix flour in half cup of water to form slurry. Add to pot slowly while stirring.",
   "Simmer for 15 minutes until gravy thickens.",
   "Adjust salt. Serve with julienned ginger, lemon, and coriander on top."
 ]'::jsonb,
 'https://images.unsplash.com/photo-1547592180-85f173990554?w=800'),

('Samosas', 'Pakistani', 'starters', 'Medium', '40 min', '20 min', 4,
 '[
   {"name":"Samosa pastry sheets","quantity":12,"unit":""},
   {"name":"Potatoes (boiled, mashed)","quantity":3,"unit":"medium"},
   {"name":"Green peas","quantity":0.5,"unit":"cup"},
   {"name":"Green chilies","quantity":3,"unit":""},
   {"name":"Cumin seeds","quantity":1,"unit":"tsp"},
   {"name":"Coriander powder","quantity":1,"unit":"tsp"},
   {"name":"Amchur (dry mango powder)","quantity":0.5,"unit":"tsp"},
   {"name":"Salt","quantity":1,"unit":"tsp"},
   {"name":"Fresh coriander","quantity":1,"unit":"handful"},
   {"name":"Oil for frying","quantity":2,"unit":"cups"}
 ]'::jsonb,
 '[
   "Mix mashed potato, peas, green chilies, cumin, coriander powder, amchur, salt and fresh coriander.",
   "Take a pastry sheet and fold into a cone shape, sealing the edge with water.",
   "Fill cone with 2 tbsp of potato filling.",
   "Seal the top edge firmly, pressing together with wet fingers.",
   "Heat oil on medium flame. Fry samosas in batches until golden (4–5 min each side).",
   "Drain on paper towels. Serve with mint chutney."
 ]'::jsonb,
 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800'),

('Haleem', 'Pakistani', 'soups', 'Hard', '30 min', '180 min', 8,
 '[
   {"name":"Beef or mutton","quantity":500,"unit":"g"},
   {"name":"Mixed lentils (daal mix)","quantity":1,"unit":"cup"},
   {"name":"Wheat (gehun)","quantity":0.5,"unit":"cup"},
   {"name":"Haleem masala","quantity":3,"unit":"tbsp"},
   {"name":"Ginger garlic paste","quantity":2,"unit":"tbsp"},
   {"name":"Onion (fried)","quantity":2,"unit":"large"},
   {"name":"Oil","quantity":4,"unit":"tbsp"},
   {"name":"Salt","quantity":1.5,"unit":"tsp"},
   {"name":"Lemon","quantity":2,"unit":""},
   {"name":"Fresh ginger (julienned)","quantity":1,"unit":"inch"}
 ]'::jsonb,
 '[
   "Soak wheat and lentils overnight. Boil separately until soft.",
   "Cook meat with ginger garlic paste, haleem masala, and salt in 3 cups water until very tender.",
   "Blend or hand-pound the cooked wheat and lentils to a coarse paste.",
   "Shred the meat with two forks.",
   "Combine wheat paste, lentils, and meat in a large pot. Mix thoroughly.",
   "Cook on low heat, stirring frequently, for 30 minutes.",
   "Top with fried onions, julienned ginger, lemon juice. Serve hot."
 ]'::jsonb,
 'https://images.unsplash.com/photo-1574653853027-5382a3d23a15?w=800'),

('Gulab Jamun', 'Pakistani', 'desserts', 'Easy', '15 min', '30 min', 6,
 '[
   {"name":"Khoya (mawa)","quantity":200,"unit":"g"},
   {"name":"All-purpose flour","quantity":4,"unit":"tbsp"},
   {"name":"Baking soda","quantity":0.25,"unit":"tsp"},
   {"name":"Milk (to knead)","quantity":3,"unit":"tbsp"},
   {"name":"Sugar","quantity":2,"unit":"cups"},
   {"name":"Water","quantity":1.5,"unit":"cups"},
   {"name":"Rose water","quantity":1,"unit":"tsp"},
   {"name":"Cardamom pods","quantity":4,"unit":""},
   {"name":"Oil for frying","quantity":2,"unit":"cups"},
   {"name":"Saffron strands","quantity":1,"unit":"pinch"}
 ]'::jsonb,
 '[
   "Make sugar syrup: combine sugar, water, cardamom, rose water and saffron. Boil until slightly thick. Keep warm.",
   "Mix khoya, flour and baking soda. Add milk gradually to form a soft dough.",
   "Divide into 20 small smooth balls with no cracks.",
   "Heat oil on very low flame. Fry balls slowly, turning constantly until deep golden (8–10 min).",
   "Immediately transfer hot jamuns into warm sugar syrup.",
   "Rest for at least 30 min to absorb syrup before serving."
 ]'::jsonb,
 'https://images.unsplash.com/photo-1666110932574-4c5a05a6e0f8?w=800');

-- ── 5. VERIFICATION ──────────────────────────────────────────
SELECT COUNT(*) AS total_recipes FROM recipes;
SELECT title, category, difficulty FROM recipes ORDER BY id;
