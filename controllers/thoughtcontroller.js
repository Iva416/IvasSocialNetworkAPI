const { Thought, User } = require('../models');

// Get all thoughts
const thoughtController = {
  getAllthoughts(req, res) {
    Thought.find()
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },

  // Get a single thought by its Id
  getThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .select('-__v')
      .then((thought) =>
        !thought
          ? res.status(400).json({ message: 'No thought with that ID found' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },

  // Post to create new thought (push the created thought's id to the users thoughts array field)
  postThought(req, res) {
    Thought.create(body)
      .then({ _id: { $push: User.thoughts } })
      .then((dbUserData) => res.status(500).json(err));
  },

  // PUT to update a thought by its _id

  // Delete to remove a thought by its _id
};
