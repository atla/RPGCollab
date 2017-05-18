var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/rpgcollab');

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

// Setup Database scheme

var UserSchema = new Schema({
    name: String,
    bio: String
});

var CommentSchema = new Schema({
    text: String,
    author: UserSchema,
    date: Date
})

var ProjectSchema = new Schema({
    name: String,
    subtitle: String,
    creator: UserSchema,
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
    }
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
};

exports.findAll = function (req, res) {
    Project.find({}, function (err, projects) {
        if (err) handleError(err);
        res.send(projects);
    });
};

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

exports.updateProject = function (req, res) {

    Project.findByIdAndUpdate(req.params.id, req.body, function (err) {
        if (err)
            res.send(err);
        else
            res.json({
                message: 'Project Updated!'
            });
    });
}

exports.deleteProject = function (req, res) {

    Project.findOneAndRemove(req.params.id, function (err) {
        if (err)
            res.send(err);
        else
            res.json({
                message: 'Project Deleted!'
            });
    });
}

var populateDB = function () {


    var user1 = {
        name: "atla",
        bio: "famous rpg coder"
    };
    var user2 = {
        name: "atla2",
        bio: "famous rpg coder 222"
    };

    var projects = [{
        name: "Leihwelt reboot 2",
        subtitle: "Yet another try",
        creator: user,
        contributors: [user, user2],
        summary: "Deep down the nexus lies ...",
        description: String,
        comments: [{
            text: "This is a comment",
            author: user,
            date: Date.now()
        }],
        created: Date.now(),
        private: false,
        meta: {
            votes: 12,
            favs: 3
        }
    }];

    db.collection('projects', function (err, collection) {
        collection.insert(projects, {
            safe: true
        }, function (err, result) {});
    });
};