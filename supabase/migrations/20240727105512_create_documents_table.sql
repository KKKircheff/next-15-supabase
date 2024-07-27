CREATE extension IF NOT EXISTS vector WITH SCHEMA extensions;

CREATE TABLE documents (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    body TEXT NOT NULL,
    embedding VECTOR(384)
);

