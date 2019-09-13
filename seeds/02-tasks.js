
exports.seed = function(knex) {
  return knex('tasks').insert([
    {project_id: 1, id: 1, notes: '', description: 'Read about Knex', completed: true},
    {project_id: 1, id: 2, notes: 'Use W3Schools try-it SQL editor', description: 'Practice SQL', completed: true},
    {project_id: 2, id: 3, notes: 'Start with the next tutorial', description: 'Read Blockstack documentation', completed: false},
    {project_id: 3, id: 4, notes: 'For example, buildweek projects, DApp, Leaflet webapp', description: 'Polish portfolio projects', completed: false},
    {project_id: 3, id: 5, notes: 'Not as scary as it seems', description: 'Email tech lead at Geomni', completed: false}
  ]);
};
