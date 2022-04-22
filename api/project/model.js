const db = require('../../data/dbConfig.js');

async function getProjects() {
    return await db('projects').select('*');
}

async function getProjectById(project_id) {
    return await db('projects').where({ project_id }).first();
}

async function addProject(project) {
    const [id] = await db('projects').insert(project, 'project_id');
    let newProject = await getProjectById(id)
    newProject.project_completed = newProject.project_completed === 1 ? true : false;
    return newProject;
}

module.exports = { getProjects, getProjectById, addProject };