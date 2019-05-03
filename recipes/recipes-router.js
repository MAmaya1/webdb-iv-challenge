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

router.get('/:id', (req, res) => {
    Recipes.getRecipeById(req.params.id)
        .then(recipe => {
            if (recipe) {
                res.status(201).json(recipe)
            } else {
                res.status(404).json({ errorMessage: 'A recipe with the specified ID does not exist.' })
            }
        })
        .catch(err => {
            res.status(500).json({ error: err, message: 'Could not retrieve recipe from database.' })
        })
})

router.post('/', (req, res) => {
    if (!req.body.name || !req.body.dish_id) {
        res.status(400).json({ errorMessage: 'Recipes require a name and valid dish id.' })
    } else {
        Recipes.addRecipe(req.body)
            .then(recipe => {
                res.status(201).json(recipe)
            })
            .catch(err => {
                res.status(500).json({ error: err, message: 'Could not add recipe to the database.' })
            })
    }
})

module.exports = router;