var express     = require('express');
var projects    = require('./routes/projects');
var app         = express();


var bodyParser  = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
    
app.get('/projects', projects.findAll);
app.get('/projects/:id', projects.findById);
app.post('/projects', projects.addProject);
app.put('/projects/:id', projects.updateProject);
app.delete('/projects/:id', projects.deleteProject);

app.listen(3000);
console.log('Listening on port 3000...');