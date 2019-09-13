
exports.seed = function(knex) {
  return knex('projects').insert([
    {id: 1, name: 'Study database management', description: 'Learn data modeling', completed: true},
    {id: 2, name: 'Build a DApp', description: 'On Blockstack', completed: false},
    {id: 3, name: 'Get hired', description: 'As a developer in Lehi, Utah', completed: false}
  ]);
};
