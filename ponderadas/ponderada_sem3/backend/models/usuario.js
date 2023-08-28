const db = require('../config/db');

async function createUsuarioTable() {
  const createUsuarioTableQuery = `
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      email VARCHAR(255) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL,
      created_at TIMESTAMPTZ DEFAULT NOW(),
      updated_at TIMESTAMPTZ DEFAULT NOW()
    )
  `;

  try {
    const client = db.client;
    await client.connect();

    // Execute the create table query
    await client.query(createUsuarioTableQuery);

    console.log("User table created");
  } catch (error) {
    console.error("Error creating user table", error);
  } finally {
    client.end(); 
  }
}

createUsuarioTable();

