const { thoughts } = require('../models');

const thoughtsController = {
  // get all thoughts
  getAllThoughts(req, res) {
      thoughts.find({})
      .then(data => res.json(data))
      .catch(err => {console.log(err);
          res.sendStatus(400);
      });
  },

  // get one thoughts by id
  getThoughtsById({ params }, res) {
      thoughts.findOne({ _id: params.id })
      .then(data => res.json(data))
      .catch(err => {
        console.log(err);
        res.sendStatus(400);
      });
  },

  // create thought
  createThoughts({ body }, res) {
      thoughts.create(body)
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  // update thought by id
  updateThoughtsById({ params, body }, res) {
      thoughts.findOneAndUpdate({ _id: params.id }, body, { new: true })
      .then(data => {
        if (!data) {
          res.status(404).json({ message: 'No pizza found with this id!' });
          return;
        }
        res.json(data);
      })
      .catch(err => res.status(400).json(err));
  },

  // delete user by id
  deleteThoughtsById({ params }, res) {
      thoughts.findOneAndDelete({ _id: params.id })
      .then(data => {
        if (!data) {
          res.status(404).json({ message: 'No thought found with this id!' });
          return;
        }
        res.json(data);
      })
      .catch(err => res.status(400).json(err));
  }
};

module.exports = thoughtsController;
