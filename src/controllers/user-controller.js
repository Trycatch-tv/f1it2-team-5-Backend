const User = require('../models/user.model.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//función de loggin
const singIn = async (req, res) => {
    const { user_email, user_password } = req.body;
    const user = await User.findOne({ user_email: user_email });
    if (user) {
        if (bcrypt.compare(user_password, user.user_password)) {
            const token = jwt.sign({ id: user._id }, 'api-movies', { expiresIn: 86400 });
            res.json({ user });
        } else {
            res.json({message: 'Wrong credentials'})
        } 
    } else {
        res.json({ message: 'user not found' });
    }

}

const getUsers = async (req, res) => {
    await User.find().then(allUsers => res.json(allUsers));
}


const createUser = async (req, res) => {
    const { user_name, user_email, user_password, user_age } = req.body;
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(user_password, salt);
    const user = new User({ user_name, user_email, user_password: hashedPassword, user_age });
    await user.save().then(res.json({ message: 'User created' }));
}

const deleteUser = (req, res) => {
    const auxId = req.params.idUser;
    User.deleteOne({ _id: auxId }).then(res.json({ message: 'user delete' })).catch(error => {console.log(error.message)});
}

module.exports = {
    getUsers,
    createUser,
    singIn,
    deleteUser
}