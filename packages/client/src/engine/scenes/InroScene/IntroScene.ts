import { AbstractScene } from '../../core/AbstractScene/AbstractScene';
import { Player } from '../../entities/Player/Player';
import { makeWalls } from '../../entities/Wall/makeWalls';
import { InputService } from '../../core/InputService/InputService';
import { KeyCode } from '../../core/InputService/types';
import { Entities } from '../../entities/types/Entities';
import { EntitiesMapItem } from '../../core/EntityService/types';

export class IntroScene extends AbstractScene {
  private inputService: InputService = InputService.getInstance();

  public constructor() {
    super();
    this.registerEntities(...makeWalls(50, 50, 750, 550, 120), {
      type: Entities.PLAYER,
      entity: new Player(),
    });
  }

  public addObjectToScene(entity: EntitiesMapItem) {
    this.registerEntities(entity);
  }

  public render(deltaTime: number, context: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
    if (this.inputService.getInputKeyState(KeyCode.Space)) {
      // this.addObjectToScene();
      // const player = this.entityService.getEntitiesMap()[Entities.PLAYER][0];
      // this.addObjectToScene({ type: Entities.BULLET });
    }
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
