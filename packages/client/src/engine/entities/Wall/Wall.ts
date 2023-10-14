import { AbstractEntity, Vector } from '@app/engine';

import wall from '../../../assets/images/game/brick.svg';

export class Wall extends AbstractEntity {
  public image: HTMLImageElement = new Image();

  public fillColor = '#000';

  public constructor(posX: number, posY: number) {
    super({ position: new Vector(posX, posY), height: 50, width: 50 });
    this.image.src = wall;
  }

  public destroy() {
    console.log('I am to destroyed');
  }

  public render(_: number, context: CanvasRenderingContext2D) {
    context.fillStyle = this.fillColor;
    context.fillRect(this.posX, this.posY, this.width, this.height);
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

  public update() {}
}
