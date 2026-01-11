const userController = require('../controllers/user.controller');

const userRoutes = (req, res) => {
    const { method, url } = req;

    if (method === 'GET' && url === '/users') {
        userController.getAllUsers(req, res);
    }
    else if (method === 'POST' && url === '/users') {
        userController.createUser(req, res);
    }
    else if (method === 'GET' && url.startsWith('/users/')) {
        userController.getUserById(req, res);
    }
    else if (method === 'PUT' && url.startsWith('/users/')) {
        userController.updateUser(req, res);
    }
    else if (method === 'DELETE' && url.startsWith('/users/')) {
        userController.deleteUser(req, res);
    }
    else {
        res.statusCode = 404;
        res.end(JSON.stringify({ message: 'User route not found' }));
    }
};

module.exports = userRoutes;
