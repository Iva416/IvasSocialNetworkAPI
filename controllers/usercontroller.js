const { User } = require('../models');

///Get all users
const usercontroller = {
  getAlluser(req, res) {
    User.find({}).populate({
      path: 'thoughts',
      select: '-__v'
        .select('-__v')
        .sort({ _id: -1 })
        .then((dbUserData) => res.json(dbUserData))
        .catch((err) => {
          console.log(err);
          res.sendStatus(400);
        }),
    });
  },

  //Get a single user by its _id and populated thought and friend data
  getUserById({ parms }, res) {
    User.findOne({ _id: parms.id }).populate({
      path: 'thoughts',
      select: '-__v'
        .select('-__v')
        .then((dbUserData) => res.json(dbUserData))
        .catch((err) => {
          console.log(err);
          res.sendStatus(400);
        }),
    });
  },

  //Post a new User
  postNewuser({ parms }, res) {
    User.create(body)
      .then((dbUserData) => res.json(err))
      .catch((err) => res.json(err));
  },

  //Put to update used by its ID???
  updateUser({ parms }, res) {
    User.findOneandUpdate({});
  },

  //Delete User by its _id
  deleteUser({ params }, res) {
    User.findOneAndDelete({ _id: parms.id })
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.json(err));
  },
};
