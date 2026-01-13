const authService = require('../services/auth.service');

const register = async (req, res, next) => {
    try {
        const user = await authService.registerUser(req.body);
        res.status(201).json({ message: 'User registered' });
    } catch (error) {
        next(error);
    }
};

const login = async (req, res, next) => {
    try {
        const token = await authService.loginUser(req.body);
        res.status(200).json({ token });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    register,
    login
};
