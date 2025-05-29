const express = require('express');
const router = express.Router();

const {
  createUser,
  getAllUsers,
  getUserById,
  deleteUser
} = require('../controllers/userController');

const { protect } = require('../middlewares/userMiddleware'); // optional auth middleware

// @route   POST /api/auth/users
// @desc    Register a new user
// @access  Public
router.post('/', createUser);

// @route   GET /api/auth/users
// @desc    Get all users
// @access  Protected
router.get('/', getAllUsers);

// @route   GET /api/auth/users/:id
// @desc    Get user by ID
// @access  Protected
router.get('/:id', getUserById);

router.delete('/:id', deleteUser); // Protected route to delete user
console.log('User routes loaded');
module.exports = router;
