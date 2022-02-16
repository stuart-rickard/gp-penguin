const router = require("express").Router();
const { User, Event, Vote } = require('../../models');

// get all votes
router.get('/', (req, res) => {
    Vote.findAll({
        include: [
            {
                model: Event,
                attributes: ['title', 'id']
            }
        ]
    })
    .then(dbVoteData => res.json(dbVoteData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// post a new vote to an event
router.post('/', (req, res) => {
    Vote.create({
        event_id: req.body.event_id,
        days: req.body.days,
    })
    .then(dbVoteData => res.json(dbVoteData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;