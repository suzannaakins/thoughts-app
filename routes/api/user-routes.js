const router = require('express').Router();

const {
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addNewFriend,
    deleteFriend
} = require('../../controllers/user-controller');

// Set up GET all and POST at /api/users
router
  .route('/')
  .get(getAllUser)
  .post(createUser);

// Set up GET one, PUT, and DELETE at /api/Users/:id
router
  .route('/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

  //POST a friend at /api/users/:userId/friends
  router.route('/:id/friends')
  .post(addNewFriend)

  //set up POST and DELETE at /api/Users/:userId/friends/:friendId
  router
    .route('/:id/friends/:friendId')
    .delete(deleteFriend)

module.exports = router;