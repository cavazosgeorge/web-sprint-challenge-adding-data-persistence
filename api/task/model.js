const db = require("../../data/dbConfig");

// QUERY #1
async function getTasks() {
  const allTasks = await db("tasks").leftOuterJoin(
    "projects",
    "tasks.project_id",
    "projects.project_id"
  );

  const tasks = allTasks.map((tasks) => {
    const formattedTasks = {
      task_id: tasks.task_id,
      task_notes: tasks.task_notes,
      task_description: tasks.task_description,
      task_completed: tasks.task_completed === 0 ? false : true,
      project_id: tasks.project_id,
      project_name: tasks.project_name,
      project_description: tasks.project_description,
    };
    return formattedTasks;
  });
  return tasks;
}

// QUERY #2
async function taskById(task_id) {
  const tasks = await db("tasks").where("task_id", task_id).first();
  const formattedTask = {
    task_id: tasks.task_id,
    task_notes: tasks.task_notes,
    task_description: tasks.task_description,
    task_completed: tasks.task_completed === 0 ? false : true,
  };
  return formattedTask;
}

// QUERY #3
async function newTask(task) {
  const [task_id] = await db("tasks").insert(task);
  return taskById(task_id);
}

module.exports = { getTasks, taskById, newTask };
