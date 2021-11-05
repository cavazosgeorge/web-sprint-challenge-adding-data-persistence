const db = require("../../data/dbConfig");

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

module.exports = { getTasks };
