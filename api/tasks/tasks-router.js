const express = require('express');

const Tasks = require('./tasks-model');

const router = express.Router();

router.post('/', (req, res) => {
    Tasks.addTask(req.body)
    .then(response => {
        res.status(200).json(response)
    })
})

router.get('/', (req, res) => {
    Tasks.getTasks()
    .then(response => {
        res.status(200).json(response)
    })
    .catch(error => {
        res.status(500).json(error)
    })
})


module.exports = router;