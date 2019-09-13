const db = require('../../data/db-config');

module.exports = {
    getProjects
}

function getProjects(){
    return db('projects')
    .then(projects => {
        return projects
    })
}