
exports.seed = function(knex) {
  return knex('resources').insert([
    {id: 1, name: 'Computer', description: 'Useful for coding'},
    {id: 2, name: 'Training Kit', description: 'Great for reference and review'},
    {id: 3, name: 'Instructors', description: 'Available to help'},
    {id: 4, name: 'Google', description: 'Always there for you'},
  ]);
};
