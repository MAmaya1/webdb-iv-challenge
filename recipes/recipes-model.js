const db = require('../data/dbConfig');

module.exports = {
    getRecipes
}

function getRecipes() {
    return db('recipes')
}

function getIngredients(id) {
    return db('ingredients')
}