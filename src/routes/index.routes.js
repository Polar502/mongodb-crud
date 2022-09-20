import { Router } from "express";
import Task from "../models/Task";

const router = Router();

// Router initial
router.get("/", async (req, res) => {
  const tasks = await Task.find().lean();
  res.render("index", { tasks: tasks });
});

// Router task add
router.post("/tasks/add", async (req, res) => {
  try {
    const task = Task(req.body);
    await task.save();
    res.redirect("/");
  } catch (error) {
    console.error(error);
  }
});

router.get("/about", (req, res) => {
  res.render("about");
});

// Router get edit
router.get("/edit/:id", async(req, res) => {
  try {
    const task = await Task.findById(req.params.id).lean();
    res.render("edit", {task});
  } catch (error) {
    console.log(error.message);
  }
});

// Router post edit
router.post("/edit/:id", async(req, res) => {

  const {id } = req.params;

  await Task.findByIdAndUpdate(id, req.body);

  res.redirect("/");
});

export default router;
