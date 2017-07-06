var mongoose = require('mongoose');
var user = require('./user');

var CommentSchema = new Schema({
    text: String,
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'  
    },
    date: Date
})

module.exports = mongoose.model("Comment", CommentSchema);
