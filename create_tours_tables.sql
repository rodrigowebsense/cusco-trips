-- Create tours table
CREATE TABLE IF NOT EXISTS tours (
  id BIGSERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  short_description TEXT,
  duration VARCHAR(50) NOT NULL,
  difficulty VARCHAR(20) NOT NULL CHECK (difficulty IN ('easy', 'moderate', 'challenging')),
  price DECIMAL(10,2) NOT NULL,
  max_group_size INTEGER NOT NULL,
  minimum_age INTEGER NOT NULL,
  image TEXT,
  gallery JSONB,
  highlights JSONB,
  included JSONB,
  excluded JSONB,
  itinerary JSONB,
  category VARCHAR(50),
  best_season VARCHAR(50),
  featured BOOLEAN DEFAULT FALSE,
  rating DECIMAL(2,1) DEFAULT 0,
  reviews_count INTEGER DEFAULT 0,
  slug VARCHAR(255) UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create tour_translations table
CREATE TABLE IF NOT EXISTS tour_translations (
  id BIGSERIAL PRIMARY KEY,
  tour_id BIGINT NOT NULL REFERENCES tours(id) ON DELETE CASCADE,
  language VARCHAR(10) NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  short_description TEXT,
  highlights TEXT,
  included TEXT,
  excluded TEXT,
  itinerary TEXT,
  UNIQUE(tour_id, language)
);

-- Create tour_images table
CREATE TABLE IF NOT EXISTS tour_images (
  id BIGSERIAL PRIMARY KEY,
  tour_id BIGINT NOT NULL REFERENCES tours(id) ON DELETE CASCADE,
  image_url TEXT NOT NULL
);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_tours_slug ON tours(slug);
CREATE INDEX IF NOT EXISTS idx_tours_category ON tours(category);
CREATE INDEX IF NOT EXISTS idx_tours_featured ON tours(featured);
CREATE INDEX IF NOT EXISTS idx_tour_translations_tour_id ON tour_translations(tour_id);
CREATE INDEX IF NOT EXISTS idx_tour_translations_language ON tour_translations(language);