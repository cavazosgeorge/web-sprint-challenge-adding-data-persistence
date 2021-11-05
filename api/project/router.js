const express = require("express");
const projectsModel = require("./model");

const router = express.Router();

router.get("/", (req, res, next) => {
  projectsModel
    .getProjects()
    .then((projects) => {
      res.status(200).json({
        success: true,
        data: projects,
      });
    })
    .catch(next);
});

module.exports = router;
