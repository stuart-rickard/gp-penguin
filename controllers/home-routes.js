const router = require("express").Router();
const { Event, User, Vote } = require("../models");


router.get("/", (req, res) => {
  Event.findAll({
    where: {
      user_id: 3
    },
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
  .then(dbEventData => {
    // serialize events to regular objects
    const events = dbEventData.map(event => event.get({ plain: true }));

    res.render('home', { 
      events,
      loggedIn: req.session.loggedIn
    });
  })
  .catch(err => {
      console.log(err);
      res.status(500).json(err);
  });
});

module.exports = router;
