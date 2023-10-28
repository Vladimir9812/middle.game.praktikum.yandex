import { debounce } from 'lodash';
import { getRandomInt } from '@app/utils/getRandomInt';

import { AbstractEntity, Vector } from '@app/engine';
import { BulletType } from '@app/types';

import { Directions } from '../../../types/Directions';
import tankUp from '../../../assets/images/game/enemyTankUp.png';
import tankLeft from '../../../assets/images/game/enemyTankLeft.png';
import tankRight from '../../../assets/images/game/enemyTankRight.png';
import tankDown from '../../../assets/images/game/enemyTankDown.png';
import Fire from '../../Actions/Fire';
import { Entities } from '../types/Entities';
import { makeBullet } from '../Bullet/makeBullet';
import CheckCollision from '../../Actions/CheckCollision';
import Destroy from '../../Actions/Destroy';
import { Bullet } from '../Bullet/Bullet';

const image = {
  down: tankDown,
  left: tankLeft,
  right: tankRight,
  up: tankUp,
};

export class Enemy extends AbstractEntity {
  private bulletSize = 10;

  private canvasSize: { width: number; height: number } | undefined = undefined;

  public velocity = new Vector(0, 0);

  public mass = 100;

  public force = new Vector(0, this.mass * 100);

  public acc = new Vector(0, 0);

  public image: HTMLImageElement = new Image();

  public fillColor = 'transparent';

  public allDirections = [Directions.UP, Directions.RIGHT, Directions.DOWN, Directions.LEFT];

  private readonly fire: () => void;

  private readonly changeDirectionInterval: NodeJS.Timer;

  private readonly fireInterval: NodeJS.Timer;

  private get wallCollision() {
    return CheckCollision.checkCollisionWithType(this, Entities.WALL).collision;
  }

  private get bulletCollision() {
    return CheckCollision.checkCollisionWithType(this, Entities.BULLET);
  }

  public constructor(
    public direction: Directions,
    position: Vector,
  ) {
    super({ position, height: 45, width: 40 });
    this.image.src = image[this.direction];
    this.fire = debounce(this._fire, 40);

    this.changeDirectionInterval = setInterval(() => {
      const index = getRandomInt(4);
      this.direction = this.allDirections[index];
    }, 1000);

    this.fireInterval = setInterval(() => this.fire(), 500);
  }

  public render(_: number, context: CanvasRenderingContext2D) {
    if (!this.canvasSize) {
      this.canvasSize = { width: context.canvas.width, height: context.canvas.height };
    }
    const previousFillStyle = context.fillStyle;
    this.prevPosition = this.position.copy();
    context.fillStyle = this.fillColor;
    context.fillRect(this.posX, this.posY, this.width, this.height);
    context.fillStyle = previousFillStyle;
    context.drawImage(
      this.image,
      0,
      0,
      this.image.width,
      this.image.height,
      this.posX,
      this.posY,
      this.width,
      this.height,
    );
  }

  public destroy() {
    clearInterval(this.changeDirectionInterval);
    clearInterval(this.fireInterval);

    Destroy.deleteEntity({ type: Entities.ENEMY, entity: this });
  }

  private moveBack() {
    switch (this.direction) {
      case Directions.RIGHT: {
        this.move(new Vector(-1, 0));
        this.direction = Directions.LEFT;
        break;
      }
      case Directions.LEFT: {
        this.move(new Vector(1, 0));
        this.direction = Directions.RIGHT;
        break;
      }
      case Directions.DOWN: {
        this.move(new Vector(0, -1));
        this.direction = Directions.UP;
        break;
      }
      case Directions.UP: {
        this.move(new Vector(0, 1));
        this.direction = Directions.DOWN;
        break;
      }
      // no default
    }
  }

  private moveByDirection() {
    switch (this.direction) {
      case Directions.RIGHT: {
        this.move(new Vector(1, 0));
        break;
      }
      case Directions.LEFT: {
        this.move(new Vector(-1, 0));
        break;
      }
      case Directions.DOWN: {
        this.move(new Vector(0, 1));
        break;
      }
      case Directions.UP: {
        this.move(new Vector(0, -1));
        break;
      }
      default: // do nothing
    }
  }

  private handleOutOfCanvas() {
    if (
      this.posX < 0 ||
      this.posY < 0 ||
      (this.canvasSize && this.posX + this.width > this.canvasSize.width) ||
      (this.canvasSize && this.posY + this.height > this.canvasSize.height)
    ) {
      this.moveBack();
    }
  }

  private handleWallCollision() {
    if (this.wallCollision) {
      this.moveBack();
    }
  }

  private handleBulletCollision() {
    const { collision, entity } = this.bulletCollision;

    if (collision) {
      const { type } = entity.entity as Bullet;

      if (type === BulletType.PLAYER) {
        this.destroy();
      }
    }
  }

  private _fire() {
    Fire.makeShot({
      type: Entities.BULLET,
      entity: makeBullet({
        type: BulletType.ENEMY,
        direction: this.direction,
        playerCoords: { x: this.posX, y: this.posY },
        size: this.bulletSize,
        playerWidth: this.width,
        playerHeight: this.height,
      }),
    });
  }

  public update() {
    this.image.src = image[this.direction];

    this.moveByDirection();

    this.handleBulletCollision();
    this.handleWallCollision();
    this.handleOutOfCanvas();
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  private addForce(deltaTime: number) {
    this.acc = this.force.divideScalar(this.mass);
    this.velocity = this.velocity.addScaled(this.acc, deltaTime);
    this.position = this.position.addScaled(this.velocity, deltaTime);
  }
}
