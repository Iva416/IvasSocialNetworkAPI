const User = require('../models/User');
const Thought = require('../models/Thought');
const { CountryCodes } = require('validator/lib/isISO31661Alpha2');

///Get all users
const userController = {
  getAlluser(req, res) {
    User.find()
      .then((User) => res.json(User))
      .catch((err) => res.status(500).json(err));
  },

  //Get a single user by its _id and populated thought and friend data
  getUserById(req, res) {
    User.findOne({ _id: req.params.userId })
      .select('-__v')
      .then((User) =>
        !User
          ? res.status(400).json({ message: 'No User with that Id' })
          : res.json(User)
      )
      .catch((err) => res.staus(500).json(err));
  },

  //Post a new User
  postNewuser(req, res) {
    User.create(req.body)
      .then((User) => res.json(User))
      .catch((err) => res.json(err));
  },

  //Put to update used by its ID???
  updateUser(req, res) {
    User.findOneandUpdate({});
  },

  //Delete User by its _id
  deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.userId })
      .then((User) => res.json(User))
      .catch((err) => res.json(err));
  },

  // Add Friend

  addFriend(req, res) {
    console.log('You are adding a friend');
    console.log(req.body);
    Friend.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $addToSet: { friends: req.body.friend } },
      { runValidators: true, new: true }
    )

      .then((friend) =>
        !friends
          ? res.status(400).json({ message: 'No friends found with that ID' })
          : res.json(friend)
      )
      .catch((err) => res.status(500).json(err));
  },

  // Delete Friend

  deleteFriend(req, res) {
    Friend.findOneAndUpdate(
      { _id: req.params.userId },
      { $pull: { friends: req.params.friendId } },
      { runValidators: true, new: true }
    )
      .then((friend) =>
        !friend
          ? res.status(400).json({ message: 'No friend found with that ID' })
          : res.json(friend)
      )
      .catch((err) => res.status(500).json(err));
  },
};

module.exports = userController;
