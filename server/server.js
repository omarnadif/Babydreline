const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
const port = 3001;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'Badydreline',
  password: 'postgres',
  port: 5432,
});

app.use(cors());

app.get('/getClients', async (req, res) => {
  const client = await pool.connect();
  try {
    const result = await client.query('SELECT * FROM Clients');
    res.json(result.rows);
  } finally {
    client.release();
  }
});

app.listen(port, () => {
  console.log(`Server port:  ${port}`);
});
