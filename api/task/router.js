const express = require("express");
const Tasks = require("./model");

const router = express.Router();

router.get("/", (req, res, next) => {
  Tasks.getTasks()
    .then((tasks) => {
      res.status(200).json({
        success: true,
        data: tasks,
      });
    })
    .catch(next);
});

router.post("/", (req, res, next) => {
  Tasks.newTask()
    .then((tasks) => {
      res.status(201).json({
        success: true,
        data: tasks,
      });
    })
    .catch(next);
});

module.exports = router;
