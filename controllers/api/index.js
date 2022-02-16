const router = require("express").Router();

const userRoutes = require("./user-routes.js");
const eventRoutes = require("./event-routes.js");
const voteRoutes = require("./vote-routes.js");

router.use("/users", userRoutes);
router.use("/events", eventRoutes);
router.use("/votes", voteRoutes);

module.exports = router;
