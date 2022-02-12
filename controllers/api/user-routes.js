const router = require("express").Router();
const { User, Event, Vote } = require('../../models');

// all users
router.get('/', (req, res) => {
    User.findAll({
        attributes: { exclude: ['password'] } 
    })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// one user based on id
router.get('/:id', (req, res) => {
    User.findOne({
        attributes: { exclude: ['password'] },
        where: {
            id: req.params.id
        },
        include: [
            {
              model: Event,
              attributes: ['id', 'title', 'days', 'invite_emails','created_at']
            }
        ]
    })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;
