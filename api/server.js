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
