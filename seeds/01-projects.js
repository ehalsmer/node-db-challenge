
exports.seed = function(knex) {
  return knex('projects').insert([
    {id: 1, project_name: 'Study database management', project_description: 'Learn data modeling', project_completed: true},
    {id: 2, project_name: 'Build a DApp', project_description: 'On Blockstack', project_completed: false},
    {id: 3, project_name: 'Get hired', project_description: 'As a developer in Lehi, Utah', project_completed: false}
  ]);
};
