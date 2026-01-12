const User = require('../models/user.model');

const getAllUsers = async () => {
    return await User.find();
};

const createUser = async (name) => {
    const user = new User({ name });
    return await user.save();
};

const getUserById = async (id) => {
    return await User.findById(id);
};

const updateUser = async (id, name) => {
    return await User.findByIdAndUpdate(
        id,
        { name },
        { new: true }
    );
};

const deleteUser = async (id) => {
    const user = await User.findByIdAndDelete(id);
    return user;
};

module.exports = {
    getAllUsers,
    createUser,
    getUserById,
    updateUser,
    deleteUser
};