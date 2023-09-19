import AbstractScene from '../AbstractScene'

export default class Game {
  private readonly _canvas: HTMLCanvasElement
  private readonly _context: CanvasRenderingContext2D
  private _activeScene: AbstractScene

  constructor(
    canvas: HTMLCanvasElement,
    initialScene: new (game: Game) => AbstractScene,
    width = 800,
    height = 600
  ) {
    this._canvas = canvas

    const context = this._canvas.getContext('2d')
    this._canvas.width = width
    this._canvas.height = height
    if (!context) {
      throw new Error('Canvas context should exist.')
    }
    this._context = context
    this._activeScene = new initialScene(this)
    this._context.imageSmoothingEnabled = false
  }

  public getContext() {
    return this._context
  }

  public getCanvas() {
    return this._canvas
  }

  public start(): void {
    let last = performance.now()
    const step = 1 / 60
    let dt = 0
    let now: number

    const gameLoop = () => {
      now = performance.now()
      dt = dt + Math.min(1, (now - last) / 1000)
      while (dt > step) {
        dt = dt - step
        this.update(step)
      }
      last = now

      this.render(dt)
      requestAnimationFrame(gameLoop)
    }

    gameLoop()
  }

  update(deltaTime: number) {
    this._context.clearRect(0, 0, this._canvas.width, this._canvas.height)
    this._activeScene.update(deltaTime)
  }

  render(deltaTime: number) {
    this._activeScene.render(deltaTime, this._context, this._canvas)
  }

  setScene<T extends new (game: Game) => R, R extends AbstractScene>(scene: T) {
    if (this._activeScene) {
      this._activeScene.destroyAllEntities()
    }

    this._activeScene = new scene(this)
  }
}
