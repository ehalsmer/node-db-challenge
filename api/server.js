const express = require('express');
const helmet = require('helmet');

const projectsRouter = require('./projects/projects-router');
const resourcesRouter = require('./resources/resources-router');
const tasksRouter = require('./tasks/tasks-router');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/projects', projectsRouter);
server.use('/api/resources', resourcesRouter);
server.use('/api/tasks', tasksRouter);

// middleware for puts:

function validateResource(){
    /*
    [ ] a unique Id.
    [ ] a name. This column is required.
    [ ] a description.
    */
}

function validateProject(){
    /*
    [ ] a unique Id.
    [ ] a name. This column is required.
    [ ] a description.
    [ ] a boolean that indicates if the project has been completed. 
        This column cannot be NULL, the default value should be false.
    */
}

function validateTask(){
    /*
    [ ] a unique id.
    [ ] a description of what needs to be done. This column is required.
    [ ] a notes column to add additional information.
    [ ] a boolean that indicates if the task has been completed. 
        This column cannot be NULL, the default value should be false.
    */
}





server.put('/api/projects', (req, res) => {
    
})

server.get('/api/projects', (req, res) => {
    
})

server.put('/api/tasks', (req, res) => {
    
})

server.get('/api/tasks', (req, res) => {
    
})

/*  Add endpoints for:
[ ] adding resources.
[ ] retrieving a list of resources.
[ ] adding projects.
[ ] retrieving a list of projects.
[ ] adding tasks.
[ ] retrieving a list of tasks. 
    The list of tasks should include the project name and project description.
*/


module.exports = server;
