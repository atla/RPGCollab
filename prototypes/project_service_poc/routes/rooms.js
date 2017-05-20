var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/rpg_collab');

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

// Setup Database scheme
var ActionSchema = new Schema({
    type: String,
    label: String,
    data: {}
})

var RoomSchema = new Schema({
    name: String,
    description: String,
    image: String,
    actions: [ActionSchema]
});

var Action = mongoose.model('Action', ActionSchema);
var Room = mongoose.model('Room', RoomSchema);
var handleError = function (err) {
    console.log('Error', err);
}

exports.findById = function (req, res) {
    Room.findOne({
        '_id': req.params.id
    }, function (err, room) {
        if (err) return handleError(err);
        res.send(room);
    })
};

exports.findAll = function (req, res) {
    Project.find({}, function (err, rooms) {
        if (err) handleError(err);
        res.send(rooms);
    });
};

exports.addRoom = function (req, res) {

    console.log('Request: ' + req);
    console.log('Request body: ' + req.body);

    var room = new Room(req.body);

    room.save(function (err, result) {
        if (err) return handleError(err);
        res.send('Room created');
    })
}

exports.updateRoom = function (req, res) {


}

exports.deleteRoom = function (req, res) {

    Room.update({
        '_id': req.params.id
    }, req.body, function (err, updatedRoom) { // callback
        if (err) console.log('Error: ' + err);
        else res.json(updatedRoom)

    })

    Room.findOneAndRemove({
        '_id': req.params.id
    }, function (err, room) {
        if (err) return handleError(err);
        res.send(room);
    })
}