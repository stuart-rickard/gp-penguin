const router = require("express").Router();
const { User, Event, Vote } = require('../../models');

router.get('/', (req, res) => {
    User.findAll()
});

module.exports = router;
