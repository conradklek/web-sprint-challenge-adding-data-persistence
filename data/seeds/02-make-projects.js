const projects = [
    { project_name: 'Project 1', project_description: 'This is project 1' },
    { project_name: 'Project 2', project_description: 'This is project 2' },
]

const resources = [
    { resource_name: 'Resource 1', resource_description: 'This is resource 1' },
    { resource_name: 'Resource 2', resource_description: 'This is resource 2' },
]

const tasks = [
    { task_description: 'Task 1', task_notes: 'This is task 1', project_id: 1 },
    { task_description: 'Task 2', task_notes: 'This is task 2', project_id: 1 },
]

const project_resources = [
    { project_id: 1, resource_id: 1 },
    { project_id: 1, resource_id: 2 },
    { project_id: 2, resource_id: 1 },
    { project_id: 2, resource_id: 2 },
]

exports.seed = async function (knex) {
    await knex('projects').insert(projects)
    await knex('resources').insert(resources)
    await knex('tasks').insert(tasks)
    await knex('project_resources').insert(project_resources)
}