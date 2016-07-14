var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/rpgcollab');

// Setup Database scheme

var UserSchema = new Schema({
    name:String,
    bio:String
});

var CommentSchema = new Schema({
    text:String,
    author: UserSchema,
    date:Date
})

var ProjectModel = new Schema({
    name: String,
    subtitle: String,
    creator: UserSchema,
    contributors: [UserSchema],
    summary: String,
    description: String,
    comments: [CommentSchema],
    created: {type: Date, default: Date.now},
    private: {type: Boolean, default: false},
    meta: {
        votes: Number,
        favs: Number
    }
}
);

var userModel = mongoose.model('User', UserSchema);
var projectModel = mongoose.model('Project', ProjectModel);


// Setup test data



var user1 = new User({name:'atla', bio:'recrational game developer loving oldschool RPGs'});
var user2 = new User({name:'hexoor', bio:'D&D fan'});

var project1 = new Project ();

project1.name = 'Leihwelt Reboot 2';
project1.subtitle = 'Gonna try it again!';
project1.creator = user1;
project1.comments = [
    {text:'Setting up the initial idea', author: user1, date: Date.now},
    {text:'Some random comment', author: user1, date: Date.now},
    {text:'This is gonna be good', author: user2, date: Date.now},
    {text:'SHould be discussing this', author: user1, date: Date.now},
]

project1.save(function (err){
    if (err){
        console.log(err);
    } else {
        console.log('project was saved');
    }
});


var project2 = new Project();

project2.name = "Minimal D&D";
project2.subtitle = "Bring back the spirit";
project2.creator = user2;

project2.save(function (err){
    if (err){
        console.log(err);
    } else {
        console.log('project was saved');
    }
});
