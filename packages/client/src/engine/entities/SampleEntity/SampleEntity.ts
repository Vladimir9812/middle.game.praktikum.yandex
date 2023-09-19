import AbstractEntity from '../../core/AbstractEntity'
import InputService from '../../core/InputService'
import { KeyCode } from '../../core/InputService/types'
import Vector from '../../core/Vector'
import apple from '../../../assets/Apple.png'

export default class SampleEntity extends AbstractEntity {
  private _inputService: InputService = new InputService()
  public velocity = new Vector(0, 0)
  public mass = 100
  public force = new Vector(0, this.mass * 100)
  public acc = new Vector(0, 0)
  public image: HTMLImageElement = new Image()
  constructor() {
    super({ position: new Vector(50, 0), height: 50, width: 50 })
    this.image.src = apple
  }

  public render(deltaTime: number, context: CanvasRenderingContext2D) {
    const prevFillStyle = context.fillStyle
    this.prevPosition = this.position.copy()
    context.fillStyle = '#000'
    context.fillRect(this.posX, this.posY, this.width, this.height)
    context.fillStyle = prevFillStyle
    context.drawImage(
      this.image,
      0,
      0,
      this.image.width,
      this.image.height,
      this.posX,
      this.posY,
      this.width,
      this.height
    )
  }

  private _handleInput() {
    if (this._inputService.getInputKeyState(KeyCode.KeyW)) {
      this.move(new Vector(0, -10))
    }
    if (this._inputService.getInputKeyState(KeyCode.KeyS)) {
      this.move(new Vector(0, 10))
    }
    if (this._inputService.getInputKeyState(KeyCode.KeyA)) {
      this.move(new Vector(-10, 0))
    }
    if (this._inputService.getInputKeyState(KeyCode.KeyD)) {
      this.move(new Vector(10, 0))
    }
  }

  public update() {
    this._handleInput()
  }

  private _addForce(deltaTime: number) {
    this.acc = this.force.divideScalar(this.mass)
    this.velocity = this.velocity.addScaled(this.acc, deltaTime)
    this.position = this.position.addScaled(this.velocity, deltaTime)
  }
}
