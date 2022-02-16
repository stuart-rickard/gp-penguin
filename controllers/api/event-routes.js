const router = require("express").Router();
const { User, Event, Vote } = require('../../models');
// use sengrid to send emails to the emails on the invitee list
const connectAndSendEmail = require("../../utils/email-connect-and-send");

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
        user_id: req.session.user_id,
        // arrays
        days: req.body.days,
        invite_emails: req.body.invite_emails
    })
    .then(dbEventData => {
        const event = dbEventData.get({ plain: true });

        // for(let i = 0; i < event.invite_emails; i++){
        //     connectAndSendEmail(event.invite_emails[i], 
        //     'You have been invited to vote!',
        //     `You have received an invitation to vote on the event: "${event.title}".
        //      Please go to this URL to access the event vote page.
        //      http://localhost:3001/vote/${event.id}
        //     `
        //     );
        // }
        res.json(event);
    })
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