exports.up = function(knex, Promise) {
    return knex.schema.createTable('ingredients', tbl => {
        tbl.increments();
        tbl
            .string('name', 128)
            .notNullable()
        tbl
            .integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipes')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE');
        tbl
            .float('quantity')
    })
};

exports.down = function(knex, Promise) {
    knex.schema.dropTableIfExists('recipes')
};