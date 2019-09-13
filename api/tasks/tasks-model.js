const db = require('../../data/db-config');

module.exports = {
    getTasks,
    addTask
}

// use join to include project name and project description in task list

function getTasks(){
    return db('tasks').join('projects', 'project_id', '=', 'projects.id')
    .then(tasks => {
        return tasks
    })
}

function addTask(task){
    return db('tasks').insert(task)
}