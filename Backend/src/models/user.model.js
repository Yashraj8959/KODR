const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        // required: true
    },
    age: {
        type: Number,
        // required: true
    },
    email: String,
    password: String
})

const UserModel = mongoose.model('User', userSchema)

module.exports = UserModel;
