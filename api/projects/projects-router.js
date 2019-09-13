const express = require('express');

const Projects = require('./projects-model');

const router = express.Router();

function validateProject(req, res, next){
    const project = req.body;
    if(!project.name){
        res.status(400).json({message: 'Missing required name field'}).end()
    }
    // else if(!project.project_completed){
    //     res.status(400).json({message: 'Missing required completed field'}).end()
    // }
    // else if(typeof project.project_completed != boolean){
    //     res.status(400).json({message: 'Completed must be of type Boolean'}).end()
    // }
    next();
}

router.post('/', (req, res) => {
    Projects.addProject(req.body)
    .then(response => {
        res.status(200).json(response)
    })
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