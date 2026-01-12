const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth.middleware');

const userController = require('../controllers/user.controller');

router.get('/users', userController.getAllUsers);
router.post('/users', authMiddleware, userController.createUser);
router.get('/users/:id', userController.getUserById);
router.put('/users/:id', authMiddleware, userController.updateUser);
router.delete('/users/:id', authMiddleware, userController.deleteUser);

module.exports = router;
