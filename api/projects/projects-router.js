const express = require('express');

const Projects = require('./projects-model');

const router = express.Router();

router.put('/', (req, res) => {

})

router.get('/', (req, res) => {
    Projects.getProjects()
    .then(response => {
        res.status(200).json(response)
    })
    .catch(error => {
        res.status(500).json(error)
    })
})


module.exports = router;