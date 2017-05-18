var express     = require('express');
var projects    = require('./routes/projects');
var app         = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

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

var port = 5483;

app.listen(port);
console.log('Listening on port '.concat(port));
