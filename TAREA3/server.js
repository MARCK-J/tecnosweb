const express = require('express');
const { Pool } = require('pg');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Configuración de la conexión a la base de datos PostgreSQL
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'Tarea3',
  password: 'lolsito101',
  port: 5432,
});

// Middleware para parsear JSON y datos de formulario
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Ruta para obtener todos los actores
app.get('/actors', async (req, res) => {
  const { rows } = await pool.query('SELECT * FROM actor');
  res.json(rows);
});

// Ruta para obtener un actor por ID
app.get('/actors/:id', async (req, res) => {
  const { id } = req.params;
  const { rows } = await pool.query('SELECT * FROM actor WHERE actor_id = $1', [id]);
  res.json(rows[0]);
});

// Ruta para crear un nuevo actor
app.post('/actors', async (req, res) => {
  const { first_name, last_name } = req.body;
  const { rows } = await pool.query('INSERT INTO actor (first_name, last_name) VALUES ($1, $2) RETURNING *', [first_name, last_name]);
  res.json(rows[0]);
});

// Ruta para actualizar un actor por ID
app.put('/actors/:id', async (req, res) => {
  const { id } = req.params;
  const { first_name, last_name } = req.body;
  const { rows } = await pool.query('UPDATE actor SET first_name = $1, last_name = $2 WHERE actor_id = $3 RETURNING *', [first_name, last_name, id]);
  res.json(rows[0]);
});

// Ruta para eliminar un actor por ID
app.delete('/actors/:id', async (req, res) => {
  const { id } = req.params;
  await pool.query('DELETE FROM actor WHERE actor_id = $1', [id]);
  res.json({ message: 'Actor eliminado correctamente.' });
});

// Inicia el servidor en el puerto 3000
app.listen(port, () => {
  console.log(`Servidor Express.js en ejecución en el puerto ${port}`);
});
