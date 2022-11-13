const router = require('express').Router();

const {
  getAllthoughts,
  getThought,
  postThought,
  deleteThought,
  updateThought,
  addReaction,
  deleteReaction,
} = require('../../controllers/thoughtcontroller');

router.route('/').get(getAllthoughts).post(postThought);

router
  .route('/:thoughtId')
  .get(getThought)
  .put(updateThought)
  .delete(deleteThought);

router.route('/:thoughtId/reactions').post(addReaction);

router.route('/:thoughtId/:reactionId').delete(deleteReaction);

module.exports = router;
