import AbstractEntity from '../../core/AbstractEntity'
import Vector from '../../core/Vector'

export default class SampleObstacle extends AbstractEntity {
  constructor() {
    super({ position: new Vector(0, 0), width: 50, height: 600 })
  }

  render(deltaTime: number, context: CanvasRenderingContext2D) {
    context.fillStyle = '#D80'
    context.fillRect(this.posX, this.posY, this.width, this.height)
  }

  update(deltaTime: number) {
    // TODO: реализовать
  }
}
