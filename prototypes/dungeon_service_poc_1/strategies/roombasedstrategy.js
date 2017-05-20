"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Pos = (function () {
    function Pos() {
    }
    return Pos;
}());
var Door = (function (_super) {
    __extends(Door, _super);
    function Door() {
        _super.apply(this, arguments);
    }
    return Door;
}(Pos));
var CorridorDirection;
(function (CorridorDirection) {
    CorridorDirection[CorridorDirection["North"] = 0] = "North";
    CorridorDirection[CorridorDirection["East"] = 1] = "East";
    CorridorDirection[CorridorDirection["South"] = 2] = "South";
    CorridorDirection[CorridorDirection["West"] = 3] = "West";
})(CorridorDirection || (CorridorDirection = {}));
var Room = (function () {
    function Room() {
        this.doors = [];
    }
    Room.prototype.isConnected = function () {
        for (var _i = 0, _a = this.doors; _i < _a.length; _i++) {
            var door = _a[_i];
            if (door.connected) {
                return true;
            }
        }
        return false;
    };
    Room.prototype.intersects = function (otherRoom) {
        var roomSpacing = 3;
        return (Math.abs(this.x - otherRoom.x) * 2 < (this.width + otherRoom.width + roomSpacing))
            && (Math.abs(this.y - otherRoom.y) * 2 < (this.height + otherRoom.height + roomSpacing));
    };
    return Room;
}());
var RoomBasedStrategy = (function () {
    function RoomBasedStrategy(_maxRooms, _minRoomSize, _maxRoomSize) {
        this._maxRooms = _maxRooms;
        this._minRoomSize = _minRoomSize;
        this._maxRoomSize = _maxRoomSize;
        this.rooms = [];
        this.maxRooms = _maxRooms;
        this.minRoomSize = _minRoomSize;
        this.maxRooms = _maxRoomSize;
    }
    RoomBasedStrategy.prototype.addAllRooms = function (data) {
        for (var room in rooms) {
            AddRoom(data, room);
        }
    };
    return RoomBasedStrategy;
}());
//# sourceMappingURL=roombasedstrategy.js.map