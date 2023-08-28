const db = require('../config/db');

async function createTarefaTable() {
  const createTarefaTableQuery = `
    CREATE TABLE IF NOT EXISTS tasks (
      id SERIAL PRIMARY KEY,
      user_id INT REFERENCES users(id) NOT NULL,
      text TEXT NOT NULL,
      completed BOOLEAN DEFAULT FALSE,
      created_at TIMESTAMPTZ DEFAULT NOW(),
      updated_at TIMESTAMPTZ DEFAULT NOW()
    )
  `;

  try {
    const client = db.client; 
    await client.connect(); 

    await client.query(createTarefaTableQuery);

    console.log("Tasks table created");
  } catch (error) {
    console.error("Error creating tasks table", error);
  } finally {
    client.end(); 
}
}

createTarefaTable();
