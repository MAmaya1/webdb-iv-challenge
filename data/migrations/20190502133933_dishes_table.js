exports.up = function(knex, Promise) {
    return knex.schema.createTable('dishes', tbl => {
        tbl.increments();
        tbl
            .string('name', 128)
            .notNullable()
            .unique();
    })
};

exports.down = function(knex, Promise) {
    knex.schema.dropTableIfExists('dishes')
};