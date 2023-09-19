import AbstractEntity from '../AbstractEntity'
import Game from '../Game'
import EntityService from '../EntityService'

export default abstract class AbstractScene {
  protected readonly game: Game
  protected readonly _entityService = EntityService.getInstance()
  protected constructor(game: Game) {
    this.game = game
  }

  public abstract update(deltaTime: number): void

  public abstract render(
    deltaTime: number,
    context: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement
  ): void

  public registerEntities(...entities: AbstractEntity[]) {
    entities.forEach(entity => {
      this._entityService.registerEntity(entity)
    })
  }

  public destroyEntity(entity: AbstractEntity) {
    this._entityService.destroyEntity(entity)
  }

  public destroy() {
    this.destroyAllEntities()
  }

  public destroyAllEntities() {
    this._entityService.destroyAllEntities()
  }
}
