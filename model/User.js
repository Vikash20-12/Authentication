const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        max: 20,
        min: 5
    },
    email: {
        type: String,
        required: true,
        max: 200,
        min: 8
    },
    password: {
        type: String,
        required: true,
        max: 50,
        min: 6
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('User',userSchema);
