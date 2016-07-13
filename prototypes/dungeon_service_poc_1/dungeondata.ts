enum DungeonTileType {
    Unused = 0,
    DirtWall,
    DirtFloor,
    StoneWall,
    Corridor,
    Door,
    Mud,
    Forrest
}

class Dimension {
    width: number;
    height: number;
    area: number;
    constructor (public _width: number, public _height: number) {
        this.width = _width;
        this.height = _height;
        this.area = this.width * this.height;
    }
}

class DungeonTile {
    type: DungeonTileType;

    constructor(public tile:DungeonTile){
        this.type = tile.type;
    }
}

export class DungeonData {
    dimension: Dimension;
    data: DungeonTile[];

    constructor(public _dimension: Dimension) {
        this.dimension = _dimension;
        this.empty();
    };

    empty() {
        this.data = new DungeonTile[this.dimension.area];
    }

    print () {
        for (let i = 0; i < this.dimension.area; ++i) {
            console.log (this.getTile (i) + ' ');

            if (i % this.dimension.width === 0) {
                    console.log('\n');
                }
            }
    }

    getTileWithCoords (x: number, y: number) {
        return this.getTile (y * this.dimension.width + x);
    }

    getTile (index: number) {
        return this.data[index];
    }

    createCopy () {
        let copiedData: DungeonTile[] = new DungeonTile[this.dimension.area];
          for (let i = 0; i < this.dimension.area; ++i) {
        copiedData[i] = new DungeonTile(this.getTile(i));

        }
    }
}

interface DungeonCreationStrategy {
    create (data: DungeonData) : void;
}
