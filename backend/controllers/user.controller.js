const userService = require('../services/user.service');
const parseBody = require('../utils/parseBody');

// GET /users
const getAllUsers = (req, res) => {
    const users = userService.getAllUsers();
    res.statusCode = 200;
    res.end(JSON.stringify(users));
};

// POST /users
const createUser = async (req, res) => {
    try {
        const body = await parseBody(req);

        if (!body.name) {
            res.statusCode = 400;
            return res.end(JSON.stringify({ message: 'Name is required' }));
        }

        const user = userService.createUser(body.name);
        res.statusCode = 201;
        res.end(JSON.stringify(user));
    } catch {
        res.statusCode = 400;
        res.end(JSON.stringify({ message: 'Invalid JSON' }));
    }
};

// GET /users/:id
const getUserById = (req, res) => {
    const id = req.url.split('/')[2];
    const user = userService.getUserById(id);

    if (!user) {
        res.statusCode = 404;
        res.end(JSON.stringify({ message: 'User not found' }));
    } else {
        res.statusCode = 200;
        res.end(JSON.stringify(user));
    }
};

// PUT /users/:id
const updateUser = async (req, res) => {
    const id = req.url.split('/')[2];
    const body = await parseBody(req);

    const updatedUser = userService.updateUser(id, body.name);

    if (!updatedUser) {
        res.statusCode = 404;
        res.end(JSON.stringify({ message: 'User not found' }));
    } else {
        res.statusCode = 200;
        res.end(JSON.stringify(updatedUser));
    }
};

// DELETE /users/:id
const deleteUser = (req, res) => {
    const id = req.url.split('/')[2];
    const success = userService.deleteUser(id);

    if (!success) {
        res.statusCode = 404;
        res.end(JSON.stringify({ message: 'User not found' }));
    } else {
        res.statusCode = 200;
        res.end(JSON.stringify({ message: 'User deleted' }));
    }
};

module.exports = {
    getAllUsers,
    createUser,
    getUserById,
    updateUser,
    deleteUser
};
