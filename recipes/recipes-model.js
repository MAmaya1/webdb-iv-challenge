const db = require('../data/dbConfig');

module.exports = {
    getRecipes,
    getRecipeById,
    addRecipe
}

function getRecipes() {
    return db('recipes')
}

function getRecipeById(id) {
    return db('recipes')
        .where({ id })
        .first();
}

function addRecipe(recipe) {
    return db('recipes')
        .insert(recipe, 'id')
        .then(([id]) => {
            return getRecipeById(id)
        })
}