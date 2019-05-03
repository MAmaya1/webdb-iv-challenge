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
        .then(tracks => {
            if (tracks) {
                res.status(201).json(tracks)
            } else {
                res.status(404).json({ errorMessage: 'A dish with the specified ID does not exist.' })
            }
        })
        .catch(err => {
            res.status(500).json({ error: err, message: 'Could not retrieve dish from database.' })
        })
})

module.exports = router;