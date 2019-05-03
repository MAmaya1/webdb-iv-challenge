const router = require('express').Router();

const Dishes = require('../dishes/dishes-model')

router.get('/', (req, res) => {
    Dishes.getDishes()
        .then(dishes => {
            res.status(201).json(dishes)
        })
        .catch(err => {
            res.status(500).json({ error: err, message: 'Dishes data could not be retrieved.' })
        })
})

router.get('/:id', (req, res) => {
    Dishes.getDishById(req.params.id)
        .then(dish => {
            if (dish) {
                res.status(201).json(dish)
            } else {
                res.status(404).json({ errorMessage: 'A dish with the specified ID does not exist.' })
            }
        })
        .catch(err => {
            res.status(500).json({ error: err, message: 'Could not retrieve dish from database.' })
        })
})

router.post('/', (req, res) => {
    if (!req.body.name) {
        res.status(400).json({ errorMessage: 'Dishes require a name.' })
    } else {
        Dishes.addDish(req.body)
            .then(dish => {
                res.status(201).json(dish)
            })
            .catch(err => {
                res.status(500).json({ error: err, message: 'Could not add dish to database.' })
            })
    }
})

module.exports = router;