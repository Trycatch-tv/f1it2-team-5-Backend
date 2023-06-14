const User = require('../models/user.model.js');

const getUsers = async (req, res) => {
    await User.find().then(allUsers => res.json(allUsers));
}


const createUser =  (req, res) => {
    const { user_name, user_email, user_password, user_age } = req.body;
    const user = new User({ user_name, user_email, user_password, user_age });
    /*User.create({
        user_name: user_name,
        user_email: user_email,
        user_password: user_password,
        user_age: user_age
    })*/
    user.save().then(res.json({ message: 'User created' }));
}


module.exports = {
    getUsers,
    createUser
}