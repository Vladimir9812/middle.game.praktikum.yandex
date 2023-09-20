import AbstractEntity from '../../core/AbstractEntity';
import Vector from '../../core/Vector';

export default class SampleObstacle extends AbstractEntity {
  public constructor() {
    super({ position: new Vector(0, 0), width: 50, height: 600 });
  }

  public render(_: number, context: CanvasRenderingContext2D) {
    context.fillStyle = '#D80';
    context.fillRect(this.posX, this.posY, this.width, this.height);
  }

  public update(_: number) {
    // TODO: реализовать
  }
}
