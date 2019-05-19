const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const paspportLocalMongoose = require('passport-local-mongoose');

const User = new Schema({
    admin:   {
        type: Boolean,
        default: false
    }
});

User.plugin(paspportLocalMongoose);

module.exports = mongoose.model('User', User);