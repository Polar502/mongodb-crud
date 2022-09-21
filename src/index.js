import app from "./app";
import "./database";
import { PORT } from "./config";

// Router initial
app.listen(PORT);
console.log("Express server listening on port ", PORT);
