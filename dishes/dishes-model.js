const db = require('../data/dbConfig');

module.exports = {
    getDishes,
    getDishById
}

function getDishes() {
    return db('dishes')
}

function getDishById(id) {
    return db('dishes')
        .where({ id })
        .first();
}