import express from "express";
import { create } from "express-handlebars";
import indexRoutes from "./routes/index.routes";
import path from "path";
import morgan from "morgan";

// router middleware
const app = express();

app.set("views", path.join(__dirname, "views"));

// engines of express
app.engine(
  ".hbs",
  create({
    layoutsDir: path.join(app.get("views"), "layouts"),//Directory of layouts
    partialsDir: path.join(app.get("views"), "partials"),//Directory of partials
    defaulLayout: "main",//Layout default
    extname: ".hbs", //file name extensions
  }).engine
);

app.set("view engine", ".hbs"); //Set main view

//Middlewares
app.use(morgan("dev")); //shows the HTTP requests and errors.
app.use(express.urlencoded({ extended: false }));

//Routes
app.use(indexRoutes);

export default app;
