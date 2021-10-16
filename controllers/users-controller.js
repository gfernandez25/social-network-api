const { users } = require('../models');

const usersController = {
  // get all users
  getAllUsers(req, res) {
    users.find({})
      .then(data => res.json(data))
      .catch(err => {console.log(err);
          res.sendStatus(400);
      });
  },

  // get one user by id
  getUserById({ params }, res) {
    users.findOne({ _id: params.id })
      .then(data => res.json(data))
      .catch(err => {
        console.log(err);
        res.sendStatus(400);
      });
  },

  // create user
  createUser({ body }, res) {
      users.create(body)
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  // update user by id
  updateUserById({ params, body }, res) {
    users.findOneAndUpdate({ _id: params.id }, body, { new: true })
      .then(data => {
        if (!data) {
          res.status(404).json({ message: 'No user found with this id!' });
          return;
        }
        res.json(data);
      })
      .catch(err => res.status(400).json(err));
  },

  // delete user by id
  deleteUserById({ params }, res) {
    users.findOneAndDelete({ _id: params.id })
      .then(data => {
        if (!data) {
          res.status(404).json({ message: 'No pizza found with this id!' });
          return;
        }
        res.json(data);
      })
      .catch(err => res.status(400).json(err));
  }
};

module.exports = usersController;
