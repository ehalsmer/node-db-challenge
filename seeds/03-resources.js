
exports.seed = function(knex) {
  return knex('resources').insert([
    {id: 1, resource_name: 'Computer', resource_description: 'Useful for coding'},
    {id: 2, resource_name: 'Training Kit', resource_description: 'Great for reference and review'},
    {id: 3, resource_name: 'Instructors', resource_description: 'Available to help'},
    {id: 4, resource_name: 'Google', resource_description: 'Always there for you'},
  ]);
};
