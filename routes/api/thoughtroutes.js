const router = require('express').Router();

const {
  addThought,
  removeThought,
  addReaction,
  deleteReaction,
} = require('../controllers/thoughtcontroller');

router.route('/:userId').post(postThought);

router.route('/:userId').put(addReaction).delete(removeThought);

router.route('/:userId/:thoughtId/:reactionId').delete(deleteReaction);

module.exports = router;
