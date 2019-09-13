const db = require('../../data/db-config');

module.exports = {
    getResources,
    addResource
}

function getResources(){
    return db('resources')
    .then(resources => {
        return resources
    })
}

function addResource(resource){
    return db('resources').insert(resource)
}