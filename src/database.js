import { connect } from "mongoose";

(async () => {
  try {
    const db = await connect("mongodb://127.0.0.1:27017/crud-mongo");
    console.log("Database connected", db.connection.name);
  } catch (error) {
    console.error(error);
  }
})();
