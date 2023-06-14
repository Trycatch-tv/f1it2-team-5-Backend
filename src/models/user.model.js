const {Schema, model} = require('mongoose');

const userSchema = new Schema(
    {
        user_name: { type: String, require: true },
        user_email: { type: String, require: true },
        user_password: { type: String, require: true },
        user_age: { type: String, require: true },

    },
    {
        versionKey: false,
    }
)

    //const User 
    module.exports  = model('users', userSchema);
//module.exports = User;
