const user = require("../models/user");

// Defining methods for the UsersController
module.exports = {
  findAll: function (req, res) {
    user
      .find(req.query)
      .sort({ date: -1 })
      .then((dbUser) => res.json(dbUser))
      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    user
      .findOne({ email: req.params.id })
      .then((dbUser) => res.json(dbUser))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    user
      .find({ email: req.body.email })
      .then((matchedUser) => {
        if (matchedUser.length === 0) {
          return user.create(req.body);
        } else {
          return user.findOneAndUpdate(
            { email: req.body.email },
            { $push: { word: req.body.word } }
          );
        }
      })

      .then((dbUser) => res.json(dbUser))
      .catch((err) => res.status(422).json(err));
  },
  update: function (req, res) {
    user
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbUser) => res.json(dbUser))
      .catch((err) => res.status(422).json(err));
  },
  remove: function (req, res) {
    user
      .findById({ _id: req.params.id })
      .then((dbUser) => dbUser.remove())
      .then((dbUser) => res.json(dbUser))
      .catch((err) => res.status(422).json(err));
  },
};
