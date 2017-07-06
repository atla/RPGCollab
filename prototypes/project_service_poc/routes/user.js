var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    name: String,
    bio: String
});

module.exports = mongoose.model("User", UserSchema);