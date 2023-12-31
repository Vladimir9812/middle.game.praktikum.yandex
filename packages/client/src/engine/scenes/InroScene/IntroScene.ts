import { AbstractScene } from '../../core/AbstractScene/AbstractScene';
import { Player } from '../../entities/Player/Player';
import { makeWalls } from '../../entities/Wall/makeWalls';
import { Entities } from '../../entities/types/Entities';
import { EntitiesMapItem } from '../../core/EntityService/types';
import { Enemy } from '../../entities/Enemy/Enemy';
import { Directions } from '../../../types/Directions';
import { Vector } from '../../core/Vector/Vector';

export class IntroScene extends AbstractScene {
  private canvasSize: { width: number; height: number } | undefined = undefined;

  public constructor() {
    super();

    this.onInit();
  }

  public onInit(): void {
    this.registerEntities({
      type: Entities.PLAYER,
      entity: new Player(),
    });
  }

  private addEnemies(level: number) {
    if (!this.canvasSize?.width || !this.canvasSize.height) {
      return;
    }

    const enemyWidth = 40;
    const enemyHeight = 45;

    const enemies = [
      {
        type: Entities.ENEMY,
        entity: new Enemy(
          Directions.DOWN,
          new Vector(this.canvasSize.width - enemyWidth, 1),
          enemyWidth,
          enemyHeight,
        ),
      },
      {
        type: Entities.ENEMY,
        entity: new Enemy(
          Directions.LEFT,
          new Vector(this.canvasSize.width - enemyWidth, this.canvasSize.height - enemyHeight),
          enemyWidth,
          enemyHeight,
        ),
      },
      {
        type: Entities.ENEMY,
        entity: new Enemy(
          Directions.UP,
          new Vector(1, this.canvasSize.height - enemyHeight),
          enemyWidth,
          enemyHeight,
        ),
      },
    ];

    if (level > 1) {
      enemies.push(
        {
          type: Entities.ENEMY,
          entity: new Enemy(
            Directions.LEFT,
            new Vector(
              this.canvasSize.width - enemyWidth,
              this.canvasSize.height / 2 - enemyHeight,
            ),
            enemyWidth,
            enemyHeight,
          ),
        },
        {
          type: Entities.ENEMY,
          entity: new Enemy(
            Directions.UP,
            new Vector(
              this.canvasSize.width / 2 - enemyWidth,
              this.canvasSize.height - enemyHeight,
            ),
            enemyWidth,
            enemyHeight,
          ),
        },
      );
    }

    if (level > 2) {
      enemies.push(
        {
          type: Entities.ENEMY,
          entity: new Enemy(
            Directions.DOWN,
            new Vector(this.canvasSize.width / 2 - enemyWidth, 1),
            enemyWidth,
            enemyHeight,
          ),
        },
        {
          type: Entities.ENEMY,
          entity: new Enemy(
            Directions.RIGHT,
            new Vector(1, this.canvasSize.height / 2 - enemyHeight),
            enemyWidth,
            enemyHeight,
          ),
        },
      );
    }

    this.registerEntities(...enemies);
  }

  private addWalls() {
    if (!this.canvasSize?.width || !this.canvasSize.height) {
      return;
    }

    this.registerEntities(...makeWalls(50, 50, this.canvasSize.width, this.canvasSize.height, 120));
  }

  public addObjectToScene(entity: EntitiesMapItem) {
    this.registerEntities(entity);
  }

  public render(
    deltaTime: number,
    context: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement,
    level: number,
  ) {
    if (!this.canvasSize) {
      this.canvasSize = { width: context.canvas.width, height: context.canvas.height };

      this.addWalls();
      this.addEnemies(level);
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

  public onDestroy(): void {
    this.canvasSize = undefined;
  }
}
