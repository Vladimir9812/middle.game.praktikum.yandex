import 'jest-canvas-mock';
import { AbstractScene, Game } from '@app/engine';

class MockScene extends AbstractScene {
  public constructor() {
    super();
  }

  public render() {}

  public update() {}
}

describe('Game', () => {
  let game: Game;
  let animationFrameMock: jest.SpyInstance<number, [FrameRequestCallback]>;

  beforeEach(() => {
    game = new Game(document.createElement('canvas'), MockScene);
    let animationFrameCount = 0;
    animationFrameMock = jest.spyOn(window, 'requestAnimationFrame').mockImplementation(() => {
      if (animationFrameCount === 0) {
        animationFrameCount = 1;
      }
      return 0;
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
    animationFrameMock.mockRestore();
  });

  it('should create an instance of Game', () => {
    expect(game).toBeInstanceOf(Game);
  });

  it('should stop the game loop', () => {
    game.start();
    game.stop();
    expect(animationFrameMock).toHaveBeenCalledTimes(1);
  });

  it('should call render method', () => {
    let renderCalled = false;
    game.render = () => {
      renderCalled = true;
    };
    game.start();
    expect(renderCalled).toBe(true);
  });
});
