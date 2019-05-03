
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {name: 'Pepperoni Pizza', dish_id: 1, instructions: 'Combine ingredients, top with pepperoni, bake at 325F for 25 minutes.'},
        {name: 'Cheese Pizza', dish_id: 1, instructions: 'Blend mozarella and cheddar, bake at 325F for 25 minutes.'},
        {name: 'Street Tacos', dish_id: 2, instructions: 'Grill carne asada, cut it up, place on tortilla.  Top with diced onion, cilantro, guacamole and salsa.'},
        {name: 'Smash Burgers', dish_id: 3, instructions: 'Roll beef into a ball, smash onto hot skilled with flat spatula.  Top with recomended ingredients.'}
      ]);
    });
};