import { EntityConstructorParameters } from './types'
import Vector from '../Vector'
import EntityService from '../EntityService'

export default abstract class AbstractEntity {
  public position: Vector
  public width: number
  public height: number
  public prevPosition: Vector
  private readonly _entityService: EntityService = EntityService.getInstance()
  protected constructor({
    position,
    width,
    height,
  }: EntityConstructorParameters) {
    this.position = position
    this.width = width
    this.height = height
    this.prevPosition = position.copy()
  }

  public get posX() {
    return this.position.x
  }

  public set posX(value: number) {
    this.position.x = value
  }

  public get posY() {
    return this.position.y
  }

  public set posY(value: number) {
    this.position.y = value
  }

  public get prevX() {
    return this.prevPosition.x
  }

  public set prevX(value: number) {
    this.prevPosition.x = value
  }

  public get prevY() {
    return this.prevPosition.y
  }

  public set prevY(value: number) {
    this.prevPosition.y = value
  }

  public move(moveDir: Vector) {
    this.position = this.position.add(moveDir)
  }

  public checkCollision(other: AbstractEntity) {
    return (
      this.posX + this.width >= other.posX &&
      this.posX <= other.posX + other.width &&
      this.posY + this.height >= other.posY &&
      this.posY <= other.posY + other.height
    )
  }

  // public calculateCollisionShape(other: AbstractEntity) {}

  // public resolveCollision(other: AbstractEntity) {}

  public abstract update(deltaTime: number): void

  public abstract render(
    deltaTime: number,
    context: CanvasRenderingContext2D
  ): void

  public destroy() {
    this._entityService.destroyEntity(this)
  }
}
