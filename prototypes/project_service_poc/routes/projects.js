var mongoose = require('mongoose');
var rooms = require('./rooms');

mongoose.connect('mongodb://localhost:27017/rpgd');

var RoomSchema = require('mongoose').model('Room').schema;



var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

// Setup Database scheme




var ProjectSchema = new Schema({
    name: String,
    subtitle: String,
    createdBy: {

        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'

    },
    contributors: [UserSchema],
    summary: String,
    description: String,
    comments: [CommentSchema],
    created: {
        type: Date,
        default: Date.now()
    },
    private: {
        type: Boolean,
        default: false
    },
    meta: {
        votes: Number,
        favs: Number
    },
    rooms: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Room'
    }]
});

var User = mongoose.model('User', UserSchema);
var Project = mongoose.model('Project', ProjectSchema);
var handleError = function (err) {
    console.log('Error', err);
}



exports.findById = function (req, res) {

    Project.findOne({
        '_id': req.params.id
    }, function (err, project) {
        if (err) return handleError(err);
        res.send(project);
    })
    .populate('createdBy')
    .populate('rooms')
};

exports.findAll = function (req, res) {
    Project.find({}, function (err, projects) {
        if (err) handleError(err);
        res.send(projects);
    });
};

exports.updateRoom = function (req, res) {

    /*Project.findByIdAndUpdate(
            info._id,
            {$push: {"rooms": }}
        )


        Contact.findByIdAndUpdate(
            info._id,
            {$push: {"messages": {title: title, msg: msg}}},
            {safe: true, upsert: true, new : true},
            function(err, model) {
                console.log(err);
            }
        );
    */
}

exports.addRoom = function (req, res) {
    // find by document id and update
    Project.findByIdAndUpdate(
        req.params.projectId, {
            $push: {
                rooms: req.body
            }
        }, {
            safe: true,
            upsert: true
        },
        function (err, model) {
            console.log(err);
        }
    );
    res.send('Done')
}

exports.addProject = function (req, res) {

    console.log('Request: ' + req);
    console.log('Request body: ' + req.body);

    var pro = new Project(req.body);
    console.log('Crating new project ' + pro);

    pro.save(function (err, result) {
        if (err) return handleError(err);
        res.send('Project created');
    })
}

exports.updateProject = function (req, res) {}
exports.deleteProject = function (req, res) {}