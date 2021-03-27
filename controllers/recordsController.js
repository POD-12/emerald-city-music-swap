const db = require("../models");

// Defining methods for the recordsController
module.exports = {
  findAll: function(req, res) {
    console.log()
    db.Record
      .find({})
      // .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findbyGenre: function(req, res) {
    db.Record
      .findAll({
        where:
        {
          recordGenre: req.params.recordGenre
        }
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
   // req.body.posterName = req.user.email
    console.log("create:",req.body)
    db.Record
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Record
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Record
      .findByIdAndDelete({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
