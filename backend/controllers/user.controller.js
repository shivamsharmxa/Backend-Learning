const userService = require('../services/user.service');

// GET /users
const getAllUsers = async (req, res, next) => {
    try {
        const users = await userService.getAllUsers();
        res.status(200).json(users);
    } catch (error) {
        next(error);
    }
};

// POST /users
const createUser = (req, res, next) => {
    const { name } = req.body;

    if (!name) {
        const error = new Error('Name is required');
        error.statusCode = 400;
        return next(error);
    }

    const user = userService.createUser(name);
    res.status(201).json(user);
};

// GET /users/:id
const getUserById = (req, res, next) => {
    const { id } = req.params;
    const user = userService.getUserById(id);

    if (!user) {
        const error = new Error('User not found');
        error.statusCode = 404;
        return next(error);
    }

    res.status(200).json(user);
};

// PUT /users/:id
const updateUser = (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    const updatedUser = userService.updateUser(id, name);

    if (!updatedUser) {
        return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(updatedUser);
};

// DELETE /users/:id
const deleteUser = (req, res) => {
    const { id } = req.params;
    const success = userService.deleteUser(id);

    if (!success) {
        return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ message: 'User deleted' });
};

module.exports = {
    getAllUsers,
    createUser,
    getUserById,
    updateUser,
    deleteUser
};
