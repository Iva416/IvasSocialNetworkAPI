const { Thought, User } = require('../models');

// Get all thoughts
const thoughtController = {
  getAllthoughts(req, res) {
    Thought.find()
      .then((thought) => res.json(thought))
      .catch((err) => res.status(500).json(err));
  },

  // Get a single thought by its Id
  getThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .select('-__v')
      .then((thought) =>
        !thought
          ? res.status(400).json({ message: 'No thought with that ID found' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },

  // Post to create new thought (push the created thought's id to the users thoughts array field)
  postThought(req, res) {
    Thought.create(req.body)
      .then({ _id: { $push: User.thoughts } })
      .then((thought) => res.status(500).json(thought));
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
    Thought.findOneAndDelete({ _id: req.params.thoughtId })
      .then((Thought) => res.json(Thought))
      .catch((err) => res.json(err));
  },

  // Add reaction

  addReaction(req, res) {
    console.log('You are adding a reaction');
    console.log(req.body);
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $addToSet: { reactions: req.body } },
      { runValidators: true, new: true }
    )

      .then((reaction) =>
        !reaction
          ? res.status(400).jason({ message: 'No reaction found with that ID' })
          : res.json(reaction)
      )
      .catch((err) => res.status(500).json(err));
  },

  // Delete reaction

  deleteReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
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

module.exports = thoughtController;
