const router = require("express").Router();
const { User, Event, Vote } = require('../../models');

// all events
router.get('/', (req, res) => {
    Event.findAll({
        include: [
            {
              model: User,
              attributes: ['username', 'id']
            },
            {
                model: Vote,
                attributes: ['id']
            }
        ]
    })
    .then(dbEventData => res.json(dbEventData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// event based on id
router.get('/:id', (req, res) => {
    Event.findOne({
        where: {
            id: req.params.id
        },
        include: [
            {
              model: User,
              attributes: ['username', 'id']
            },
            {
                model: Vote
            }
        ]
    })
    .then(dbEventData => {
        if (!dbEventData) {
            res.status(404).json({ message: 'No event found with this id' });
            return;
        }

        res.json(dbEventData)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// create an event
router.post('/', (req, res) => {
    Event.create({
        title: req.body.title,
        user_id: req.body.user_id,
        // arrays
        days: req.body.days,
        invite_emails: req.body.invite_emails
    })
    .then(dbEventData => res.json(dbEventData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// delete event
router.delete('/:id', (req, res) => {
    Event.destroy({
        where: {
          id: req.params.id
        }
    })
    .then(dbEventData => {
        if (!dbEventData) {
            res.status(404).json({ message: 'No event found with this id' });
            return;
        }

        res.json(dbEventData)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


module.exports = router;