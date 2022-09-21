// Import connect function from mongoose dependency
import { connect } from "mongoose";

import {MONGODB_URI} from "./config"

// async function waiting for connection with mongodb
(async () => {
  try {
    // db is waiting for the connection with mongodb
    const db = await connect(MONGODB_URI);
    console.log("Database connected", db.connection.name);
  } catch (error) {
    console.error(error);// bug catch
  }
})();
