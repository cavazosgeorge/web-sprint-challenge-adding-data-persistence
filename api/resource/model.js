const db = require("../../api/resource/router");

function getResources() {
  return db("resources");
}

async function createResource(resource) {
  const [resource_id] = await db("resources").insert(resource);
  return db("resources").where({ resource_id }).first();
}

module.exports = {
  getResources,
  createResource,
};
