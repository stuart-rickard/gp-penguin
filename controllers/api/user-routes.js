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
    .then(dbUserData => {
        // if user doesnt exist or has been deleted
        if (!dbUserData) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
        }
        // send the json of that user from the table as an object
        res.json(dbUserData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// create a new user
router.post('/', (req, res) => {
    User.create({
        username: req.body.username,
        email: req.body.email,
        // this password gets hashed for security before getting
        // saved in the database. see User.js
        password: req.body.password
    })
    .then(dbUserData => {
        res.json(dbUserData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
    User.destroy({
        where: {
          id: req.params.id
        }
    })
    .then(dbUserData => {
        if (!dbUserData) {
            res.status(404).json({ message: 'No user found with this id' });
            return;
        }
        res.json(dbUserData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;
