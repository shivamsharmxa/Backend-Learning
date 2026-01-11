const users = require('../data/user.data');

const getAllUsers = () => {
    return users;
};

const createUser = (name) => {
    const user = {
        id: Date.now().toString(),
        name
    };
    users.push(user);
    return user;
};

const getUserById = (id) => {
    return users.find(user => user.id === id);
};

const updateUser = (id, name) => {
    const user = users.find(u => u.id === id);
    if (!user) return null;

    user.name = name || user.name;
    return user;
};

const deleteUser = (id) => {
    const index = users.findIndex(u => u.id === id);
    if (index === -1) return false;

    users.splice(index, 1);
    return true;
};

module.exports = {
    getAllUsers,
    createUser,
    getUserById,
    updateUser,
    deleteUser
};
