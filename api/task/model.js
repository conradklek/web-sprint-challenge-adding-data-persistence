const db = require('../../data/dbConfig.js');

async function getTaskById(task_id) {
    return await db('tasks').where({ task_id }).first();
}

async function getTasks() {
    return await db('tasks').select('*');
}

async function addTask(task) {
    return await db('tasks').insert(task)
        .then(id => {
            return getTaskById(id[0]);
        })
}

module.exports = { getTaskById, getTasks, addTask };