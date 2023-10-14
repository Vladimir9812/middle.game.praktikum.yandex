import { AbstractScene } from '../../core/AbstractScene/AbstractScene';
import { SampleEntity } from '../../entities/SampleEntity/SampleEntity';
import { makeWalls } from '../../entities/Wall/makeWalls';

export class IntroScene extends AbstractScene {
  public constructor() {
    super();
    this.registerEntities(...makeWalls(50, 50, 750, 550, 120), {
      type: 'player',
      entity: new SampleEntity(),
    });
  }

  // public addObjectToScene() {
  //   this.registerEntities(
  //     {type: 'wall', new Wall()}
  //   );
  // }

  public render(deltaTime: number, context: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
    context.strokeRect(0, 0, canvas.width, canvas.height);
    for (const entity of this.entityService.getEntities()) {
      entity.render(deltaTime, context);
    }
  }

  public update(deltaTime: number) {
    const entities = this.entityService.getEntities();
    for (const entity of entities) {
      entity.update(deltaTime);
    }
  }

  public onDestroy(): void {}
}
