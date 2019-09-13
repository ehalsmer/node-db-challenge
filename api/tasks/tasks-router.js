const express = require("express");

const Tasks = require("./tasks-model");

const router = express.Router();

router.post("/", (req, res) => {
  Tasks.addTask(req.body).then(response => {
    res.status(200).json(response);
  });
});

router.get("/", (req, res) => {
  Tasks.getTasks()
    .then(response => {
      const boolResponse = response.map(obj => {
        return {
          id: obj.id,
          project_name: obj.project_name,
          project_description: obj.project_description,
          project_completed: Boolean(obj.project_completed),
          project_id: obj.project_id,
          task_description: obj.task_description,
          task_notes: obj.task_notes,
          task_completed: Boolean(obj.task_completed)
        };
      });
      res.status(200).json(boolResponse);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = router;
