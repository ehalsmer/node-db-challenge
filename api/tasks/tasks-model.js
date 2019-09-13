const db = require('../../data/db-config');

module.exports = {
    getTasks
}

function getTasks(){
    return db('tasks')
    .then(tasks => {
        return tasks
    })
}