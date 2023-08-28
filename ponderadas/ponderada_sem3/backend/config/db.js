import { Client } from "pg";

const client = new Client({
  user: "postgres",
  host: "banco-db",
  database: "postgres",
  password: "postgres",
  port: 5432, 
});

const connectDB = async () => {
  try {
    await client.connect();
    console.log("Connected to the database");
  } catch (error) {
    console.error("Error connecting to the database", error);
  }
};

export { connectDB, client };
