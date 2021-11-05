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

async function getByProjectId(project_id) {
  const singleProject = await db("projects")
    .where("project_id", project_id)
    .first();

  const formattedProject = {
    project_id: singleProject.project_id,
    project_name: singleProject.project_name,
    project_description: singleProject.project_description,
    project_completed: singleProject.project_completed === 0 ? false : true,
  };
  return formattedProject;
}

module.exports = {
  getProjects,
  getByProjectId,
};
