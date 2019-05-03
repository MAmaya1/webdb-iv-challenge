const router = require('express').Router();

const Recipes = require('../recipes/recipes-model');

router.get('/', (req, res) => {
    Recipes.getRecipes()
        .then(recipes => {
            res.status(201).json(recipes)
        })
        .catch(err => {
            res.status(500).json({ error: err, message: 'Recipes data could not be retrieved.' })
        })
})

module.exports = router;