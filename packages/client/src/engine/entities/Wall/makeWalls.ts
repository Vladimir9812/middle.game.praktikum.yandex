import { Directions } from '../../../types/Directions';
import { Entities } from '../types/Entities';
import { Coords } from '../../../types/Coords';

import { Wall } from './Wall';

function getRandomArbitrary(min: number, max: number) {
  return Math.round(Math.random() * (max - min) + min);
}

export const makeWalls = (
  width: number,
  height: number,
  maxX: number,
  maxY: number,
  numberOfBlocks: number,
) => {
  // const wallsArray = [];
  const startPosition: Coords = {
    x: getRandomArbitrary(width, maxX - width),
    y: getRandomArbitrary(height, maxY - height),
  };
  const currentPosition: Coords = {
    x: startPosition.x,
    y: startPosition.y,
  };

  const coordsArray: Array<Coords> = [];
  // wallsArray.push({ type: 'wall', entity: new Wall(startPosition.x, startPosition.y) });
  coordsArray.push(startPosition);

  let direction = Directions.RIGHT;

  const pushCoords = () => {
    coordsArray.push({ x: currentPosition.x, y: currentPosition.y });
  };
  const addRight = () => {
    currentPosition.x += width;
    pushCoords();
  };
  const addLeft = () => {
    currentPosition.x -= width;
    pushCoords();
  };
  const addDown = () => {
    currentPosition.y += height;
    pushCoords();
  };
  const addUp = () => {
    currentPosition.y -= height;
    pushCoords();
  };
  const detectDirection = () => {
    const atBorder = {
      top: false,
      left: false,
      right: false,
      bottom: false,
    };
    if (currentPosition.y + height > maxY) {
      atBorder.bottom = true;
    }
    if (currentPosition.y - height < 0) {
      atBorder.top = true;
    }
    if (currentPosition.x - width < width) {
      atBorder.left = true;
    }
    if (currentPosition.x + width > maxX) {
      atBorder.right = true;
    }
    const atRightBorder = atBorder.right && !atBorder.top && !atBorder.bottom;
    const atLeftBorder = atBorder.left && !atBorder.top && !atBorder.bottom;
    const atTopBorder = atBorder.top && !atBorder.left && !atBorder.right;
    const atBottomBorder = atBorder.bottom && !atBorder.left && !atBorder.right;
    const atLeftTopCorner = atBorder.top && atBorder.left;
    const atRightTopCorner = atBorder.top && atBorder.right;
    const atLeftBottomCorner = atBorder.bottom && atBorder.left;
    const atRightBottomCorner = atBorder.bottom && atBorder.right;

    if (direction === Directions.RIGHT) {
      if (atRightBorder) {
        direction = getRandomArbitrary(0, 1) ? Directions.UP : Directions.DOWN;
      }
      if (atRightTopCorner) {
        direction = Directions.DOWN;
      }
      if (atRightBottomCorner) {
        direction = Directions.UP;
      }
    }
    if (direction === Directions.LEFT) {
      if (atLeftBorder) {
        direction = getRandomArbitrary(0, 1) ? Directions.UP : Directions.DOWN;
      }
      if (atLeftTopCorner) {
        direction = Directions.DOWN;
      }
      if (atLeftBottomCorner) {
        direction = Directions.UP;
      }
    }
    if (direction === Directions.UP) {
      if (atTopBorder) {
        direction = getRandomArbitrary(0, 1) ? Directions.LEFT : Directions.RIGHT;
      }
      if (atLeftTopCorner) {
        direction = Directions.RIGHT;
      }
      if (atRightTopCorner) {
        direction = Directions.LEFT;
      }
    }
    if (direction === Directions.DOWN) {
      if (atBottomBorder) {
        direction = getRandomArbitrary(0, 1) ? Directions.LEFT : Directions.RIGHT;
      }
      if (atLeftBottomCorner) {
        direction = Directions.RIGHT;
      }
      if (atRightBottomCorner) {
        direction = Directions.LEFT;
      }
    }

    if (atTopBorder && getRandomArbitrary(0, 100) > 80) {
      direction = Directions.DOWN;
    }
    if (atBottomBorder && getRandomArbitrary(0, 100) > 80) {
      direction = Directions.UP;
    }
    if (atLeftBorder && getRandomArbitrary(0, 100) > 80) {
      direction = Directions.RIGHT;
    }
    if (atRightBorder && getRandomArbitrary(0, 100) > 80) {
      direction = Directions.LEFT;
    }
  };

  const addByDirection = {
    [Directions.RIGHT]: addRight,
    [Directions.LEFT]: addLeft,
    [Directions.UP]: addUp,
    [Directions.DOWN]: addDown,
  };

  const addCoords = () => {
    detectDirection();
    addByDirection[direction]();
  };

  for (let index = 0; index < numberOfBlocks; index += 1) {
    addCoords();
  }

  return coordsArray.map((coords) => ({
    type: Entities.WALL,
    entity: new Wall(coords.x, coords.y),
  }));
};
