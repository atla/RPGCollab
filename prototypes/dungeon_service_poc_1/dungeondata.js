"use strict";
var DungeonTileType;
(function (DungeonTileType) {
    DungeonTileType[DungeonTileType["Unused"] = 0] = "Unused";
    DungeonTileType[DungeonTileType["DirtWall"] = 1] = "DirtWall";
    DungeonTileType[DungeonTileType["DirtFloor"] = 2] = "DirtFloor";
    DungeonTileType[DungeonTileType["StoneWall"] = 3] = "StoneWall";
    DungeonTileType[DungeonTileType["Corridor"] = 4] = "Corridor";
    DungeonTileType[DungeonTileType["Door"] = 5] = "Door";
    DungeonTileType[DungeonTileType["Mud"] = 6] = "Mud";
    DungeonTileType[DungeonTileType["Forrest"] = 7] = "Forrest";
})(DungeonTileType || (DungeonTileType = {}));
var Dimension = (function () {
    function Dimension(_width, _height) {
        this._width = _width;
        this._height = _height;
        this.width = _width;
        this.height = _height;
        this.area = this.width * this.height;
    }
    return Dimension;
}());
var DungeonTile = (function () {
    function DungeonTile() {
    }
    return DungeonTile;
}());
var DungeonData = (function () {
    function DungeonData(_dimension) {
        this._dimension = _dimension;
        this.dimension = _dimension;
        this.empty();
    }
    ;
    DungeonData.prototype.empty = function () {
        this.data = new DungeonTile[this.dimension.area];
    };
    DungeonData.prototype.print = function () {
        for (var i = 0; i < this.dimension.area; ++i) {
            console.log(this.getTile(i) + " ");
            if (i % this.dimension.width == 0)
                console.log("\ns");
            ;
        }
    };
    DungeonData.prototype.getTileWithCoords = function (x, y) {
        return this.getTile(y * this.dimension.width + x);
    };
    DungeonData.prototype.getTile = function (index) {
        return this.data[index];
    };
    DungeonData.prototype.createCopy = function () {
        var copiedData = new DungeonTile[this.dimension.area];
        for (var i = 0; i < this.dimension.area; ++i) {
            copiedData[i] = new DungeonTile(this.getTile(i));
        }
    };
    return DungeonData;
}());
exports.DungeonData = DungeonData;
//# sourceMappingURL=dungeondata.js.map