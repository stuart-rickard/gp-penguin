const router = require("express").Router();
const { User, Event, Vote } = require("../../models");
const { sendEmail, sendInviteEmails } = require("../../utils/email-handler");

// all events
router.get("/", (req, res) => {
  Event.findAll({
    include: [
      {
        model: User,
        attributes: ["username", "id"],
      },
      {
        model: Vote,
        attributes: ["id"],
      },
    ],
  })
    .then((dbEventData) => res.json(dbEventData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// event based on id
router.get("/:id", (req, res) => {
  Event.findOne({
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: User,
        attributes: ["username", "id"],
      },
      {
        model: Vote,
      },
    ],
  })
    .then((dbEventData) => {
      if (!dbEventData) {
        res.status(404).json({ message: "No event found with this id" });
        return;
      }

      res.json(dbEventData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// create an event
router.post("/", (req, res) => {
  let newEventID = "";
  const title = req.body.title;
  // user_id: req.session.user_id,
  const userID = 1;
  // arrays
  const days = req.body.days;
  const inviteEmails = req.body.invite_emails;

  Event.create({
    title: title,
    // user_id: req.session.user_id,
    user_id: userID,
    // arrays
    days: days,
    invite_emails: inviteEmails,
  })
    .then((dbEventData) => {
      console.log("inside event.create");
      newEventID = dbEventData.id;
      console.log(newEventID);
      sendInviteEmails(inviteEmails, title, newEventID);

      res.json(dbEventData);
    })

    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// delete event
router.delete("/:id", (req, res) => {
  Event.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbEventData) => {
      if (!dbEventData) {
        res.status(404).json({ message: "No event found with this id" });
        return;
      }

      res.json(dbEventData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
