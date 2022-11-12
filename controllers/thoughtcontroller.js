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
  updateThought(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        !thought
          ? res.status(400).json({ message: 'No thought with that ID found' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },

  // Delete to remove a thought by its _id

  deleteThought(req, res) {
    Thought.findOneAndRemove({ _d: req.parms.thoughtId })
      .then((thought) =>
        !thought
          ? res.status(400).json({ message: 'No thought with that ID found' })
          : User.findOneAndUpdate(
              { thoughts: req.params.thoughtId },
              { $pull: { thoughts: req.params.thoughtId } },
              { new: true }
            )
      )
      .then(() => res.json({ message: 'Thought deleted!' }))
      .catch((err) => res.status(500).json(err));
  },

  // Add reaction

  addReaction(req, res) {
    console.log('You are adding a reaction');
    console.log(req.body);
    Reaction.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $addToSet: { reactions: req.body.reactions } },
      { runValidators: true, new: true }
    )

      .then((reaction) =>
        !reactions
          ? res.status(400).jason({ message: 'No reaction found with that ID' })
          : res.json(reaction)
      )
      .catch((err) => res.status(500).json(err));
  },

  // Delete reaction

  deleteReaction(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $pull: { reactions: req.params.reactionId } },
      { runValidators: true, new: true }
    )
      .then((reaction) =>
        !reaction
          ? res.status(400).json({ message: 'No reaction found with that ID' })
          : res.json(reaction)
      )
      .catch((err) => res.status(500).json(err));
  },
};
