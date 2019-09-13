exports.up = function(knex) {
  return knex.schema
    .createTable("projects", tbl => {
        tbl.increments();
        tbl.string('name').notNullable();
        tbl.text('description')
        tbl.boolean('completed').notNullable().defaultTo(false);
    })
    .createTable("tasks", tbl => {
        tbl.integer('project_id').unsigned().notNullable().references('id').inTable('projects').onDelete('CASCADE').onUpdate('CASCADE');
        tbl.increments();
        tbl.text('description').notNullable();
        tbl.text('notes');
        tbl.boolean('completed').notNullable().defaultTo(false);
    })
    .createTable("resources", tbl => {
        tbl.increments();
        tbl.string('name').notNullable();
        tbl.text('description');
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
