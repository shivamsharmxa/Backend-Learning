const userService = require('../services/user.service');

// GET /users
const getAllUsers = (req, res) => {
    const users = userService.getAllUsers();
    res.status(200).json(users);
};

// POST /users
const createUser = (req, res) => {
    const { name } = req.body;

    if (!name) {
        return res.status(400).json({ message: 'Name is required' });
    }

    const user = userService.createUser(name);
    res.status(201).json(user);
};

// GET /users/:id
const getUserById = (req, res) => {
    const { id } = req.params;
    const user = userService.getUserById(id);

    if (!user) {
        return res.status(404).json({ message: 'User not found' });
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
