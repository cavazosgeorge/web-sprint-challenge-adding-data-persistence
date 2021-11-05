const db = require("../../data/dbConfig");

async function getProjects() {
  const allProjects = await db("projects");

  const projects = allProjects.map((project) => {
    const projectTest = {
      project_id: project.project_id,
      project_name: project.project_name,
      project_description: project.project_description,
      project_completed: project.project_completed === 0 ? false : true,
    };
    return projectTest;
  });
  return projects;
}

module.exports = {
  getProjects,
};
