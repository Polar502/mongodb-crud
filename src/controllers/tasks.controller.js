import Task from "../models/Task";

// render Task in initial router
export const renderTasks = async (req, res) => {
  const tasks = await Task.find().lean();
  res.render("index", { tasks: tasks });
};

// create Task
export const createTask = async (req, res) => {
  try {
    const task = Task(req.body); //The req.body object allows you to access data in a string or a JSON object from the client side. Typically, you use the req.body object to receive POST data and PUT requests on the Express server.
    await task.save(); //Save the task
    res.redirect("/"); //Redirect to the initial route
  } catch (error) {
    console.error(error);
  }
};

// query a task and render
export const renderTaskEdit = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id).lean(); //findById function of mongoose
    res.render("edit", { task });
  } catch (error) {
    console.log(error.message);
  }
};

//query a id for update task
export const editTask = async (req, res) => {
  const { id } = req.params; //The req.params object fetches data based on the parameter specified in the URL.
  await Task.findByIdAndUpdate(id, req.body); //findByIdAndUpdate function of mongoose | The req.body object allows you to access data in a string or a JSON object from the client side. Typically, you use the req.body object to receive POST data and PUT requests on the Express server.
  res.redirect("/"); //Redirect to the initial directory
};

//query a id for delete task
export const deleteTask = async (req, res) => {
  const { id } = req.params;
  await Task.findByIdAndDelete(id); //findByIdAndDelete function of mongoose
  res.redirect("/");
};

export const taskToggleDone = async (req, res) => {
  const { id } = req.params;
  const task = await Task.findById(id); //findById function of mongoose
  task.done = !task.done; // Reverse Done state
  await task.save(); // Save Done state | function of mongoose
  res.redirect("/");
};
