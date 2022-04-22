const db = require('../../data/dbConfig.js');

async function getTaskById(task_id) {
    return await db('tasks').where({ task_id }).first();
}

async function getTasks() {
    const tasks = await db('tasks').join('projects', 'tasks.project_id', 'projects.project_id');
    return tasks.map(task => task.project_completed ? { ...task, project_completed: true } : { ...task, project_completed: false });
}

async function addTask(task) {
    const [id] = await db('tasks').insert(task, 'task_id');
    let newTask = await getTaskById(id)
    newTask.project_completed = newTask.project_completed === 1 ? true : false;
    return newTask;
}

module.exports = { getTaskById, getTasks, addTask };