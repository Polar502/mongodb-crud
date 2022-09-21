import { Router } from "express";
import {
  renderTasks,
  createTask,
  renderTaskEdit,
  editTask,
  deleteTask,
  taskToggleDone,
} from "../controllers/tasks.controller";

// router middleware
const router = Router();

// ----- Routers ------

// Get tasks initial
router.get("/", renderTasks);

// Post task add
router.post("/tasks/add", createTask);

// Get toggle Done
router.get("/tasks/:id/toggleDone", taskToggleDone);

// Get Delete
router.get("/tasks/:id/delete", deleteTask);

// Get edit
router.get("/tasks/:id/edit", renderTaskEdit);

// Post edit
router.post("/tasks/:id/edit", editTask);



export default router;
