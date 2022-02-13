const router = require("express").Router();
const sequelize = require("../config/connection");
const { Post, User, Comment, Vote } = require("../models");

const callback = function () {
  console.log("hello world");
};

router.get("/", (req, res) => {
  callback();
});

module.exports = router;
