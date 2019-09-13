exports.up = function(knex) {
  return knex.schema
    .createTable("projects", tbl => {
        tbl.increments();
        tbl.string('project_name').notNullable();
        tbl.text('project_description')
        tbl.boolean('project_completed').notNullable().defaultTo(false);
    })
    .createTable("tasks", tbl => {
        tbl.integer('project_id').unsigned().notNullable().references('id').inTable('projects').onDelete('CASCADE').onUpdate('CASCADE');
        tbl.increments();
        tbl.text('task_description').notNullable();
        tbl.text('task_notes');
        tbl.boolean('task_completed').notNullable().defaultTo(false);
    })
    .createTable("resources", tbl => {
        tbl.increments();
        tbl.string('resource_name').notNullable();
        tbl.text('resource_description');
    })
    .createTable("projectResources", tbl => {
        tbl.integer('project_id').unsigned().notNullable().references('id').inTable('projects').onDelete('CASCADE').onUpdate('CASCADE');
        tbl.integer('resource_id').unsigned().notNullable().references('id').inTable('resources').onDelete('CASCADE').onUpdate('CASCADE');
        tbl.primary(['project_id', 'resource_id']) // enforces unique combination of ids
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('projectResources')
    .dropTableIfExists('resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('projects')
};
