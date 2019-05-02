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

module.exports = router;