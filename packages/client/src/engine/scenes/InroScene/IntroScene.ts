import AbstractScene from '../../core/AbstractScene'
import Game from '../../core/Game'
import SampleEntity from '../../entities/SampleEntity'
import SampleObstacle from '../../entities/SampleObstacle'

export default class IntroScene extends AbstractScene {
  public sampleEntity = new SampleEntity()
  public obstacles = [new SampleObstacle()]
  constructor(game: Game) {
    super(game)
    this.registerEntities(this.sampleEntity, ...this.obstacles)
  }

  public render(
    deltaTime: number,
    context: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement
  ) {
    context.strokeRect(0, 0, canvas.width, canvas.height)
    this._entityService.entities.forEach(entity => {
      entity.render(deltaTime, context)
    })
  }

  public update(deltaTime: number) {
    this._entityService.entities.forEach(entity => {
      entity.update(deltaTime)
    })
    this.obstacles.forEach(obstacle => {
      if (obstacle.checkCollision(this.sampleEntity)) {
        console.log('intersects')
      }
    })
  }
}
