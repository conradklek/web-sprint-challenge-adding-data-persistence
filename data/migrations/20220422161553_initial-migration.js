exports.up = async function(knex) {
    await knex.schema.createTable('projects', table => {
        table.increments('project_id');
        table.string('project_name').notNullable();
        table.string('project_description').notNullable();
        table.integer('project_completed').notNullable().defaultTo(0);
    })
    await knex.schema.createTable('resources', table => {
        table.increments('resource_id');
        table.string('resource_name').notNullable().unique();
        table.string('resource_description').notNullable();
    })
    await knex.schema.createTable('tasks', table => {
        table.increments('task_id');
        table.string('task_description').notNullable();
        table.string('task_notes').notNullable();
        table.integer('task_completed').notNullable().defaultTo(0);
        table.integer('project_id').notNullable().references('project_id').inTable('projects');
    })
    await knex.schema.createTable('project_resources', table => {
        table.integer('project_id').notNullable().references('project_id').inTable('projects');
        table.integer('resource_id').notNullable().references('resource_id').inTable('resources');
    })
};

exports.down = async function(knex) {
    await knex.schema.dropTable('project_resources')
    await knex.schema.dropTable('tasks')
    await knex.schema.dropTable('resources')
    await knex.schema.dropTable('projects')
};
