const db = require('../../data/dbConfig.js');

async function getResourceById(resource_id) {
    return await db('resources').where({ resource_id }).first();
}

async function getResources() {
    return await db('resources').select('*');
}

async function addResource(resource) {
    return await db('resources').insert(resource)
        .then(id => {
            return getResourceById(id[0]);
        })
}

module.exports = { getResourceById, getResources, addResource };