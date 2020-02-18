const express = require('express');

const router = express.Router();

const db = require('./data/dbConfig');

router.get('/', (req, res) => {
    db('cars')
    .then(cars => {
        res.status(200).json(cars);
    }).catch (err => {
        res.status(500).json({ message: 'Failed to get cars' });
    });
})

router.post('/', (req, res) => {
    db('cars')
    .insert(req.body)
    .then(created => {
        res.status(201).json(created);
    }).catch (err => {
        res.status(500).json({ message: 'Failed to create car' });
    });
})

router.put('/:id', (req, res) => {
    const { id } = req.params;
    db('cars')
    .where({ id })
    .update(req.body)
    .then(updated => {
        res.status(200).json(updated);
    }).catch (err => {
        res.status(500).json({ message: 'Failed to update user' });
    });
})

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    db('cars')
    .where({ id })
    .del()
    .then(deleted => {
        res.status(200).json(deleted);
    }).catch (err => {
        res.status(500).json({ message: 'Failed to delete car' });
    });
})

module.exports = router;