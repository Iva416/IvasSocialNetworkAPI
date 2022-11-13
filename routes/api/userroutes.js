const router = require('express').Router();

const {
  getAlluser,
  getUserById,
  postNewuser,
  deleteUser,
  addReaction,
} = require('../../controllers/usercontroller');

router.route('/').get(getAlluser).post(postNewuser);

router.route('/:userId').get(getUserById).put(updateUser).delete(deleteUser);

module.exports = router;
