const db = require('../../data/dbConfig.js');

async function getProjects() {
    return await db('projects').select('*');
}

async function getProjectById(project_id) {
    return await db('projects').where({ project_id }).first();
}

async function addProject(project) {
    return await db('projects').insert(project)
        .then(id => {
            return getProjectById(id[0]);
        })
}

module.exports = { getProjects, getProjectById, addProject };