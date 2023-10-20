-- Crea la tabla "actor"
CREATE TABLE actor (
    actor_id SERIAL PRIMARY KEY,
    first_name VARCHAR(255),
    last_name VARCHAR(255)
);

-- Inserta datos de ejemplo
INSERT INTO actor (first_name, last_name) VALUES ('John', 'Doe');
INSERT INTO actor (first_name, last_name) VALUES ('Jane', 'Smith');
-- Inserta más datos según sea necesario