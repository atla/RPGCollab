var express = require('express');
var projects = require('./routes/projects');
var rooms = require('./routes/rooms');
var app = express();


var startingRoom = {
    name: "Entry",
    description: "you wake up in a silent dark room, slowly your sight comes back and youd discover shimmering candle light. To your left you see a hallway which seems to lead to a brighter place",
    actions: [{
        type: "navigateRoom",
        label: "Take the door to the left",
        data: {"roomName":"Hallway"}
    }]
}

var room2 = {
    name: "Hallway",
    description: "As you enter the hallway b...",
    actions: [{
        type: "navigateRoom",
        label: "Go back to the initial room",
        data: {"roomName":"Entry"}
    }]
}

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

db.collection('rooms', function (err, collection) {
    collection.insert(rooms, {
        safe: true
    }, function (err, result) {});
});