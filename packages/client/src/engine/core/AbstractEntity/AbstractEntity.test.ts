import { AbstractEntity, Vector } from '@app/engine';

class TestEntity extends AbstractEntity {
  public constructor() {
    super({ position: new Vector(0, 0), width: 10, height: 10 });
  }

  public destroy(): void {}

  public render(): void {}

  public update(): void {}
}

describe('AbstractEntity', () => {
  it('should create an instance of AbstractEntity', () => {
    const entity = new TestEntity();
    expect(entity).toBeInstanceOf(TestEntity);
  });

  it('should update position correctly', () => {
    const entity = new TestEntity();

    const moveDirection = new Vector(5, 5);
    entity.move(moveDirection);

    expect(entity.position.x).toBe(5);
    expect(entity.position.y).toBe(5);
  });
});
