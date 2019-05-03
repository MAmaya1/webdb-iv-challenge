
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {name: 'Marinara sauce', quantity: 1, recipe_id: 1},
        {name: 'Mozarella Cheese', quantity: 1, recipe_id: 1},
        {name: 'Pepperoni Slices', quantity: 20, recipe_id: 1},
        {name: 'Flour', quantity: 1, recipe_id: 1},
        {name: 'Oregano', quantity: 1, recipe_id: 1},
        {name: 'Garlic', quantity: 2, recipe_id: 1},
        {name: 'Flour', quantity: 1, recipe_id: 2},
        {name: 'Marinara sauce', quantity: 1, recipe_id: 2},
        {name: 'Mozarella cheese', quantity: 1, recipe_id: 2},
        {name: 'Cheddar cheese', quantity: 1, recipe_id: 2},
        {name: 'Corn Tortillas', quantity: 3, recipe_id: 3},
        {name: 'Cilantro', quantity: 1, recipe_id: 3},
        {name: 'Onion', quantity: 1, recipe_id: 3},
        {name: 'Carne Asada', quantity: 3, recipe_id: 3},
        {name: 'Salsa', quantity: 1, recipe_id: 3},
        {name: 'Guacamole', quantity: 1, recipe_id: 3},
        {name: 'Potato Buns', quantity: 2, recipe_id: 4},
        {name: 'Ground Beef', quantity: 4, recipe_id: 4},
        {name: 'American Cheese', quantity: 2, recipe_id: 4},
        {name: 'Pickes', quantity: 6, recipe_id: 4},
        {name: 'Secret Sauce', quantity: 2, recipe_id: 4},
        {name: 'Lettuce', quantity: 2, recipe_id: 4}
      ]);
    });
};
