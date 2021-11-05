const express = require("express");
const resources = require("./model");

const router = express.Router();

router.get("/", (req, res, next) => {
  resources
    .getResources()
    .then((resources) => {
      res.status(200).json({
        success: true,
        data: resources,
      });
    })
    .catch(next);
});

router.post("/", (req, res, next) => {});

module.exports = router;
