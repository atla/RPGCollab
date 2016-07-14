var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/rpgcollab');


var Project = mongoose.model('Project', {name:String});

var project = new Project ({name:'Leihwelt Reboot'});
project.save(function (err){
    if (err){
        console.log(err);
    } else {
        console.log('project was saved');
    }
});
