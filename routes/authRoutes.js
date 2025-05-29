const express = require('express');
const router = express.Router();
const { register, login, getProfile } = require('../controllers/authController');
const { protect } = require('../middlewares/authMiddleware');
const { deleteUser } = require('../controllers/userController');

router.post('/register', register);
router.post('/login', login);
router.get('/profile', getProfile);
router.delete('/users/:id', deleteUser);
module.exports = router;
