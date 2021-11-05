const db = require("../../api/resource/router");

function getResources() {
  return db("resources");
}

module.exports = {
  getResources,
};
