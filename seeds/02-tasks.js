
exports.seed = function(knex) {
  return knex('tasks').insert([
    {project_id: 1, id: 1, task_notes: '', task_description: 'Read about Knex', task_completed: true},
    {project_id: 1, id: 2, task_notes: 'Use W3Schools try-it SQL editor', task_description: 'Practice SQL', task_completed: true},
    {project_id: 2, id: 3, task_notes: 'Start with the next tutorial', task_description: 'Read Blockstack documentation', task_completed: false},
    {project_id: 3, id: 4, task_notes: 'For example, buildweek projects, DApp, Leaflet webapp', task_description: 'Polish portfolio projects', task_completed: false},
    {project_id: 3, id: 5, task_notes: 'Not as scary as it seems', task_description: 'Email tech lead at Geomni', task_completed: false}
  ]);
};
