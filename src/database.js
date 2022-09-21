// Import connect function from mongoose dependency
import mongoose, { connect } from "mongoose";

// async function waiting for connection with mongodb
(async () => {
  try {
    // db is waiting for the connection with mongodb
    const db = await connect("mongodb://127.0.0.1:27017/crud-mongo");
    console.log("Database connected", db.connection.name);
  } catch (error) {
    console.error(error);// bug catch
  }
})();
