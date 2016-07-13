import {DungeonData} from '../dungeondata';

class Pos{
    x: number;
    y: number;
}

class Door extends Pos{
    public connected:boolean;
}

enum CorridorDirection{
    North,
    East,
    South,
    West
}

class Room{
    x:number;
    y:number;
    width:number;
    height:number;

    public doors:Door[] = [];

    isConnected(){
        for (var door of this.doors){
            if (door.connected){
                return true;
            }
        }
        return false;
    }

    intersects (otherRoom:Room){
        let roomSpacing = 3;

        return (Math.abs(this.x - otherRoom.x) * 2 < (this.width + otherRoom.width + roomSpacing))
        && (Math.abs(this.y - otherRoom.y) * 2 < (this.height + otherRoom.height + roomSpacing));
    }

}

class RoomBasedStrategy{
    private maxRooms : number;
    private minRoomSize : number;
    private maxRoomSize : number;

    private rooms : Room[] = [];
    
    constructor (public _maxRooms:number, public _minRoomSize:number, public _maxRoomSize:number){
        this.maxRooms = _maxRooms;
        this.minRoomSize = _minRoomSize;
        this.maxRooms = _maxRoomSize;
    }

    addAllRooms (data:DungeonData){
        for (let room:Room in rooms){
            AddRoom(data,room);
        }
    }

    addDoors(data:)


}