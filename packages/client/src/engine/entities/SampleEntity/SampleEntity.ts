import { AbstractEntity, InputService, Vector } from '@app/engine';

import { KeyCode } from '../../core/InputService/types';
import tankUp from '../../../assets/images/game/tankUp.png';
import tankLeft from '../../../assets/images/game/tankLeft.png';
import tankRight from '../../../assets/images/game/tankRight.png';
import tankDown from '../../../assets/images/game/tankDown.png';

const image = {
  DOWN: tankDown,
  LEFT: tankLeft,
  RIGHT: tankRight,
  UP: tankUp,
};
export class SampleEntity extends AbstractEntity {
  private inputService: InputService = InputService.getInstance();

  public velocity = new Vector(0, 0);

  public mass = 100;

  public force = new Vector(0, this.mass * 100);

  public acc = new Vector(0, 0);

  public image: HTMLImageElement = new Image();

  public fillColor = 'transparent';

  public constructor() {
    super({ position: new Vector(1, 1), height: 45, width: 45 });
    this.image.src = tankUp;
  }

  public render(_: number, context: CanvasRenderingContext2D) {
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

  private handleInput() {
    if (this.inputService.getInputKeyState(KeyCode.KeyW)) {
      this.move(new Vector(0, -1));
      this.image.src = image.UP;
    }
    if (this.inputService.getInputKeyState(KeyCode.KeyS)) {
      this.move(new Vector(0, 1));
      this.image.src = image.DOWN;
    }
    if (this.inputService.getInputKeyState(KeyCode.KeyA)) {
      this.move(new Vector(-1, 0));
      this.image.src = image.LEFT;
    }
    if (this.inputService.getInputKeyState(KeyCode.KeyD)) {
      this.move(new Vector(1, 0));
      this.image.src = image.RIGHT;
    }
  }

  public update() {
    this.handleInput();
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  private addForce(deltaTime: number) {
    this.acc = this.force.divideScalar(this.mass);
    this.velocity = this.velocity.addScaled(this.acc, deltaTime);
    this.position = this.position.addScaled(this.velocity, deltaTime);
  }
}
