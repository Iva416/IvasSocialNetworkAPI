const router = require('express').Router();

const {
  getAlluser,
  getUserById,
  postNewuser,
  deleteUser,
  updateUser,
  addFriend,
  deleteFriend,
} = require('../../controllers/usercontroller');

router.route('/').get(getAlluser).post(postNewuser);

router.route('/:userId').get(getUserById).put(updateUser).delete(deleteUser);

router.route(':userId/friends/:friendId').post(addFriend).delete(deleteFriend);

module.exports = router;
