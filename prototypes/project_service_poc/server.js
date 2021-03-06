var express     = require('express');
var projects    = require('./routes/projects');
var rooms    = require('./routes/rooms');
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

app.post('/projects/:projectId/rooms', projects.addRoom);
app.put('/projects/:projectId/rooms/:roomId', projects.updateRoom);


app.put('/projects/:id', projects.updateProject);
app.delete('/projects/:id', projects.deleteProject);

app.get('/rooms', rooms.findAll);
app.get('/rooms/:id', rooms.findById);
app.post('/rooms', rooms.addRoom);
app.put('/rooms/:id', rooms.updateRoom);
app.delete('/rooms/:id', rooms.deleteRoom);

var port = 5483;

app.listen(port);
console.log('Listening on port '.concat(port));
