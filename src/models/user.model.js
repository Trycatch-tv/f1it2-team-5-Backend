const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        user_name: { type: String, require: true },
        user_email: { type: String, unique: true, require: true },
        user_password: { type: String, require: true },
        user_age: { type: String, require: true },

    },
    {
        versionKey: false,
    }
)

const User = mongoose.model('users', userSchema);

module.exports = User;